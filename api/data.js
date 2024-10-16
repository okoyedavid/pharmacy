//https://postimg.cc/gallery/SzqwB8H

const about = {
  about: {
    id: "faculty-pharmacy-esut",
    title: "Welcome to the Faculty of Pharmaceutical Science ESUT",
    info: "The Department of Pharmacy at Enugu State University of Science and Technology (ESUT) was established to provide quality education and training in the pharmaceutical sciences. It aims to equip students with the knowledge and skills necessary to excel in various areas of pharmacy, including clinical practice, research, and pharmaceutical management. The department focuses on a comprehensive curriculum that combines theoretical knowledge with practical experience, ensuring that graduates are well-prepared for professional challenges. It emphasizes interdisciplinary learning, research, and community service, fostering a commitment to improving public health through the responsible use of medications. ESUT's Department of Pharmacy is recognized for its commitment to academic excellence and its role in contributing to the healthcare system in Nigeria, addressing both local and global health issues.",
    img: "",
  },
  departments: [
    {
      id: "pharmaceutical-chemistry",
      department: "Pharmaceutical Chemistry",
      description:
        "Focuses on the design, synthesis, and analysis of pharmaceutical compounds, combining elements of chemistry and biology to develop new drugs.",
      img: "https://i.postimg.cc/ZqSGJwBn/pharmaceutical-chemistry.jpg",
    },
    {
      id: "pharmacognosy",
      department: "Pharmacognosy",
      description:
        "Studies natural products derived from plants, animals, and minerals, exploring the identification, extraction, and biological activities of these substances.",
      img: "https://i.postimg.cc/gkf9TzGv/cognosy.webp",
    },
    {
      id: "pharmacology-toxicology",
      department: "Pharmacology and Toxicology",
      description:
        "Examines the effects of drugs on biological systems, with pharmacology studying drug actions and interactions, and toxicology focusing on adverse effects.",
      img: "https://i.postimg.cc/B6hkcshP/toxicology.jpg",
    },
    {
      id: "clinical-pharmacy-practice",
      department: "Clinical Pharmacy and Pharmacy Practice",
      description:
        "Centers on the role of pharmacists in healthcare settings, teaching patient care, medication therapy management, and clinical applications.",
      img: "https://i.postimg.cc/jdW0cwYx/clinical-pharmacology-toxicology-teaser-1200x800.jpg",
    },
    {
      id: "pharmaceutical-microbiology",
      department: "Pharmaceutical Microbiology",
      description:
        "Involves the study of microorganisms in relation to pharmaceuticals, including microbial contamination and the development of antimicrobial agents.",
      img: "https://i.postimg.cc/fRm44Gb1/micro.jpg",
    },
    {
      id: "industrial-pharmacy",
      department: "Industrial Pharmacy",
      description:
        "Focuses on the manufacturing and quality assurance of pharmaceutical products, covering drug formulation and production processes.",
      img: "https://i.postimg.cc/PqQBJ1Y4/industrial.webp",
    },
    {
      id: "pharmacy-admin-management",
      department: "Pharmacy Administration and Management",
      description:
        "Covers the business and management aspects of pharmacy practice, including healthcare policies, economics, and pharmacy service management.",
      img: "https://i.postimg.cc/d1QgyD9K/Pharmacy-Management-System.webp",
    },
  ],
};

export default function handler(req, res) {
  const allowedOrigins = [
    "https://pharm-six.vercel.app/",
    "http://localhost:5173",
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
    return;
  }

  // Safely handle ID extraction

  switch (req.method) {
    case "GET":
      res.status(200).json(about);

      break;

    default:
      res.setHeader("Allow", ["OPTIONS", "GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
