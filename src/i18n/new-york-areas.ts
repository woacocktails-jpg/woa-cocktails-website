import type { Lang } from './ui';

type Copy = [focus: string, planning: string];
type AreaEntry = [slug: string, name: string, event: string, rental: string, en: Copy, es: Copy];

function area([slug, name, event, rental, en, es]: AreaEntry) {
  return { slug, name, event, rental, en, es };
}

export const newYorkCoverage = [
  {
    title: { en: 'New York City', es: 'Ciudad de Nueva York' },
    areas: [
      area(['midtown', 'Midtown Manhattan', 'new-york-full-bar.webp', 'nyc-rental-long-white.jpg',
        ['Corporate receptions, conferences, and hotel events with professional bartenders, mobile bars, and custom cocktail menus.', 'Share the agenda, peak arrival time, and venue loading instructions. We can plan a welcome station and additional service points around the program.'],
        ['Recepciones corporativas, conferencias y eventos en hoteles con bartenders, barras móviles y menús personalizados.', 'Comparta la agenda, el horario de mayor llegada y las instrucciones de carga. Podemos planificar una estación de bienvenida y otros puntos de servicio.']]),
      area(['downtown', 'Downtown Manhattan', 'new-york-mocktail-service.webp', 'nyc-rental-compact-wood.jpg',
        ['Brand launches, gallery openings, and private loft receptions with signature cocktails and zero-proof options.', 'Tell us where guests enter and how much floor space is available. For brand events, share the menu and signage guidelines so we can coordinate the setup.'],
        ['Lanzamientos, inauguraciones de galerías y recepciones en lofts con cócteles de autor y opciones sin alcohol.', 'Indique por dónde entran los invitados y cuánto espacio hay. Para eventos de marca, comparta las pautas de menú y señalización.']]),
      area(['long-island-city', 'Long Island City', 'ev-wedding-duo.webp', 'nyc-rental-wide-wood.jpg',
        ['Waterfront weddings, rooftop receptions, and corporate events in Queens with staffed bars and custom drink menus.', 'For a rooftop or waterfront setup, share the elevator dimensions, rain plan, and where guests will move between the ceremony and cocktail hour.'],
        ['Bodas frente al agua, recepciones en terrazas y eventos corporativos en Queens con barras atendidas y menús personalizados.', 'Para terrazas o espacios frente al agua, comparta las medidas del ascensor, el plan por lluvia y el recorrido entre la ceremonia y el cóctel.']]),
      area(['brooklyn', 'Brooklyn', 'ev-wedding-bartender.webp', 'nyc-rental-compact-curved.jpg',
        ['Loft weddings, rehearsal dinners, and private receptions in Williamsburg, Greenpoint, and DUMBO.', 'If the same room is used for the ceremony and reception, send the floor plan and turnaround time. We can position the bar around the room change.'],
        ['Bodas en lofts, cenas de ensayo y recepciones privadas en Williamsburg, Greenpoint y DUMBO.', 'Si la ceremonia y la recepción comparten salón, envíe el plano y el tiempo disponible para el cambio de montaje.']]),
    ],
  },
  {
    title: { en: 'Long Island & the East End', es: 'Long Island y el East End' },
    areas: [
      area(['long-island', 'Long Island', 'mb-wedding-cane.jpg', 'nyc-rental-curved-white.jpg',
        ['Wedding bartending, rehearsal dinners, and mobile bars for private events across Nassau and Suffolk.', 'Share the venue address and whether you need a staffed bar, standalone rental, or service at an existing bar. We can quote delivery and breakdown with the rest of your setup.'],
        ['Bartenders para bodas, cenas de ensayo y barras móviles para eventos privados en Nassau y Suffolk.', 'Comparta la dirección y si necesita una barra con personal, solo el alquiler o servicio en una barra existente. Podemos incluir entrega y desmontaje en la cotización.']]),
      area(['hamptons', 'the Hamptons', 'ev-wedding-duo.webp', 'nyc-rental-long-white.jpg',
        ['Estate weddings, welcome parties, and wedding weekends with bar rentals and bartenders for each gathering.', 'Send the weekend itinerary and venue access windows. We can quote the welcome party and reception together and plan whether to leave the bar in place or move it between events.'],
        ['Bodas en residencias, fiestas de bienvenida y fines de semana de boda con barras y bartenders para cada evento.', 'Envíe el programa del fin de semana y los horarios de acceso. Podemos cotizar ambos eventos y coordinar si la barra se queda montada o se traslada.']]),
      area(['north-fork', 'North Fork', 'ev-wedding-bartender.webp', 'nyc-rental-wide-wood.jpg',
        ['Vineyard weddings, tented receptions, and rehearsal dinners around Riverhead, Southold, and Greenport.', 'Ask the vineyard what wine service it already provides. Share the tent floor plan and delivery route so we can quote the cocktail station and staffing around that service.'],
        ['Bodas en viñedos, recepciones bajo carpa y cenas de ensayo cerca de Riverhead, Southold y Greenport.', 'Confirme qué servicio de vino ofrece el viñedo. Comparta el plano de la carpa y la ruta de entrega para cotizar la barra de cócteles y el personal.']]),
    ],
  },
  {
    title: { en: 'Westchester & Hudson Valley', es: 'Westchester y Hudson Valley' },
    areas: [
      area(['westchester', 'Westchester', 'ev-wedding-duo.webp', 'nyc-rental-curved-white.jpg',
        ['Garden weddings, estate receptions, and country club celebrations in Westchester, including Tarrytown and the Rivertowns.', 'Share the cocktail-hour location and dinner layout. If guests move indoors after the ceremony, we can plan separate service points or a bar move with your venue.'],
        ['Bodas en jardines, recepciones en residencias y celebraciones en clubes de Westchester, incluidos Tarrytown y los Rivertowns.', 'Comparta dónde se realizará el cóctel y el plano de la cena. Si los invitados pasan al interior, podemos coordinar dos estaciones o un traslado.']]),
      area(['hudson-valley', 'Hudson Valley', 'mb-wedding-cane.jpg', 'nyc-rental-long-white.jpg',
        ['Barn, estate, and tented weddings with mobile bartending, bar rentals, and service for wedding weekends.', 'Share your venue address, load-in route, and timing for each event. We can quote travel, equipment delivery, and staffing together and plan for stairs or gravel access.'],
        ['Bodas en graneros, residencias y carpas con bartenders, renta de barras y servicio para fines de semana de boda.', 'Comparta la dirección, la ruta de carga y el horario de cada evento. Podemos cotizar traslado, entrega y personal y prever escaleras o caminos de grava.']]),
    ],
  },
  {
    title: { en: 'New Jersey', es: 'Nueva Jersey' },
    areas: [
      area(['jersey-city-hoboken', 'Jersey City & Hoboken', 'ev-wedding-duo.webp', 'nyc-rental-compact-wood.jpg',
        ['Waterfront weddings, rehearsal dinners, and receptions with skyline views, with bartenders and portable bar setups.', 'Share the venue’s outside-vendor and beverage-service requirements with your inquiry. We’ll confirm the staffing, equipment, and service options available for the event.'],
        ['Bodas frente al agua, cenas de ensayo y recepciones con vistas al skyline, con bartenders y barras portátiles.', 'Comparta los requisitos del lugar para proveedores externos y servicio de bebidas. Confirmaremos el personal, el equipo y las opciones disponibles.']]),
    ],
  },
];

export const nyAreaPath = (slug: string) => `/new-york/${slug}`;
export const newYorkAreas = newYorkCoverage.flatMap(group => group.areas);
export const nyAreaRoutes = (lang: Lang) => newYorkAreas.map((area, index) => ({
  params: { area: area.slug },
  props: { area, lang, variant: index % 3 },
}));
