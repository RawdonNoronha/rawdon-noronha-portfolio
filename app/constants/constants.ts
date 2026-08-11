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
    { id: 17, title: "Shadcn UI", variant: "default" as const }
]

export const projects = [
    {
        id: 0,
        projectTitle: "KISIT Health Care",
        // titleDescription: "A web application for managing health records and appointments.",
        projectContent: "A healthcare workforce management platform for scheduling and managing home-care services. The application handles client and employee onboarding, employee scheduling, and EVV integration for location-based service verification. Verified service records are then processed for payroll management, with additional features for managing insurance providers and payment information.",
        projectBadges: [0, 4, 5, 9, 10]
    },
    {
        id: 1,
        projectTitle: "Noronha Clothing",
        // titleDescription: "A responsive e-commerce website for selling clothing items.",
        projectAction: "Visit",
        projectContent: "An e-commerce platform built with modern web technologies, featuring a user-friendly interface and seamless shopping experience.",
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
        date: "Aug 2023 — Jul 2024",
        description: "Worked on integrating and "
    },
    {
        id: 2,
        company: "13thJune Infotech Pvt Ltd",
        role: "Full Stack Web Developer",
        date: "Jan 2023 — Present",
        description: "Working on web applications using React, Next.js, and Tailwind CSS. Built features, fixed bugs, and collaborated on design and architecture."
    }
]