import { Container } from "@/components/Container";
import { ExpandingCard } from "@/components/ExpandingCard";
import { NextSeo } from "next-seo";

const url: string = "https://zipperfield.co/about";
const title: string = "About - Zipperfield";
const description: string =
  "Portfolio of websites designed and built by Zipperfield";

export default function About() {
  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          // images: [
          //   {
          //     url: "https://paul-lorenc.com/banners/code-banner.png",
          //     alt: description,
          //   },
          // ],
        }}
      />
      <div className="h-full min-h-screen flex flex-col text-center px-4 text-black dark:text-white text-3xl font-extrabold max-w-6xl"></div>
    </Container>
  );
}
