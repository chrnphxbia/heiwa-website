import Link from "next/link";
import routes from "@/lib/routes";
import { Badge } from "./ui/badge";
import HeiwaLogo from "../../public/logos/heiwa-logo";
import CIBERDEMLogo from "../../public/logos/ciberdem-logo";

const ciberdemLink = "https://ciberdem.mack.com.br/";

export default function HeaderNav() {
  return (
    <nav className="sticky top-0">
      <div className="flex bg-white justify-between px-8 place-items-center border-b">
        <div className="flex place-items-center gap-16">
          <Link href={`/`}>
            <HeiwaLogo />
          </Link>
          <div className="space-x-2">
            {routes.map((item) => (
              <Link href={item.path} key={item.label}>
                <Badge
                  variant={"navitem"}
                  className="text-foreground/80 transition-colors duration-200 hover:text-foreground/100"
                >
                  {item.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
        <Link href={ciberdemLink}>
          <CIBERDEMLogo />
        </Link>
      </div>
    </nav>
  );
}
