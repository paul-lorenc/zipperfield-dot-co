import { Container } from "@/components/Container";
import Image from "next/image";
export default function Home() {
  return (
    <Container>
      <div className="font-serif text-2xl font-extrabold items-center mt-20 max-w-2xl">
        <Image src="/images/flower.png" width={1050} height={750} priority />
      </div>
    </Container>
  );
}
