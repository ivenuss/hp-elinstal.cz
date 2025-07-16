import { Mail, MapPin, Phone } from "lucide-astro";
import { config } from "./config";
import { routes } from "./routes";
import type { LinkType } from "@/types";

export const constants = {
  navLinks: [
    { name: "Domů", href: routes.home.path },
    { name: "Služby", href: routes.services.path },
    { name: "Reference", href: routes.references.path },
    { name: "Kontakt", href: routes.contact.path },
  ] satisfies LinkType[],
  contactLinks: [
    {
      icon: Phone,
      name: config.phoneNumber,
      href: `tel:${config.phoneNumber.replace(" ", "")}`,
    },
    {
      icon: MapPin,
      name: `${config.city}, ${config.zipCode}`,
      href: config.googleMapsLink,
    },
    {
      icon: Mail,
      name: config.email,
      href: `mailto:${config.email}`,
    },
  ] satisfies LinkType[],
  openingHours: [
    { days: "Pondělí - Pátek", hours: "8:00 - 18:00" },
    { days: "Sobota, Neděle", hours: "Zavřeno" },
  ],
  openingHoursRanges: {
    1: [8, 16],
    2: [8, 16],
    3: [8, 16],
    4: [8, 16],
    5: [8, 16],
    6: null,
    0: null,
  } satisfies Record<number, [number, number] | null>,
};
