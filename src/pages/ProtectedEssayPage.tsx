import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PasswordGate from '@/components/PasswordGate';
import { EssayDocument } from '@/components/EssayMarkdown';
import { decryptEssay, hasEssay, reloadFresh, StaleBuildError, storedPassword, storePassword } from '@/lib/protectedEssays';

const ProtectedEssayPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);

  const unlock = async (pw: string) => {
    try {
      setContent(await decryptEssay(slug, pw));
      storePassword(pw);
      return true;
    } catch (e) {
      // An outdated cached page can't load the essay file: reload instead of blaming the password
      if (e instanceof StaleBuildError && reloadFresh()) return true;
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
          <div className="pt-8 pb-16">
            <EssayDocument content={content} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedEssayPage;
