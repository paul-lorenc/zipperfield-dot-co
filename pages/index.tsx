import { Container } from "@/components/Container";
import ArrowsIcon from "@/components/svgs/ArrowsIcon";
import ZFIcon from "@/components/svgs/ZFIcon";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div className="font-serif md:h-screen w-screen px-4 text-black dark:text-white text-2xl font-extrabold mt-16 md:mt-20 max-w-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center border border-black dark:border-white px-4 pb-1">
          <div className="flex flex-col md:w-1/2 mt-1">
            <div className="pt-7 pb-1 text-md">Your Idea Our Brush</div>
            <p className="hidden md:block font-thin font-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="relative mt-2 mb-3 w-64 md:w-3/5 h-auto max-w-sm md:max-w-lg max-h-80">
            <Image
              src="/images/flower.png"
              width={500}
              height={700}
              layout="responsive"
              sizes="(max-width: 600px) 480px,
              800px"
              priority
              alt="zipperfield flower"
            />
          </div>
        </div>
        <div className="flex flex-col font-base items-stretch w-full md:items-start">
          <Link href="/works">
            <a className="flex items-center justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-1/3">
              <a>{"Works"}</a>
              <div className="pl-4 h-full w-2/3">
                <ArrowsIcon />
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a className="flex items-center justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-1/3">
              <a>{"About"}</a>
              <div className="pl-4 h-full w-2/3">
                <ArrowsIcon />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
