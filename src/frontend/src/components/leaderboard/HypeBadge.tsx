import { Flame } from 'lucide-react';

export function HypeBadge() {
  return (
    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-saffron/20 to-copper/20 border border-saffron/50 shadow-saffron-glow animate-pulse-subtle">
      <Flame className="w-3.5 h-3.5 text-saffron" strokeWidth={2.5} />
      <span className="text-xs font-bold uppercase tracking-wider text-saffron">
        Hype
      </span>
    </div>
  );
}
