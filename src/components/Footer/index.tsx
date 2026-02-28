import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center py-4">
      <div className="flex flex-col items-center">
        <p className="text-center leading-5 sm:font-bold text-slate-800 text-sm">
          Este projeto foi feito com cunho educacional.
        </p>
        <p className="text-center leading-5 sm:font-bold text-slate-800 text-sm">
          Criado e desenvolvido por Matheus.
          <Link href="#">
            <GithubIcon />
          </Link>
          <Link href="#">
            <LinkedinIcon />
          </Link>
        </p>
      </div>
    </footer>
  );
}
