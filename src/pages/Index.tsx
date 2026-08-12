import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-yellow-400 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-black text-secondary mb-4 drop-shadow-lg">
            D'OH!
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Welcome to The Simpsons Fan Site
          </p>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            Explore the world of America's favorite family from Springfield. 
            Discover characters, episodes, iconic quotes, and more!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/characters"
              className="bg-secondary text-primary font-bold text-xl py-6 px-8 rounded-lg hover:bg-accent transition transform hover:scale-105 shadow-lg border-4 border-primary"
            >
              👨‍👩‍👧‍👦 Meet the Characters
            </Link>
            <Link
              to="/episodes"
              className="bg-secondary text-primary font-bold text-xl py-6 px-8 rounded-lg hover:bg-accent transition transform hover:scale-105 shadow-lg border-4 border-primary"
            >
              📺 Browse Episodes
            </Link>
            <Link
              to="/quotes"
              className="bg-secondary text-primary font-bold text-xl py-6 px-8 rounded-lg hover:bg-accent transition transform hover:scale-105 shadow-lg border-4 border-primary"
            >
              💬 Famous Quotes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-secondary text-center mb-12">
            Why We Love The Simpsons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary text-primary p-8 rounded-lg border-4 border-accent shadow-lg">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3">Iconic Show</h3>
              <p className="text-lg">
                Over 30 seasons of hilarious comedy and memorable moments that shaped pop culture.
              </p>
            </div>
            
            <div className="bg-secondary text-primary p-8 rounded-lg border-4 border-accent shadow-lg">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-3">Beloved Characters</h3>
              <p className="text-lg">
                Homer, Marge, Bart, Lisa, and Maggie - a family we've all grown to love.
              </p>
            </div>
            
            <div className="bg-secondary text-primary p-8 rounded-lg border-4 border-accent shadow-lg">
              <div className="text-5xl mb-4">😂</div>
              <h3 className="text-2xl font-bold mb-3">Timeless Humor</h3>
              <p className="text-lg">
                Clever writing, social commentary, and comedy that never gets old.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-primary py-8 px-4 border-t-4 border-accent">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">
            © 2024 The Simpsons Fan Site - A Tribute to America's Favorite Family
          </p>
          <p className="text-sm opacity-90">
            This is a fan-made site. The Simpsons is owned by Fox and created by Matt Groening.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
