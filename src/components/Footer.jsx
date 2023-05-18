import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Input from "./Input";

const mainLinks = [
  [
    {
      label: "Solutions",
      class: "hover:text-indigo-500",
    },
    {
      label: "Locations",
      class: "hover:text-indigo-500",
    },
  ],
  [
    {
      label: "Contact us",
      class: "hover:text-indigo-500",
    },
    {
      label: "Enterprise",
      class: "hover:text-indigo-500",
    },
  ],
];

const footerLinks = [
  "Private office",
  "Co-working space",
  "Virtual office",
  "Meeting room",
  "Partners",
];

const secondLinks = ["Privacy Policy", "Terms & Conditions"];

const socilaMedia = [
  {
    icon: "/assets/social-media/facebook.svg",
  },
  {
    icon: "/assets/social-media/linkedin.svg",
  },
  {
    icon: "/assets/social-media/instagram.svg",
  },
  {
    icon: "/assets/social-media/youtube.svg",
  },
];

export const Footer = () => {
  const links = mainLinks.flat();
  return (
    <footer className="pb-[12px] grid grid-cols-12 grid-rows-3 border-t border-woodsmoke gap-x-[88px] max-h-[430px]">
      <div className="col-span-4 row-span-3">
        <div className="pt-10">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={177.41}
            height={52}
            className="mb-[66px]"
          />
          <p className="text-sm text-woodsmoke/60 max-w-[60%] pb-10">
            In the blog you will find fascinating articles about the life of our
            this is worxpace, also about future
          </p>
          <div className="flex gap-4">
            <Input />
            <Button>GO</Button>
          </div>
        </div>
      </div>
      <div className="col-span-8 row-span-2 border-s border-woodsmoke pb-[72px]">
        <div className="px-[184px] flex justify-between">
          <ul className="pt-10 space-y-6">
            {links.map((link) => (
              <li className="text-[22px]">
                <Link href="#">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="relative px-8">
            <ul className="pt-10 space-y-5">
              {footerLinks.map((link) => (
                <li className="text-sm">
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
            <div className="absolute w-px h-2 bg-woodsmoke top-0 left-0" />
          </div>
        </div>
      </div>
      <div className="relative col-span-8 border-s border-t border-woodsmoke pt-8">
        <div className=" flex ps-[184px]">
          <ul className="space-y-2 flex-1">
            {secondLinks.map((link) => (
              <li className="text-sm">
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-4">
            {socilaMedia.map((social) => (
              <Link
                href="#"
                className="flex border border-woodsmoke rounded-full p-[14px] w-12 h-12 items-center justify-center"
              >
                <Image src={social.icon} alt="icon" width={24} height={24} />
              </Link>
            ))}
            <div className="absolute w-px h-2 bg-woodsmoke top-0 left-[70%]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
