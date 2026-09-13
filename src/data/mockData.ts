import type { Category, Partner, Job } from "../types/api";

export const MOCK_CATEGORIES: Category[] = [
  { id: 1, title: "Будівництво", slug: "construction" },
  { id: 2, title: "Виробництво", slug: "manufacturing" },
  { id: 3, title: "Логістика", slug: "logistics" },
  { id: 4, title: "Готельно-ресторанна сфера", slug: "hospitality" },
  { id: 5, title: "ІТ", slug: "it" },
  { id: 6, title: "Водії", slug: "drivers" },
];

export const MOCK_PARTNERS: Partner[] = [
  {
    id: 1,
    slug: "tech-corp-eu",
    name: "TechCorp EU",
    logo: "https://placehold.co/100x100?text=TechCorp",
    description:
      "Ведучий поставщик IT-рішень та інженерних кадрів у Східній Європі.",
    location: "Польща, Варшава",
  },
  {
    id: 2,
    slug: "build-master",
    name: "Build Master",
    logo: "https://placehold.co/100x100?text=BuildMaster",
    description:
      "Великий будівельний холдинг, що реалізує житлові та промислові об’єкти.",
    location: "Німеччина, Берлін",
  },
  {
    id: 3,
    slug: "euro-logistics",
    name: "EuroLogistics",
    logo: "https://placehold.co/100x100?text=EuroLog",
    description:
      "Міжнародна логістична компанія з власним автопарком та складськими комплексами.",
    location: "Чехія, Прага",
  },
];

export const MOCK_JOBS: Job[] = [
  {
    id: 101,
    title: "Frontend Developer (React)",
    partnerId: 1,
    category: "it",
    salary: "2500 - 3500 €",
    location: "Варшава / Ввіддалено",
    description:
      "Розробка сучасних веб-інтерфейсів для масштабованої SaaS-платформи.",
    type: "Повна зайнятість",
  },
  {
    id: 102,
    title: "DevOps Engineer",
    partnerId: 1,
    category: "it",
    salary: "3000 - 4500 €",
    location: "Варшава",
    description:
      "Налаштування CI/CD пайплайнів та підтримка хмарної інфраструктури (AWS).",
    type: "Повна зайнятість",
  },
  {
    id: 103,
    title: "Арматурник-бетонщик",
    partnerId: 2,
    category: "construction",
    salary: "1800 - 2400 €",
    location: "Берлін",
    description:
      "Робота на будівництві монолітних житлових комплексів. Надається житло.",
    type: "Повна зайнятість",
  },
  {
    id: 104,
    title: "Виконроб (Foreman)",
    partnerId: 2,
    category: "construction",
    salary: "2800 - 3800 €",
    location: "Берлін",
    description:
      "Контроль якості будівельних робіт, координація бригад на об’єкті.",
    type: "Повна зайнятість",
  },
  {
    id: 105,
    title: "Водій категорії С+Е",
    partnerId: 3,
    category: "drivers",
    salary: "2200 - 2900 €",
    location: "Маршрути по ЄС",
    description: "Міжнародні перевезення на нових тягачах Euro 6 (DAF, Volvo).",
    type: "Вахта / Повна зайнятість",
  },
  {
    id: 106,
    title: "Оператор вилкового навантажувача",
    partnerId: 3,
    category: "logistics",
    salary: "1600 - 2000 €",
    location: "Прага",
    description:
      "Робота на сучасному автоматизованому складі товарів народного споживання.",
    type: "Змінний графік",
  },
];
