import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

export const mainNavbar = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    dropdown: [
      { label: "Web Development", link: "/services/web-development" },
      { label: "App Development", link: "/services/app-development" },
      {
        label: "Digital Marketing",
        dropdown: [
          { label: "SEO", link: "/services/digital-marketing/seo" },
          {
            label: "Content Marketing",
            link: "/services/digital-marketing/content-marketing",
          },
          {
            label: "Social Media Management",
            link: "/services/digital-marketing/social-media",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Projects",
    dropdown: [
      { label: "E-commerce", link: "/projects/e-commerce" },
      { label: "Healthcare", link: "/projects/healthcare" },
      { label: "Finance", link: "/projects/finance" },
    ],
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const footerMainNavbar = [
  {
    label: "Contact Us",
    link: "",
  },
  {
    label: "About Us",
    link: "",
  },
  {
    label: "Home Loan",
    link: "",
  },
  {
    label: "Core Values",
    link: "",
  },
];

export const footerSocialIcons = [
  {
    icon: FaFacebookSquare,
    link: "",
    color: "#3E5C9A",
  },
  {
    icon: FaLinkedin,
    link: "",
    color: "#3664C2",
  },
  {
    icon: FaSquareYoutube,
    link: "",
    color: "#C3271A",
  },
];

export const footerBottomNavbar = [
  {
    label: "Privacy Policy",
    link: "",
  },
  {
    label: "Terms & Conditions",
    link: "",
  },
];
