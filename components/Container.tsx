import Link from "next/link";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col font-serif">
      <nav className="sticky-nav flex text-3xl font-bold justify-between max-w-6xl w-full items-center my-2 pt-2 px-8 md:my-4 mx-auto">
        <Link href="/">
          <a>Zipperfield</a>
        </Link>
        <a>? ? ?</a>
      </nav>
    </div>
  );
};
