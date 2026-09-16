import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://telegram.org" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          <div className="lg:col-span-1 flex flex-col gap-3">
            <Logo />
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Платформа для пошуку роботи та надійного працевлаштування в
              Європі. Поєднуємо кандидатів із верифікованими роботодавцями.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Для кандидатів
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Пошук вакансій
                </Link>
              </li>
              <li>
                <Link
                  to="/#categories"
                  className="hover:text-white transition-colors"
                >
                  Категорії вакансій
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-white transition-colors"
                >
                  Компанії-партнери
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Для роботодавців
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Розмістити вакансію
                </Link>
              </li>
              <li>
                <Link
                  to="/#employers"
                  className="hover:text-white transition-colors"
                >
                  Пошук працівників
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Партнерська програма
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Контакти
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                Гаряча лінія:{" "}
                <span className="text-white font-medium">
                  +380 (44) 000-00-00
                </span>
              </li>
              <li>
                Email:{" "}
                <span className="text-white font-medium">
                  support@vvwork.com
                </span>
              </li>
              <li>Пн - Пт: 09:00 - 18:00</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
              Соцмережі
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-400">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VV Work. Всі права захищені.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Політика конфіденційності
            </Link>
            <Link
              to="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
