import Link from "next/link";
import { useRouter } from "next/router";

import BookButton from "@/ui/button/book";

export default function Header({}) {
  const { pathname } = useRouter();
  return (
    <header className="container mx-auto py-8">
      <div className="sm:flex gap-8 items-center">
        <div className="font-black text-[42px]">
          devmentor<span className="text-red-500">live</span>
        </div>

        <div className="flex-grow" />
        <BookButton />
      </div>
    </header>
  );
}
