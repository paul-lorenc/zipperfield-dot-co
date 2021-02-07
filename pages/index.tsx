import { Container } from "@/components/Container";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import DownArrowIcon from "@/components/svgs/DownArrowIcon";
import ZFIcon from "@/components/svgs/ZFIcon";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  let flowerRef: any = useRef(null);

  useEffect(() => {
    TweenMax.from(flowerRef, 1.5, { y: 100, opacity: 0, ease: "power2.out" });
  }, []);
  return (
    <Container>
      <div className="z-1 text-black dark:text-white font-sans">
        <div
          className="zf-switch flex flex-col md:flex-row-reverse min-h-screen md:min-h-full bg-white dark:bg-black md:justify-between items-start"
          ref={(el: any) => {
            flowerRef = el;
          }}
        >
          <div className="mt-20 md:mt-28">
            <Image src="/images/flower.png" height={800} width={800} />
          </div>
          <div className="flex flex-col px-4 mt-4 md:mt-56 md:pr-12">
            <div className="font-bold text-4xl md:text-7xl max-w-lg mb-6 md:mb-8 inline-block">
              Unified Branding for your Business
            </div>
            <div className=" font-normal text-lg md:text-xl max-w-lg mb-6 md:mb-8 inline-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div className=" justify-left space-x-2 md:space-x-4 mb-4 md:mb-10">
              <button className="bg-blue-200 dark:bg-blue-800 bg-opacity-60 px-1 sm:px-3 py-1 text-xl border border-blue-50 dark:border-blue-600">
                Contact Sales
              </button>
              <button className="zf-card px-3 py-1 text-xl border">
                View Works
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-screen bg-gray-500 dark:bg-gray-900">
          hello 2
        </div>
        <div className="flex flex-col h-screen bg-gray-800 dark:bg-gray-200">
          hello 3
        </div>
      </div>
    </Container>
  );
}
