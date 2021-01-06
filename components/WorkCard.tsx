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
      <a className="flex flex-col items-center border border-gray-800 dark:border-gray-100 hover:border-gray-700 dark:hover:border-gray-300 pb-2">
        <div className="md:hidden">
          <Image src="/images/flower.png" width={1000} height={1500} />
        </div>
        <div className="hidden md:block">
          <Image src="/images/home-banner.png" width={1500} height={1000} />
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
