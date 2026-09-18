import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { EssayChart } from '@/components/EssayCharts';

const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const linkClass = 'text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent transition-smooth';

const EssayMarkdown = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{children}</h1>,
      h2: ({ children }) => (
        <h2 id={slugify(String(children))} className="scroll-mt-24 text-2xl md:text-3xl font-bold text-white mt-14 mb-5 pt-6 border-t border-dashed border-border">{children}</h2>
      ),
      h3: ({ children }) => <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>,
      // ###### marks the start of a part of the argument; --part is set by EssayDocument
      h6: ({ children }) => (
        <div
          className="bp-panel sticky top-[60px] z-20 -mb-8 px-5 py-3 backdrop-blur"
          style={{
            borderColor: 'hsl(var(--part, 217 100% 75%) / 0.7)',
            background: 'linear-gradient(hsl(var(--part, 217 100% 75%) / 0.16), hsl(var(--part, 217 100% 75%) / 0.16)), hsl(216 78% 19% / 0.95)',
          }}
        >
          <span className="bp-tick bp-tick-tl" style={{ color: 'hsl(var(--part, 217 100% 75%))' }} />
          <span className="bp-tick bp-tick-br" style={{ color: 'hsl(var(--part, 217 100% 75%))' }} />
          <span className="bp-kicker" style={{ color: 'hsl(var(--part, 217 100% 75%))' }}>{children}</span>
        </div>
      ),
      p: ({ children }) => <p className="mb-5">{children}</p>,
      strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
      a: ({ href, children }) => {
        // In-page anchors (e.g. links to the appendix) scroll instead of opening a new tab
        if (href?.startsWith('#')) {
          return (
            <a href={href} className={linkClass} onClick={e => {
              e.preventDefault();
              document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {children}
            </a>
          );
        }
        return <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{children}</a>;
      },
      blockquote: ({ children }) => (
        <blockquote className="border-l-2 border-accent pl-5 my-8 text-xl text-white/95 [&_p]:mb-0">{children}</blockquote>
      ),
      ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2">{children}</ol>,
      hr: () => <hr className="my-12 border-border border-dashed" />,
      table: ({ children }) => (
        <div className="overflow-x-auto my-8"><table className="bp-mono w-full text-sm border-collapse">{children}</table></div>
      ),
      th: ({ children }) => <th className="text-left text-accent font-normal uppercase tracking-[0.1em] text-xs border-b border-border py-2 pr-4">{children}</th>,
      td: ({ children }) => <td className="border-b border-dotted border-border py-2 pr-4 align-top">{children}</td>,
      img: ({ src, alt }) => (
        <figure className="my-10">
          <img src={src} alt={alt || ''} className="mx-auto max-w-full border border-border" />
          {alt && <figcaption className="bp-mono text-[0.7rem] text-muted-foreground mt-3 text-center">{alt}</figcaption>}
        </figure>
      ),
      // ```chart <id>``` fences render a native chart
      code: ({ className, children }) => {
        if (className === 'language-chart') return <EssayChart id={String(children).trim()} />;
        return <code className="bp-mono text-[0.9em] bg-white/[0.06] px-1">{children}</code>;
      },
      pre: ({ children }) => <>{children}</>,
    }}
  >
    {content}
  </ReactMarkdown>
);

// Colour per part of the argument (HSL triplets), tinted over the blueprint blue
const THEMES = {
  one: { part: '185 75% 60%', tint: '185 75% 55% / 0.11' },
  two: { part: '45 95% 62%', tint: '42 95% 58% / 0.12' },
  three: { part: '145 60% 60%', tint: '145 60% 55% / 0.11' },
  appendix: { part: '220 10% 70%', tint: '220 8% 55% / 0.2' },
} as const;

const themeFor = (segment: string) => {
  if (segment.startsWith('###### Part one')) return THEMES.one;
  if (segment.startsWith('###### Part two')) return THEMES.two;
  if (segment.startsWith('###### Part three')) return THEMES.three;
  if (segment.startsWith('## Appendix')) return THEMES.appendix;
  return null;
};

// Splits the essay at part markers and at the first appendix heading, and renders each
// segment as a full-width band so the reader always knows which part of the argument they are in.
export const EssayDocument = ({ content }: { content: string }) => {
  const appendixAt = content.search(/^## Appendix/m);
  const main = appendixAt === -1 ? content : content.slice(0, appendixAt);
  const appendix = appendixAt === -1 ? '' : content.slice(appendixAt).replace(/\n---\n[\s\S]*$/, '');
  const footer = appendixAt === -1 ? '' : content.slice(appendixAt).match(/\n---\n[\s\S]*$/)?.[0] ?? '';
  const segments = [...main.split(/\n(?=###### )/), ...(appendix ? [appendix] : []), ...(footer ? [footer] : [])];

  return (
    <>
      {segments.map((segment, i) => {
        const theme = themeFor(segment);
        const isAppendix = theme === THEMES.appendix;
        return (
          <section
            key={i}
            className={`px-4 ${theme ? 'py-12 md:py-16 border-t' : 'py-8'}`}
            style={{
              ['--part' as string]: theme?.part ?? '217 100% 75%',
              background: theme ? `hsl(${theme.tint})` : undefined,
              borderColor: theme ? `hsl(${theme.part} / 0.35)` : undefined,
              // coloured rail down the left edge of each part
              boxShadow: theme ? `inset 5px 0 0 hsl(${theme.part} / 0.8)` : undefined,
            }}
          >
            <article
              className={`max-w-[68ch] mx-auto text-lg leading-relaxed [&>h2:first-child]:mt-0 [&>h2:first-child]:pt-0 [&>h2:first-child]:border-t-0 ${
                isAppendix ? 'text-foreground/65 [&_strong]:text-white/75 [&_h2]:text-white/80' : 'text-foreground/90'
              }`}
            >
              <EssayMarkdown content={segment} />
            </article>
          </section>
        );
      })}
    </>
  );
};

export default EssayMarkdown;
