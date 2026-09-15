import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Layout = () => {
  const [savedJobIds, setSavedJobIds] = useLocalStorage<string[]>(
    "vv_saved_jobs",
    [],
  );

  const handleToggleSave = (id: string) => {
    setSavedJobIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Header count={savedJobIds.length} />
      <main className="flex-grow">
        <Outlet context={{ savedJobIds, onToggleSave: handleToggleSave }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
