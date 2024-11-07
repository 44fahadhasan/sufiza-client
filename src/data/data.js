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
    label: "About",
    path: "about",
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
    path: "services",
  },
  {
    label: "Contact",
    path: "contact",
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

export const ourServices = [
  { service: "Property Rental" },
  { service: "Property Sales" },
  { service: "Property Purchase" },
  { service: "Property Leasing" },
  { service: "Property Maintenance" },
  { service: "Lease Management" },
  { service: "Property Marketing" },
  { service: "Legal Documentation" },
  { service: "Financial Services" },
  { service: "Renovation and Repairs" },
  { service: "Property Inspections" },
];

export const servicesContents = [
  {
    para: "Sufiza Property is a real estate company specializing in property rentals. They offer a variety of residential and commercial properties for lease, catering to diverse client needs. Sufiza Property is known for its customer-focused approach, ensuring smooth transactions and high-quality maintenance services. Their portfolio includes apartments, houses, office spaces, and retail units in prime locations, providing tenants with comfortable and convenient living and working environments.",
  },
  {
    para: "Sufiza Property specializes in the sale of residential and commercial properties. The company offers a wide range of services, including property listings, market analysis, and personalized consultation to help clients buy or sell properties effectively. Sufiza Property is known for its comprehensive understanding of the real estate market, providing clients with expert guidance throughout the entire sales process to ensure successful transactions.",
  },
  {
    para: "Sufiza Property offers comprehensive services for property purchase, guiding clients through every step of the buying process. From initial consultations to finalizing transactions, Sufiza Property ensures a smooth and informed experience. Their expert team provides valuable insights on market trends, property valuations, legal considerations, and financing options, making it easier for buyers to make well-informed decisions. Whether purchasing residential or commercial real estate, Sufiza Property is dedicated to helping clients find the perfect property to meet their needs and investment goals.",
  },
  {
    para: "Sufiza Property specializes in property leasing, offering a range of services to both landlords and tenants. They manage residential, commercial, and industrial properties, providing expert guidance throughout the leasing process. Their services include property marketing, tenant screening, lease negotiations, and ongoing property management. Sufiza Property aims to ensure a smooth leasing experience, maintaining high standards of service and satisfaction for all parties involved.",
  },
  {
    para: "Sufiza Property specializes in comprehensive property maintenance services, ensuring that residential and commercial properties are well-maintained, safe, and aesthetically pleasing. Their services include routine inspections, repairs, cleaning, landscaping, and emergency response, aimed at preserving property value and enhancing the living or working environment for occupants. With a commitment to quality and customer satisfaction, Sufiza Property ensures that every aspect of property care is handled efficiently and professionally.",
  },
  {
    para: "Sufiza Property specializes in comprehensive lease management services, which include overseeing the leasing process from start to finish. This involves marketing rental properties, screening potential tenants, negotiating lease terms, drafting and enforcing lease agreements, collecting rent, and handling maintenance requests. Their goal is to ensure maximum occupancy and tenant satisfaction while maintaining the value and profitability of the properties they manage.",
  },
  {
    para: "Property marketing by Sufiza Property involves promoting real estate properties to potential buyers and investors. This includes utilizing various marketing strategies such as online listings, social media advertising, virtual tours, and open house events to showcase the features and benefits of properties. Sufiza Property aims to attract and engage clients by highlighting the unique selling points of each property, ensuring a broad reach and effective communication to drive sales and investments.",
  },
  {
    para: "Legal documentation is a critical aspect of property transactions. At Sufiza Property, we ensure that all legal documentation is handled with precision and care to facilitate smooth and secure property deals. Our comprehensive services include drafting, reviewing, and managing all necessary legal documents, such as sale agreements, lease agreements, title deeds, and power of attorney. Our team of legal experts ensures that every document complies with relevant laws and regulations, protecting our clients' interests and providing peace of mind throughout the property transaction process.",
  },
  {
    para: "Sufiza Property's Financial Services offer comprehensive solutions to assist clients in navigating the financial aspects of property transactions. These services include mortgage advisory, loan facilitation, and financial planning tailored to real estate investments. By leveraging their expertise and partnerships with financial institutions, Sufiza Property ensures clients receive competitive rates and personalized support throughout the buying or selling process, making property transactions smooth and financially sound.",
  },
  {
    para: "Sufiza Property specializes in comprehensive renovation and repair services, transforming spaces to meet the unique needs and preferences of their clients. Their team of skilled professionals handles a wide range of projects, from minor repairs to major overhauls, ensuring high-quality workmanship and attention to detail. Whether updating a kitchen, remodeling a bathroom, or restoring an entire property, Sufiza Property focuses on delivering exceptional results that enhance both the functionality and aesthetic appeal of the space.",
  },
  {
    para: "Sufiza Property offers thorough property inspection services, providing detailed assessments to ensure properties meet safety, quality, and compliance standards. Their expert team conducts comprehensive evaluations, identifying potential issues and offering actionable insights to help clients make informed decisions. Whether for purchasing, selling, or maintaining a property, Sufiza Property's inspections deliver clarity and confidence in property conditions.",
  },
];
