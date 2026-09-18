import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ProtectedEssayPage from "./pages/ProtectedEssayPage";
import EssayComparePage from "./pages/EssayComparePage";

const queryClient = new QueryClient();

console.log('🚀 App starting - Environment:', import.meta.env.PROD ? 'PRODUCTION' : 'DEVELOPMENT');
console.log('📍 Router basename:', "/ (root)");
console.log('🌐 Base URL:', import.meta.env.BASE_URL);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/essays/:slug" element={<ProtectedEssayPage />} />
          <Route path="/essays/:slug/compare/:other" element={<EssayComparePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
