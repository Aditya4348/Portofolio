export const experience = {
  title: "Experience",
  description:
    "My professional journey and the skills I've developed along the way",
  titleWorks: "Work Experience",
  titleSkills: "Skills & Technologies ",
  jobs: [
    {
      id: "1",
      title: "internship Wordpress Developer",
      company: "Jasawebsite.biz",
      period: "2024 Sept - 2024 Dec",
      description:
        "Internship as a Frontend Developer at Jasawebsite.biz with a focus on web development using WordPress and maintenance for various client projects.",
      detaildescription: "",
      mainImage: "/PKL/IMG_20241122_144114.jpg",
      images: [],
      buttons: [{ label: "View Project", category: "experience", id: "1" }],
    },
    {
      id: "2",
      title: "Web Developer",
      company: "Optibis.id",
      period: "2025 Sept - Present",
      description:
        "Working as a Web Developer at Optibis.id, responsible for building and maintaining web applications, improving UI/UX, and ensuring optimal performance.",
      detaildescription: "",
      mainImage: "/Optibis/main.jpg", // bisa diubah sesuai gambar utama
      images: [
        { id: "1", img: "Optibis/1.jpg", url: "Web Developer", height: 400 },
        { id: "2", img: "Optibis/2.jpg", url: "Web Developer", height: 400 },
        // tambahkan jika ada gambar lain
      ],
      buttons: [{ label: "View Project", category: "experience", id: "2" }],
    },
    {
      id: "3",
      title: "1st Place in Student Exhibition",
      company: "SMK BPPI Baleendah",
      period: "2025",
      description:
        "1st Place in Student Exhibition with School Savings App. Acted as Frontend Developer and presentation mediator",
      detaildescription: "",
      mainImage: "/Pameran/main.jpg",
      images: [
        { id: "1", img: "Pameran/1_(17).jpg", url: "Programmer", height: 400 },
        { id: "2", img: "Pameran/1_(16).jpg", url: "Programmer", height: 400 },
        { id: "3", img: "Pameran/1_(15).jpg", url: "Programmer", height: 400 },
        { id: "4", img: "Pameran/1_(14).jpg", url: "Programmer", height: 400 },
        { id: "5", img: "Pameran/1_(13).jpg", url: "Programmer", height: 400 },
        { id: "6", img: "Pameran/1_(12).jpg", url: "Programmer", height: 400 },
        { id: "7", img: "Pameran/1_(11).jpg", url: "Programmer", height: 400 },
      ],
      buttons: [{ label: "View Project", category: "experience", id: "3" }],
    },
  ],
  skills: [
    {
      id: "1",
      category: "Web Programming",
      skill: [
        "React",
        "Vue.JS",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "Laravel",
        "MySQL",
      ],
    },
    {
      id: "2",
      category: "Soft Skill",
      skill: [
        "Communication",
        "Public Speaking",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
      ],
    },
    {
      id: "3",
      category: "Tools & Others",
      skill: [
        "Git",
        "Canva",
        "VS Code",
        "Microsoft Office",
        "Xampp",
        "Laragon",
      ],
    },
  ],
};
