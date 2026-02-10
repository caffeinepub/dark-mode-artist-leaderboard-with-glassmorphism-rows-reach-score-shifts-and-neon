import { LeaderboardHeader } from './LeaderboardHeader';
import { ArtistRow } from './ArtistRow';
import type { Artist } from '@/types/leaderboard';

interface LeaderboardProps {
  artists: Artist[];
}

export function Leaderboard({ artists }: LeaderboardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <LeaderboardHeader />
      <div className="space-y-3 md:space-y-4">
        {artists.map((artist) => (
          <ArtistRow key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}
