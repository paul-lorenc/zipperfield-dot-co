import { NextSeo, ArticleJsonLd } from "next-seo";

interface Props {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
}

const WorkSeo = ({ title, date, author, excerpt, slug }: Props) => {
  const url: string = `https://zipperfield.co/works/${slug}`;
  const projImage: any = {
    url: "https://zipperfield.co/banners/works-banner.png",
    alt: slug,
  };
  return (
    <>
      <NextSeo
        title={`${title} – Zipperfield`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: excerpt,
          images: [projImage],
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={date}
        datePublished={date}
        description={excerpt}
        images={[projImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Zipperfield"
        title={title}
        url={url}
      />
    </>
  );
};

export default WorkSeo;
