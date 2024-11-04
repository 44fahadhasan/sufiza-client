import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

import buy from "../assets/svg/buy.svg";
import rent from "../assets/svg/rent.svg";
import sell from "../assets/svg/sell.svg";
import to_let from "../assets/svg/to_let.svg";

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

export const heroSliderImages = [
  {
    img_url:
      "https://luxestate-dcb2b.web.app/assets/luxestate-bg-4-situQXM1.jpg",
  },
  {
    img_url:
      "https://luxestate-dcb2b.web.app/assets/luxestate-bg-5-xy0u2i9_.jpg",
  },
  {
    img_url:
      "https://luxestate-dcb2b.web.app/assets/luxestate-bg-5-xy0u2i9_.jpg",
  },
  {
    img_url:
      "https://luxestate-dcb2b.web.app/assets/luxestate-bg-4-situQXM1.jpg",
  },
];

export const solutions = [
  {
    icon: buy,
    alt: "Icon 1 description",
    title: "Buy",
    content:
      "This is the content for the first item. It describes the features or details of this particular section.",
    button_label: "Learn More",
  },
  {
    icon: rent,
    alt: "Icon 2 description",
    title: "Rent",
    content:
      "This is the content for the second item. It provides information about this section or feature.",
    button_label: "Get Started",
  },
  {
    icon: sell,
    alt: "Icon 3 description",
    title: "Sell",
    content:
      "This is the content for the third item. It highlights what this feature or section offers.",
    button_label: "Explore",
  },
  {
    icon: to_let,
    alt: "Icon 4 description",
    title: "Manage",
    content:
      "This is the content for the fourth item. It explains the benefits or details of this feature.",
    button_label: "Read More",
  },
];
