import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center py-4">
      <div className="flex flex-col items-center">
        <p className="flex text-center leading-5 sm:font-bold text-slate-800 text-sm">
          Este projeto foi feito com cunho educacional.
        </p>
        <span className="flex max-sm:flex-col max-sm:text-center items-center sm:items-end gap-0.5 sm:font-bold text-slate-800 text-sm">
          <p>Criado e desenvolvido por Matheus.</p>
          <div className="flex">
            <Link
              className="hover:bg-slate-800 hover:text-slate-200 transition p-1.5 rounded-[200px]"
              href="https://github.com/MathHenr"
              target="blank"
            >
              <GithubIcon />
            </Link>
            <Link
              className="hover:bg-blue-600 hover:text-slate-300 transition p-1.5 rounded"
              href="https://www.linkedin.com/in/matheus-henrique-sobrinho-987831188/"
              target="blank"
            >
              <LinkedinIcon />
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
}
