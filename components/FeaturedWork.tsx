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
    <div className="flex flex-col text-center border border-black dark:border-white pb-4">
      <div className="md:hidden">
        <Image src="/images/flower.png" width={1000} height={1500} />
      </div>
      <div className="hidden md:block">
        <Image src="/images/home-banner.png" width={1500} height={1000} />
      </div>
      <div>
        <h4 className="text-2xl font-bold tracking-tight text-black dark:text-white pb-2">
          {"hello"}
        </h4>
        <p className="text-lg leading-5 text-black dark:text-white">
          {"world"}
        </p>
      </div>
    </div>
  );
};
