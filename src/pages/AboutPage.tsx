import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <div className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="max-w-3xl space-y-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Будуємо міст між талантами та європейськими роботодавцями
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
            VV Work — це сучасна платформа, яка спрощує пошук роботи в Європі
            для кандидатів та допомагає компаніям швидко знаходити надійних
            фахівців.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Про VV Work</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Ми створили VV Work із чіткою метою — зробити процес працевлаштування
          за кордоном прозорим, безпечним та максимально простим. Наш сервіс
          усуває зайві бюрократичні бар'єри й допомагає кандидатам знаходити
          перевірені вакансії, а роботодавцям — отримувати релевантні відгуки
          без довгих пошуків.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Наші ключові переваги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Для кандидатів:
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Перевірені вакансії:</span>{" "}
                  Працюємо тільки з надійними партнерами та прямими
                  роботодавцями в Європі.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Швидкий відгук:</span> Прямий
                  зв'язок із рекрутерами та проста форма заявки без складних
                  анкет.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Персональні збереження:</span>{" "}
                  Можливість зберігати цікаві вакансії та повертатися до них у
                  будь-який зручний час.
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Для роботодавців:
            </h3>
            <ul className=" flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Цільова аудиторія:</span>{" "}
                  Доступ до вмотивованих фахівців у сфері будівництва,
                  виробництва, IT, HoReCa та логістики.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Просте розміщення:</span>{" "}
                  Зручний каталог партнерів та можливість презентувати свій
                  бренд.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold select-none">•</span>
                <div>
                  <span className="font-semibold">Економія часу:</span> Прозора
                  система фільтрації допомагає швидше знаходити потрібних
                  кандидатів.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">VV Work у цифрах</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="block text-4xl sm:text-5xl font-extrabold text-blue-600">
              100+
            </span>
            <span className="text-slate-600 font-medium mt-2 block">
              перевірених європейських партнерів
            </span>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="block text-4xl sm:text-5xl font-extrabold text-blue-600">
              500+
            </span>
            <span className="text-slate-600 font-medium mt-2 block">
              активних вакансій у різних сферах
            </span>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="block text-4xl sm:text-5xl font-extrabold text-blue-600">
              24/7
            </span>
            <span className="text-slate-600 font-medium mt-2 block">
              доступ до каталогу та персональних збережень
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-4 bg-blue-50 p-8 sm:p-12 rounded-3xl">
        <h2 className="text-2xl font-bold text-slate-900">
          Готові зробити наступний крок?
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          Знайдіть роботу мрії або залучіть найкращих фахівців до вашої команди
          вже сьогодні.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/"
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-colors shadow-md"
          >
            Переглянути вакансії
          </Link>
          <Link
            to="/contacts"
            className="px-6 py-3 rounded-xl font-semibold transition-colors bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm inline-flex items-center justify-center"
          >
            Зв'язатися з нами
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
