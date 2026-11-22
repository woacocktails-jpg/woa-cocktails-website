export type ReviewMarket = 'nyc' | 'miami';

interface GoogleReview {
  name: string;
  rating: number;
  paragraphs: string[];
}

// Transcribed from the Google Maps screenshots supplied by WOA.
const euxhenia: GoogleReview = {
  name: 'Euxhenia Hodo',
  rating: 5,
  paragraphs: [
    'WOA is truly the best! The team is reliable, professional, creative and goes above and beyond & beyond to create an experience for the guests, not just the drinks. The bartenders always show up with the best energy, which ultimately determines the vibes of the event.',
    '10/10 recommend',
  ],
};

const jd: GoogleReview = {
  name: 'JD Scalzo',
  rating: 5,
  paragraphs: [
    "I have been with my company for over a year and we use WOA Cocktails for every event. They are top notch in quality, customer service, and care. They are always on time - if not early - professional, easy to work with and lots of fun too! They have bartended for a variety of events from corporate networking, happy hours, parties, and product launches etc etc. They are some of the best. You won't be sorry! JD @ Skyline.",
  ],
};

const zuleika: GoogleReview = {
  name: 'Zuleika Viera',
  rating: 5,
  paragraphs: [
    'WOA Cocktails has been part of so many special moments for me, from my private parties to company events and even my makeup classes. They’re the only company I use for bar service because I trust them completely, and as a business owner, that peace of mind means everything.',
    'They are reliable, responsible, and so thoughtful about what they do. Their cocktails are amazing, but the service is what truly makes them stand out. They bring such care and professionalism to every event, and I always feel confident knowing my guests are in great hands.',
    'It means so much to have a team you can count on again and again. I’m truly grateful for everything they’ve done for my events, and I cannot recommend them enough! 🤍',
  ],
};

const adam: GoogleReview = {
  name: 'Adam Kriklewicz',
  rating: 5,
  paragraphs: [
    'Delicious cocktails, smooth service, and instant good energy. WOA turned our office into the best bar in Wynwood. Highly recommend!',
  ],
};

const charlene: GoogleReview = {
  name: 'Charlene Reiff',
  rating: 5,
  paragraphs: [
    'What a Fabulous experience I recently had with WOA Cocktails! Fabio was The Best, the biggest hit at my 75th b’day party at my home in Boca Raton, for me & 20 of my girlfriends! This is a yearly Saturday afternoon cocktail party for us women, with cocktails, light bites & an afternoon of fun gambling games!!😝 Fabio came to meet me a week earlier from Miami so we could get everything set. At the party, he set up a Custom Bar area, made us a Specialty B’day Cocktail, helped me with the games, serving my quests & even clean up! A real pleasure!! I hope this event will be WOA COCKTAIL’s opening into Palm Beach county. They are a Pleasure to do business with!',
    'XOXO,Charlene Reiff 🥂🥳',
  ],
};

export const googleReviews = {
  nyc: {
    name: { en: 'New York City', es: 'Nueva York' },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Woa%20Cocktails%20NYC',
    featured: [euxhenia, jd],
    reviews: [euxhenia, jd, zuleika],
  },
  miami: {
    name: { en: 'Miami', es: 'Miami' },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Woa%20Cocktails%20Miami',
    featured: [adam, charlene],
    reviews: [adam, charlene],
  },
};
