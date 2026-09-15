import { useState } from "react";
import toast from "react-hot-toast";

interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    const cleanContact = contact.trim();

    const isPhone = /^[+\d\s()-]{7,20}$/.test(cleanContact);
    const isTelegram = /^@?[a-zA-Z0-9_]{3,32}$/.test(cleanContact);

    if (name.trim().length < 2) {
      newErrors.name = "Ім'я має містити щонайменше 2 символи";
    }

    if (message.length > 500) {
      newErrors.message = "Повідомлення не повинно перевищувати 500 символів";
    }

    if (!cleanContact) {
      newErrors.contact = "Вкажіть телефон або Telegram";
    } else if (!isPhone && !isTelegram) {
      newErrors.contact = "Введіть номер телефону або Telegram (@username)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
    if (errors.contact) setErrors((prev) => ({ ...prev, contact: undefined }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
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
        setErrors({});
      }

      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-200/80 border-l-4 border-l-blue-600 shadow-xl max-w-xl mx-auto space-y-8 relative overflow-hidden">
      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Зв'язатися з нами
        </h2>
        <p className="text-sm text-slate-500 font-medium">
          Заповніть форму, і ми відповімо вам найближчим часом.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Ваше ім'я <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Олександр"
            className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm font-medium transition-all outline-none text-slate-900 placeholder:text-slate-400 shadow-inner ${
              errors.name
                ? "border-red-500 bg-red-50/50 text-red-900 focus:ring-4 focus:ring-red-500/10"
                : "border-slate-200 bg-slate-100/70 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 font-semibold flex items-center gap-1 pt-0.5">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Телефон або Telegram <span className="text-blue-600">*</span>
          </label>
          <input
            type="text"
            value={contact}
            onChange={handleContactChange}
            placeholder="+380... або @username"
            className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm font-medium transition-all outline-none text-slate-900 placeholder:text-slate-400 shadow-inner ${
              errors.contact
                ? "border-red-500 bg-red-50/50 text-red-900 focus:ring-4 focus:ring-red-500/10"
                : "border-slate-200 bg-slate-100/70 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            }`}
          />
          {errors.contact && (
            <p className="text-xs text-red-500 font-semibold flex items-center gap-1 pt-0.5">
              {errors.contact}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Повідомлення
            </label>
            <span
              className={`text-xs font-semibold ${
                message.length > 500
                  ? "text-red-500 font-bold"
                  : "text-slate-400"
              }`}
            >
              {message.length}/500
            </span>
          </div>
          <textarea
            rows={4}
            value={message}
            onChange={handleMessageChange}
            placeholder="Опишіть ваше питання..."
            className={`w-full px-4 py-3.5 rounded-2xl border-2 text-sm font-medium transition-all outline-none text-slate-900 placeholder:text-slate-400 shadow-inner ${
              errors.message
                ? "border-red-500 bg-red-50/50 text-red-900 focus:ring-4 focus:ring-red-500/10"
                : "border-slate-200 bg-slate-100/70 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 font-semibold flex items-center gap-1 pt-0.5">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:bg-slate-300 text-white font-bold text-base rounded-2xl shadow-lg shadow-blue-500/25 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Надсилання...</span>
            </>
          ) : (
            "Надіслати повідомлення"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
