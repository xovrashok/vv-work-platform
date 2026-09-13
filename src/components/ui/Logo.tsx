import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 group focus:outline-none"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
        VV
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
          VV<span className="text-blue-600">Work</span>
        </span>
        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
          Jobs in Europe
        </span>
      </div>
    </Link>
  );
}
