export type Episode = {
  slug: string;
  num: string;
  title: string;
  teaser: string;
  synopsis: string;
  synopsisParagraphs?: string[];
  redcircleShowId?: string;
  redcircleEpisodeId?: string;
  gradient: string; // Tailwind gradient classes for placeholder art
};

export const episodes: Episode[] = [
  {
    slug: "episode-0",
    num: "00",
    title: "Episode 0: Welcome to The Walking Tenor Podcast",
    teaser: "Meet The Walking Tenor and discover the hidden human stories behind the music we love.",
    synopsis: "Meet The Walking Tenor and discover the hidden human stories behind the music we love.",
    synopsisParagraphs: [
      "Welcome to The Walking Tenor Podcast—where music is the doorway, but the real story is always human.",
      "In this opening episode, tenor Jesús Daniel Hernández introduces the journey behind the show and the stories ahead: opera houses, mariachi plazas, jazz clubs, recording studios, churches, kitchens, near misses, forgotten songs, legendary voices, and deeply personal moments.",
      "Because a song is never just a song. Behind every melody are people, memories, cultures, losses, hopes, and fingerprints left by those who carried the music before us.",
      "Whether you’re a musician, a singer, or simply someone who loves a great story, welcome. Let’s listen for the life inside the music.",
      "Stories That Sing.",
    ],
    redcircleShowId: "43edea2e-6c4c-4d1f-a381-617303cf24c3",
    redcircleEpisodeId: "508e0b84-596a-409d-929f-94347779b32e",
    gradient: "from-terracotta to-gold",
  },
  {
    slug: "episode-0-5",
    num: "0.5",
    title: "Episode 0.5: The Song He Didn't Know He Gave Me",
    teaser: "A personal story about a song, a friendship, and the unexpected gift that inspired The Walking Tenor.",
    synopsis: "A personal story about a song, a friendship, and the unexpected gift that inspired The Walking Tenor.",
    redcircleShowId: "43edea2e-6c4c-4d1f-a381-617303cf24c3",
    redcircleEpisodeId: "57ca9703-5311-41a7-8807-a95ad509bb38",
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
