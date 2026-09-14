import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center text-center min-h-[60vh] space-y-6">
      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center font-black text-3xl shadow-xs">
        404
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Сторінку не знайдено
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          На жаль, за цією адресою нічого немає. Можливо, сторінку було
          переміщено або ви помилилися в URL.
        </p>
        <p className="text-xs text-slate-400 pt-2">
          Вас буде автоматично перенаправлено на головну через 3 секунди...
        </p>
      </div>

      <Link
        to="/"
        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all text-sm"
      >
        Повернутися на головну зараз
      </Link>
    </div>
  );
};

export default NotFoundPage;
