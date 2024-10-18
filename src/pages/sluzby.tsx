import Container from "../ui/Container";
import type { NextPage } from "next";
import Link from "next/link";

const Sluzby: NextPage = () => {
  const Service = ({ title, items }: { title: string; items: string[] }) => {
    return (
      <div>
        <h3 className="text-xl font-medium mb-1.5">{title}</h3>
        <ul
          role="list"
          className="list-disc pl-6 marker:text-primary-accent text-primary-light-400"
        >
          {items.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Container
      title="Služby"
      desc="Služby"
      headerImage="/static/images/header_example.png"
    >
      <div className="text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Naše služby</h2>
        <p className="text-primary-light-400">
          Nic není nemožné, v případě, že jste nenalezli to co hledáte,
          neváhejte nás{" "}
          <Link href="/kontakt">
            <a className="text-primary-accent hover:underline">kontaktovat</a>
          </Link>{" "}
          s individuálním požadavkem.
        </p>
      </div>

      <div className="mb-16">
        <div className="grid grid-cols-2 gap-10 my-12">
          <Service
            title="Elektroinstalace"
            items={[
              "kompletní elektroinstalace bytů, chat, rodinných domů, kuchyní, koupelen, školských zařízení, průmyslových a administrativních objektů",
              "rekonstrukce, úpravy a opravy elektroinstalací",
              "veškeré úpravy stávajících elektrorozvodů",
              "doplnění elektroinstalace pro rekonstruovanou kuchyň a koupelnu",
              "montáž přepětových ochran a zásuvek (ochrana drahých spotřebičů PC, TV apod.)",
            ]}
          />
          <Service
            title="Rozšíření stávajících elektrických okruhů"
            items={[
              "eliminace přetížení jističů stávajících obvodů",
              "rozvedení nových kabelových okruhů",
              "osazení nových jističů a zásuvek",
              "výměna nebo doplnění prvků stávajícího rozvaděče",
              "samostatný okruh pro pračku, myčku, sušičku a boiler atd.",
            ]}
          />
          <Service
            title="Opravy a údržba"
            items={[
              "výměna zásuvek, vypínačů, světel, spínačů, jističů a hlavního jističe",
              "oprava nefunkčních elektro rozvodů",
              "oprava pohybových čidel",
            ]}
          />
          <Service
            title="Revize"
            items={[
              "provedem revizi provedených elektroninstalací včetně revizní zprávy",
            ]}
          />
        </div>

        <div>
          <h2 className="font-bold text-lg md:text-2xl text-center mb-3">
            Ceník
          </h2>

          <div className="text-center text-primary-light-400">
            Cena služeb je vždy stanovena individuálně na základě dohody a
            rozsahu práce.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sluzby;
