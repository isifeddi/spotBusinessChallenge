import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between border-t border-woodsmoke mt-6 gap-24">
      <Image src="/logo.svg" width={177.41} height={52} className="pt-4" />
      <nav className="flex flex-1 justify-end">
        <ol className="flex gap-8">
          {navLinks.map((sublinks) => (
            <Section links={sublinks} />
          ))}
          <li className="relative flex flex-col">
            <ul className="self-start mt-[20px] flex flex-col gap-3 px-10">
              <li className="text-woodsmoke font-bold">
                <Link href={"#"}>LOG IN</Link>
              </li>
            </ul>
            <div className="absolute w-px h-2 bg-woodsmoke top-0 left-0" />
          </li>
        </ol>
      </nav>
      <div className="flex gap-2 mt-[20px] self-start items-center">
        <span className="w-[12px] h-[12px] bg-woodsmoke rounded-full" />
        <button className="text-woodsmoke text-sm uppercase font-bold">
          Book a visit
        </button>
      </div>
    </header>
  );
};

const Section = ({ links }) => {
  return (
    <li className="relative flex flex-col">
      <ul className="mt-[22px] flex flex-col gap-3 px-10">
        {links.map((link) => {
          return (
            <li className={link.class}>
              <Link href={"#"}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
      <div className="absolute w-px h-2 bg-woodsmoke top-0 left-0" />
    </li>
  );
};
