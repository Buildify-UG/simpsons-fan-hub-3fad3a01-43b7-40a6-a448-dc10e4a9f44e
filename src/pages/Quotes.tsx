import Navigation from '@/components/Navigation';

interface Quote {
  text: string;
  character: string;
  emoji: string;
}

const quotes: Quote[] = [
  {
    text: 'D\'OH!',
    character: 'Homer Simpson',
    emoji: '😤',
  },
  {
    text: 'Eat my shorts!',
    character: 'Bart Simpson',
    emoji: '😎',
  },
  {
    text: 'Why you little...!',
    character: 'Homer Simpson',
    emoji: '😠',
  },
  {
    text: 'Mmm... donuts.',
    character: 'Homer Simpson',
    emoji: '🍩',
  },
  {
    text: 'Ay caramba!',
    character: 'Bart Simpson',
    emoji: '😲',
  },
  {
    text: 'Stupid sexy Flanders!',
    character: 'Homer Simpson',
    emoji: '😳',
  },
  {
    text: 'Release the hounds!',
    character: 'Mr. Burns',
    emoji: '🐕',
  },
  {
    text: 'Diddly-diddly!',
    character: 'Ned Flanders',
    emoji: '🙏',
  },
  {
    text: 'I\'m so glad we\'re friends.',
    character: 'Lisa Simpson',
    emoji: '💕',
  },
  {
    text: 'Woo-hoo!',
    character: 'Homer Simpson',
    emoji: '🎉',
  },
  {
    text: 'Everything\'s coming up Milhouse!',
    character: 'Milhouse Van Houten',
    emoji: '😄',
  },
  {
    text: 'Eat my dust!',
    character: 'Bart Simpson',
    emoji: '💨',
  },
];

export default function Quotes() {
  return (
    <div className="min-h-screen bg-primary">
      <Navigation />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black text-secondary text-center mb-4">
            Iconic Quotes
          </h1>
          <p className="text-xl text-secondary text-center mb-12 max-w-2xl mx-auto">
            The most memorable lines that made us laugh
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-secondary text-primary p-8 rounded-lg border-4 border-accent shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{quote.emoji}</div>
                  <div className="flex-1">
                    <p className="text-2xl font-black italic mb-3">
                      "{quote.text}"
                    </p>
                    <p className="text-sm font-bold text-accent">
                      — {quote.character}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary text-primary p-8 rounded-lg border-4 border-accent text-center">
            <p className="text-xl font-bold mb-3">
              "I'm normally not a praying man, but if you're up there, save me Superman!"
            </p>
            <p className="text-sm font-bold text-accent">
              — Homer Simpson
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
