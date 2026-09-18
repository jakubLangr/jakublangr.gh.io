import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PasswordGate from '@/components/PasswordGate';
import EssayMarkdown from '@/components/EssayMarkdown';
import { decryptEssay, hasEssay, storedPassword, storePassword } from '@/lib/protectedEssays';

const ProtectedEssayPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);

  const unlock = async (pw: string) => {
    try {
      setContent(await decryptEssay(slug, pw));
      storePassword(pw);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    setContent(null);
    const saved = storedPassword();
    if (saved && hasEssay(slug)) unlock(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!hasEssay(slug)) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {content === null ? (
          <PasswordGate onUnlock={unlock} />
        ) : (
          <section className="section-padding">
            <article className="max-w-[68ch] mx-auto text-foreground/90 text-lg leading-relaxed">
              <EssayMarkdown content={content} />
            </article>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedEssayPage;
