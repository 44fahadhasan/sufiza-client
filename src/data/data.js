import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareYoutube } from "react-icons/fa6";

import buy from "../assets/svg/buy.svg";
import rent from "../assets/svg/rent.svg";
import sell from "../assets/svg/sell.svg";
import to_let from "../assets/svg/to_let.svg";

export const mainNavbar = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "about-us",
  },
  {
    label: "Properties",
    subItems: [
      {
        label: "Buy",
        options: [
          {
            label: "Residential",
            path: "Residential",
          },
          {
            label: "Commercial",
            path: "Commercial",
          },
        ],
      },
      {
        label: "Rent",
        options: [
          {
            label: "Residential",
            path: "Residential",
          },
          {
            label: "Commercial",
            path: "Commercial",
          },
        ],
      },
      {
        label: "Sell",
        options: [
          {
            label: "Residential",
            path: "Residential",
          },
          {
            label: "Commercial",
            path: "Commercial",
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    path: "Services",
  },
  {
    label: "Blog",
    path: "Blog",
  },
  {
    label: "Contact",
    path: "Contact",
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

export const customerFeedbacks = [
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
  {
    src: "",
  },
];

export const properties = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
];

export const countries = [
  { value: "all", label: "All" },
  { value: "bd", label: "Bangladesh" },
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export const location = [
  {
    country: "Bangladesh",
    division: [
      {
        division_name: "Dhaka",
        district: ["Gazipur", "Narayanganj", "Manikganj"],
      },
      {
        division_name: "Chattogram",
        district: ["Cox's Bazar", "Feni", "Noakhali"],
      },
      {
        division_name: "Khulna",
        district: ["Jashore", "Satkhira", "Bagerhat"],
      },
    ],
  },
  {
    country: "India",
    division: [
      {
        division_name: "Maharashtra",
        district: ["Mumbai", "Pune", "Nagpur"],
      },
      {
        division_name: "Karnataka",
        district: ["Bengaluru", "Mysuru", "Mangaluru"],
      },
      {
        division_name: "West Bengal",
        district: ["Kolkata", "Howrah", "Darjeeling"],
      },
    ],
  },
  {
    country: "Pakistan",
    division: [
      {
        division_name: "Punjab",
        district: ["Lahore", "Faisalabad", "Rawalpindi"],
      },
      {
        division_name: "Sindh",
        district: ["Karachi", "Hyderabad", "Sukkur"],
      },
      {
        division_name: "Khyber Pakhtunkhwa",
        district: ["Peshawar", "Abbottabad", "Mardan"],
      },
    ],
  },
];

export const aboutContents = [
  {
    para: "Our team of experienced professionals is dedicated to delivering exceptional service, ensuring that every step of your property journey is smooth and seamless. We understand that navigating the property market can be overwhelming, which is why we are here to guide you with expert advice, market insights, and personalized support.",
  },
  {
    para: "At Sufiza Property Solutions, our mission is to help you make informed decisions that align with your goals, whether you’re an investor, a first-time homebuyer, or someone looking to rent or lease. We are committed to transparency, integrity, and building lasting relationships with our clients, based on trust and professionalism.",
  },
  {
    para: "At Sufiza Property Solutions, our mission is to help you make informed decisions that align with your goals, whether you’re an investor, a first-time homebuyer, or someone looking to rent or lease. We are committed to transparency, integrity, and building lasting relationships with our clients, based on trust and professionalism.",
  },
  {
    para: "At Sufiza Property Solutions, our mission is to help you make informed decisions that align with your goals, whether you’re an investor, a first-time homebuyer, or someone looking to rent or lease. We are committed to transparency, integrity, and building lasting relationships with our clients, based on trust and professionalism.",
  },
  {
    para: "With an extensive portfolio of properties, market expertise, and an unwavering commitment to client satisfaction, Sufiza Property Solutions is the name you can rely on for all your real estate needs. Let us help you find the perfect property that fits your lifestyle and investment objectives.",
  },
];

export const whyChoose = [
  {
    label: "Expert Guidance",
    description:
      "In-depth market knowledge and professional insights to help you make informed property decisions.",
  },
  {
    label: "Wide Range of Properties",
    description:
      "Access to a broad portfolio of residential, commercial, and rental properties to suit various needs.",
  },
  {
    label: "Hassle-Free Process",
    description:
      "End-to-end assistance from property search to documentation, ensuring a smooth and seamless experience.",
  },
  {
    label: "Customer-Centric Approach",
    description:
      "Tailored solutions that prioritize your needs and goals, putting your satisfaction at the forefront.",
  },
];
