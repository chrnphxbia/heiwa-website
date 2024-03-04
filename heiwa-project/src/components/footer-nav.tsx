import Link from "next/link";
import Image from "next/image";
import routes from "@/lib/routes";
import MapsEmbed from "./embed-map";
import contacts from "@/lib/contacts";
import MackLogo from "../../public/mack-logo";
import FapespLogo from "../../public/fapesp-logo";

const fapespLink = "https://fapesp.br/";
const mackLink = "https://www.mackenzie.br/";
const mackCloudLink = "https://mackcloud.mackenzie.br/";

export default function FooterNav() {
  return (
    <nav className="container pb-2">
      <div className="flex justify-between border-t pt-2">
        <div className="flex gap-32 text-foreground">
          <div className="flex flex-col">
            <h1>Navegação</h1>
            {routes.map((route) => (
              <Link
                href={route.path}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h1>Contato</h1>
            {contacts.map((contact) => (
              <Link
                href={contact.path}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {contact.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1>Apoio</h1>
            <Link href={fapespLink}>
              <FapespLogo />
            </Link>
            <div className="flex items-center justify-between">
              <Link href={mackLink}>
                <MackLogo />
              </Link>
              <Link href={mackCloudLink}>
                <Image
                  src="/mackcloud.png"
                  alt="Mack Cloud Logo"
                  width={70}
                  height={70}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-2">
          <h1 className="pb-1">Onde estamos</h1>
          <MapsEmbed />
        </div>
      </div>
    </nav>
  );
}