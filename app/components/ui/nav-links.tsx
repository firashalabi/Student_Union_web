import { navLinks } from "@/app/constants";
import clsx from "clsx";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navlinks() {
    
    const pathname = usePathname();
    return (
      <>
        {navLinks.map((link) => {
        //   const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(" h-[48px] grow items-center justify-center gap-2 rounded-md font-medium  hover:text-gray-600 md:justify-start md:p-2 md:px-6 md:font-bold ",
              {
                ' text-blue-600': pathname === link.href,
              },
          )}
            >
              {/* <LinkIcon className="w-6" /> */}
              <ul><li>{link.name}</li></ul>
              {/* // <p className="block">{link.name}</p> */}
            </Link>
          );
        })}
      </>
    );
  }
  