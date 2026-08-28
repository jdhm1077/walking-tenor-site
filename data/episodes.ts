export type Episode = {
  slug: string;
  num: string;
  title: string;
  teaser: string;
  synopsis: string;
  synopsisParagraphs?: string[];
  synopsisImages?: {
    src: string;
    alt: string;
    afterParagraph: number;
    caption?: string;
  }[];
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
    title: "Episode 0.5: The Song He Didn’t Know He Gave Me",
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
    title: "Episode 1: The Song That Almost Didn’t Exist",
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
  {
    slug: "episode-2",
    num: "02",
    title: "Episode 2: The Tenor Who Wasn’t Supposed to Sing",
    teaser: "Before Pavarotti became a legend, he nearly chose the classroom. The story of the dream—and the voice—he could no longer ignore.",
    synopsis: "Before Pavarotti became a legend, he nearly chose the classroom. The story of the dream—and the voice—he could no longer ignore.",
    synopsisParagraphs: [
      "Before Luciano Pavarotti became the white handkerchief, the stadiums, the Three Tenors, and one of the most recognizable voices in the world, he stood close to a very different life: a classroom.",
      "In this episode, tenor Jesús Daniel Hernández follows Pavarotti from his working-class beginnings in Modena—the son of a baker and a factory worker—to the difficult choice between a respectable life as a teacher and a voice that was becoming impossible to ignore.",
      "From his first professional steps in La Bohème to the moment he was called to replace one of the tenors he had once admired, this is a story about uncertainty, courage, and the dreams that become too loud to ignore.",
      "And perhaps Pavarotti never really stopped being a teacher. His classroom simply became bigger—the opera house, the concert hall, the stadium, the television screen, and eventually, the world. He opened a door to opera for millions of people and invited them inside.",
      "The greatest classroom he ever entered was the world.",
      "And the lesson was joy.",
      "Stories That Sing.",
    ],
    redcircleShowId: "43edea2e-6c4c-4d1f-a381-617303cf24c3",
    redcircleEpisodeId: "dfda82e2-98df-4010-818c-329017e6b98b",
    gradient: "from-teal-deep to-gold",
  },
  {
    slug: "episode-3",
    num: "03",
    title: "Episode 3: The Mariachi Hit That Crossed Borders",
    teaser: "Before ‘Cielito Lindo’ became a song sung across borders, stadiums, family tables, and generations, it was simply a melody with an unforgettable invitation: Canta y no llores.",
    synopsis: "Before ‘Cielito Lindo’ became a song sung across borders, stadiums, family tables, and generations, it was simply a melody with an unforgettable invitation: Canta y no llores.",
    synopsisParagraphs: [
      "Few songs can make a room join in after only four syllables.",
      "Ay, ay, ay, ay.",
      "In this episode, tenor Jesús Daniel Hernández follows the journey of ‘Cielito Lindo,’ the Mexican song most closely associated with composer Quirino Mendoza y Cortés, and explores how a simple melody became something much larger than itself.",
      "From family kitchens and mariachi tables to concert stages, weddings, barrios, and stadiums filled with thousands of voices, Cielito Lindo traveled far beyond the place where it began. It crossed generations, languages, and borders—not because everyone knew its history, but because everyone seemed to know when to join the chorus.",
      "At the heart of the song is a phrase that has become almost inseparable from Mexican identity:",
      "Canta y no llores.",
      "Sing and don’t cry.",
      "But the song does not ask us to pretend that life does not hurt. It offers something more defiant: sing because it does.",
      "This is a story about memory, immigration, family, resilience, and the strange power of a melody to travel where people sometimes cannot.",
      "Because a border can stop a car.",
      "It can stop a suitcase.",
      "It can stop a body.",
      "But it cannot stop a chorus.",
    ],
    redcircleShowId: "43edea2e-6c4c-4d1f-a381-617303cf24c3",
    redcircleEpisodeId: "72cdf4b8-8b4b-48b6-ba42-3ba34c7c1ac3",
    gradient: "from-terracotta to-teal",
  },
  {
    slug: "episode-3-5",
    num: "3.5",
    title: "Episode 3.5: The Song He Remembered",
    teaser: "A little boy discovers a beautiful song—and years later, his father discovers the memory they made while listening to it.",
    synopsis: "A little boy discovers a beautiful song—and years later, his father discovers the memory they made while listening to it.",
    synopsisParagraphs: [
      "When Danny was five or six years old, he came home from school with a song he couldn’t stop thinking about.",
      "Sitting on his father’s lap in a small room in military housing at Fort Hood, Texas, he tried to describe what he had heard: a cat singing a song that was “soooo beautiful.” The song was “Memory,” from Cats.",
      "They found it on the computer and played it again and again, while Jesús watched his little boy experience the mysterious power of music before he was old enough to explain why it moved him.",
      "Years later, Danny still remembered that afternoon.",
      "In this special birthday episode of The Walking Tenor Podcast, Jesús returns to that ordinary moment and follows the story behind “Memory”—from T. S. Eliot and Andrew Lloyd Webber to Grizabella and one of musical theatre’s most beloved songs.",
      "But this is ultimately not a story about Cats.",
      "It’s about a father and son. About the little moments we don’t realize are important while we’re living them. About the things memory forgets—and the things it somehow refuses to let go.",
      "Because that afternoon, Danny thought he was listening to a beautiful song.",
      "His father didn’t know it yet, but they were making a memory.",
      "Happy birthday, Danny.",
      "Stories That Sing.",
    ],
    synopsisImages: [
      {
        src: "/images/episode-3-5/danny-young.JPG",
        alt: "Danny as a young child",
        afterParagraph: 2,
        caption: "Danny, around the time of that afternoon at Fort Hood.",
      },
      {
        src: "/images/episode-3-5/danny-and-jesus-recent.jpeg",
        alt: "Danny and Jesús together",
        afterParagraph: 6,
        caption: "Danny and Jesús.",
      },
    ],
    gradient: "from-teal to-gold",
  },
];
