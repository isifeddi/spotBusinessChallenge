"use client";
import React, { useState } from "react";
import { sideImages } from "@/constants";
import Image from "next/image";
import OverlayModal from "./OverlayModal";

const TitleSection = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <div className="text-[64px] leading-[64px] uppercase tracking-tighter text-woodsmoke font-archia">
          198 Avenue Liberte
        </div>
        <div className="flex mt-4 gap-[24px]">
          <div className="flex gap-[8px] items-center">
            <Image
              src="/assets/icons/location.svg"
              alt="Picture"
              width={20}
              height={20}
            />
            <div className="text-base leading-loose text-woodsmoke opacity-70">
              1875 K St NW Washington, DC 20006
            </div>
          </div>
          <div className="flex border-l-[1px] pl-6 gap-[8px] items-center">
            <Image
              src="/assets/icons/person-fill.svg"
              alt="guests"
              width={20}
              height={20}
            />
            <div className="text-base leading-loose text-woodsmoke opacity-70">
              2 Guests
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediaSection = ({ handleOpenModal }) => {
  return (
    <div className="w-[864px]">
      <div className="flex gap-4 mt-[32px]">
        <div className="flex flex-col gap-[16px]">
          {sideImages.map((element, index) => (
            <div className="relative flex-1">
              <Image
                src={element.src}
                alt={element.alt}
                width={190}
                height={158}
              />
              {index === sideImages.length - 1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <button
                    onClick={handleOpenModal}
                    className="bg-white rounded-full p-2"
                  >
                    <Image
                      src="/assets/icons/media.svg"
                      alt={element.alt}
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          style={{
            clipPath:
              "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%, 0% 50%)",
            // height: 410,
            minWidth: 656,
          }}
        >
          <Image
            src="/assets/slider/image1.png"
            alt="media1"
            width={656}
            height={410}
          />
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="flex flex-col w-full">
      <TitleSection />
      <OverlayModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <div className="flex gap-[72px]">
        <MediaSection handleOpenModal={handleOpenModal} />
      </div>
    </div>
  );
};
