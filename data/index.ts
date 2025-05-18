import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Work Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech-Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;


export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Sundara Raman R",
    title: "Founder of Hytrendz",
  },
  {
    quote: `An exceptional freelancer! ${links.ownerName} built a custom machine learning model that dramatically improved our recommendation engine. The accuracy increased by 30%, and the performance was optimized for production. He explained everything clearly, delivered clean code, and was a pleasure to work with. Highly recommended.`,
    name: "Michael Johnson",
    title: "Director of Toptal LLC",
  },
  {
    quote: `${links.ownerName} delivered a robust computer vision solution that helped automate our defect detection process. The model achieved over 95% accuracy on real-world data. He also integrated it seamlessly into our existing system. Professional, responsive, and results-driven!`,
    name: "Daneal Mark",
    title: "Founder of OnTheGoSystems",
  },
  {
    quote: `Thanks to ${links.ownerName}, our manual invoice processing is now 90% automated using OCR + ML. The software saved us hours of work weekly. He was patient, communicative, and very organized. Great job!`,
    name: "Sivaraman R",
    title: "Director of Aatral",
  },
  {
    quote: `I needed a rapid prototype of a reinforcement learning model for a finance simulation, and ${links.ownerName} delivered in record time. The code was modular, well-documented, and backed by research. He even suggested improvements beyond the initial scope. A true AI expert.`,
    name: "Thomas",
    title: "Founder of Slatemate",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Freelancer",
    desc: "Worked independently as a freelancer, delivering high-quality service to various clients. Gained experience in project management, client communication, and meeting tight deadlines.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "Worked as a Machine Learning Intern, developing and testing ML models for real-world datasets. Gained hands-on experience with data preprocessing, model training, and performance evaluation.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Technical team member",
    desc: "Worked as a Technical Team Member at Google, contributing to software development and system optimization. Collaborated with cross-functional teams to solve technical challenges.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/WarmisharrowPy",
  },
  {
    name: "Discord",
    img: "/disc.svg",
    link: "https://discord.com/users/750942018049671261",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/krishnarajans/",
  },
] as const;

export const techStack = {
  stack1: ["Node.js", "AWS", "React.js"],
  stack2: ["Python", "MLOps", "MongoDB"],
} as const;
