
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogPreview = () => {
  const posts = [
    {
      title: "How I Built My Digital Library in 7 Days",
      excerpt: "From idea to deployment: the journey of creating an open-source educational platform that serves hundreds of students across Nigeria.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Tutorial",
      categoryColor: "bg-brand-mint-100 text-brand-mint-700"
    },
    {
      title: "JijiFresh: A Marketplace for Real People",
      excerpt: "The story behind building a community-driven platform that connects local farmers with urban consumers, and the lessons learned along the way.",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "Case Study",
      categoryColor: "bg-brand-violet-100 text-brand-violet-700"
    },
    {
      title: "When Tech Meets Storytelling",
      excerpt: "How my love for literature influences my approach to code architecture, user experience design, and building products that resonate.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Personal",
      categoryColor: "bg-brand-gold-100 text-brand-gold-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-violet-50 to-white" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Latest <span className="text-gradient">Thoughts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where I share technical tutorials, behind-the-scenes stories, and reflections 
            on building technology that matters in an ever-changing world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card 
              key={post.title}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl font-playfair group-hover:text-brand-violet-600 transition-colors duration-200">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="group-hover:text-brand-violet-600 transition-colors duration-200">
                    Read more →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-brand-violet-600 hover:bg-brand-violet-700 text-white px-8"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
