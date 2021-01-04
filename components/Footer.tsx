import Link from "next/link";

const Footer = (props: any) => (
  <>
    <hr
      style={{
        color: "#000000",
        backgroundColor: "#000000",
        height: 0.5,
        borderColor: "#000000",
      }}
    />
    <div className="flex space-x-2">
      <Link href="/about"> About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </>
);

export default Footer;
