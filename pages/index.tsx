import { Container } from "@/components/Container";
import { FeaturedWork } from "@/components/FeaturedWork";
import DownArrowIcon from "@/components/svgs/DownArrowIcon";
import ZFIcon from "@/components/svgs/ZFIcon";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div className="flex flex-col font-serif w-screen px-6 md:px-10 text-black dark:text-white text-2xl font-extrabold  max-w-5xl">
        <div className="flex flex-col md:flex-row md:justify-around border md:border-none border-black dark:border-white pb-1 py-4 mt-16 md:mt-32">
          <div className="flex md:flex-col w-full px-4 md:px-0 text-2xl md:text-5xl font-bold md:py-20 text-left text-md">
            <p>{"Your Seed,"}</p>
            <p> {"Our Garden"}</p>
          </div>
          <p className="flex w-full px-4 text-xl md:text-2xl font-thin py-4 md:py-20 text-black dark:text-gray-200">
            We combine modern web technologies with creative design to deliver
            high performance web applications that are crafted in your image.
          </p>
        </div>
        <div className="flex md:hidden flex-col md:flex-row font-thin items-stretch w-full md:items-center justify-around md:space-x-4">
          <Link href="/about">
            <button className="flex items-center justify-center md:justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-2/5">
              <div className="flex w-full justify-between px-4">
                <a className="font-normal">About</a>

                <DownArrowIcon css="h-10 w-10 transform -rotate-90" />
              </div>
            </button>
          </Link>

          <Link href="/contact">
            <button className="flex items-center justify-center md:justify-between border border-black dark:border-white mt-5 px-4 py-2 md:w-2/5">
              <div className="flex w-full justify-between px-4">
                <a className="font-normal">{"Contact"}</a>
                <DownArrowIcon css="h-10 w-10 transform -rotate-90" />
              </div>
            </button>
          </Link>
        </div>
        <FeaturedWork />
      </div>
    </Container>
  );
}
