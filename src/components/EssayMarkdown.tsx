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
      // ###### marks the start of a part of the argument: rendered as a tinted band
      h6: ({ children }) => (
        <div className="bp-panel mt-16 -mb-8 px-5 py-4 bg-accent/[0.08] border-accent/60">
          <span className="bp-tick bp-tick-tl" />
          <span className="bp-tick bp-tick-br" />
          <span className="bp-kicker">{children}</span>
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

export default EssayMarkdown;
