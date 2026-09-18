import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { diffWords } from 'diff';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PasswordGate from '@/components/PasswordGate';
import EssayMarkdown from '@/components/EssayMarkdown';
import { decryptEssay, hasEssay, storedPassword, storePassword } from '@/lib/protectedEssays';

type Mode = 'side' | 'changes';

// Split on level-2 headings so both versions line up section by section
const sections = (md: string) => md.split(/\n(?=## )/);

const stats = (md: string) => {
  const prose = md.replace(/```[\s\S]*?```/g, '').replace(/^!\[.*$/gm, '').replace(/^\|.*$/gm, '');
  const sentences = prose.split(/[.!?]+\s/).filter(s => s.trim().split(/\s+/).length > 2);
  const words = prose.split(/\s+/).filter(Boolean).length;
  return {
    Words: words,
    'Avg sentence (words)': Math.round(words / Math.max(sentences.length, 1)),
    'Em dashes': (prose.match(/—/g) ?? []).length,
    'Bold spans': (prose.match(/\*\*[^*]+\*\*/g) ?? []).length,
    Bullets: (prose.match(/^\s*[-*] /gm) ?? []).length,
  };
};

const EssayComparePage = () => {
  const { slug = '', other = '' } = useParams<{ slug: string; other: string }>();
  const [texts, setTexts] = useState<[string, string] | null>(null);
  const [mode, setMode] = useState<Mode>('side');

  const unlock = async (pw: string) => {
    try {
      setTexts([await decryptEssay(slug, pw), await decryptEssay(other, pw)]);
      storePassword(pw);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const saved = storedPassword();
    if (saved && hasEssay(slug) && hasEssay(other)) unlock(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, other]);

  const pairs = useMemo(() => {
    if (!texts) return [];
    const [a, b] = texts.map(sections);
    return Array.from({ length: Math.max(a.length, b.length) }, (_, i) => [a[i] ?? '', b[i] ?? ''] as const);
  }, [texts]);

  if (!hasEssay(slug) || !hasEssay(other)) return <Navigate to="/404" replace />;

  const tab = (m: Mode, label: string) => (
    <button
      type="button"
      onClick={() => setMode(m)}
      className={`bp-mono text-xs uppercase tracking-[0.12em] px-3 py-2 border transition-smooth ${
        mode === m ? 'border-accent text-white bg-accent/10' : 'border-border text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {texts === null ? (
          <PasswordGate onUnlock={unlock} />
        ) : (
          <section className="section-padding">
            <div className="max-w-7xl mx-auto">
              <span className="bp-kicker block mb-4">// compare — two forks</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Original vs de-slopped</h1>

              <div className="bp-panel grid md:grid-cols-2 mb-8">
                <span className="bp-tick bp-tick-tl" />
                <span className="bp-tick bp-tick-tr" />
                <span className="bp-tick bp-tick-bl" />
                <span className="bp-tick bp-tick-br" />
                {[slug, other].map((s, i) => (
                  <div key={s} className={`p-5 ${i === 0 ? 'md:border-r border-b md:border-b-0 border-border' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bp-mono text-xs uppercase tracking-[0.12em] text-accent">{i === 0 ? 'A · original' : 'B · de-slopped'}</span>
                      <Link to={`/essays/${s}`} className="bp-mono text-xs text-muted-foreground hover:text-accent underline underline-offset-2">/essays/{s}</Link>
                    </div>
                    {Object.entries(stats(texts[i])).map(([k, v]) => (
                      <div key={k} className="bp-row"><span className="bp-k">{k}</span><span className="bp-v tabular-nums">{v}</span></div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-8 sticky top-16 z-10 bg-background/90 backdrop-blur py-3">
                {tab('side', 'Side by side')}
                {tab('changes', 'Word changes')}
                {mode === 'changes' && (
                  <span className="bp-mono text-xs text-muted-foreground ml-2">
                    <span className="bg-[#ff8a7a]/25 line-through px-1">removed</span>{' '}
                    <span className="bg-[#7ee2a8]/25 px-1">added</span>
                  </span>
                )}
              </div>

              {pairs.map(([a, b], i) => (
                <div key={i} className="border-t border-dashed border-border py-6">
                  {mode === 'side' ? (
                    <div className="grid md:grid-cols-2 gap-8">
                      {[a, b].map((md, j) => (
                        <div key={j} className="min-w-0 text-foreground/90 leading-relaxed">
                          <div className="bp-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground mb-2 md:hidden">{j === 0 ? 'A · original' : 'B · de-slopped'}</div>
                          <EssayMarkdown content={md} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="bp-mono text-sm leading-7 whitespace-pre-wrap text-foreground/85 max-w-[100ch]">
                      {diffWords(a, b).map((part, k) => (
                        <Fragment key={k}>
                          {part.added ? (
                            <span className="bg-[#7ee2a8]/25 text-white">{part.value}</span>
                          ) : part.removed ? (
                            <span className="bg-[#ff8a7a]/25 line-through text-foreground/60">{part.value}</span>
                          ) : (
                            part.value
                          )}
                        </Fragment>
                      ))}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EssayComparePage;
