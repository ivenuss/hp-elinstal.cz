import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type LinkType = {
  name: string;
  href: string;
  icon?: AstroComponentFactory;
};

export type MetaProps = {
  title: string;
  description: string;
  image?: string;
};
