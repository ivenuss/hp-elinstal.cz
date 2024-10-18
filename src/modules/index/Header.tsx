import React from "react";
import Image from "next/image";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="relative h-[250px] md:h-[400px]">
        <Image
          layout="fill"
          objectFit="cover"
          priority={true}
          src="/static/images/header.jpg"
        />

        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-80" />

        <div className="h-full px-6">
          <div className="relative h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl mx-auto -mt-6 md:-mt-12">
              <h5 className="text-lg md:text-xl text-primary-light-200 mb-2 md:mb-3">
                Petr Habrcetl
              </h5>
              <h1 className="relative pl-6 font-bold text-xl sm:text-3xl md:text-5xl text-primary-light-100 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[5px] before:bg-primary-accent">
                Elektrikářské práce
                <br />v Hodoníně a okolí
              </h1>
            </div>
          </div>
        </div>

        <svg
          className="w-full absolute bottom-0 text-primary-light-100"
          viewBox="0 0 1920 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M1109.61 93.4345C1066.2 95.9597 1010.69 93.0305 964.59 88.0811C919.259 83.1317 828.405 64.3441 771.549 52.0211C625.952 19.4964 514.737 7.07235 401.601 1.81992C356.27 -0.301252 308.058 -1.71537 202.99 4.34515C97.9215 10.4057 -0.999998 30.2033 -0.999998 30.2033L-0.999992 100L1920 100L1920 69.3944C1920 69.3944 1781.7 36.4657 1615.74 38.5869C1540.45 39.294 1437.49 45.3545 1358.36 61.2128C1317.63 69.3945 1258.09 79.5964 1205.27 85.6569C1153.02 92.0204 1129.4 92.4244 1109.61 93.4345Z"
          />
        </svg>
      </header>
    </>
  );
};
