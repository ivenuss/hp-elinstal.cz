import Container from "../ui/Container";
import { Header } from "modules/index/Header";
import { ContactStripe } from "modules/index/ContactStripe";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import type { Photo, ReferencePhotos } from "lib/types";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function fetchAPI() {
      /* const photosRes: ReferencePhotos = await fetch(
        `${process.env.SITE_URL}/api/google/photos`
      ).then((res) => res.json()); */
      // setPhotos(photosRes.photos);
    }

    fetchAPI();
  }, []);

  const TestImg = () => {
    return (
      <div className="relative w-full h-80">
        <Image
          layout="fill"
          objectFit="cover"
          src="/static/images/header.jpg"
        />
      </div>
    );
  };

  return (
    <Container title="Domov" desc="Home" resize>
      <Header />

      <div className="px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="-mt-10 md:-mt-12 drop-shadow-md text-center text-4xl md:text-5xl p-4 animate-[move-down-bounce_2s_infinite]">
            👇
          </div>

          <section className="my-16">
            <h2 className="font-bold text-xl md:text-3xl text-center mb-5">
              Naše služby
            </h2>

            <div className="text-center text-primary-light-400 mt-6 mb-6">
              Provádíme elektroinstalační práce v <strong>Hodoníně</strong>,{" "}
              <strong>Kyjově</strong>, <strong>Strážnici</strong>,{" "}
              <strong>Veselí nad Moravou</strong> a okolí.
            </div>

            <div className="flex flex-col my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Elektrikářské práce
                  </h3>
                  <div className="text-primary-light-400">
                    Dílčí elektrikářské práce od osazení zásuvky až po doplnění
                    rozvaděče.
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Opravy a údržba</h3>
                  <div className="text-primary-light-400">
                    Výměna zásuvek, vypínačů, světel, spínačů, jističů a
                    hlavního jističe.
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Kompletní elektroinstalace
                  </h3>
                  <div className="text-primary-light-400">
                    Elektroinstalace pro byty, rodinné domy, kuchyně, koupelny a
                    větší objekty.
                  </div>
                </div>
              </div>

              <Link href="/sluzby">
                <a className="flex text-lg mt-8 text-primary-accent hover:underline mx-auto">
                  Kompletní nabídka služeb
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <ContactStripe />
      {/* <div className="grid grid-cols-3 mb-12">
        <TestImg />
        <TestImg />
        <TestImg />
        <TestImg />
        <TestImg />
        <TestImg />
      </div> */}
    </Container>
  );
};

export default Home;
