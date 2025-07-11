
export const experience = {
    title: 'Experience',
    description: "My professional journey and the skills I've developed along the way",
    titleWorks: 'Work Experience',
    titleSkills: 'Skills & Technologies ',
    jobs: [
        {
            id: "1",    
            title: "Senior Frontend Developer",
            company: "Tech Solutions Inc.",
            period: "2022 - Present",
            description: "Led frontend development for multiple client projects using React and Next.js",
            mainImage: "torin_photo.JPG",
            images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
            buttons: [{ label: "View Project", category: "experience", id: "1" }],
        },
        {
            id: "2",
            title: "Full Stack Developer",
            company: "Digital Agency Co.",
            period: "2020 - 2022",
            mainImage: "torin_photo.JPG",
            images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
            description: "Developed and maintained web applications using MERN stack",
            buttons: [{ label: "View Project", href: "Full Stack Developer" }],

        },
        {
            id: "3",
            title: "Junior Developer",
            company: "StartUp Hub",
            period: "2019 - 2020",
            mainImage: "torin_photo.JPG",
            images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
            description: "Built responsive websites and learned modern development practices",
            buttons: [{ label: "View Project", href: "Junior Developer" }],

        },
        {   
            id: "4",
            title: "Programmer",
            company: "StartUp",
            period: "2019 - 2020",
            description: "Built responsive websites using BPJS frameworks",
            mainImage: "torin_photo.JPG",
            images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
            buttons: [{ label: "View Project", href: "Programmer" }],
        },
    ],
    skills: [
        {
            id: "1",
            category: "Frontend",
            skill: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            id: "2",
            category: "Backend",
            skill: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
        },
        {
            id: "3",
            category: "Tools & Others",
            skill: ["Git", "Docker", "AWS", "Figma", "Vercel"],
        },
    ],
}
