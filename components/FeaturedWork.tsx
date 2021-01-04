import Link from "next/link";
import { Work } from "@/lib/mdx";
import Image from "next/image";
import { useState } from "react";
import DownArrowIcon from "./svgs/DownArrowIcon";
interface Props {
  title: string;
  href: string;
  children: any;
}
export const FeaturedWork: React.FC<any> = (props: Props) => {
  return (
    <div className="flex flex-col border border-black dark:border-white pt-2 pb-4">
      <div className="md:hidden">
        <Image src="/images/flower.png" width={1000} height={1500} />
      </div>
      <div className="hidden md:block">
        <Image src="/images/home-banner.png" width={1500} height={1000} />
      </div>
    </div>
  );
};
