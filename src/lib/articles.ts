import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  author: string;
  summary: string;
  content: string;
}

export const parseArticle = (filename: string, content: string): Article => {
  const { data, content: markdownContent } = matter(content);
  
  return {
    slug: data.slug || filename.replace('.md', ''),
    title: data.Title || data.title || 'Untitled',
    date: data.Date || data.date || '',
    tags: data.Tags ? data.Tags.split(',').map((tag: string) => tag.trim()) : [],
    category: data.Category || data.category || 'general',
    author: data.Author || data.author || 'Jakub Langr',
    summary: data.Summary || data.summary || '',
    content: markdownContent
  };
};

export const categorizeArticles = (articles: Article[]) => {
  const categories = articles.reduce((acc, article) => {
    const category = article.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(article);
    return acc;
  }, {} as Record<string, Article[]>);
  
  // Sort articles by date within each category
  Object.keys(categories).forEach(category => {
    categories[category].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  });
  
  return categories;
};




