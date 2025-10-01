import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';
import { categorizeArticles } from '@/lib/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Tag } from 'lucide-react';

const ArticlesList = () => {
  const categorizedArticles = categorizeArticles(articles);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = selectedCategory === 'all' 
    ? articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : categorizedArticles[selectedCategory] || [];

  const categories = ['all', ...Object.keys(categorizedArticles)];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Articles & Blog Posts</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of thoughts on AI, machine learning, data science, and technology.
              From technical deep-dives to conference experiences and industry insights.
            </p>
          </header>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="capitalize">
                  {category === 'all' ? 'All Articles' : category}
                  {category !== 'all' && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {categorizedArticles[category]?.length || 0}
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <Link key={article.slug} to={`/articles/${article.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short' 
                            })}
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {article.tags.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Tag className="w-3 h-3 text-muted-foreground" />
                            <div className="flex flex-wrap gap-1">
                              {article.tags.slice(0, 3).map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {article.tags.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{article.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesList;




