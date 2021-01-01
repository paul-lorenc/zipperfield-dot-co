import Link from "next/link";
import { Work } from "@/lib/mdx";
import Image from "next/image";
import { useState } from "react";
import DownArrowIcon from "./svgs/DownArrowIcon";
interface Props {
  title: string;
  info: string;
  href: string;
}
export const ExpandingCard: React.FC<any> = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div className="flex flex-col border border-black dark:border-white py-4">
      <button
        className="flex justify-between focus:outline-none px-6 md:px-16"
        onClick={handleClick}
      >
        <div className="z-10 font-bold text-center e">{props.title}</div>

        {isOpen ? (
          <DownArrowIcon css="h-10 w-10 norotate" />
        ) : (
          <DownArrowIcon css="h-10 w-10 rotatearrow" />
        )}
      </button>
      <div
        className={`excardmid ${
          isOpen ? "openedStyle" : "closedStyle"
        } flex flex-col`}
      >
        <div className={`flex flex-col ${isOpen ? "block" : "hidden"} mt-3`}>
          <div className="font-thin text-left px-4 py-2">{props.info}</div>
          <a href={props.href} className="text-sm">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
