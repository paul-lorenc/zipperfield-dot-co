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
    TweenMax.from(flowerRef, 1.5, { y: 50, opacity: 0, ease: "power2.out" });
  }, []);
  return (
    <Container>
      <div className="z-1 text-black dark:text-white">
        <div
          className="zf-switch grid grid-cols-1  h-screen bg-white dark:bg-black mt-20"
          ref={(el: any) => {
            flowerRef = el;
          }}
        >
          {/* <div className="flex justify-left md:mt-20">
            <button className="bg-blue-200 dark:bg-blue-900 bg-opacity-60 px-3 py-1 text-xl font-bold border border-blue-50 dark:border-blue-900">
              Contact Sales
            </button>
            <button className="zf-card px-3 py-1 text-xl font-bold border">
              View Works
            </button>
          </div> */}
          <div className="mt-20">
            <Image src="/images/flower.png" height={800} width={800} />
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
