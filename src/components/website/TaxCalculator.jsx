import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const FY_DATA = {
  '2023-24': {
    label: 'FY 2023-24', sublabel: 'AY 2024-25',
    note: 'New regime is default. Standard deduction ₹50,000 (salary only).',
    new: {
      slabs: [[300000, 0], [600000, 0.05], [900000, 0.10], [1200000, 0.15], [1500000, 0.20], [Infinity, 0.30]],
      stdDed: 50000, rebateUpto: 700000, rebateMax: 25000, surchargeCap: 0.25,
    },
    old: {
      slabs:   [[250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSr: [[300000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSs: [[500000, 0], [1000000, 0.20], [Infinity, 0.30]],
      stdDed: 50000, rebateUpto: 500000, rebateMax: 12500, surchargeCap: 0.37,
    },
  },
  '2024-25': {
    label: 'FY 2024-25', sublabel: 'AY 2025-26',
    note: 'Budget 2024: revised new-regime slabs, standard deduction raised to ₹75,000.',
    new: {
      slabs: [[300000, 0], [700000, 0.05], [1000000, 0.10], [1200000, 0.15], [1500000, 0.20], [Infinity, 0.30]],
      stdDed: 75000, rebateUpto: 700000, rebateMax: 25000, surchargeCap: 0.25,
    },
    old: {
      slabs:   [[250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSr: [[300000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSs: [[500000, 0], [1000000, 0.20], [Infinity, 0.30]],
      stdDed: 50000, rebateUpto: 500000, rebateMax: 12500, surchargeCap: 0.37,
    },
  },
  '2025-26': {
    label: 'FY 2025-26', sublabel: 'AY 2026-27',
    note: 'Budget 2025: 0% up to ₹4L, rebate u/s 87A up to ₹12L — effectively zero tax up to ₹12L under new regime.',
    new: {
      slabs: [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [Infinity, 0.30]],
      stdDed: 75000, rebateUpto: 1200000, rebateMax: 60000, surchargeCap: 0.25,
    },
    old: {
      slabs:   [[250000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSr: [[300000, 0], [500000, 0.05], [1000000, 0.20], [Infinity, 0.30]],
      slabsSs: [[500000, 0], [1000000, 0.20], [Infinity, 0.30]],
      stdDed: 50000, rebateUpto: 500000, rebateMax: 12500, surchargeCap: 0.37,
    },
  },
};

function fmtINR(n) {
  n = Math.round(n);
  if (n === 0) return '₹0';
  const abs = Math.abs(n).toString();
  const last3 = abs.slice(-3);
  const rest = abs.slice(0, -3);
  const restFmt = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return (n < 0 ? '-' : '') + '₹' + (rest ? restFmt + ',' : '') + last3;
}

function computeSlabTax(taxable, slabs) {
  let tax = 0, prev = 0, breakdown = [];
  for (const [upto, rate] of slabs) {
    const size = upto === Infinity ? Math.max(0, taxable - prev) : Math.max(0, Math.min(taxable, upto) - prev);
    const slabTax = size * rate;
    breakdown.push({ from: prev, to: upto, rate, size, slabTax });
    tax += slabTax;
    if (taxable <= upto) break;
    prev = upto;
  }
  return { tax, breakdown };
}

function getSurchargeRate(income, capRate) {
  let r = 0;
  if (income > 50000000) r = 0.37;
  else if (income > 20000000) r = 0.25;
  else if (income > 10000000) r = 0.15;
  else if (income > 5000000) r = 0.10;
  return Math.min(r, capRate);
}

function compute(state, regimeOverride) {
  const fy = FY_DATA[state.fy];
  const regime = regimeOverride || state.regime;
  const cfg = fy[regime];
  const grossIncome = (state.salary || 0) + (state.otherInc || 0);
  const stdDed = state.salary > 0 ? cfg.stdDed : 0;
  let totalDed = stdDed;
  if (regime === 'old') {
    totalDed += Math.min(state.hra || 0, state.salary || 0)
              + Math.min(state.sec80c || 0, 150000)
              + Math.min(state.sec80d || 0, 100000)
              + Math.min(state.hloan || 0, 200000)
              + Math.max(0, state.otherDed || 0);
  }
  const taxableIncome = Math.max(0, grossIncome - totalDed);
  let slabs = cfg.slabs;
  if (regime === 'old') {
    if (state.age === 'sr') slabs = cfg.slabsSr;
    else if (state.age === 'ss') slabs = cfg.slabsSs;
  }
  const { tax, breakdown } = computeSlabTax(taxableIncome, slabs);
  const rebate = taxableIncome <= cfg.rebateUpto ? Math.min(tax, cfg.rebateMax) : 0;
  const taxAfterRebate = Math.max(0, tax - rebate);
  const surRate = getSurchargeRate(taxableIncome, cfg.surchargeCap);
  const surcharge = taxAfterRebate * surRate;
  const cess = (taxAfterRebate + surcharge) * 0.04;
  const total = taxAfterRebate + surcharge + cess;
  return { grossIncome, stdDed, totalDed, taxableIncome, breakdown, tax, rebate, taxAfterRebate, surRate, surcharge, cess, total };
}

const NUM_KEYS = ['salary','otherInc','sec80c','sec80d','hra','hloan','otherDed'];

export const TaxCalculator = () => {
  const [state, setState] = useState({
    fy: '2025-26', regime: 'new', age: 'lt60',
    salary: 1200000, otherInc: 0, sec80c: 0, sec80d: 0, hra: 0, hloan: 0, otherDed: 0,
  });

  const set = useCallback((key, val) => {
    setState(prev => ({
      ...prev,
      [key]: NUM_KEYS.includes(key) ? Math.max(0, parseFloat(val) || 0) : val,
    }));
  }, []);

  const r = compute(state);
  const otherR = compute(state, state.regime === 'new' ? 'old' : 'new');
  const savings = otherR.total - r.total;
  const fy = FY_DATA[state.fy];
  const isNew = state.regime === 'new';

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--primary-transparent)', border: '1px solid var(--primary)', borderRadius: 20, color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            🧮 Free Tool
          </div>
          <h1 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: 12 }}>
            Income Tax Calculator
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, maxWidth: 520, margin: '0 auto' }}>
            Estimate your tax liability under New or Old regime. Supports FY 2023-24 to 2025-26 with accurate slab rates, surcharge, and rebate u/s 87A.
          </p>
        </div>

        {/* FY Tabs */}
        <div className="tc-fy-row">
          {Object.entries(FY_DATA).map(([k, v]) => (
            <button key={k} className={`tc-fy-btn${state.fy === k ? ' active' : ''}`} onClick={() => set('fy', k)}>
              {v.label}
              <span className="tc-fy-sub">{v.sublabel}</span>
            </button>
          ))}
        </div>

        {/* Main grid */}
        <div className="tc-grid">

          {/* ── Left: Inputs ── */}
          <div className="liquid-glass tc-inputs-card">
            <div className="tc-section-title">Income &amp; Profile</div>

            <div className="tc-toggle-row">
              <div>
                <div className="tc-toggle-lbl">Regime</div>
                <div className="tc-toggle">
                  <button className={isNew ? 'active' : ''} onClick={() => set('regime', 'new')}>New (default)</button>
                  <button className={!isNew ? 'active' : ''} onClick={() => set('regime', 'old')}>Old</button>
                </div>
              </div>
              <div>
                <div className="tc-toggle-lbl">Age group</div>
                <div className="tc-toggle">
                  <button className={state.age === 'lt60' ? 'active' : ''} onClick={() => set('age', 'lt60')} title="Below 60">&lt;60</button>
                  <button className={state.age === 'sr'   ? 'active' : ''} onClick={() => set('age', 'sr')}   title="Senior 60-80">60–80</button>
                  <button className={state.age === 'ss'   ? 'active' : ''} onClick={() => set('age', 'ss')}   title="Super senior 80+">80+</button>
                </div>
              </div>
            </div>

            <div className="tc-field">
              <label>Annual salary income <span className="tc-help">CTC, before standard deduction</span></label>
              <div className="tc-input-wrap"><input type="number" min="0" step="10000" value={state.salary || ''} onChange={e => set('salary', e.target.value)} /></div>
            </div>
            <div className="tc-field">
              <label>Other income <span className="tc-help">Interest, rent, business, etc.</span></label>
              <div className="tc-input-wrap"><input type="number" min="0" step="1000" value={state.otherInc || ''} onChange={e => set('otherInc', e.target.value)} /></div>
            </div>

            <div className="tc-section-title" style={{ marginTop: 20 }}>
              Deductions
              {isNew && <span className="tc-ded-note">— Std. ₹{(fy.new.stdDed / 1000).toFixed(0)}k auto-applied</span>}
            </div>

            {[
              { key: 'sec80c',   label: 'Section 80C',          help: 'PPF, ELSS, LIC, etc. · Max ₹1.5 L' },
              { key: 'sec80d',   label: 'Section 80D',          help: 'Health insurance · Up to ₹1 L' },
              { key: 'hra',      label: 'HRA exemption',        help: 'Salaried in rented home' },
              { key: 'hloan',    label: 'Home loan interest (Sec 24b)', help: 'Max ₹2 L (self-occupied)' },
              { key: 'otherDed', label: 'Other deductions',     help: '80E, 80G, 80TTA, NPS 80CCD…' },
            ].map(f => (
              <div key={f.key} className={`tc-field${isNew ? ' tc-disabled' : ''}`}>
                <label>{f.label} <span className="tc-help">{f.help}</span></label>
                <div className="tc-input-wrap">
                  <input type="number" min="0" step="1000" value={state[f.key] || ''} onChange={e => set(f.key, e.target.value)} disabled={isNew} />
                </div>
              </div>
            ))}

            <Link to="/contact" className="tc-ca-btn">
              Talk to a CA for personalised advice →
            </Link>
          </div>

          {/* ── Right: Results ── */}
          <div>
            <div className="tc-result">
              <div className="tc-result-glow" />
              <h3 className="tc-result-label">Total tax payable</h3>
              <div className="tc-result-fy">{fy.label} · {isNew ? 'New regime (default)' : 'Old regime'}</div>
              <div className="tc-result-num">{fmtINR(r.total)}<em>/year</em></div>
              <div className="tc-result-sub">on taxable income of {fmtINR(r.taxableIncome)}</div>

              <div className="tc-breakdown">
                <h4>Tax breakdown</h4>
                <div className="tc-row"><span>Gross income</span><strong>{fmtINR(r.grossIncome)}</strong></div>
                <div className="tc-row"><span>Less: deductions</span><strong>− {fmtINR(r.totalDed)}</strong></div>
                <div className="tc-row"><span>Taxable income</span><strong>{fmtINR(r.taxableIncome)}</strong></div>
                <div className="tc-row"><span>Tax (per slabs)</span><strong>{fmtINR(r.tax)}</strong></div>
                {r.rebate > 0 && <div className="tc-row"><span>Rebate u/s 87A</span><strong>− {fmtINR(r.rebate)}</strong></div>}
                {r.surcharge > 0 && <div className="tc-row"><span>Surcharge @ {(r.surRate * 100).toFixed(0)}%</span><strong>+ {fmtINR(r.surcharge)}</strong></div>}
                <div className="tc-row"><span>Health &amp; Edu cess @ 4%</span><strong>+ {fmtINR(r.cess)}</strong></div>
                <div className="tc-row tc-row-total"><span>Total payable</span><strong>{fmtINR(r.total)}</strong></div>
              </div>

              <div className="tc-breakdown">
                <h4>Slab-wise computation</h4>
                {r.breakdown.map((b, i) => (
                  <div key={i} className={`tc-slab-row${b.size === 0 ? ' zero' : ''}`}>
                    <span>{b.from === 0 ? '₹0' : fmtINR(b.from)} – {b.to === Infinity ? '∞' : fmtINR(b.to)}</span>
                    <span>{(b.rate * 100).toFixed(0)}%</span>
                    <span>{fmtINR(b.slabTax)}</span>
                  </div>
                ))}
              </div>

              <div className="tc-compare">
                {savings > 100
                  ? <>{`💡 `}<strong>{isNew ? 'New' : 'Old'} regime saves you {fmtINR(savings)}</strong>{` vs the ${isNew ? 'old' : 'new'} regime for this profile.`}</>
                  : savings < -100
                  ? <>{`💡 The `}<strong>{isNew ? 'old' : 'new'} regime saves you {fmtINR(-savings)}</strong>{` — click the toggle to switch.`}</>
                  : '💡 Both regimes give nearly identical tax. Pick whichever is simpler for your compliance needs.'
                }
              </div>
            </div>

            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 12, lineHeight: 1.65, padding: '0 4px' }}>
              ⚠️ {fy.note} Indicative estimate only — for capital gains, foreign income, or marginal-relief cases, consult a CA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
