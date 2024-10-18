import React from "react";
import SEO from "config/next-seo.config";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Footer } from "./Footer";
import { useRouter } from "next/router";
import { NavBar } from "./nav/NavBar";
import { Nav } from "./nav/Nav";
import type { NextSeoProps } from "next-seo";

interface ContainerProps {
  title?: string;
  desc?: string;
  meta?: NextSeoProps;
  resize?: boolean;
  headerImage?: string;
}

const Container: React.FC<ContainerProps> = ({
  title,
  desc,
  meta,
  resize = false,
  headerImage,
  children,
}) => {
  const router = useRouter();
  const DOMAIN = process.env.SITE_URL;

  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        {...SEO}
        title={title}
        description={desc}
        canonical={`${DOMAIN}${router.asPath}`}
        openGraph={{
          type: "website",
          url: `${DOMAIN}${router.asPath}`,
          site_name: "Petr Habrcetl",
          locale: "cs_CZ",
          description: desc,
          images: [
            {
              url: "/static/images/banner.png",
              width: 1200,
              height: 630,
              alt: "Og Image Alt",
              type: "image/png",
            },
          ],
        }}
        {...meta}
      />

      <NavBar />
      <Nav />

      {headerImage && (
        <header className="relative h-[200px]">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-bold text-2xl tracking-wide	text-primary-light-100 z-10 pl-4 before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-[4px] before:bg-primary-accent">
            {title}
          </h1>
          <Image
            layout="fill"
            priority={true}
            draggable={false}
            objectFit="cover"
            src={headerImage}
          />
        </header>
      )}

      <div className={resize ? "mb-auto" : "px-6 mb-auto"}>
        <main className={`w-full${resize ? "" : " mx-auto max-w-screen-xl"}`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Container;
