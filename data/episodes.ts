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
    slug: "episode-0",
    num: "00",
    title: "Episode 0: Welcome to The Walking Tenor Podcast",
    teaser: "Meet The Walking Tenor and discover the hidden human stories behind the music we love.",
    synopsis: "Meet The Walking Tenor and discover the hidden human stories behind the music we love.",
    gradient: "from-terracotta to-gold",
  },
  {
    slug: "episode-0-5",
    num: "0.5",
    title: "Episode 0.5: The Song He Didn't Know He Gave Me",
    teaser: "A personal story about a song, a friendship, and the unexpected gift that inspired The Walking Tenor.",
    synopsis: "A personal story about a song, a friendship, and the unexpected gift that inspired The Walking Tenor.",
    gradient: "from-teal to-teal-deep",
  },
  {
    slug: "the-song-that-almost-didnt-exist",
    num: "01",
    title: "Episode 1: The Song That Almost Didn't Exist",
    teaser: "Before “O Sole Mio” became a worldwide legend, the song flopped—and almost vanished.",
    synopsis: "Before “O Sole Mio” became a worldwide legend, the song flopped—and almost vanished.",
    gradient: "from-gold to-terracotta",
  },
];
