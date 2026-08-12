import Navigation from '@/components/Navigation';

interface Character {
  name: string;
  role: string;
  description: string;
  emoji: string;
}

const characters: Character[] = [
  {
    name: 'Homer Simpson',
    role: 'Father',
    description: 'The lovable patriarch of the Simpson family. A safety inspector at the nuclear power plant who loves donuts and beer.',
    emoji: '👨',
  },
  {
    name: 'Marge Simpson',
    role: 'Mother',
    description: 'The caring matriarch with her iconic blue hair. Known for her patience and love for her family.',
    emoji: '👩',
  },
  {
    name: 'Bart Simpson',
    role: 'Son',
    description: 'The mischievous 10-year-old prankster. Famous for skateboarding and his "Eat my shorts!" catchphrase.',
    emoji: '👦',
  },
  {
    name: 'Lisa Simpson',
    role: 'Daughter',
    description: 'The intelligent and musically gifted 8-year-old. Often the moral compass of the family.',
    emoji: '👧',
  },
  {
    name: 'Maggie Simpson',
    role: 'Baby',
    description: 'The pacifier-loving infant who communicates through sucking sounds and occasional words.',
    emoji: '👶',
  },
  {
    name: 'Mr. Burns',
    role: 'Employer',
    description: 'Homer\'s boss and owner of the nuclear power plant. Eccentric, wealthy, and often hilarious.',
    emoji: '👴',
  },
  {
    name: 'Ned Flanders',
    role: 'Neighbor',
    description: 'The Simpson\'s religious and overly friendly neighbor. Famous for his "Diddly-diddly" catchphrase.',
    emoji: '🙏',
  },
  {
    name: 'Barney Gumble',
    role: 'Friend',
    description: 'Homer\'s best friend and regular at Moe\'s Tavern. A lovable, booze-loving character.',
    emoji: '🍻',
  },
];

export default function Characters() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black text-secondary text-center mb-4">
            The Simpson Family & Friends
          </h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-2xl mx-auto">
            Meet the iconic characters that make The Simpsons unforgettable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char) => (
              <div
                key={char.name}
                className="bg-secondary text-primary p-6 rounded-lg border-4 border-accent shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="text-6xl text-center mb-4">{char.emoji}</div>
                <h3 className="text-2xl font-black text-center mb-2">{char.name}</h3>
                <p className="text-sm font-bold text-accent text-center mb-3">{char.role}</p>
                <p className="text-sm leading-relaxed">{char.description}</p>
              </div>
            ))}
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
