export type Episode = {
  slug: string;
  num: string;
  title: string;
  teaser: string;
  synopsis: string;
  gradient: string; // Tailwind gradient classes for placeholder art
};

export const episodes: Episode[] = [
  {
    slug: "the-song-that-almost-didnt-exist",
    num: "01",
    title: "The Song That Almost Didn't Exist",
    teaser: "The incredible story behind a song you thought you knew.",
    synopsis:
      "Every classic has an origin story, and this one almost never made it out of the studio. In this episode, Jesús traces the winding, nearly-abandoned path a beloved song took before it became a standard — and what that says about the songs that do survive.",
    gradient: "from-terracotta to-gold",
  },
  {
    slug: "episode-02",
    num: "02",
    title: "Placeholder Episode Title",
    teaser: "Episode description goes here.",
    synopsis: "Full episode synopsis goes here once this episode is recorded and published.",
    gradient: "from-teal to-teal-deep",
  },
  {
    slug: "episode-03",
    num: "03",
    title: "Placeholder Episode Title",
    teaser: "Episode description goes here.",
    synopsis: "Full episode synopsis goes here once this episode is recorded and published.",
    gradient: "from-gold to-terracotta",
  },
  {
    slug: "episode-04",
    num: "04",
    title: "Placeholder Episode Title",
    teaser: "Episode description goes here.",
    synopsis: "Full episode synopsis goes here once this episode is recorded and published.",
    gradient: "from-terracotta to-teal-deep",
  },
  {
    slug: "why-boleros-make-you-cry",
    num: "05",
    title: "Why Boleros Make You Cry",
    teaser: "A deep dive into heartbreak, beauty, and the power of boleros.",
    synopsis:
      "Boleros have made grown men weep for nearly a century. Jesús explores the musical and cultural DNA of the bolero — why its slow, aching melodies hit so directly, and how the genre shaped Latin American popular music far beyond its own borders.",
    gradient: "from-gold to-teal",
  },
  {
    slug: "episode-06",
    num: "06",
    title: "Placeholder Episode Title",
    teaser: "Episode description goes here.",
    synopsis: "Full episode synopsis goes here once this episode is recorded and published.",
    gradient: "from-teal-deep to-terracotta",
  },
  {
    slug: "when-frank-sinatra-covered-a-mariachi-song",
    num: "07",
    title: "When Frank Sinatra Covered a Mariachi Song",
    teaser: "The time \u201cOl\u2019 Blue Eyes\u201d surprised the world.",
    synopsis:
      "In an unlikely crossover moment, Frank Sinatra once recorded a mariachi standard — and the story behind it reveals more about musical borders (and how often they get crossed) than you'd expect.",
    gradient: "from-terracotta to-gold",
  },
  {
    slug: "the-banned-notes-that-became-hits",
    num: "10",
    title: "The Banned Notes That Became Hits",
    teaser: "The songs almost silenced \u2014 and how they changed music forever.",
    synopsis:
      "Some of the most beloved songs in history were, at one point, banned, censored, or nearly suppressed entirely. This episode traces a handful of those songs and asks what almost-silenced music tells us about the times that tried to silence it.",
    gradient: "from-gold to-terracotta",
  },
];
