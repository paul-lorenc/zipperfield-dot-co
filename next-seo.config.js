const title = "Zipperfield";
const description = "Digital Design";
const url = "https://zipperfield.co";

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: url,
    title,
    description,
    images: [
      {
        url: `${url}/banners/`,
        alt: title,
        width: 1280,
        height: 640,
      },
    ],
  },
};

export default SEO;
