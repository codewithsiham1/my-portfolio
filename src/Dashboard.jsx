import { useEffect, useRef, useState } from "react";
import Icon from "./icons.jsx";
import { dashboard } from "./data.js";

const COLORS = ["#e8c98b", "#c9a2ff", "#ffffff", "#9a55ea"];

function useInView(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return seen;
}

function Counter({ to, dec = 0, prefix = "", suffix = "", play }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!play) return;
    let raf, start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / 1400, 1);
      setN(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, to]);
  const text = n.toLocaleString(undefined, { minimumFractionDigits: dec, maximumFractionDigits: dec });
  return <>{prefix}{text}{suffix}</>;
}

function LineChart({ series, play }) {
  const W = 560, H = 230, L = 40, R = 14, T = 16, B = 30;
  const months = dashboard.months;
  const max = Math.max(...series.flatMap((s) => s.data)) * 1.12;
  const x = (i) => L + (i * (W - L - R)) / (months.length - 1);
  const y = (v) => H - B - (v / max) * (H - T - B);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={play ? "chart play" : "chart"} role="img" aria-label="Line chart">
      {[0, 1, 2, 3].map((g) => {
        const gy = T + (g * (H - T - B)) / 3;
        return <line key={g} x1={L} x2={W - R} y1={gy} y2={gy} className="grid-line" />;
      })}
      {months.map((m, i) => <text key={m} x={x(i)} y={H - 8} className="axis" textAnchor="middle">{m}</text>)}
      {series.map((s, si) => {
        const d = s.data.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
        const area = `${d} L${x(s.data.length - 1)},${H - B} L${x(0)},${H - B} Z`;
        return (
          <g key={s.name} style={{ "--c": COLORS[si] }}>
            <path d={area} className="area" />
            <path d={d} pathLength="1" className="draw" />
            {s.data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="4" className="dot" style={{ "--i": i }} />)}
          </g>
        );
      })}
    </svg>
  );
}

function Bars({ items, play }) {
  const max = Math.max(...items.map((i) => i[1]));
  return (
    <ul className="bars">
      {items.map(([label, v], i) => (
        <li key={label}>
          <span>{label}</span>
          <div className="track-bar"><b style={{ width: play ? `${(v / max) * 100}%` : "0%", transitionDelay: `${i * 120}ms` }} /></div>
          <em>{v}</em>
        </li>
      ))}
    </ul>
  );
}

function Donut({ items, play }) {
  const total = items.reduce((a, i) => a + i[1], 0);
  let cum = 0;
  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 42 42" className={play ? "donut play" : "donut"} role="img" aria-label="Donut chart">
        <circle cx="21" cy="21" r="15.9155" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="5" />
        {items.map(([label, v], i) => {
          const pct = (v / total) * 100;
          const el = (
            <circle key={label} cx="21" cy="21" r="15.9155" fill="none" stroke={COLORS[i]} strokeWidth="5"
              strokeDasharray={`${pct} ${100 - pct}`} strokeDashoffset={-cum} className="seg" style={{ "--i": i }} transform="rotate(-90 21 21)" />
          );
          cum += pct;
          return el;
        })}
        <text x="21" y="22" textAnchor="middle" className="donut-n">{total}%</text>
      </svg>
      <ul className="legend">
        {items.map(([label, v], i) => <li key={label}><i style={{ background: COLORS[i] }} />{label}<em>{v}%</em></li>)}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  const ref = useRef(null);
  const seen = useInView(ref);
  const [id, setId] = useState(dashboard.tabs[0].id);
  const tab = dashboard.tabs.find((t) => t.id === id);

  return (
    <div ref={ref} className="dash panel">
      <div className="tabs" role="tablist">
        {dashboard.tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={t.id === id} className={t.id === id ? "on" : ""} onClick={() => setId(t.id)}>
            <Icon k={t.icon} /> {t.label}
          </button>
        ))}
      </div>

      <div className="dash-body" key={tab.id}>
        <div className="kpis">
          {tab.kpis.map((k, i) => (
            <div key={k.label} className="kpi" style={{ "--d": `${i * 80}ms` }}>
              <strong><Counter to={k.value} dec={k.dec} prefix={k.prefix} suffix={k.suffix} play={seen} /></strong>
              <span>{k.label}</span>
            </div>
          ))}
        </div>
        <div className="charts">
          <div>
            <h5>{tab.line.title}</h5>
            <LineChart series={tab.line.series} play={seen} />
            <p className="legend-inline">
              {tab.line.series.map((s, i) => <span key={s.name}><i style={{ background: COLORS[i] }} />{s.name}</span>)}
            </p>
          </div>
          <div>
            <h5>{(tab.bars || tab.donut).title}</h5>
            {tab.bars ? <Bars items={tab.bars.items} play={seen} /> : <Donut items={tab.donut.items} play={seen} />}
          </div>
        </div>
      </div>
      <p className="dash-note">{dashboard.note}</p>
    </div>
  );
}
