import { useRouter } from "next/router";
import React from "react";
import { Button } from "ui/Button";

interface ContactStripeProps {}

export const ContactStripe: React.FC<ContactStripeProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="px-6 py-10 md:py-16 my-16 bg-[#F6FAFB]">
      <div className="flex items-center flex-col md:flex-row md:justify-between gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl md:text-3xl mb-1">Napište nám</h3>
          <div className="text-base md:text-lg text-primary-light-400">
            Máte otázku nebo potřebujete s něčím poradit? Rádi Vám na váš dotaz
            odpovíme.
          </div>
        </div>
        <Button
          className="w-full md:w-auto"
          size="medium"
          onClick={() => router.push("/kontakt")}
        >
          Kontakt
        </Button>
      </div>
    </div>
  );
};
