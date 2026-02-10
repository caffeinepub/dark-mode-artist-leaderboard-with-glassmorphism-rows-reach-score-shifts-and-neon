# Specification

## Summary
**Goal:** Add a non-photo American flag icon indicator for the top 10 artists on the Artist Leaderboard.

**Planned changes:**
- Add a generated, flat American flag icon as a static frontend asset under `frontend/public/assets/generated` and reference it via a stable local path.
- Update the Artist Leaderboard row UI (mobile and desktop layouts) to render the flag inline with the artist name area only when rank is 1–10.
- Ensure existing row content and behaviors remain unchanged (rank badge, avatar, artist name, Reach Score, RankShiftIndicator, and HypeBadge).

**User-visible outcome:** On the Artist Leaderboard, artists ranked 1–10 show a small American flag icon next to (or immediately before) their name on both mobile and desktop; lower ranks do not show the icon.
