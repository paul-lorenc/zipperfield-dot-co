import { Container } from "@/components/Container";
import ArrowsIcon from "@/components/svgs/ArrowsIcon";
import ZFIcon from "@/components/svgs/ZFIcon";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div className="font-serif h-screen w-screen px-4 text-black dark:text-white text-2xl font-extrabold mt-16 md:mt-20 max-w-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start border border-black dark:border-white md:px-4 pb-1">
          <div className="flex justify-center md:flex-col w-full px-2 md:px-0 md:w-1/2 md:pl-1 mt-1">
            <div className="flex pt-7 md:pt-12 pb-1 text-md">
              Your Idea, Our Pen
            </div>
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
        <div className="flex flex-col font-thin items-stretch w-full md:items-start">
          <Link href="/about">
            <button className="flex items-center justify-center md:justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-2/5">
              <div className="flex items-center justify-center px-4">
                <a className="font-extrabold">About</a>
                {/* <svg className="h-3 w-1/3 md:hidden">
                  <line
                    x1="10%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="currentColor"
                  />
                </svg> */}
                <div className="pl-6 md:pr-2 h-full w-3/5 md:w-2/3">
                  <ArrowsIcon />
                </div>
              </div>
            </button>
          </Link>
          <Link href="/works">
            <button className="flex items-center justify-center md:justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-2/5">
              <div className="flex items-center justify-center px-4">
                <a className="font-extrabold">{"Works"}</a>
                {/* <svg className="h-3 w-1/3 md:hidden">
                  <line
                    x1="10%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="currentColor"
                  />
                </svg> */}
                <div className="pl-6 md:pr-2 h-full w-3/5 md:w-2/3">
                  <ArrowsIcon />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
