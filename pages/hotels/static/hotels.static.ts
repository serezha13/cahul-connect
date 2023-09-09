import { HotelCardProps } from "../components/HotelCard/HotelCard";

const hotels: HotelCardProps[] = [
  {
    id: 1,
    name: "Marco Polo",
    description:
      "Situat în Cahul, Marco Polo are un restaurant, un bar, o grădină și WiFi gratuit în întreaga proprietate.",
    stars: 4.1,
    price: 700,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/288206230.jpg?k=3f088ba158797cc69ec64abf7be82ead77cfaafec32c15c2f1764e7fc12afa72&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/288261367.jpg?k=fea868483713fc41bb28596105fbc8f44193dfc6690878e37ba5fc5e7bdaaa35&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/296914595.jpg?k=055441430a350f91eb89dda7f52e09733bea6154fd3e3886cd92bfa32393e357&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/288206223.jpg?k=3c9c5c92960e9c56926c1a9889de15a6644425348320682cd5959acb3c13a066&o=&hp=1",
    ],
    map: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460059.3540901191!2d27.70398652479593!3d45.92359560346171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cecaa5dea8d%3A0xc47b4e6b7c042293!2sMarco%20Polo!5e0!3m2!1sru!2s!4v1694289474956!5m2!1sru!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
  },
	{
    id: 2,
    name: "Oasis",
    description:
      "Situat în Cahul, Oasis are un restaurant, un bar, o grădină și WiFi gratuit în întreaga proprietate.",
    stars: 3.4,
    price: 550,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/413871628.jpg?k=5c523bef870adff4b43b077d8f797eb754aea6fe89c9cf2a647493c3df2b4691&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/413868923.jpg?k=9c35fdc60ac39b501dc808d7c8557c089b8898472e3bf450954359e86fca342b&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/413869105.jpg?k=b3e5d2c3a07526614fcbb5a9e4264ceb232c3c5d94aa731f3e2c9aefb3883dfa&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/413869653.jpg?k=bdaa6230a263f1e5e715cd81d019886b4a838d6a0a95ca238544ce344e752cdd&o=&hp=1",
    ],
    map: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460059.3540901191!2d27.70398652479593!3d45.92359560346171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cecaa5dea8d%3A0xc47b4e6b7c042293!2sMarco%20Polo!5e0!3m2!1sru!2s!4v1694289474956!5m2!1sru!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
  },
	{
    id: 3,
    name: "El Cairo",
    description:
      "Situat în Cahul, El Cairo are un restaurant, un bar, o grădină și WiFi gratuit în întreaga proprietate.",
    stars: 4.8,
    price: 850,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300340962.jpg?k=c91442d18702759ad082e15bc2e5d0ba6a726c9d7480a9b84344809906e65b42&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300346784.jpg?k=81a38c5c77f4c20bc6c26d4ca0a907acc0d6b78f12b3bcd03507e5aa4eea6ebc&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300347485.jpg?k=898d02b55cd76c409eda9f70b99f5713fc669efd4e29e414c18c9edaa6ebc350&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/300342034.jpg?k=05cd86a5db7056050f42724011ae52cb1fa8af847ac9b86333d4945c1a4ecc71&o=&hp=1",
    ],
    map: `<iframe class="mt-4 w-full aspect-square" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d460059.3540901191!2d27.70398652479593!3d45.92359560346171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65cecaa5dea8d%3A0xc47b4e6b7c042293!2sMarco%20Polo!5e0!3m2!1sru!2s!4v1694289474956!5m2!1sru!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`
  },
];

export default hotels;
