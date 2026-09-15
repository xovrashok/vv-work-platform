import ContactForm from "../components/contacts/ContactForm";

const ContactsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Контакти
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Є питання чи пропозиції щодо співпраці? Напишіть нам, і наша команда
          зв'яжеться із вами.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactsPage;
