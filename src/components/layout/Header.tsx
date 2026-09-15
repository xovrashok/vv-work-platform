import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bookmark } from "lucide-react";
import Logo from "../ui/Logo";

interface HeaderProps {
  count: number;
}

const Header = ({ count }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-150 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkStyles}>
            Знайти роботу
          </NavLink>
          <NavLink to="/employers" end className={navLinkStyles}>
            Знайти працівника
          </NavLink>
          <NavLink to="/about" end className={navLinkStyles}>
            Про нас
          </NavLink>
          <NavLink to="/partners" end className={navLinkStyles}>
            Партнери
          </NavLink>
          <NavLink to="/contacts" className={navLinkStyles}>
            Контакти
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/?saved=true"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
          >
            <Bookmark
              size={16}
              className={
                count > 0 ? "text-blue-600 fill-blue-600" : "text-slate-500"
              }
            />
            <span>Збережені</span>
            {count > 0 && (
              <span className="ml-0.5 px-2 py-0.5 text-xs font-bold bg-blue-600 text-white rounded-full">
                {count}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Переключити меню"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 flex flex-col gap-3">
          <NavLink
            to="/"
            end
            className={navLinkStyles}
            onClick={() => setIsMenuOpen(false)}
          >
            Знайти роботу
          </NavLink>
          <NavLink
            to="/contacts"
            className={navLinkStyles}
            onClick={() => setIsMenuOpen(false)}
          >
            Контакти
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
