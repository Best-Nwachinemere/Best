
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BooksSection = () => {
  const books = [
    {
      title: "Happy Chaos",
      subtitle: "A Novel",
      description: "A coming-of-age story about finding beauty in the messiness of life, love, and following your dreams against all odds.",
      status: "In Progress",
      progress: 65,
      genre: "Contemporary Fiction",
      color: "from-brand-violet-400 to-brand-violet-600"
    },
    {
      title: "Code Like a Girl",
      subtitle: "Tech Memoir",
      description: "My journey from curious beginner to confident developer, with practical advice for women entering tech.",
      status: "Drafting",
      progress: 30,
      genre: "Non-fiction",
      color: "from-brand-mint-400 to-brand-mint-600"
    },
    {
      title: "Letters to My Future Self",
      subtitle: "Essays",
      description: "Reflections on identity, ambition, and building a life that matters in the intersection of technology and humanity.",
      status: "Planning",
      progress: 15,
      genre: "Essays",
      color: "from-brand-gold-400 to-brand-gold-600"
    }
  ];

  const currentlyReading = [
    { title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid" },
    { title: "Purple Hibiscus", author: "Chimamanda Ngozi Adichie" },
    { title: "Kingdom of Ash", author: "Sarah J. Maas" }
  ];

  return (
    <section className="py-20 bg-white" id="books">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-playfair">
            Books & <span className="text-gradient">Writing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stories shape us, and I believe in the power of words to inspire change. 
            Here's what I'm crafting and what's inspiring me right now.
          </p>
        </div>

        {/* Books I'm Writing */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 font-playfair text-center">
            Books I'm Writing
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <Card 
                key={book.title}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${book.color} flex items-center justify-center mb-4 group-hover:scale-[1.02] transition-transform duration-300`}>
                    <div className="text-4xl">📚</div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-playfair">{book.title}</CardTitle>
                    <span className="text-xs px-2 py-1 bg-brand-violet-100 text-brand-violet-700 rounded-full font-medium">
                      {book.status}
                    </span>
                  </div>
                  <p className="text-sm text-brand-mint-600 font-medium mb-2">{book.subtitle}</p>
                  <CardDescription className="text-sm">
                    {book.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{book.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-brand-violet-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {book.genre}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Currently Reading & Book Recommendations */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Currently Reading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Currently Reading
            </h3>
            <div className="space-y-4">
              {currentlyReading.map((book, index) => (
                <div 
                  key={book.title}
                  className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-mint-400 to-brand-mint-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-medium font-playfair">{book.title}</h4>
                    <p className="text-sm text-muted-foreground">by {book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Club & Recommendations */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Favorite Authors
            </h3>
            <div className="p-6 bg-gradient-to-br from-brand-gold-50 to-brand-violet-50 rounded-2xl">
              <p className="text-muted-foreground mb-4">
                Writers who inspire my storytelling and worldview:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✨</span>
                  <span className="font-medium">Chimamanda Ngozi Adichie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🗡️</span>
                  <span className="font-medium">Sarah J. Maas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌙</span>
                  <span className="font-medium">Hafsah Faizal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💫</span>
                  <span className="font-medium">Tomi Adeyemi</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                className="w-full bg-brand-gold-500 hover:bg-brand-gold-600 text-white"
              >
                Join My Book Club
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
