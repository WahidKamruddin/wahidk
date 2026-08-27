import { SOCIAL_ICONS } from "../components/tech-icon";

/** Where the contact form delivers, and the reply-to shown to visitors. */
export const CONTACT_EMAIL = "wahidkamruddin101@gmail.com";

export type ContactCard = {
  platform: string;
  handle: string;
  href: string;
  icon: (typeof SOCIAL_ICONS)[keyof typeof SOCIAL_ICONS];
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    platform: "Email",
    handle: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: SOCIAL_ICONS.email,
  },
  {
    platform: "LinkedIn",
    handle: "wahid-kamruddin",
    href: "https://www.linkedin.com/in/wahid-kamruddin/",
    icon: SOCIAL_ICONS.linkedin,
  },
  {
    platform: "Instagram",
    handle: "@wahidkamruddin",
    href: "https://www.instagram.com/wahidkamruddin/",
    icon: SOCIAL_ICONS.instagram,
  },
  {
    platform: "GitHub",
    handle: "WahidKamruddin",
    href: "https://github.com/WahidKamruddin",
    icon: SOCIAL_ICONS.github,
  },
];
