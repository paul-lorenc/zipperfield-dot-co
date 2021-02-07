import Link from "next/link";
import { useState } from "react";
import DownArrowIcon from "./svgs/DownArrowIcon";
interface Props {
  title: string;
  href: string;
  children: any;
}
export const ExpandingCard: React.FC<any> = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div className="flex flex-col border border-black dark:border-white pt-2 pb-4">
      <button
        className="z-10 flex justify-between focus:outline-none sm:pt-4 px-6 md:px-16"
        onClick={handleClick}
      >
        <div className="z-10 font-base text-cenclosedStyle ">{props.title}</div>

        {isOpen ? (
          <DownArrowIcon css="h-10 w-10 norotate" />
        ) : (
          <DownArrowIcon css="h-10 w-10 rotatearrow" />
        )}
      </button>
      <div
        className={`z-1 excardmid md:excardmidlong ${
          isOpen ? "openedStyle" : "closedStyle"
        } flex flex-col`}
      >
        <div
          className={`z-1 flex flex-col items-start ${
            isOpen ? "openedStyle" : "closedStyle"
          } mt-1`}
        >
          <div className="z-1 font-thin  text-black dark:text-gray-200 text-lg text-left pl-6 pr-1 sm:pr-6 md:pl-16 sm:pt-6 pb-1">
            {props.children}
          </div>
          <Link href={props.href}>
            <a
              className={`z-1 text-left pl-6 pr-1 md:pl-16 text-base ${
                isOpen ? "block" : "hidden"
              }`}
            >
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
