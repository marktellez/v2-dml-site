import Link from "next/link";
import { useRouter } from "next/router";

import BookButton from "@/ui/button/book";

export default function Header({}) {
  const { pathname } = useRouter();
  return (
    <header className="container mx-auto py-8">
      <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-start justify-between">
        <Link href="/">
          <a className="font-black text-[42px]">
            devmentor<span className="text-red-500">live</span>
          </a>
        </Link>

        {/* <div className="sm:flex sm:text-[22px] sm:gap-16 font-light flex-grow justify-center">
          {[
            {
              href: "/",
              label: "Web developer mentorship",
            },
          ].map(({ href, label }) => (
            <Link {...{ href }} key={label}>
              <a
                className={`block text-center sm:text-left whitespace-nowrap sm:px-6 py-1 border-[2px] ${
                  pathname === href
                    ? "border-transparent "
                    : "border-transparent"
                }`}>
                {label}
              </a>
            </Link>
          ))}
        </div> */}
        <div className="space-y-1">
          <BookButton />
          <div className="font-medium text-sm text-gray-100 text-center sm:text-right">
            $80 usd/hr
          </div>
        </div>
      </div>
    </header>
  );
}
