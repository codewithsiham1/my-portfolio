import { useState } from "react";
import Icon from "./icons.jsx";
import { shopify, fullstack } from "./data.js";

/* tiny syntax colouring so the code looks real */
const JS_RE = /(\/\/.*$|`[^`]*`|"[^"]*"|\b(?:const|async|await|return|import|from|export|function)\b|\b\d+\b)/;
const LQ_RE = /(\{%.*?%\}|\{\{.*?\}\}|"[^"]*"|<\/?[a-z0-9]+|\/?>)/;
function paint(tok, mode) {
  if (mode === "js") {
    if (tok.startsWith("//")) return "tk-c";
    if (/^["`]/.test(tok)) return "tk-s";
    if (/^\d+$/.test(tok)) return "tk-n";
    return "tk-k";
  }
  if (tok.startsWith("{%")) return "tk-k";
  if (tok.startsWith("{{")) return "tk-o";
  if (tok.startsWith('"')) return "tk-s";
  return "tk-t";
}
function CodeBody({ code, mode }) {
  const re = mode === "js" ? JS_RE : LQ_RE;
  return (
    <pre className="code-body">
      {code.split("\n").map((line, i) => (
        <code key={i} className="ln" style={{ "--i": i }}>
          {line.split(re).map((t, j) => (j % 2 ? <span key={j} className={paint(t, mode)}>{t}</span> : t))}
        </code>
      ))}
    </pre>
  );
}
function CodeWindow({ title, code, mode, tabs, active, onTab }) {
  return (
    <div className="code-win reveal">
      <div className="code-bar">
        <i /><i /><i />
        <span>{title}</span>
        {tabs && (
          <div className="code-tabs">
            {tabs.map((t) => <button key={t.id} className={t.id === active ? "on" : ""} onClick={() => onTab(t.id)}>{t.label}</button>)}
          </div>
        )}
      </div>
      <CodeBody key={title} code={code} mode={mode} />
    </div>
  );
}

function StoreDemo() {
  const [cart, setCart] = useState(0);
  const [bump, setBump] = useState(0);
  const [last, setLast] = useState(null);
  const add = (i) => { setCart((c) => c + 1); setBump((b) => b + 1); setLast(i); setTimeout(() => setLast(null), 900); };
  return (
    <div className="store reveal">
      <div className="store-bar">
        <strong>Your Store</strong>
        <span className="cart"><Icon k="cart" /><b key={bump} className="badge">{cart}</b></span>
      </div>
      <div className="store-grid">
        {shopify.demoProducts.map((p, i) => (
          <div key={p.name} className="sp">
            <div className="sp-img" style={{ "--h": p.hue }}><Icon k="cart" /></div>
            <p>{p.name}</p>
            <span>{p.price}</span>
            <button onClick={() => add(i)}>{last === i ? "Added" : "Add to cart"}</button>
          </div>
        ))}
      </div>
      <p className="store-note">Interactive demo of a product grid. Try adding an item.</p>
    </div>
  );
}

export function ShopifySection() {
  return (
    <section id="shopify" className="section shopify">
      <h3 className="reveal"><span className="ico sm"><Icon k="shopify" /></span>Shopify development</h3>
      <p className="intro reveal">{shopify.intro}</p>

      <div className="grid four">
        {shopify.offers.map((o, i) => (
          <article key={o.title} className="panel reveal" style={{ "--d": `${(i % 4) * 90}ms` }}>
            <span className="ico"><Icon k={o.icon} /></span>
            <h4>{o.title}</h4><p>{o.text}</p>
          </article>
        ))}
      </div>

      <div className="split">
        <CodeWindow title={shopify.codeTitle} code={shopify.code} mode="liquid" />
        <StoreDemo />
      </div>

      <h4 className="mini reveal">How a Shopify project runs</h4>
      <ol className="timeline">
        {shopify.steps.map((s, i) => (
          <li key={s.title} className="reveal" style={{ "--d": `${i * 120}ms` }}>
            <span className="node"><Icon k={s.icon} /></span>
            <strong>{s.title}</strong>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Node({ n, cls = "" }) {
  return (
    <div className={`fnode ${cls}`}>
      <span className="ico"><Icon k={n.icon} /></span>
      <strong>{n.title}</strong>
      <small>{n.text}</small>
    </div>
  );
}

export function FullStackSection() {
  const [tab, setTab] = useState(fullstack.tabs[0].id);
  const t = fullstack.tabs.find((x) => x.id === tab);
  const f = fullstack.flow;
  return (
    <section id="fullstack" className="section fullstack">
      <h3 className="reveal"><span className="ico sm"><Icon k="react" /></span>Full stack development</h3>
      <p className="intro reveal">{fullstack.intro}</p>

      <div className="grid four">
        {fullstack.features.map((o, i) => (
          <article key={o.title} className="panel reveal" style={{ "--d": `${(i % 4) * 90}ms` }}>
            <span className="ico"><Icon k={o.icon} /></span>
            <h4>{o.title}</h4><p>{o.text}</p>
          </article>
        ))}
      </div>

      <h4 className="mini reveal">How my apps are connected</h4>
      <div className="flow reveal">
        <Node n={f.client} />
        <div className="wire" aria-hidden="true"><i /><i /></div>
        <div className="api-col">
          <Node n={f.api} cls="main" />
          <div className="side">{f.side.map((s) => <Node key={s.title} n={s} cls="small" />)}</div>
        </div>
        <div className="wire" aria-hidden="true"><i /><i /></div>
        <Node n={f.db} />
      </div>

      <CodeWindow title={t.title} code={t.code} mode="js" tabs={fullstack.tabs} active={tab} onTab={setTab} />
      <p className="code-note">Example code in the style of my PlantNet project.</p>
    </section>
  );
}
