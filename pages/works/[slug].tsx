import { getAllWorkSlugs, getWorkBySlug } from "@/lib/mdx";
import matter from "gray-matter";
import WorkLayout from "@/layouts/WorkLayout";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@/data/MDXComponents";

export default function Code({ slug, source, frontMatter }: any) {
  const content = hydrate(source, { components: MDXComponents });
  frontMatter = { ...frontMatter, slug };
  return (
    <>
      <WorkLayout frontMatter={frontMatter}>
        <article>{content}</article>
      </WorkLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllWorkSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const projectContent = await getWorkBySlug(params.slug);
  const { data, content } = matter(projectContent);
  const mdxSource = await renderToString(content, {
    // @ts-ignore
    MDXComponents,
    scope: data,
  });
  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  };
}
