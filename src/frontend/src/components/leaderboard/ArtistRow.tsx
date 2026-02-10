import { RankShiftIndicator } from './RankShiftIndicator';
import { HypeBadge } from './HypeBadge';
import type { Artist } from '@/types/leaderboard';

interface ArtistRowProps {
  artist: Artist;
}

export function ArtistRow({ artist }: ArtistRowProps) {
  const shift = artist.reachScore - artist.previousReachScore;
  const isTop10 = artist.rank <= 10;

  return (
    <div className="group relative glassmorphism-card rounded-sm p-4 md:p-6 transition-all duration-300 hover:scale-[1.01] hover:shadow-coffee">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-3">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-gradient-to-br from-coffee-medium/20 to-copper/20 flex items-center justify-center border border-coffee-medium/30">
            <span className="text-2xl font-bold text-copper">#{artist.rank}</span>
          </div>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                {isTop10 && (
                  <img 
                    src="/assets/generated/us-flag-icon.dim_64x48.png" 
                    alt="USA" 
                    className="w-5 h-4 object-contain flex-shrink-0"
                  />
                )}
                <h3 className="font-semibold text-foreground truncate">{artist.name}</h3>
                {artist.isTopTrending && <HypeBadge />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pl-16">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Reach Score</div>
            <div className="text-lg font-bold text-copper">{artist.reachScore.toLocaleString()}</div>
          </div>
          <RankShiftIndicator shift={shift} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-[80px_1fr_140px_120px] gap-4 items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-gradient-to-br from-coffee-medium/20 to-copper/20 flex items-center justify-center border border-coffee-medium/30">
          <span className="text-3xl font-bold text-copper">#{artist.rank}</span>
        </div>

        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {isTop10 && (
                <img 
                  src="/assets/generated/us-flag-icon.dim_64x48.png" 
                  alt="USA" 
                  className="w-6 h-[18px] object-contain flex-shrink-0"
                />
              )}
              <h3 className="font-semibold text-lg text-foreground truncate">{artist.name}</h3>
              {artist.isTopTrending && <HypeBadge />}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-copper">{artist.reachScore.toLocaleString()}</div>
        </div>

        <div className="flex justify-center">
          <RankShiftIndicator shift={shift} />
        </div>
      </div>
    </div>
  );
}
