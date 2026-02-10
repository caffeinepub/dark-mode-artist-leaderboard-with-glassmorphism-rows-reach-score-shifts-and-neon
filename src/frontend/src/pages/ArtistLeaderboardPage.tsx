import { Leaderboard } from '@/components/leaderboard/Leaderboard';
import { artistLeaderboardData } from '@/data/artistLeaderboardSample';

export function ArtistLeaderboardPage() {
  return (
    <div className="min-h-screen mandala-bg">
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 text-coffee-dark">
            Artist Leaderboard
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Top artists ranked by reach score and trending momentum
          </p>
        </header>

        <main>
          <Leaderboard artists={artistLeaderboardData} />
        </main>

        <footer className="mt-16 pt-8 border-t border-coffee-medium/30 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} • Built with{' '}
            <span className="text-saffron">♥</span> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'artist-leaderboard'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:text-saffron transition-colors duration-300"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
