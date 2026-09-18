import { useState } from 'react';
import {
  Bar, BarChart, CartesianGrid, Cell, LabelList, Legend, Line, LineChart,
  ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';

// Blueprint-palette series colours (readable on the blue ground)
const CYAN = 'hsl(217 100% 75%)';
const AMBER = '#f5c451';
const CORAL = '#ff8a7a';
const PAPER = '#f2f5fb';
const GRID = 'hsl(214 45% 46% / 0.45)';
const TICK = { fill: 'hsl(215 62% 80%)', fontSize: 12 };
const tooltipStyle = {
  contentStyle: { background: 'hsl(216 78% 16%)', border: '1px solid hsl(214 45% 46%)', fontSize: 12 },
  labelStyle: { color: '#fff' },
};

// EU–US trade balance, USD bn (Eurostat via Statista; intermediate years read approximately off the source chart)
const trade = [
  [2013, 95, -23, 72], [2014, 113, -33, 80], [2015, 131, -36, 95], [2016, 132, -46, 86],
  [2017, 142, -30, 112], [2018, 158, -26, 133], [2019, 174, -32, 142], [2020, 178, -101, 77],
  [2021, 195, -103, 92], [2022, 173, -123, 50], [2023, 182, -126, 56], [2024, 231, -173, 58],
].map(([year, goods, services, total]) => ({ year, goods, services, total }));

// OpenAI launch list price, USD per 1M input tokens; Moore's-law line = halving every 2 years from GPT-4.
// aa = Artificial Analysis Intelligence Index v4.3 (estimated), shown for the two end points.
const tokenPrice = [
  { t: 2023.2, label: 'GPT-4', price: 30, moore: 30, aa: 7 },
  { t: 2023.85, label: 'GPT-4 Turbo', price: 10 },
  { t: 2024.37, label: 'GPT-4o', price: 5 },
  { t: 2024.54, label: 'GPT-4o mini', price: 0.15 },
  { t: 2025.29, label: 'GPT-4.1 nano', price: 0.1 },
  { t: 2025.6, label: 'GPT-5 nano', price: 0.05, aa: 13 },
  { t: 2026.7, label: 'today', price: 0.05, moore: 8.92 },
];


const capacity = [
  { year: '2024', US: 42, China: 24, Rest: 31, total: 97 },
  { year: '2025', US: 52, China: 28, Rest: 34, total: 114 },
  { year: '2030e', US: 100, China: 67, Rest: 59, total: 226 },
];

// Registered data-centre sites (Cloudscene, May 2026) per 10 million people (UN population, 2025)
const dcPerCapita = [
  { country: 'USA', v: 160 },
  { country: 'Canada', v: 82 },
  { country: 'UK', v: 76 },
  { country: 'Germany', v: 63 },
  { country: 'China', v: 3.2 },
];

const capex = [
  { year: '2024', v: 230, label: '$230bn' },
  { year: '2025', v: 410, label: '$410bn' },
  { year: '2026e', v: 730, label: '$730bn' },
  { year: '2027e', v: 1000, label: '~$1tn' },
];

// Bending Spoons acquisitions: peak private/public valuation vs price paid, USD bn
const bendingSpoons = [
  { name: 'Miro', peak: 17.5, paid: 1.36 },
  { name: 'Airtable', peak: 11, paid: 1.29 },
  { name: 'Vimeo', peak: 8, paid: 1.38 },
];

// Europe vs US industrial base (World Bank / BEA; VDMA 2024; IFR World Robotics 2025)
const industry = [
  { label: 'Manufacturing, % of GDP', eu: 14, us: 9, euName: 'EU', fmt: (v: number) => `${v}%` },
  { label: 'Share of world machinery exports', eu: 14, us: 8.6, euName: 'Germany', fmt: (v: number) => `${v}%` },
  { label: 'Robots per 10,000 factory workers', eu: 449, us: 307, euName: 'Germany', fmt: (v: number) => `${v}` },
];

// Nikkei Asia (Jul 2026): Alphabet, Amazon, Meta, Microsoft, Oracle
const hiddenDebt = [
  { name: 'Debt on the books', v: 1.35 },
  { name: 'Obligations off the books', v: 1.65 },
];

// Chinese students returning after studies abroad: post-study returnees as % of outbound students.
// China Ministry of Education, as charted by The Economist ("Swimming home"); values read approximately
// from that chart. No data 2020–24. 2025 ≈ 536k returnees (ICEF Monitor, 2026).
const returning = [
  [2000, 18], [2001, 9], [2002, 9], [2003, 12], [2004, 16], [2005, 25], [2006, 26], [2007, 25],
  [2008, 33], [2009, 42], [2010, 42], [2011, 50], [2012, 63], [2013, 80], [2014, 74], [2015, 73],
  [2016, 74], [2017, 74], [2018, 73], [2019, 77], [2025, 89],
].map(([year, pct]) => ({ year, pct }));

const Frame = ({ title, source, action, raw, children }: { title: string; source: string; action?: React.ReactNode; raw?: boolean; children: React.ReactNode }) => (
  <figure className="bp-panel my-10 p-4 sm:p-6 not-prose">
    <span className="bp-tick bp-tick-tl" />
    <span className="bp-tick bp-tick-tr" />
    <span className="bp-tick bp-tick-bl" />
    <span className="bp-tick bp-tick-br" />
    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
      <figcaption className="bp-fig !mb-0">{title}</figcaption>
      {action}
    </div>
    {raw ? children : (
      <div className="h-[280px] sm:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">{children as React.ReactElement}</ResponsiveContainer>
      </div>
    )}
    <p className="bp-mono text-[0.68rem] leading-relaxed text-muted-foreground mt-3">{source}</p>
  </figure>
);

const charts: Record<string, () => JSX.Element> = {
  trade: () => (
    <Frame title="// fig. — EU trade balance with the US, USD bn" source="Eurostat / Statista (28 Jul 2025). Intermediate years read approximately from the source chart. Services are not only software.">
      <LineChart data={trade} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" tick={TICK} stroke={GRID} />
        <YAxis tick={TICK} stroke={GRID} domain={[-200, 250]} ticks={[-200, -100, 0, 100, 200]} />
        <ReferenceLine y={0} stroke={PAPER} strokeOpacity={0.5} />
        <Tooltip {...tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line dataKey="goods" name="Goods" stroke={CYAN} strokeWidth={2.5} dot={false} />
        <Line dataKey="services" name="Services" stroke={CORAL} strokeWidth={2.5} dot={false} />
        <Line dataKey="total" name="Overall" stroke={AMBER} strokeWidth={2} strokeDasharray="5 4" dot={false} />
      </LineChart>
    </Frame>
  ),
  'bending-spoons': () => (
    <Frame title="// fig. — what Bending Spoons paid vs peak valuation, USD bn" source="Peak: private funding rounds (Miro 2022, Airtable 2021); Vimeo market value 2021. Paid: Bending Spoons announcements (Vimeo 2025; Airtable closed 4 Sep 2026; Miro agreed 10 Sep 2026).">
      <BarChart data={bendingSpoons} layout="vertical" margin={{ top: 0, right: 48, left: 8, bottom: 0 }} barGap={4}>
        <XAxis type="number" hide domain={[0, 19]} />
        <YAxis type="category" dataKey="name" tick={TICK} stroke={GRID} width={70} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="peak" name="Peak valuation" fill={PAPER} fillOpacity={0.35}>
          <LabelList dataKey="peak" position="right" fill={PAPER} fontSize={12} formatter={(v: number) => `$${v}bn`} />
        </Bar>
        <Bar dataKey="paid" name="Price paid" fill={CYAN}>
          <LabelList dataKey="paid" position="right" fill={CYAN} fontSize={12} formatter={(v: number) => `$${v}bn`} />
        </Bar>
      </BarChart>
    </Frame>
  ),
  'europe-industry': () => (
    <Frame raw title="// fig. — who owns the real world: Europe vs the US" source="Manufacturing share of GDP: World Bank (EU, 2024), BEA (US, Q1 2026). Machinery exports: VDMA (2024). Robot density: IFR World Robotics 2025 (2024 data).">
      <div className="grid gap-6 sm:grid-cols-3">
        {industry.map(m => {
          const max = Math.max(m.eu, m.us);
          return (
            <div key={m.label}>
              <div className="bp-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground mb-3 min-h-[2.2em]">{m.label}</div>
              {[{ who: m.euName, v: m.eu, c: CYAN }, { who: 'US', v: m.us, c: PAPER }].map(r => (
                <div key={r.who} className="mb-2">
                  <div className="flex justify-between text-sm mb-1"><span className="text-foreground/80">{r.who}</span><span className="font-semibold text-white tabular-nums">{m.fmt(r.v)}</span></div>
                  <div className="h-2.5 bg-white/[0.06]"><div className="h-full" style={{ width: `${(r.v / max) * 100}%`, background: r.c, opacity: r.who === 'US' ? 0.55 : 1 }} /></div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Frame>
  ),
  'hidden-debt': () => (
    <Frame title="// fig. — five US tech giants: debt on vs off the books, USD tn" source="Nikkei Asia analysis (21 Jul 2026) of Alphabet, Amazon, Meta, Microsoft and Oracle. Off-balance-sheet items: data-centre leases not yet started, take-or-pay chip contracts, joint-venture financing.">
      <BarChart data={hiddenDebt} margin={{ top: 24, right: 16, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="name" tick={TICK} stroke={GRID} />
        <YAxis tick={TICK} stroke={GRID} tickFormatter={v => `$${v}tn`} />
        <Bar dataKey="v">
          {hiddenDebt.map(d => <Cell key={d.name} fill={d.name.includes('off') ? CORAL : PAPER} />)}
          <LabelList dataKey="v" position="top" fill={PAPER} fontSize={12} formatter={(v: number) => `$${v}tn`} />
        </Bar>
      </BarChart>
    </Frame>
  ),
  'returning-students': () => (
    <Frame title="// fig. — Chinese students returning home after studying abroad, %" source="Post-study returnees as a share of outbound students. China Ministry of Education, as charted by The Economist ('Swimming home'); values read approximately from that chart. No data for 2020–24. 2025: ~536,000 returnees (ICEF Monitor, 2026).">
      <LineChart data={returning} margin={{ top: 16, right: 24, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" type="number" domain={[2000, 2025]} ticks={[2000, 2005, 2010, 2015, 2020, 2025]} tick={TICK} stroke={GRID} />
        <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tickFormatter={v => `${v}%`} tick={TICK} stroke={GRID} />
        <Tooltip {...tooltipStyle} formatter={(v: number) => `${v}%`} />
        <Line dataKey="pct" name="Returning to China" stroke={CORAL} strokeWidth={2.5} dot={{ r: 3, fill: CORAL }}>
          <LabelList
            content={({ x, y, index }) => {
              const d = returning[index as number];
              if (!d || (d.year !== 2001 && d.year !== 2025)) return null;
              return <text x={Number(x)} y={Number(y) - 12} fill={PAPER} fontSize={12} fontWeight={600} textAnchor="middle">{d.pct}%</text>;
            }}
          />
        </Line>
      </LineChart>
    </Frame>
  ),
  'token-price': () => <TokenPriceChart />,
  'dc-per-capita': () => (
    <Frame title="// fig. — data centres per 10 million people, May 2026" source="Registered sites: Cloudscene via MUFG, Bottlenecks to Scaling AI (June 2026), p. 34 (USA 5,427; Germany 529; UK 523; China 449; Canada 337). Population: UN, 2025. Count of sites, not megawatts.">
      <BarChart data={dcPerCapita} layout="vertical" margin={{ top: 0, right: 56, left: 8, bottom: 0 }}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="country" tick={TICK} stroke={GRID} width={70} />
        <Bar dataKey="v">
          {dcPerCapita.map(d => <Cell key={d.country} fill={d.country === 'USA' ? AMBER : d.country === 'China' ? CORAL : PAPER} />)}
          <LabelList dataKey="v" position="right" fill={PAPER} fontSize={12} />
        </Bar>
      </BarChart>
    </Frame>
  ),
  capacity: () => (
    <Frame title="// fig. — installed data-centre capacity, GW" source="IEA, Key Questions on Energy and AI (April 2026), table A.2, p. 109. 2030: base case.">
      <BarChart data={capacity} margin={{ top: 24, right: 16, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" tick={TICK} stroke={GRID} />
        <YAxis tick={TICK} stroke={GRID} />
        <Tooltip {...tooltipStyle} cursor={{ fill: 'hsl(0 0% 100% / 0.04)' }} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="US" stackId="a" fill={CYAN}>
          <LabelList dataKey="US" position="center" fill="#0b2350" fontSize={12} fontWeight={600} />
        </Bar>
        <Bar dataKey="China" stackId="a" fill={AMBER}>
          <LabelList dataKey="China" position="center" fill="#0b2350" fontSize={12} fontWeight={600} />
        </Bar>
        <Bar dataKey="Rest" name="Europe & rest of world" stackId="a" fill={PAPER}>
          <LabelList dataKey="Rest" position="center" fill="#0b2350" fontSize={12} fontWeight={600} />
          <LabelList dataKey="total" position="top" fill={PAPER} fontSize={13} fontWeight={600} formatter={(v: number) => `${v} GW`} />
        </Bar>
      </BarChart>
    </Frame>
  ),
  capex: () => (
    <Frame title="// fig. — big-four hyperscaler capex, USD" source="Amazon, Microsoft, Alphabet, Meta. Company filings (2024–25); 2026 = midpoint of guidance after July 2026 earnings; 2027 = Moody's projection for a wider group incl. Oracle and CoreWeave.">
      <BarChart data={capex} margin={{ top: 24, right: 16, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" tick={TICK} stroke={GRID} />
        <YAxis tick={TICK} stroke={GRID} />
        <Bar dataKey="v">
          {capex.map(d => <Cell key={d.year} fill={d.year.endsWith('e') ? AMBER : CYAN} />)}
          <LabelList dataKey="label" position="top" fill={PAPER} fontSize={12} />
        </Bar>
      </BarChart>
    </Frame>
  ),
};

const TokenPriceChart = () => {
  const [log, setLog] = useState(false);
  const toggle = (
    <button
      type="button"
      onClick={() => setLog(l => !l)}
      className="shrink-0 bp-mono text-[0.68rem] uppercase tracking-[0.12em] border border-border px-2 py-1 text-muted-foreground hover:text-foreground hover:border-accent transition-smooth"
    >
      {log ? 'Linear scale' : 'Log scale'}
    </button>
  );
  return (
    <Frame
      title="// fig. — price of intelligence, USD per 1M input tokens"
      source="OpenAI launch list prices. Smarts = Artificial Analysis Intelligence Index v4.3 (estimated): GPT-5 nano scores 13 vs GPT-4's 7 — the cheaper model is also the smarter one. Dashed line: price halving every 2 years (Moore's law), not an API price forecast."
      action={toggle}
    >
      <LineChart data={tokenPrice} margin={{ top: 8, right: 16, left: -4, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="t" type="number" domain={[2023, 2027]} ticks={[2023, 2024, 2025, 2026, 2027]} tick={TICK} stroke={GRID} />
        {log ? (
          <YAxis key="log" scale="log" domain={[0.01, 100]} ticks={[0.01, 0.1, 1, 10, 100]} tickFormatter={v => `$${v}`} tick={TICK} stroke={GRID} allowDataOverflow />
        ) : (
          <YAxis key="linear" domain={[0, 30]} ticks={[0, 5, 10, 15, 20, 25, 30]} tickFormatter={v => `$${v}`} tick={TICK} stroke={GRID} />
        )}
        <Tooltip {...tooltipStyle} labelFormatter={(_, p) => {
          const d = p?.[0]?.payload;
          return d ? `${d.label}${d.aa ? ` · AA Intelligence Index ${d.aa}` : ''}` : '';
        }} formatter={(v: number) => `$${v}`} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line dataKey="price" name="Launch price" stroke={CYAN} strokeWidth={2.5} dot={{ r: 3.5, fill: CYAN }} isAnimationActive={false}>
          <LabelList
            content={({ x, y, index }) => {
              const d = tokenPrice[index as number];
              if (!d?.aa) return null;
              return (
                <text x={Number(x) + 8} y={Number(y) - 10} fill={PAPER} fontSize={12} fontWeight={600}>
                  {d.label} · ${d.price} · smarts {d.aa}
                </text>
              );
            }}
          />
        </Line>
        <Line dataKey="moore" name="Moore's law pace" stroke={AMBER} strokeWidth={2} strokeDasharray="6 4" dot={false} connectNulls isAnimationActive={false} />
      </LineChart>
    </Frame>
  );
};

export const EssayChart = ({ id }: { id: string }) => {
  const Chart = charts[id];
  return Chart ? <Chart /> : null;
};
