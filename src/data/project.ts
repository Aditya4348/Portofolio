export const ContentProject = {
    title: 'Featured Projects',
    description: 'Here are some of my recent projects that showcase my skills and experience.',
}

export const DataProject = [
    {
        id: "1",
        title: "Todolist Web",
        description: "A dynamic Todo List application built with Laravel Livewire and Tailwind CSS for real-time task management.",
        detaildescription: "This Todo List app was developed as a modern task management solution, focused on performance, usability, and responsive design. Built with Laravel Livewire, it delivers real-time interactivity without the need for additional JavaScript.All core features such as adding, editing, completing, and deleting tasks are handled without page reloads, ensuring a fast and seamless user experience — ideal for individuals or small teams.The UI is styled using Tailwind CSS, resulting in a clean, minimalist interface that looks great on all screen sizes. Responsiveness and speed were key priorities throughout the development.This project also serves as an exploration into building backend-driven SPA-like applications without relying on frontend frameworks like React or Vue. It showcases how Laravel can power interactive, modern web apps on its own.More than just a productivity tool, this app is a demonstration of my ability to build scalable, interactive web applications with clean architecture and modern tech stacks.",
        mainImage: "TodolistWeb.png",
        images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
        tags: ["Laravel", "LiveWire", "HTML", "CSS", "Tailwind"],
        github: "#",
        detail: [{category: "project", id: "1"}],
    },
    {
        id: "2",
        title: "Slicing Web ( React )",
        description: "A modern website layout sliced and built using React.js, component reusability, and clean UI architecture.",
        detaildescription: "",
        mainImage: "SlicingReact.png",
        images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
        tags: ["React", "Tailwind", "HTML",],
        github: "#",
        detail: [{category: "project", id: "2"}],
    },
    {
        id: "3",
        title: "Slicing Web ( Vue JS )",
        description: "A responsive website layout sliced and implemented using Vue.js and Tailwind CSS, focusing on clean UI structure, reusable components, and modern frontend best practices.",
        detaildescription: "This website was developed using Vue.js, adopting a clean and structured UI architecture and emphasizing component reusability. By leveraging this technology, we are able to build a modern, efficient, and easily maintainable web application.The creation of this website originated as a Final Project for a Bootcamp organized by NextSkill, titled “Learning Vue.js Fundamentals”. This project not only serves as a practical application of the skills acquired, but also marks the beginning of a professional portfolio in frontend development.",
        mainImage: "SlicingVueJS.png",
        images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
        tags: ["Vue JS", "HTML", "Tailwind"],
        github: "#",
        detail: [{category: "project", id: "3"}],
    },
    {
        id: "4",
        title: "Financial Web App",
        description: "A financial management web application built with Laravel Livewire and Tailwind CSS, featuring real-time transaction tracking, income and expense reports, and role-based access control. Designed for simplicity, performance, and clarity in managing personal or team finances.",
        detaildescription: "This website is the result of an independently established website development service, built using the PHP programming language and the Laravel framework. The development process was carried out professionally, with a focus on clean code structure, system efficiency, and ease of maintenance. The website uses Indonesian as the primary language, ensuring accessibility and clarity for its local target audience.",
        
        mainImage: "FinancialWeb.png",
        images: [
                { id: "1", img: "default.jpeg", url: "Programmer", height: 200 },
                { id: "2", img: "default.jpeg", url: "Programmer", height: 200 },
            ],
        tags: ["Laravel", "LiveWire", "HTML", "CSS", "Tailwind"],
        github: "#",
        detail: [{category: "project", id: "4"}],
    },
]