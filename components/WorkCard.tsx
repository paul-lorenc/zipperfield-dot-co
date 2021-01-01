import Link from "next/link";
import { Work } from "@/lib/mdx";
import Image from "next/image";
interface Props {
  work: Work;
}
export const WorkCard: React.FC<any> = (props: Props) => {
  let p: Work = props.work;
  return (
    <Link key={p.slug} href={`/works/${p.slug}`}>
      <a className="flex items-center border border-gray-800 dark:border-gray-100 hover:border-gray-700 dark:hover:border-gray-300 px-6 py-2">
        <div className="pr-4">
          {/* <Image
            src={p.src}
            height={32}
            width={32}
            quality={40}
            alt=""
            priority
            layout="fixed"
          /> */}
        </div>
        <div>
          <h4 className="text-2xl font-bold tracking-tight text-black dark:text-white pb-2">
            {p.title}
          </h4>
          <p className="text-lg leading-5 text-black dark:text-white">
            {p.excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
