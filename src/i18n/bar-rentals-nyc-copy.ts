import { barRentalsCopy } from './bar-rentals-copy';
import { NYC_RENTAL_PRICES } from './pricing';
import type { Lang } from './ui';

export function nycBarRentalsCopy(lang: Lang): ReturnType<typeof barRentalsCopy> {
  const copy = barRentalsCopy(lang);

  if (lang === 'es') {
    return {
      ...copy,
      meta: {
        title: 'Renta de barras para eventos en Nueva York | WOA Cocktails',
        description: 'Rente una barra portátil para bodas, eventos corporativos y activaciones de marca en Nueva York. Consulte modelos, entrega y montaje con WOA.',
      },
      hero: {
        ...copy.hero,
        bgAlt: 'Hector detrás de una barra de madera con vista a Manhattan',
        eyebrow: 'Renta de barras para eventos',
        title1: 'Renta de barras',
        titleEm: 'en Nueva York',
        lede: 'Barras portátiles para bodas, eventos corporativos y activaciones de marca en Nueva York. Cotizamos la barra según el espacio, el horario y el montaje que necesite.',
        aside: 'Una barra compacta puede funcionar como estación de bienvenida. Para eventos con mayor volumen, consulte por barras largas o varias estaciones.',
        metaLeft: 'Nueva York',
        metaRight: 'Bodas · Eventos corporativos · Activaciones',
        ctaPrimary: 'Solicite una cotización',
      },
      get: {
        ...copy.get,
        title: 'Elija el tamaño ',
        titleIt: 'de su barra.',
        items: [
          { n: '01', h: 'Barras de 4 y 5 pies', p: 'Para espacios reducidos, recepciones pequeñas y estaciones de bienvenida.' },
          { n: '02', h: 'Barras de 7 y 8 pies', p: 'Para una barra principal con más superficie de trabajo y espacio para el servicio.' },
          { n: '03', h: 'Barras de 12 y 16 pies', p: 'Consulte disponibilidad para recepciones grandes y eventos corporativos con varias estaciones.' },
        ],
      },
      ideal: { ...copy.ideal, note: 'Podemos cotizar solo la barra o incluir bartenders de WOA en la misma propuesta.' },
      how: {
        ...copy.how,
        title: 'Planifique ',
        titleIt: 'la entrega.',
        steps: [
          { n: '01', t: 'Comparta los datos del evento', d: 'Indique la fecha, la dirección del venue, el horario y el número de invitados.' },
          { n: '02', t: 'Revise el acceso', d: 'Informe si hay escaleras, ascensor de carga o un horario de acceso para proveedores.' },
          { n: '03', t: 'Confirme la cotización', d: 'Le confirmamos los modelos disponibles y cotizamos la barra, la entrega, el montaje y la recogida según lo acordado.' },
        ],
      },
      gallery: { ...copy.gallery, title: 'Explore ', titleIt: 'las barras', shots: [
        { alt: 'Barra blanca larga con extremos curvos', cap: 'Pearl 16 ft' },
        { alt: 'Barra blanca con paneles de madera en un espacio interior', cap: 'Linea 8 ft' },
        { alt: 'Barra blanca compacta con frente curvo', cap: 'Champagne' },
        { alt: 'Barra blanca ancha con cubierta de madera', cap: 'Soho 8 ft' },
        { alt: 'Barra blanca compacta con cubierta de madera', cap: 'Soho 4 ft' },
        { alt: 'Barra blanca con paneles y extremos curvos', cap: 'Pearl 10 ft' },
        { alt: 'Barra blanca con cubierta de madera durante un evento', cap: 'Barra durante un evento' },
      ] },
      faq: {
        ...copy.faq,
        items: [
          { q: '¿Cuánto cuesta rentar una barra en Nueva York?', a: `La barra de 4 pies cuesta ${NYC_RENTAL_PRICES.fourFoot} y la de 16 pies cuesta ${NYC_RENTAL_PRICES.sixteenFoot}. Consulte precios para otros tamaños, entrega, montaje y recogida.` },
          { q: '¿Puedo rentar solo la barra?', a: 'Sí. Puede usar el personal de su venue o solicitar bartenders de WOA como servicio adicional.' },
          { q: '¿Puedo pedir más de una barra?', a: 'Sí, según disponibilidad. Indíquenos si necesita una barra principal y una estación adicional para otra parte del evento.' },
        ],
      },
      cta: { ...copy.cta, body: 'Comparta la fecha, la dirección y el horario del evento para consultar disponibilidad y recibir una cotización.', primary: 'Solicite una cotización' },
    };
  }

  return {
    ...copy,
    meta: {
      title: 'Bar Rentals in NYC for Events | WOA Cocktails',
      description: 'Rent a portable bar for a wedding, corporate event, or brand activation in New York City. Ask WOA about bar sizes, delivery, and setup.',
    },
    hero: {
      ...copy.hero,
      bgAlt: 'Hector behind a wood bar overlooking the Manhattan skyline',
      eyebrow: 'Event Bar Rentals',
      title1: 'Bar Rentals',
      titleEm: 'in New York City',
      lede: 'Portable bar rentals for weddings, corporate events, and brand activations in NYC. We’ll help you choose a bar that fits your venue, guest count, and service plan.',
      aside: 'Use a compact bar for welcome drinks or ask about a longer bar and multiple stations for a larger reception.',
      metaLeft: 'New York City',
      metaRight: 'Weddings · Corporate Events · Brand Activations',
      ctaPrimary: 'Request a Rental Quote',
    },
    get: {
  ...copy.get,
  title: 'Choose your ',
  titleIt: 'bar size.',
  items: [
    { n: '01', h: `Pearl 16 ft – ${NYC_RENTAL_PRICES.sixteenFoot}`, p: 'Our largest bar, ideal for corporate events, weddings, and brand activations.' },
    { n: '02', h: `Pearl 10 ft – ${NYC_RENTAL_PRICES.tenFoot}`, p: 'A spacious, elegant bar for receptions and corporate events.' },
    { n: '03', h: `Linea 8 ft – ${NYC_RENTAL_PRICES.eightFootLinea}`, p: 'A modern bar with a clean, minimalist design.' },
    { n: '04', h: `Champagne – ${NYC_RENTAL_PRICES.champagne}`, p: 'An elegant bar for intimate celebrations and champagne service.' },
    { n: '05', h: `Soho 8 ft – ${NYC_RENTAL_PRICES.eightFootSoho}`, p: 'A stylish bar offering generous counter space for events.' },
    { n: '06', h: `Soho 4 ft – ${NYC_RENTAL_PRICES.fourFoot}`, p: 'A compact, sophisticated bar for smaller gatherings.' },
  ],
},    ideal: { ...copy.ideal, note: 'Book the bar on its own if your venue already has a team, or add WOA bartenders to the same quote.' },
    how: {
      ...copy.how,
      title: 'Plan your ',
      titleIt: 'delivery.',
      steps: [
        { n: '01', t: 'Share your event details', d: 'Send the date, venue address, event hours, and guest count.' },
        { n: '02', t: 'Check venue access', d: 'Let us know about stairs, freight elevators, and any scheduled load-in or pickup windows.' },
        { n: '03', t: 'Confirm your quote', d: 'We’ll confirm available bars and quote delivery, setup, and pickup based on your venue and schedule.' },
      ],
    },
    gallery: { ...copy.gallery, title: 'Explore ', titleIt: 'the bars', shots: [
      { alt: 'Long white bar with rounded ends', cap: 'Pearl 16 ft' },
      { alt: 'White bar with wood slats in an indoor venue', cap: 'Linea 8 ft' },
      { alt: 'Compact curved white bar', cap: 'Champagne' },
      { alt: 'Wide white bar with a wood countertop', cap: 'Soho 8 ft' },
      { alt: 'Compact white bar with a wood countertop', cap: 'Soho 4 ft' },
      { alt: 'White paneled bar with rounded ends', cap: 'Pearl 10 ft' },
      { alt: 'White bar with a wood countertop set up at an event', cap: 'Bar setup at an event' },
    ] },
    faq: {
      ...copy.faq,
      items: [
        { q: 'How much does a bar rental cost in New York City?', a: `The 4-foot bar rents for ${NYC_RENTAL_PRICES.fourFoot} and the 16-foot bar rents for ${NYC_RENTAL_PRICES.sixteenFoot}. Ask for a quote for other sizes, delivery, setup, and pickup.` },
        { q: 'Can I rent just the bar?', a: 'Yes. You can use your venue’s staff or add WOA bartenders to your rental quote.' },
        { q: 'Can I rent more than one bar?', a: 'Yes, subject to availability. Tell us if you need a main bar and a separate station for welcome drinks or another part of the event.' },
      ],
    },
    cta: { ...copy.cta, body: 'Send your event date, venue address, and hours to check availability and get a rental quote.', primary: 'Request a Rental Quote' },
  };
}
