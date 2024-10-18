import Container from "../ui/Container";
import ContactForm from "modules/kontakt/ContactForm";
import { EmailIcon, PhoneIcon } from "icons";
import type { NextPage } from "next";
import { PhoneQRCode } from "modules/kontakt/PhoneQRCode";

const Kontakt: NextPage = () => {
  const API_KEY = "AIzaSyC4-4rv-64bsBnYAoKqGWuc7mmvmYDDxSA";

  return (
    <Container
      title="Kontakt"
      desc="Kontakt"
      resize
      headerImage="/static/images/header_example.png"
    >
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8 max-w-screen-xl mx-auto">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-3 text-[#1a2940]">
              Kontaktní informace
            </h2>

            {/* <p className="text-primary-light-400 mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              est magni eos placeat blanditiis reiciendis recusandae cum
              voluptatibus quasi mollitia.
            </p> */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <strong className="font-medium text-lg">Petr Habrcetl</strong>
                <div>Radějov 252</div>
                <div>696 67 Radějov</div>
                <div>IČO: 08652210</div>
              </div>
              <div>
                <div className="flex gap-3 items-center mb-1">
                  <PhoneIcon className="text-2xl text-primary-accent" />
                  <a className="hover:underline" href="tel:+420728225017">
                    +420 728 225 017
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <EmailIcon className="text-2xl text-primary-accent" />
                  <a
                    className="hover:underline"
                    href="mailto:phabrcetl@centrum.cz"
                  >
                    phabrcetl@centrum.cz
                  </a>
                </div>
                <PhoneQRCode className="mt-3" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-3 text-[#1a2940]">
              Kontaktní formulář
            </h2>

            {/* <p className="text-primary-light-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde
              dolorum temporibus excepturi quos voluptatibus neque modi odit
              laborum ad?
            </p> */}

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <iframe
        className="w-full h-[400px] mt-14 border-0"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Radějov+252,+696+67+Radějov&zoom=17&maptype=roadmap`}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default Kontakt;
