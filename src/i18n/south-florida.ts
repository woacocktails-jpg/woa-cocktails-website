import type { Lang } from './ui';

type Copy = { focus: string; planning: string };
type Area = {
  slug: string;
  name: string;
  photos: [string, string];
  en: Copy;
  es: Copy;
};

export const coverageLabels = {
  en: ['Miami-Dade', 'Broward', 'Palm Beach'],
  es: ['Miami-Dade', 'Broward', 'Palm Beach'],
};

type AreaEntry = [string, string, string, string, Copy, Copy];
function area([slug, name, hero, detail, en, es]: AreaEntry): Area {
  return { slug, name, photos: [hero, detail], en, es };
}

export const coverage = [
  [
    area(['miami-beach', 'Miami Beach', 'hero', 'outdoor-event',
      {focus:'Wedding receptions, corporate events, and private celebrations at hotels, terraces, and event venues.', planning:'For hotel events, confirm outside-vendor access and load-in times. For a terrace reception, share the weather backup plan and where the bar can move if needed.'},
      {focus:'Recepciones de boda, eventos corporativos y celebraciones privadas en hoteles, terrazas y salones.', planning:'Para eventos en hoteles, confirme el acceso de proveedores externos y el horario de montaje. Si la recepción es en una terraza, comparta el plan alternativo por lluvia.'}]),
    area(['coral-gables', 'Coral Gables', 'full-service', 'custom-cocktail',
      {focus:'Wedding cocktail hours, rehearsal dinners, and private receptions with a cocktail and zero-proof menu tailored to the guest list.', planning:'Share the ceremony-to-reception timeline and the space available for the bar. We can help plan a welcome drink and a second service point if guests arrive together.'},
      {focus:'Cócteles de boda, cenas de ensayo y recepciones privadas con un menú de bebidas con y sin alcohol.', planning:'Comparta el horario entre la ceremonia y la recepción y el espacio disponible. Podemos planificar una bebida de bienvenida y un segundo punto de servicio si los invitados llegan juntos.'}]),
    area(['brickell', 'Brickell', 'staffing', 'drink-service',
      {focus:'Corporate receptions, client events, and residential rooftop celebrations with bartenders or a full mobile bar.', planning:'Let us know if the property requires elevator reservations, loading dock access, or a certificate of insurance. Share the reception schedule so we can plan around speeches and guest arrivals.'},
      {focus:'Recepciones corporativas, eventos para clientes y celebraciones en terrazas residenciales con bartenders o barra móvil.', planning:'Indique si el edificio exige reservar el ascensor, coordinar el muelle de carga o presentar un certificado de seguro. Comparta el programa para coordinar discursos y llegadas.'}]),
    area(['coconut-grove', 'Coconut Grove', 'wine-service', 'mint-cocktail',
      {focus:'Garden weddings, home celebrations, and rehearsal dinners with welcome drinks and cocktail service.', planning:'For a garden setup, send a photo of the path from parking to the bar and confirm whether the station needs to sit on grass, decking, or a patio.'},
      {focus:'Bodas en jardines, celebraciones en casa y cenas de ensayo con bebidas de bienvenida y servicio de cócteles.', planning:'Para un montaje en jardín, envíe una foto del acceso desde el estacionamiento y confirme si la barra irá sobre césped, madera o un patio.'}]),
    area(['wynwood', 'Wynwood', 'flow-event', 'cocktail-menu',
      {focus:'Brand activations, gallery openings, and launch parties with a custom cocktail or zero-proof menu.', planning:'Send your brand guidelines, event schedule, and expected arrival pattern. We can plan how the menu and bar signage fit the activation and where guests will queue.'},
      {focus:'Activaciones de marca, inauguraciones de galerías y lanzamientos con un menú de cócteles con o sin alcohol.', planning:'Envíe las guías de marca, el programa y la previsión de llegadas. Podemos coordinar el menú, la señalización y el espacio para la fila.'}]),
    area(['key-biscayne', 'Key Biscayne', 'coconut-service', 'wine-service',
      {focus:'Waterfront celebrations, weddings, and private receptions with cocktails, mocktails, or beer and wine service.', planning:'For outdoor events, tell us where the bar will be sheltered and whether carts can reach it without stairs or sand. That helps us choose the right equipment and ice setup.'},
      {focus:'Celebraciones frente al agua, bodas y recepciones privadas con cócteles, bebidas sin alcohol o servicio de cerveza y vino.', planning:'Para eventos al aire libre, indique dónde estará protegida la barra y si el acceso tiene escaleras o arena. Eso nos ayuda a elegir el equipo y organizar el hielo.'}]),
    area(['doral', 'Doral', 'full-service', 'staffing',
      {focus:'Office receptions, company parties, and product launches with cocktail, mocktail, or beer and wine service.', planning:'Tell us whether service is in a conference room, lobby, or outdoor courtyard. We can plan a station that fits the footprint and account for breaks when many guests order at once.'},
      {focus:'Recepciones de oficina, fiestas de empresa y lanzamientos con cócteles, bebidas sin alcohol o cerveza y vino.', planning:'Indique si el servicio será en una sala de conferencias, vestíbulo o patio. Podemos ajustar la estación al espacio y planificar las pausas de mayor demanda.'}]),
    area(['kendall', 'Kendall', 'mojito', 'rentals',
      {focus:'Birthdays, family celebrations, and backyard parties with a portable bar or a bartender at your existing setup.', planning:'Share your guest count, whether you have an existing counter, and how staff can access the backyard. For daytime parties, consider a signature mocktail alongside the cocktail menu.'},
      {focus:'Cumpleaños, celebraciones familiares y fiestas en patios con barra portátil o bartender para una barra existente.', planning:'Comparta el número de invitados, si ya tiene un mostrador y cómo se accede al patio. Para fiestas de día, considere incluir un cóctel sin alcohol en el menú.'}]),
    area(['aventura', 'Aventura', 'rentals', 'custom-cocktail',
      {focus:'Condo receptions, private celebrations, and retail events with compact bar setups and professional staffing.', planning:'Send the building’s vendor instructions and the dimensions of the service area. For shared amenities, confirm service hours and when equipment needs to be removed.'},
      {focus:'Recepciones en condominios, celebraciones privadas y eventos en tiendas con barras compactas y personal profesional.', planning:'Envíe las instrucciones del edificio para proveedores y las medidas del espacio. En áreas comunes, confirme los horarios de servicio y retiro del equipo.'}]),
    area(["hialeah", "Hialeah", "staffing", "custom-cocktail",
      {focus:"Quinceañeras, birthdays, and family celebrations with a staffed bar and custom drinks.", planning:"Share the timeline for formal entrances, toasts, and dancing so we can plan when to open the bar and how to handle peak demand."},
      {focus:"Quinceañeras, cumpleaños y celebraciones familiares con barra atendida y bebidas personalizadas.", planning:"Comparta el horario de las entradas, los brindis y el baile para coordinar la apertura y los momentos de mayor demanda."}]),
    area(["pinecrest", "Pinecrest", "wine-service", "drink-service",
      {focus:"Private dinners, garden receptions, and family milestones with a portable cocktail bar or wine service.", planning:"For a home event, let us know whether you want drinks passed on arrival or served from a station, and where we can set up away from dinner seating."},
      {focus:"Cenas privadas, recepciones en jardines y celebraciones familiares con barra portátil o servicio de vinos.", planning:"Para un evento en casa, indique si prefiere bebidas servidas al llegar o desde una estación, y dónde podemos montar la barra sin ocupar el área de cena."}]),
    area(["south-miami", "South Miami", "rentals", "cocktail-menu",
      {focus:"Graduation parties, cocktail receptions, and private celebrations with bartender-only or full bar service.", planning:"If you already have a counter, send its dimensions and a photo. We can confirm whether it can hold the tools, ice, and glassware or if a portable bar would fit better."},
      {focus:"Graduaciones, recepciones y celebraciones privadas con bartenders o servicio completo de barra.", planning:"Si ya tiene un mostrador, comparta sus medidas y una foto. Podemos confirmar si cabe el equipo, el hielo y la cristalería o si conviene llevar una barra portátil."}]),
    area(["sunny-isles-beach", "Sunny Isles Beach", "hero", "mint-cocktail",
      {focus:"Condo celebrations, hotel receptions, and private gatherings with cocktail and mocktail service.", planning:"For a condo or hotel, check vendor check-in, service elevator access, and the time allowed for breakdown. For balcony service, confirm the indoor backup location."},
      {focus:"Celebraciones en condominios, recepciones en hoteles y reuniones privadas con cócteles y bebidas sin alcohol.", planning:"En condominios u hoteles, confirme el registro de proveedores, el ascensor de servicio y el horario de desmontaje. Para balcones, confirme un espacio interior alternativo."}]),
    area(["bal-harbour", "Bal Harbour", "wine-service", "hero",
      {focus:"Boutique events, client receptions, and private dinners with champagne, wine, or a custom cocktail menu.", planning:"Tell us whether guests arrive in waves or together. We can plan passed welcome drinks or a compact station that keeps the entrance clear."},
      {focus:"Eventos en boutiques, recepciones de clientes y cenas privadas con champán, vino o un menú de cócteles.", planning:"Indique si los invitados llegarán por grupos o al mismo tiempo. Podemos planificar bebidas de bienvenida o una estación compacta que deje libre la entrada."}]),
    area(["north-miami", "North Miami", "flow-event", "drink-service",
      {focus:"Gallery receptions, community celebrations, and private parties with a flexible cocktail or zero-proof bar.", planning:"Share your floor plan and the expected bar traffic. We can place the station so guests can order without blocking displays or circulation."},
      {focus:"Recepciones en galerías, celebraciones comunitarias y fiestas privadas con barra de cócteles o bebidas sin alcohol.", planning:"Comparta el plano y el flujo previsto de invitados. Podemos ubicar la barra para que la fila no bloquee las exhibiciones ni el paso."}]),
  ],
  [
    area(['hollywood', 'Hollywood', 'outdoor-event', 'mojito',
      {focus:'Wedding receptions, beach-area celebrations, and private parties with a staffed bar and custom drink options.', planning:'If the venue divides cocktail hour and dinner between two spaces, send both layouts. We can plan whether one bar can serve both periods or if a second station would help.'},
      {focus:'Recepciones de boda, celebraciones cerca de la playa y fiestas privadas con barra atendida y bebidas personalizadas.', planning:'Si el cóctel y la cena se realizan en espacios distintos, envíe ambos planos. Podemos valorar si una barra sirve para las dos etapas o si conviene una segunda estación.'}]),
    area(['fort-lauderdale', 'Fort Lauderdale', 'hero', 'coconut-service',
      {focus:'Hotel receptions, waterfront weddings, and corporate parties with a full mobile bar or bartender-only service.', planning:'For a waterfront venue, confirm parking, the distance to the setup, and any ramps or narrow access points. Share the service schedule so we can advise on staffing and ice.'},
      {focus:'Recepciones en hoteles, bodas frente al agua y fiestas corporativas con barra móvil o servicio de bartenders.', planning:'Si el espacio está frente al agua, confirme el estacionamiento, la distancia al montaje y si hay rampas o accesos estrechos. Comparta el horario para planificar el equipo y el hielo.'}]),
    area(["hallandale-beach", "Hallandale Beach", "staffing", "mojito",
      {focus:"Condo receptions, birthdays, and corporate mixers with portable bars and professional staffing.", planning:"If the bar is in a shared amenity room, confirm your reservation window and where staff can stage supplies and clear glassware during service."},
      {focus:"Recepciones en condominios, cumpleaños y encuentros corporativos con barras portátiles y personal profesional.", planning:"Si la barra va en un salón común, confirme el horario de reserva y dónde el personal puede guardar insumos y retirar la cristalería."}]),
    area(["dania-beach", "Dania Beach", "coconut-service", "rentals",
      {focus:"Hotel mixers, wedding welcome parties, and outdoor receptions with stationed cocktail or beer and wine service.", planning:"Share your venue access directions and whether guests will move between indoor and outdoor spaces. We can discuss a bar position that serves both parts of the event."},
      {focus:"Encuentros en hoteles, fiestas de bienvenida y recepciones al aire libre con cócteles, cerveza o vino.", planning:"Comparta las indicaciones de acceso y si los invitados pasarán entre espacios interiores y exteriores. Podemos ubicar la barra para atender ambas partes del evento."}]),
    area(["pompano-beach", "Pompano Beach", "outdoor-event", "cocktail-menu",
      {focus:"Beach-area parties, wedding receptions, and waterfront celebrations with mobile bar service.", planning:"For outdoor venues, confirm shade, the rain plan, and how far the bar is from the loading area so we can plan chilled service and setup time."},
      {focus:"Fiestas cerca de la playa, recepciones de boda y celebraciones frente al agua con servicio de barra móvil.", planning:"En espacios al aire libre, confirme la sombra, el plan por lluvia y la distancia desde la zona de carga para organizar la refrigeración y el montaje."}]),
    area(["plantation", "Plantation", "full-service", "wine-service",
      {focus:"Company celebrations, milestone birthdays, and private dinners with bartenders and beverage service.", planning:"If you are hosting a dinner, send the meal and toast schedule. We can coordinate cocktail-hour service and wine pours with your caterer."},
      {focus:"Celebraciones de empresa, cumpleaños y cenas privadas con bartenders y servicio de bebidas.", planning:"Para cenas, envíe los horarios de comida y brindis. Podemos coordinar los cócteles y el servicio de vino con su proveedor de alimentos."}]),
    area(["davie", "Davie", "rentals", "coconut",
      {focus:"Outdoor weddings, family celebrations, and private receptions with portable setups and custom drinks.", planning:"Let us know if the route to the bar includes gravel, grass, or steps, and whether there is a covered area available if the weather changes."},
      {focus:"Bodas al aire libre, celebraciones familiares y recepciones privadas con barras portátiles y bebidas personalizadas.", planning:"Indique si el acceso a la barra tiene grava, césped o escalones, y si hay un espacio cubierto en caso de lluvia."}]),
  ],
  [
    area(['boca-raton', 'Boca Raton', 'staffing', 'wine-service',
      {focus:'Weddings, private club receptions, and corporate dinners with cocktail hour, wine service, or a custom bar menu.', planning:'Ask the venue which bar services it provides and which outside vendors it permits. We can quote staffing or equipment around the services already included in your venue package.'},
      {focus:'Bodas, recepciones en clubes privados y cenas corporativas con hora de cóctel, servicio de vino o menú personalizado.', planning:'Confirme los servicios de barra que ofrece el lugar y qué proveedores externos admite. Podemos cotizar personal y equipo según lo que ya incluya el espacio.'}]),
    area(['delray-beach', 'Delray Beach', 'coconut', 'cocktail-menu',
      {focus:'Welcome parties, rehearsal dinners, and private celebrations with a signature drink or a compact cocktail bar.', planning:'For an intimate gathering, share your preferred service window and whether guests will order at the bar or receive welcome drinks as they arrive.'},
      {focus:'Fiestas de bienvenida, cenas de ensayo y celebraciones privadas con un cóctel de autor o una barra compacta.', planning:'Para una reunión íntima, comparta el horario y confirme si los invitados pedirán en la barra o recibirán bebidas de bienvenida al llegar.'}]),
    area(['west-palm-beach', 'West Palm Beach', 'full-service', 'mint-cocktail',
      {focus:'Corporate receptions, weddings, and private events with a portable bar, bartenders, and custom menus.', planning:'Include the venue address and setup window in your inquiry so we can confirm travel, delivery, staffing, and any applicable fees in one quote.'},
      {focus:'Recepciones corporativas, bodas y eventos privados con barra portátil, bartenders y menús personalizados.', planning:'Incluya la dirección y el horario de montaje para confirmar traslado, entrega, personal y cargos aplicables en una sola cotización.'}]),
    area(['palm-beach', 'Palm Beach', 'rentals', 'drink-service',
      {focus:'Private dinners, wedding weekends, and estate receptions with bar service tailored to the setting.', planning:'Share which rooms or outdoor areas will be used and any restrictions on equipment access. We can plan the bar footprint and service flow around the event layout.'},
      {focus:'Cenas privadas, fines de semana de boda y recepciones en residencias con servicio de barra adaptado al espacio.', planning:'Comparta qué espacios interiores o exteriores se usarán y las restricciones de acceso para el equipo. Podemos adaptar el tamaño de la barra y el servicio al plano del evento.'}]),
    area(["boynton-beach", "Boynton Beach", "mojito", "staffing",
      {focus:"Backyard parties, birthdays, and family receptions with cocktails, mocktails, and portable bar options.", planning:"Share whether service will be poolside or indoors. We can discuss suitable drinkware and where to stage ice and supplies for the event."},
      {focus:"Fiestas en patios, cumpleaños y recepciones familiares con cócteles, bebidas sin alcohol y barras portátiles.", planning:"Indique si el servicio será junto a la piscina o bajo techo. Podemos coordinar los vasos adecuados y el espacio para el hielo y los insumos."}]),
    area(["lake-worth-beach", "Lake Worth Beach", "flow-event", "mint-cocktail",
      {focus:"Creative events, wedding welcome parties, and private gatherings with a signature cocktail or zero-proof menu.", planning:"If the event includes a performance or programmed activity, tell us when the bar should pause or resume so service fits around it."},
      {focus:"Eventos creativos, fiestas de bienvenida de boda y reuniones privadas con cócteles de autor o un menú sin alcohol.", planning:"Si hay una presentación o actividad programada, indique cuándo conviene pausar o reanudar el servicio de barra."}]),
    area(["wellington", "Wellington", "full-service", "outdoor-event",
      {focus:"Private estate gatherings, client receptions, and outdoor celebrations with a staffed mobile bar.", planning:"For a larger property, share the unloading point and the distance to the event space, plus any cutoff time for vendor vehicles."},
      {focus:"Reuniones en residencias privadas, recepciones de clientes y celebraciones al aire libre con barra móvil atendida.", planning:"Para propiedades amplias, comparta el punto de descarga, la distancia al evento y cualquier límite de horario para vehículos de proveedores."}]),
    area(["palm-beach-gardens", "Palm Beach Gardens", "custom-cocktail", "drink-service",
      {focus:"Corporate dinners, club receptions, and private celebrations with a custom bar or bartender-only service.", planning:"Ask your venue which equipment, ice, and glassware it supplies. We can build the quote around the items and staffing you still need."},
      {focus:"Cenas corporativas, recepciones en clubes y celebraciones privadas con barra personalizada o bartenders.", planning:"Pregunte al lugar qué equipo, hielo y cristalería incluye. Podemos cotizar los artículos y el personal que aún necesite."}]),
  ],
];

export const southFloridaAreas = coverage.flat();
export const areaPath = (slug: string) => `/miami/${slug}`;
export const areaRoutes = (lang: Lang) => southFloridaAreas.map((area, index) => ({
  params: { area: area.slug },
  props: { area, lang, variant: index % 3 },
}));
