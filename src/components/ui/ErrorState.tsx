interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Не вдалося завантажити дані",
  message = "Сталася помилка під час запиту до сервера. Перевірте з'єднання або спробуйте ще раз.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="p-8 text-center bg-red-50/50 border border-red-100 rounded-2xl my-6 max-w-lg mx-auto">
      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
        !
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Спробувати знову
        </button>
      )}
    </div>
  );
}
