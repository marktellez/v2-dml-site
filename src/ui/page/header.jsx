import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({}) {
  const { pathname } = useRouter();
  return (
    <header className="container mx-auto py-8">
      <div className="sm:flex gap-8 items-center">
        <div className="font-black text-[42px]">
          devmentor<span className="text-red-500">live</span>
        </div>

        <div className="sm:flex sm:text-[22px] sm:gap-16 font-light flex-grow justify-center">
          {[
            {
              href: "/",
              label: "Web developer mentorship program",
            },
          ].map(({ href, label }) => (
            <Link {...{ href }} key={label}>
              <a
                className={`block text-center sm:text-left whitespace-nowrap sm:px-6 py-1 ${
                  pathname === href ? "bg-red-500 " : ""
                }`}>
                {label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
