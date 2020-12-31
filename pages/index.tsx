import { Container } from "@/components/Container";
import Image from "next/image";
export default function Home() {
  return (
    <Container>
      <div className="font-serif md:h-screen text-black dark:text-white text-2xl font-extrabold mt-16 md:mt-20 max-w-3xl px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row items-center border border-black dark:border-white px-4 py-1">
          <div className="pt-7 pb-1 md:py-20 md:pl-10 md:pr-4 text-md font-s">
            Your Idea Our Brush
          </div>
          <div
            className="relative w-64 md:w-screen h-auto max-w-sm md:max-w-lg max-h-80"
            //   position: "relative",
            //   width: "200px",
            //   height: "200px",
            //   maxHeight: "200px",
            //   maxWidth: "200px",
            // }}
          >
            <Image
              src="/images/flower.png"
              width={500}
              height={700}
              layout="responsive"
              sizes="250px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch md:items-start mb-10">
          <button className="flex items-start border border-black dark:border-white mt-5 p-4 pr-20 md:w-1/3">
            {"Works    ->"}
          </button>
          <button className="flex items-start border border-black dark:border-white mt-5 p-4 pr-20 md:w-1/3">
            {"About    ->"}
          </button>
        </div>
      </div>
    </Container>
  );
}
