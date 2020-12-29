import Link from "next/link";

export const Container: React.FC = ({ children }) => {
  let ax1 = "8%";
  let ax2 = "92%";
  let bx1 = "10%";
  let bx2 = "90%";
  let l1 = 18;
  let l2 = 23;
  return (
    <div className="flex flex-col font-serif">
      <nav className="sticky-nav flex text-3xl font-bold justify-between max-w-6xl w-full items-center my-2 pt-2 px-8 md:my-4 mx-auto">
        <Link href="/">
          <a>Zf</a>
        </Link>
        <div className="flex items-center justify-center">
          <svg height="40" width="30%">
            <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="black" />
            <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="black" />
            <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="black" />
            <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="black" />
          </svg>
          <a>O</a>
          <svg height="40" width="30%">
            <line x1={ax1} y1={l1} x2={ax2} y2={l1} stroke="black" />
            <line x1={ax1} y1={l1} x2={bx1} y2={l2} stroke="black" />
            <line x1={bx1} y1={l2} x2={bx2} y2={l2} stroke="black" />
            <line x1={ax2} y1={l1} x2={bx2} y2={l2} stroke="black" />
          </svg>
        </div>
        <a>Zf</a>
      </nav>
    </div>
  );
};
