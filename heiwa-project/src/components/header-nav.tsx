import Link from "next/link";
import HeiwaLogo from "../../public/heiwa-logo";
import CIBERDEMLogo from "../../public/ciberdem-logo";
import { Badge } from "./ui/badge";

const navigation = [
  { label: "Notícias", path: "noticias" },
  { label: "Resultados", path: "resultados" },
  { label: "Membros", path: "membros" },
  { label: "Sobre", path: "sobre" },
  { label: "Apoio", path: "apoio" },
];

export default function HeaderNav() {
  return (
    <nav className="sticky top-0">
      <div className="flex bg-white justify-between py-1 px-8 place-items-center sticky top-0">
        <div className="flex place-items-center gap-16">
          <HeiwaLogo />
          <div className="text-foreground space-x-2">
            {navigation.map((item) => (
              <Link href={item.path}>
                <Badge variant={"secondary"}>{item.label}</Badge>
              </Link>
            ))}
          </div>
        </div>
        <CIBERDEMLogo />
      </div>
    </nav>
  );
}
