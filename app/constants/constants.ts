export const navigationOptions = [
    { id: 0, title: "INTRO", href: "/" },
    { id: 1, title: "ABOUT", href: "/About" },
    { id: 2, title: "PROJECTS", href: "/Projects" },
    { id: 3, title: "CONTACT", href: "/Contact" },
];

export const badges = [
    { id: 0, title: "ReactJS", variant: "secondary" as const },
    { id: 1, title: "NextJS", variant: "default" as const },
    { id: 2, title: "TypeScript", variant: "secondary" as const },
    { id: 3, title: "Tailwind CSS", variant: "default" as const },
    { id: 4, title: "ASP.Net", variant: "secondary" as const },
    { id: 5, title: "SQL", variant: "default" as const },
    { id: 6, title: "C", variant: "secondary" as const },
    { id: 7, title: "C++", variant: "default" as const },
    { id: 8, title: "Python", variant: "secondary" as const },
    { id: 9, title: "Material UI", variant: "default" as const },
    { id: 10, title: "JavaScript", variant: "secondary" as const },
    { id: 11, title: "Firebase", variant: "default" as const }, //NoSQL Database
    { id: 12, title: "Git", variant: "secondary" as const },
    { id: 13, title: "HTML", variant: "default" as const },
    { id: 14, title: "CSS", variant: "secondary" as const },
    { id: 15, title: "Bootstrap", variant: "default" as const },
    { id: 16, title: "SCSS", variant: "secondary" as const },
    { id: 17, title: "Shadcn UI", variant: "default" as const },
    { id: 18, title: "CodeIgniter", variant: "secondary" as const },
    { id: 19, title: "ML", variant: "default" as const },
    { id: 20, title: "OpenCV", variant: "secondary" as const },
    { id: 21, title: "AWS", variant: "default" as const },
    { id: 22, title: "PHP", variant: "secondary" as const },
    { id: 23, title: "jQuery", variant: "default" as const },
    { id: 24, title: "Node.js", variant: "secondary" as const },
    { id: 25, title: "Agile", variant: "default" as const },
    { id: 26, title: "REST", variant: "secondary" as const },
    { id: 27, title: "Flask", variant: "default" as const },
    { id: 28, title: "TensorFlow", variant: "secondary" as const },
]

export const projects = [
    {
        id: 0,
        projectTitle: "KISIT Health Care",
        titleDescription: "Worked on this project at 13thJune Infotech Pvt Ltd",
        projectContent: "A healthcare workforce management platform for scheduling and managing home-care services. The application handles client and employee onboarding, employee scheduling, and EVV integration for location-based service verification. Verified service records are then processed for payroll management, with additional features for managing insurance providers and payment information.",
        projectBadges: [0, 4, 5, 9, 10, 12]
    },
    {
        id: 1,
        projectTitle: "StratX Secure",
        titleDescription: "Worked on this project at 13thJune Infotech Pvt Ltd",
        projectContent: "StratX Secure is an intelligent surveillance platform that connects to ONVIF-compatible IP cameras for real-time monitoring and analysis. It uses YOLOv8 and OpenCV for vehicle and licence plate detection, along with facial recognition to identify individuals from camera footage. Built with React.js, Tailwind CSS, ASP.NET Web API, Python, and HashiCorp Consul, the system provides a centralized solution for smart security and monitoring.",
        projectBadges: [1, 3, 10, 4, 20, 19, 12]
    },
    {

        id: 2,
        projectTitle: "GoanCart quote and bind for B2B businesses",
        titleDescription: "Worked on this project at Partnekars Pvt Ltd (PPL)",
        projectContent: "A production-level B2B marketplace platform designed to help businesses scale by streamlining the connection between customers and vendors through a centralised quotation management system. The platform enables businesses to manage live and requested quotations, allowing users to accept, reject, or submit counteroffers while maintaining real-time quotation tracking. By digitising and simplifying the quotation process, the platform improves communication, reduces manual effort, accelerates business transactions, and supports more efficient B2B operations at scale.",
        projectBadges: [18, 22, 23, 10, 21]
    },
    {
        id: 3,
        projectTitle: "E-motions",
        // titleDescription: "A responsive e-commerce website for selling clothing items.",
        titleDescription: "",
        projectAction: "GitHub",
        projectContent: "Developed a real-time facial emotion recognition system using Python, TensorFlow/Keras and OpenCV to detect and classify human emotions from live camera input. Trained a CNN-based deep learning model on facial expression datasets to recognise seven emotional categories, with image preprocessing and data augmentation techniques used to improve model performance. Integrated face detection and real-time video processing to identify facial expressions and display the predicted emotion dynamically. The project demonstrates practical application of computer vision, deep learning and AI for real-time human emotion analysis.",
        url: "https://github.com/RawdonNoronha/E-motions",
        projectBadges: [8, 20, 19, 27, 28]
    },
    {
        id: 4,
        projectTitle: "Noronha Clothing",
        // titleDescription: "A responsive e-commerce website for selling clothing items.",
        titleDescription: "",
        projectAction: "Visit",
        projectContent: "Developed a modern, responsive e-commerce platform for Noronha Clothing, allowing customers to browse products, view details, manage their cart and place orders. Built with a focus on user experience, mobile responsiveness and scalability to support online business growth.",
        url: "https://noronha-clothing.netlify.app/",
        projectBadges: [0, 10, 16, 11]
    }
]

export const experiences = [
    {
        id: 0,
        company: "Goa University",
        role: "BE in Computer Science and Engineering",
        date: "2020 - 2024",
        description: "Graduated with a Bachelor's degree in Computer Engineering, gaining a strong foundation in software development, algorithms, and computer systems."
    },
    {
        id: 1,
        company: "Partnekars Pvt Ltd (PPL)",
        role: "Web Developer Intern",
        date: "Aug 2023 — Sept 2023",
        description: "Contributed to the development and integration of a B2B section for GoanCart, enabling local businesses in Goa to connect, source products and manage business transactions online."
    },
    {
        id: 2,
        company: "13thJune Infotech Pvt Ltd",
        role: "Full Stack Web Developer",
        date: "Sept 2024 — Apr 2026",
        description: "Developed and maintained modern web applications using React.js, Next.js, MUI and Tailwind CSS, implementing new features, resolving bugs and contributing to application design and architecture. Built and integrated ASP.NET Web APIs, worked with complex SQL stored procedures and database queries, and performed testing and debugging to ensure reliable, high-quality application performance."
    }
]