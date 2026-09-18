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

const dcCounts = [
  { country: 'USA', n: 5427 }, { country: 'Germany', n: 529 }, { country: 'UK', n: 523 },
  { country: 'China', n: 449 }, { country: 'Canada', n: 337 },
];

const capacity = [
  { year: '2024', US: 42, China: 24, Rest: 31 },
  { year: '2025', US: 52, China: 28, Rest: 34 },
  { year: '2030e', US: 100, China: 67, Rest: 59 },
];

const capex = [
  { year: '2024', v: 230, label: '$230bn' },
  { year: '2025', v: 410, label: '$410bn' },
  { year: '2026e', v: 730, label: '$730bn' },
  { year: '2027e', v: 1000, label: '~$1tn' },
];

const Frame = ({ title, source, action, children }: { title: string; source: string; action?: React.ReactNode; children: React.ReactNode }) => (
  <figure className="bp-panel my-10 p-4 sm:p-6 not-prose">
    <span className="bp-tick bp-tick-tl" />
    <span className="bp-tick bp-tick-tr" />
    <span className="bp-tick bp-tick-bl" />
    <span className="bp-tick bp-tick-br" />
    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
      <figcaption className="bp-fig !mb-0">{title}</figcaption>
      {action}
    </div>
    <div className="h-[280px] sm:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">{children as React.ReactElement}</ResponsiveContainer>
    </div>
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
  'token-price': () => <TokenPriceChart />,
  'dc-count': () => (
    <Frame title="// fig. — registered data centres, May 2026" source="Cloudscene via MUFG, Bottlenecks to Scaling AI (June 2026), p. 34. Count of sites, not megawatts.">
      <BarChart data={dcCounts} layout="vertical" margin={{ top: 0, right: 56, left: 8, bottom: 0 }}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="country" tick={TICK} stroke={GRID} width={70} />
        <Bar dataKey="n" radius={0}>
          {dcCounts.map(d => <Cell key={d.country} fill={d.country === 'USA' ? AMBER : d.country === 'China' ? CORAL : PAPER} />)}
          <LabelList dataKey="n" position="right" fill={PAPER} fontSize={12} formatter={(v: number) => v.toLocaleString('en-US')} />
        </Bar>
      </BarChart>
    </Frame>
  ),
  capacity: () => (
    <Frame title="// fig. — installed data-centre capacity, GW" source="IEA, Key Questions on Energy and AI (April 2026), table A.2, p. 109. 2030: base case.">
      <BarChart data={capacity} margin={{ top: 8, right: 16, left: -8, bottom: 0 }}>
        <CartesianGrid stroke={GRID} vertical={false} />
        <XAxis dataKey="year" tick={TICK} stroke={GRID} />
        <YAxis tick={TICK} stroke={GRID} />
        <Tooltip {...tooltipStyle} cursor={{ fill: 'hsl(0 0% 100% / 0.04)' }} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="US" stackId="a" fill={CYAN} />
        <Bar dataKey="China" stackId="a" fill={AMBER} />
        <Bar dataKey="Rest" name="Europe & rest of world" stackId="a" fill={PAPER} />
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
