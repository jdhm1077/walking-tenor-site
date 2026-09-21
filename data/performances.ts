export type Performance = {
  id: string;
  date: string;            // "YYYY-MM-DD"
  time?: string;           // "7:00 PM" or "6:00–8:30 PM" for ranges
  title: string;
  subtitle?: string;
  series?: string;
  venue?: string;
  address?: string;
  city: string;
  presenter?: string;
  description: string;
  featuredArtists?: string[];
  pianist?: string;
  specialGuest?: string;
  program?: string[];
  link?: string;
  linkText?: string;
};

export const performances: Performance[] = [
  {
    id: "evening-heart-theatre-sept-2026",
    date: "2026-09-26",
    time: "7:00 PM",
    title: "An Evening with Heart Theatre",
    venue: "North Valley Music School / Stack Recital Hall",
    address: "1998 River Lakes Parkway, Whitefish, Montana 59937",
    city: "Whitefish, MT",
    presenter: "Heart Theatre / Teatro del Corazón, North Valley Music School",
    description:
      "An intimate evening of music and storytelling with Jesús Daniel Hernández, The Walking Tenor. The program brings together opera, Italian song, Mexican and Latin American classics, beloved English-language selections, and personal storytelling.",
    pianist: "Mitchell Zeidwig",
    specialGuest: "Mike Eldred",
    link: "https://www.northvalleymusicschool.org/9-26-an-evening-with-heart-theatre-featuring-jesus-daniel-hernandez",
    linkText: "Event Details",
  },
  {
    id: "im-still-here-dc-oct-2026",
    date: "2026-10-10",
    title: "I’m Still Here.",
    city: "Washington, DC",
    presenter: "Casa Iris",
    description:
      "Performance appearance by Jesús Daniel Hernández, The Walking Tenor.",
  },
  {
    id: "passion-opera-oct17-2026",
    date: "2026-10-17",
    time: "7:30 PM",
    title: "Passion! A Night of Opera & Song",
    venue: "John Gilbert Reese Center",
    city: "Newark, OH",
    presenter: "Newark-Granville Symphony Orchestra",
    description:
      "The Newark-Granville Symphony Orchestra opens its 2026–27 season with an evening celebrating opera and song, featuring Jesús Daniel Hernández, Cynthia López Olaya, and the full orchestra.",
    featuredArtists: ["Jesús Daniel Hernández", "Cynthia López Olaya"],
    link: "https://www.ngsymphony.org/tickets",
    linkText: "Event Details / Tickets",
  },
  {
    id: "passion-opera-oct18-2026",
    date: "2026-10-18",
    time: "4:00 PM",
    title: "Passion! A Night of Opera & Song",
    venue: "John Gilbert Reese Center",
    city: "Newark, OH",
    presenter: "Newark-Granville Symphony Orchestra",
    description:
      "Second performance of the Newark-Granville Symphony Orchestra’s 2026–27 season-opening opera and song program.",
    featuredArtists: ["Jesús Daniel Hernández", "Cynthia López Olaya"],
    link: "https://www.ngsymphony.org/tickets",
    linkText: "Event Details / Tickets",
  },
  {
    id: "love-to-the-world-miami-oct-2026",
    date: "2026-10-24",
    time: "6:00–8:30 PM",
    title: "Love to the World",
    subtitle: "Opening Season Concert",
    venue: "All Souls Episcopal Church",
    address: "4025 Pine Tree Drive, Miami Beach, Florida 33140",
    city: "Miami Beach, FL",
    presenter: "Artistic Voices",
    description:
      "An opening-season celebration through music featuring opera, zarzuela, Italian song, Latin repertoire, Broadway, and ensemble selections.",
    featuredArtists: [
      "Jesús Daniel Hernández",
      "María Aleida Rodríguez",
      "Isaac Rodríguez",
      "Matías Cuevas",
    ],
    program: [
      "Ideale",
      "Amor ti vieta",
      "Non t’amo più",
      "E lucevan le stelle",
      "No puede ser",
      "El Reloj",
      "Granada",
      "Plus ensemble performances",
    ],
    link: "https://www.eventbrite.com/e/love-to-the-world-opening-season-concert-tickets-2001079871764",
    linkText: "Get Tickets",
  },
  {
    id: "teatro-corazon-bombyx-nov-2026",
    date: "2026-11-12",
    time: "7:00 PM",
    title: "Teatro del Corazón: Maria & Mario",
    venue: "BOMBYX Center for Arts & Equity",
    city: "Northampton / Florence, MA",
    presenter: "Teatro del Corazón / Heart Theatre, BOMBYX Center for Arts & Equity",
    description:
      "A theatrical and musical presentation by Teatro del Corazón featuring Jesús Daniel Hernández.",
    link: "https://bombyx.ludus.com/index.php",
    linkText: "Event Details",
  },
  {
    id: "songs-that-raised-me-rochester-nov-2026",
    date: "2026-11-15",
    time: "3:00 PM",
    title: "The Songs That Raised Me",
    subtitle: "From Juárez to the Army to the Opera Stage",
    series: "Arts Connexions",
    venue: "St. Paul’s Episcopal Church",
    address: "25 Westminster Road, Rochester, New York 14607",
    city: "Rochester, NY",
    presenter: "Rochester Oratorio Society",
    description:
      "A one-hour storytelling concert tracing Jesús Daniel Hernández’s journey from childhood in Juárez through family memory, heritage, military service, and ultimately to the opera stage. The program blends Mexican song, Latin repertoire, American classics, Italian art song, zarzuela, spoken storytelling, guitar, and piano.",
    program: [
      "Adiós Mariquita Linda",
      "La barca de oro",
      "Dios nunca muere",
      "Te quiero dijiste",
      "El reloj",
      "Danny Boy",
      "You’ll Never Walk Alone",
      "Malia",
      "No puede ser",
      "My Way",
      "Cielito Lindo",
    ],
  },
];

export function isUpcoming(dateStr: string): boolean {
  const [y, m, d] = dateStr.split("-").map(Number);
  const event = new Date(y, m - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return event >= today;
}

export function formatDateParts(dateStr: string): {
  month: string;
  day: string;
  year: string;
  full: string;
} {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: String(d),
    year: String(y),
    full: date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}
