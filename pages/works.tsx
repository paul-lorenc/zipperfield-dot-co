import { Container } from "@/components/Container";
import { NextSeo } from "next-seo";

const url: string = "https://zipperfield.co/works";
const title: string = "Completed Works - Zipperfield";
const description: string =
  "Portfolio of websites designed and built by Zipperfield";

interface Props {
  sortedPosts: any;
}

export default function Code(props: Props) {
  const sortedPosts: any = props.sortedPosts;
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
        <div className="text-black dark:text-white max-w-3xl space-y-4 items-center mt-20 md:mt-36 px-4"></div>
      </Container>
    </div>
  );
}
