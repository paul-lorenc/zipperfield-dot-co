import { Container } from "@/components/Container";
import { getSortedWorks } from "@/lib/mdx";
import { Work } from "@/lib/mdx";
import { WorkCard } from "@/components/WorkCard";
import { NextSeo } from "next-seo";
import { FeaturedWork } from "@/components/FeaturedWork";

const url: string = "https://zipperfield.co/works";
const title: string = "Completed Works - Zipperfield";
const description: string =
  "Portfolio of websites designed and built by Zipperfield";

interface Props {
  sortedPosts: Work[];
}

export default function Code(props: Props) {
  const sortedPosts: Work[] = props.sortedPosts;
  return (
    <div className="bg-white dark:bg-black">
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
        <div className="text-black dark:text-white max-w-3xl space-y-4 items-center mt-20 md:mt-36 px-4 h-screen">
          <FeaturedWork />
          {sortedPosts.map((w) => {
            return <WorkCard work={w} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const sortedPosts = getSortedWorks();
  return {
    props: {
      sortedPosts,
    },
  };
}
