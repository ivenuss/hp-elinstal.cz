import React from "react";
import { PhoneIcon, EmailIcon, LocationIcon, LinkedinIcon } from "icons";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="hidden md:flex items-center h-[32px] px-6 bg-primary-dark-100">
      <div className="flex justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <PhoneIcon className="text-xl text-primary-accent" />
            <a
              className="text-sm text-primary-light-100 hover:underline"
              href="tel:+420728225017"
            >
              +420 728 225 017
            </a>
          </div>

          <div className="flex items-center gap-2">
            <EmailIcon className="text-xl text-primary-accent" />
            <a
              className="text-sm text-primary-light-100 hover:underline"
              href="mailto:+420728225017"
            >
              phabrcetl@centrum.cz
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LocationIcon className="text-xl text-primary-accent" />
            <a
              className="text-sm text-primary-light-100 hover:underline"
              href="https://maps.app.goo.gl/MU78GYUdAv1bA6w87"
              target="_blank"
            >
              Radějov, okres Hodonín
            </a>
          </div>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/petr-habrcetl-3769ba71"
          >
            <LinkedinIcon className="text-xl text-primary-light-100" />
          </a>
        </div>
      </div>
    </div>
  );
};
