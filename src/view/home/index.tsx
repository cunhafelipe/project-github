import { Book, Star } from "lucide-react";
import logoGit from "../assets/github.svg";

export function Home() {
  return (
    <header className="max-w-[90%] mx-auto mt-5">
      <div className="flex items-center gap-3 justify-between">
        <img src={logoGit} alt="logo github" />
        <h1 className="text-white font-semibold">GitHub Project</h1>
      </div>
      <div>
        <ul className="flex gap-5 mt-5">
          <li>
            <a
              href="/repositories"
              className="text-slate-300 flex gap-2 hover:text-white"
            >
              <Book size={20} />
              Repositories
            </a>
          </li>
          <li>
            <a
              href="/stars"
              className="text-slate-300 flex gap-2  hover:text-white"
            >
              <Star size={20} />
              Stars
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
