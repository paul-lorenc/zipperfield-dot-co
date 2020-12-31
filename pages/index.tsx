import { Container } from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div className="font-serif md:h-screen w-screen px-4 text-black dark:text-white text-2xl font-extrabold mt-16 md:mt-20 max-w-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center border border-black dark:border-white px-4 pb-1">
          <div className="flex flex-col">
            <div className="pt-7 pb-2 text-md">Your Idea Our Brush</div>
            <p className="hidden md:block font-thin font-sm">
              we will we will rock you
            </p>
          </div>
          <div className="relative w-64 md:w-3/5 h-auto max-w-sm md:max-w-lg max-h-80">
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
        <div className="flex flex-col items-stretch md:items-start mb-10">
          <Link href="/works">
            <a className="flex items-start border border-black dark:border-white mt-5 px-4 py-2 pr-20 md:w-1/3">
              {"Works    ->"}
            </a>
          </Link>
          <Link href="/about">
            <a className="flex items-start border border-black dark:border-white mt-5 px-4 py-2 pr-20 md:w-1/3">
              {"About    ->"}
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
