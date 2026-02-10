import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface RankShiftIndicatorProps {
  shift: number;
}

export function RankShiftIndicator({ shift }: RankShiftIndicatorProps) {
  if (shift > 0) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
        <TrendingUp className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
        <span className="text-sm font-bold text-emerald-400">+{shift}</span>
      </div>
    );
  }

  if (shift < 0) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/30">
        <TrendingDown className="w-5 h-5 text-red-400" strokeWidth={2.5} />
        <span className="text-sm font-bold text-red-400">{shift}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-muted/50">
      <Minus className="w-5 h-5 text-muted-foreground" strokeWidth={2.5} />
      <span className="text-sm font-bold text-muted-foreground">0</span>
    </div>
  );
}
