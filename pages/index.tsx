import { Container } from "@/components/Container";
import Image from "next/image";
export default function Home() {
  return (
    <Container>
      <div className="font-serif text-black dark:text-white text-2xl font-extrabold items-center justify-center mt-20 md:mt-40 max-w-2xl px-4">
        <div className="flex flex-col md:flex-row items-center border border-black dark:border-white p-4">
          <div
            className="relative w-60 lg:w-screen h-auto max-w-sm md:max-w-xl max-h-80"
            // style={{
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
              sizes="300px"
              priority
            />
          </div>
          <div className="py-20 pl-10 pr-4">Hello Yes this is Content</div>
        </div>
      </div>
    </Container>
  );
}
