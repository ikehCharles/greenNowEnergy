import { loremIpsum } from "react-lorem-ipsum";

const appTitle = "GreenNowEnergy";
const appDescription = loremIpsum().toString().substr(0, 100);
const appMenuList = [
  { title: "About", link: "about" },
  { title: "Products", link: "products" },
  { title: "Projects", link: "projects" },
  { title: "Contact Us", link: "contact" },
];
const appCTA = {
  main: {
    text: "The Future in",
    highlighted: "Renewable Energy",
  },
  sub: "We supply homes and businesses with renewable energy solutions that deliver tropical savings and reduces the green house effect",
  buttons: [
    { title: "Products", link: "products" },
    { title: "Contact Us", link: "contact" },
  ],
};
const appSocials = [
  { title: "Facebook", link: "", faIcons: "fab fa-facebook-f" },
  { title: "Instagram", link: "", faIcons: "fab fa-instagram" },
  { title: "WhatsApp", link: "", faIcons: "fab fa-whatsapp" },
];

const about = {
  title: "About Us",
  header: "Who we are",
  intro: loremIpsum(),
  goToButtonText: "Learn More",
  mission: {
    header: "Our Mission",
    body1: loremIpsum().toString().substr(0, 200),
    body2: loremIpsum().toString().substr(0, 200),
  },

  standards: {
    header: `Why ${appTitle}`,
    intro: loremIpsum().toString().substr(0, 200),
    body: [
      {
        title: "Renewable",
        icon: "fas fa-recycle",
        body: loremIpsum().toString().substr(0, 50),
      },
      {
        title: "Cost Effective",
        icon: "fas fa-wallet",
        body: loremIpsum().toString().substr(0, 50),
      },
      {
        title: "Green",
        icon: "fas fa-solar-panel",
        body: loremIpsum().toString().substr(0, 50),
      },
      {
        title: "Our Benefits",
        icon: "fab fa-accusoft",
        body: loremIpsum().toString().substr(0, 50),
      },
    ],
  },
};

const services = {
  title: "Our Service",
  link: "/services",
  intro: loremIpsum(),
  body: [
    {
      title: "Installation",
      icon: "fas fa-tools",
      img: require("./assets/solar.jpg").default,
      summary:
        "We specialize in installing solar panels and power grid for household and commerial use",

      body: "",
      buttonText: "Learn More",
    },
    {
      title: "Sales",
      icon: "far fa-credit-card",
      img: require("./assets/solar2.jpg").default,
      summary:
        "Prices starts at ₦56,200.40, our solar panel comes with an installation guide and free vouchers",
      body: "",
      buttonText: "Learn More",
    },
    {
      title: "Consultancy",
      icon: "fas fa-users-cog",
      img: require("./assets/solar3.jpg").default,
      summary:
        "Our staffs are available 18 hours every day offering premium services and installation guide",
      body: "",
      buttonText: "Learn More",
    },
  ],
};

const product = {
  title: "Our Products",
  homeTitle: "Top Deals",
  productHome: [
    {
      name: "Afri Power 2.5kva",
      description:
        "Capacity of 2500VA, Multiple Built-in protection with a DC voltage of 24V (2 batteries), pure sine wave output and LCD display",
      link: "/product/1",
      price: "₦80,000",
      img: require("./assets/product1.jpeg").default,
    },
    {
      name: "Afri Power 1kva",
      description:
        "Capacity of 1000VA, Multiple Built-in protection with a DC voltage of 24V (2 batteries), pure sine wave output and LCD display",
      link: "/product/2",
      price: "₦45,000",
      img: require("./assets/product2.jpeg").default,
    },
    {
      name: "Genus 1.5kva",
      description:
        "Capacity of 1500VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/3",
      price: "₦40,000",
      img: require("./assets/product3.jpeg").default,
    },
    {
      name: "Genus 1.5kva",
      description:
        "Capacity of 1500VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/3",
      price: "₦40,000",
      img: require("./assets/product3.jpeg").default,
    },
    {
      name: "Genus 1.5kva",
      description:
        "Capacity of 1500VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/3",
      price: "₦40,000",
      img: require("./assets/product3.jpeg").default,
    },
    {
      name: "Genus 1.5kva",
      description:
        "Capacity of 1500VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/3",
      price: "₦40,000",
      img: require("./assets/product3.jpeg").default,
    },
    {
      name: "Genus 1.5kva",
      description:
        "Capacity of 1500VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/3",
      price: "₦40,000",
      img: require("./assets/product3.jpeg").default,
    },
    {
      name: "Genus 1kva",
      description:
        "Capacity of 1000VA, pure sine wave inverter, providing power backup that will sustain a range of domestic appliances or office equipment.",
      link: "/product/1",
      price: "₦38,000",
      img: require("./assets/product4.jpeg").default,
    },
  ],
};

const project = {
  title: "Our Project",
  summary: loremIpsum().toString().substr(0, 304),
  body: [
    {
      title: "Installation of 4 grid soalr system ",
      summary: loremIpsum(),
      img: require("./assets/project/project1.jpeg").default,
      testimonial: {
        name: "Nescafe Breweries",
        work: "Managing Director, T & M",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
    {
      title:
        "Installation of 24 units 8 grid solar system for ultimate limited homes",
      summary: loremIpsum(),
      img: require("./assets/project/project2.jpeg").default,
      testimonial: {
        name: "Mr and Mrs Chance The Rapper",
        work: "Creative Director, Ment Dom",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
    {
      title:
        "Installation of 24 units 8 grid solar system for ultimate limited homes",
      summary: loremIpsum(),
      img: require("./assets/project/project2.jpeg").default,
      testimonial: {
        name: "Ministry of public affiars",
        work: "CEO, Quantum Energy",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
    {
      title:
        "Installation of 24 units 8 grid solar system for ultimate limited homes",
      summary: loremIpsum(),
      img: require("./assets/project/project2.jpeg").default,
      testimonial: {
        name: "Elais Managing Firm",
        work: "Managing Director, Grelish and Sons",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
    {
      title:
        "Installation of 24 units 8 grid solar system for ultimate limited homes",
      summary: loremIpsum(),
      img: require("./assets/project/project2.jpeg").default,
      testimonial: {
        name: "Saint James High School",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
    {
      title: "Installation of a unit 12 grid solar system for Mr Jacobs Homes",
      summary: loremIpsum(),
      img: require("./assets/project/project3.jpeg").default,
      testimonial: {
        name: "Mr & Mrs Sons Home",
        testimony: loremIpsum().toString().substr(0, 100),
        image: require("./assets/product3.jpeg").default,
      },
    },
  ],
};

const faq = {
  title: "Frequently Asked Questions",
  body: [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      question: "Question 3",
      answer: "Answer 3",
    },
  ],
};

const contact = {
  title: "Contact Us",
  form: {
    header: {
      title: "stay in touch",
      body: loremIpsum().toString().substr(0, 100),
    },
  },
  quickContact: {
    header: "Quick Contact",
    body: loremIpsum().toString().substr(0, 100),
    location: "",
  },
  body: [
    {
      type: "email",
      value: "greennow@gmail.com",
      icon: "fas fa-envelope",
    },
    {
      type: "phone",
      value: "+2349012345678",
      icon: "fas fa-phone",
    },
    {
      type: "address",
      value: "No 2, lorem ipsum dolor amit",
      icon: "fas fa-map-marker-alt",
    },
  ],
};

export {
  appTitle,
  appDescription,
  appMenuList,
  appCTA,
  appSocials,
  about,
  services,
  product,
  project,
  contact,
};
