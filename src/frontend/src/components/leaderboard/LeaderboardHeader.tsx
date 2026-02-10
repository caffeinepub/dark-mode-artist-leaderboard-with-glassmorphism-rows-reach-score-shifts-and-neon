export function LeaderboardHeader() {
  return (
    <div className="hidden md:grid grid-cols-[80px_1fr_140px_120px] gap-4 px-6 py-4 mb-4 text-xs font-semibold uppercase tracking-wider text-coffee-medium">
      <div>Rank</div>
      <div>Artist</div>
      <div className="text-center">Reach Score</div>
      <div className="text-center">Trend</div>
    </div>
  );
}
