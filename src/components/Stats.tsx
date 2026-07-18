const Stats = () => {
  const stats = [
    { id: '01', value: '$32M', label: 'Raised as CEO / CTO' },
    { id: '02', value: '10+', label: 'Years in data & AI' },
    { id: '03', value: '1st', label: 'Book on GANs (best-seller)' },
    { id: '04', value: 'YC', label: 'Y Combinator-backed' },
  ];

  return (
    <section id="metrics" className="section-padding border-b border-border">
      <div className="container-width">
        <span className="bp-fig">// fig. 03 — metrics</span>
        <div className="bp-panel grid grid-cols-2 md:grid-cols-4">
          <span className="bp-tick bp-tick-tl" />
          <span className="bp-tick bp-tick-tr" />
          <span className="bp-tick bp-tick-bl" />
          <span className="bp-tick bp-tick-br" />
          {stats.map((s) => (
            <div key={s.id} className="bp-gauge border-b md:border-b-0 border-[hsl(214_45%_46%)]">
              <span className="bp-id">{s.id}</span>
              <div className="bp-num text-white tabular-nums">{s.value}</div>
              <div className="bp-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
