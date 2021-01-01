import { Container } from "@/components/Container";
import { getSortedWorks } from "@/lib/mdx";
import { Work } from "@/lib/mdx";
import { WorkCard } from "@/components/WorkCard";
import { NextSeo } from "next-seo";

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
        <div className="text-black dark:text-white max-w-3xl space-y-4 items-center pt-16 md:pt-20 px-4 h-screen">
          <div className="flex flex-col justify-center items-center h-2/5 border border-black dark:border-white font-extrabold">
            Featured Project goes here
          </div>
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
