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
    synopsisParagraphs: [
      "Some songs entertain us. Others find the locked door.",
      "In this deeply personal Prologue, tenor Jesús Daniel Hernández reflects on Glen Hansard’s “Her Mercy,” the loss of his son Denny, and the strange, beautiful way a song can become part of our lives without the artist ever knowing it.",
      "What begins as a memory of concerts and a favorite song becomes something deeper: a reflection on grief, faith, mercy, and the gifts artists leave behind. Because sometimes music does more than accompany our lives—it gives us a place to sit when the world becomes too heavy.",
      "This is the story of a song that was never written for him, but somehow found him anyway. A song that became a hand on the shoulder, a room for grief, and a reminder that even in loss, something can still arrive.",
      "Stories That Sing.",
    ],
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
    synopsisParagraphs: [
      "One of the most famous songs in the world almost disappeared before the world ever learned to sing it.",
      "In this episode, tenor Jesús Daniel Hernández follows the unlikely journey of ‘O Sole Mio—from Naples to distant Odessa, from a poem and melody that initially went unnoticed to the voice of Enrico Caruso, and eventually to Elvis Presley and millions of listeners around the world.",
      "But beneath the famous melody is something more human: homesickness, love, memory, and the strange way we sometimes understand the warmth of home only after leaving it behind. Because ‘O Sole Mio isn’t really about the weather. It’s about the light we attach to the people and places we love.",
      "This is the story of a song that flopped and almost vanished—but kept walking, voice by voice, room by room, heart by heart, until it became something the world could no longer forget.",
      "Stories That Sing.",
    ],
    redcircleShowId: "43edea2e-6c4c-4d1f-a381-617303cf24c3",
    redcircleEpisodeId: "d7fa9b58-a62d-4cf8-92c9-1e9f226273ce",
    gradient: "from-gold to-terracotta",
  },
];
