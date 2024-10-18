import React from "react";
import Link from "next/link";
import { EmailIcon, LinkedinIcon, LocationIcon, PhoneIcon } from "icons";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const Title = ({ children }: any) => (
    <div className="font-medium text-base md:text-lg mb-2 text-primary-light-300">
      {children}
    </div>
  );

  return (
    <footer className="px-6 pt-14 min-h-[280px] w-full bg-primary-dark-300">
      <div className="max-w-screen-xl mx-auto text-primary-light-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mx-auto">
          <div>
            <div className="font-bold text-2xl md:text-3xl mb-2">PH</div>
            {/* <p className="text-sm md:text-base text-primary-light-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              iste temporibus minus.
            </p> */}
          </div>

          <div className="text-sm md:text-base">
            <Title>Užitečné odkazy</Title>
            <div className="flex flex-col items-start">
              <Link href="/sluzby">
                <a className="mb-1 hover:underline">Služby</a>
              </Link>
              <Link href="/reference">
                <a className="mb-1 hover:underline">Reference</a>
              </Link>
              <Link href="/kontakt">
                <a className="mb-1 hover:underline">Kontakt</a>
              </Link>
            </div>
          </div>

          <div className="text-sm md:text-base">
            <Title>Kde nás najdete?</Title>
            <div className="flex flex-col items-start">
              <span className="flex items-center gap-3 mb-1">
                <LocationIcon className="flex-none md:text-xl" />
                Radějov 252, 696 67 Radějov
              </span>

              <span className="flex items-center gap-3 mb-1">
                <PhoneIcon className="flex-none md:text-xl" />
                <a className="hover:underline" href="tel:+420728225017">
                  +420 728 225 017
                </a>
              </span>

              <span className="flex items-center gap-3 mb-1">
                <EmailIcon className="flex-none md:text-xl" />
                <a
                  className="hover:underline"
                  href="mailto:phabrcetl@centrum.cz"
                >
                  phabrcetl@centrum.cz
                </a>
              </span>
            </div>
          </div>

          <div className="text-sm md:text-base">
            <Title>Sociální Sítě</Title>
            <div className="flex flex-col leading-relaxed">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/petr-habrcetl-3769ba71"
              >
                <LinkedinIcon className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex items-center flex-col mt-14 pb-12">
        <span className="text-sm mt-2 text-primary-light-300">
          © {new Date().getFullYear()} habrcetl.com
        </span>
      </div>
    </footer>
  );
};
