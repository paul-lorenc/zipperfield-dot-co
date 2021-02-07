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
    TweenMax.from(flowerRef, 1, { y: 200, opacity: 0 });
  }, []);
  return (
    <Container>
      <div className="z-1">
        <div className="transition-colors duration-1000 flex flex-col h-screen bg-gray-200 dark:bg-gray-800">
          <div
            className="mt-12"
            ref={(el: any) => {
              flowerRef = el;
            }}
          >
            <Image src="/images/flower.png" height={1400} width={1400} />
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
