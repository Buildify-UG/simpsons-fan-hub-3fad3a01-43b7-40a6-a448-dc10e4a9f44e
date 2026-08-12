import Navigation from '@/components/Navigation';

interface Episode {
  title: string;
  season: number;
  episode: number;
  year: number;
  description: string;
}

const episodes: Episode[] = [
  {
    title: 'Simpsons Roasting on an Open Fire',
    season: 1,
    episode: 1,
    year: 1989,
    description: 'The first episode that started it all. Homer needs money for Christmas and enters a dog race.',
  },
  {
    title: 'Treehouse of Horror',
    season: 2,
    episode: 3,
    year: 1990,
    description: 'The first Halloween special featuring three spooky segments.',
  },
  {
    title: 'Homer\'s Enemy',
    season: 8,
    episode: 23,
    year: 1997,
    description: 'Frank Grimes joins the power plant and clashes with Homer\'s lifestyle.',
  },
  {
    title: 'Last Exit to Springfield',
    season: 4,
    episode: 17,
    year: 1993,
    description: 'A labor strike at the power plant with one of the best episodes ever made.',
  },
  {
    title: 'Steamed Hams',
    season: 7,
    episode: 21,
    year: 1996,
    description: 'Superintendent Chalmers visits Principal Skinner\'s house. An iconic dinner scene.',
  },
  {
    title: 'Who Shot Mr. Burns?',
    season: 6,
    episode: 25,
    year: 1995,
    description: 'A season finale cliffhanger that had everyone guessing who shot the evil boss.',
  },
  {
    title: 'You Only Move Twice',
    season: 8,
    episode: 2,
    year: 1996,
    description: 'Homer gets a new job at a company run by a supervillain.',
  },
  {
    title: 'Marge vs. the Monorail',
    season: 4,
    episode: 12,
    year: 1993,
    description: 'A con artist convinces Springfield to build a monorail.',
  },
];

export default function Episodes() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black text-secondary text-center mb-4">
            Classic Episodes
          </h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-2xl mx-auto">
            Explore some of the most beloved episodes from over 30 seasons
          </p>

          <div className="space-y-6">
            {episodes.map((ep) => (
              <div
                key={`${ep.season}-${ep.episode}`}
                className="bg-secondary text-primary p-8 rounded-lg border-4 border-accent shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-2">{ep.title}</h3>
                    <p className="text-sm font-bold text-accent mb-3">
                      Season {ep.season}, Episode {ep.episode} • {ep.year}
                    </p>
                    <p className="text-lg leading-relaxed">{ep.description}</p>
                  </div>
                  <div className="text-5xl">📺</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary text-primary p-8 rounded-lg border-4 border-accent text-center">
            <p className="text-xl font-bold">
              With over 700 episodes across 35+ seasons, there's always something new to discover!
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary py-8 px-4 border-t-4 border-accent mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold">
            © 2024 The Simpsons Fan Site
          </p>
        </div>
      </footer>
    </div>
  );
}
