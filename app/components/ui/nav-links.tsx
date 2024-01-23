import { NavLinks } from "@/app/constants";
import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navlinks() {
    
    const pathname = usePathname();
    return (
      <>
        {NavLinks.map((link) => {
        //   const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md text-md font-medium hover:bg-sky-100 hover:text-blue-600  md:justify-start md:p-2 md:px-6 font-bold",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
          )}
            >
              {/* <LinkIcon className="w-6" /> */}
              <p className="block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  