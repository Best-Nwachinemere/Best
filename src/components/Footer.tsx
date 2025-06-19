
const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-playfair text-2xl font-bold mb-4">
              Best<span className="text-brand-gold-400">★</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Multi-dimensional builder crafting the future with code, words, and purpose. 
              Empowering communities one innovation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-playfair">Explore</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-brand-mint-400 transition-colors">About</a>
              <a href="#portfolio" className="block text-gray-300 hover:text-brand-mint-400 transition-colors">Work</a>
              <a href="#blog" className="block text-gray-300 hover:text-brand-mint-400 transition-colors">Writing</a>
              <a href="#books" className="block text-gray-300 hover:text-brand-mint-400 transition-colors">Books</a>
              <a href="#empowerment" className="block text-gray-300 hover:text-brand-mint-400 transition-colors">Impact</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4 font-playfair">Let's Build Together</h4>
            <p className="text-gray-300 mb-4">
              Ready to create something extraordinary? Whether it's smart contracts, 
              content strategy, or world-changing initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-brand-violet-600 rounded-full flex items-center justify-center hover:bg-brand-violet-700 transition-colors">
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-brand-mint-600 rounded-full flex items-center justify-center hover:bg-brand-mint-700 transition-colors">
                💻
              </a>
              <a href="#" className="w-10 h-10 bg-brand-gold-600 rounded-full flex items-center justify-center hover:bg-brand-gold-700 transition-colors">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-brand-violet-600 rounded-full flex items-center justify-center hover:bg-brand-violet-700 transition-colors">
                📺
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Best Nwachinemere. Built with innovation, purpose, and endless possibilities. ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
