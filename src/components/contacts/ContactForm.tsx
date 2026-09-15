import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{
    name?: string;
    contact?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; contact?: string; message?: string } = {};
    const isPhone = /^[+\d\s()-]{7,20}$/.test(contact.trim());
    const isTelegram = /^@?[a-zA-C0-9_]{3,32}$/.test(contact.trim());

    if (name.trim().length < 2) {
      newErrors.name = "Ім'я має містити щонайменше 2 символи";
    }

    if (message.length > 500) {
      newErrors.message = "Повідомлення не повинно перевищувати 500 символів";
    }

    if (!contact.trim()) {
      newErrors.contact = "Вкажіть телефон або Telegram";
    } else if (!isPhone && !isTelegram) {
      newErrors.contact = "Введіть номер телефону або Telegram (@username).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const hasError = Math.random() < 0.2;

      if (hasError) {
        toast.error("Помилка сервера. Спробуйте ще раз.");
      } else {
        toast.success("Повідомлення успішно надіслано!");
        setName("");
        setContact("");
        setMessage("");
      }

      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs max-w-xl mx-auto space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">Зв'язатися з нами</h2>
        <p className="text-sm text-slate-500">
          Заповніть форму і ми відповімо вам найближчим часом.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Ваше ім'я *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-hidden ${
              errors.name
                ? "border-red-500 bg-red-50/30"
                : "border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-medium">{errors.name}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Телефон або Telegram *
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+380... или @username"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-hidden ${
              errors.contact
                ? "border-red-500 bg-red-50/30"
                : "border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            }`}
          />
          {errors.contact && (
            <p className="text-xs text-red-500 font-medium">{errors.contact}</p>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Повідомлення
            </label>
            <span className="text-xs text-slate-400">{message.length}/500</span>
          </div>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Опишите ваш вопрос..."
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-hidden resize-none ${
              errors.message
                ? "border-red-500 bg-red-50/30"
                : "border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 font-medium">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-sm rounded-xl shadow-xs transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Надсилання..." : "Надіслати повідомлення"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
