import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Work {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  src: string;
}

const workDirectory = path.join(process.cwd(), "data/works");

export const getSortedWorks = () => {
  const fileNames = fs.readdirSync(workDirectory);

  const allWorkData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(workDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      ...frontmatter,
    };
  });
  return allWorkData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllWorkSlugs = () => {
  const fileNames = fs.readdirSync(workDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getWorkBySlug = async (slug: string) => {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
