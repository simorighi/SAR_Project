import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

// 6 CARDS
const cardsData: Card[] = [
  {
    id: 1,
    title: "Ristrutturazione villetta",
    description: "Restyling completo con approccio moderno.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
  {
    id: 2,
    title: "Appartamento moderno",
    description: "Design d'interni ottimizzato e luminoso.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
  {
    id: 3,
    title: "Casa unifamiliare",
    description: "Progetto completo su misura.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
  {
    id: 4,
    title: "Open space industrial",
    description: "Ambienti aperti con stile moderno.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
  {
    id: 5,
    title: "Villa panoramica",
    description: "Architettura elegante e funzionale.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
  {
    id: 6,
    title: "Ufficio minimal",
    description: "Spazi professionali dal design pulito.",
    image: '/mnt/data/A_website_homepage_for_"SAR_Progettazioni"_is_pres.png',
  },
];

export default function CarouselCards() {
  const [index, setIndex] = useState(0);
  const length = cardsData.length;

  const visibleCards = 3;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 3200);
    return () => clearInterval(id);
  }, [length]);

  function prev() {
    setIndex((prev) => (prev - 1 + length) % length);
  }
  function next() {
    setIndex((prev) => (prev + 1) % length);
  }

  const getVisible = () => {
    let a: Card[] = [];
    for (let i = 0; i < visibleCards; i++) {
      a.push(cardsData[(index + i) % length]);
    }
    return a;
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">I nostri progetti</h2>

      <div className="relative flex items-center">
        {/* BUTTON LEFT */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 bg-white/80 hover:bg-white shadow-md px-3 py-2 rounded-full z-10"
        >
          ‹
        </button>

        {/* VISIBLE CARDS */}
        <div className="flex gap-6 mx-auto">
          {getVisible().map((c) => (
            <>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <article
                      key={c.id}
                      className="w-72 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                    >
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-44 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{c.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">
                          {c.description}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* BUTTON RIGHT */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 bg-white/80 hover:bg-white shadow-md px-3 py-2 rounded-full z-10"
        >
          ›
        </button>
      </div>
    </section>
  );
}
