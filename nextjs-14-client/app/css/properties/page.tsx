import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css/properties/margin", text: "margin" },
  { link: "/css/properties/position", text: "position" },
  { link: "/css/flex", text: "flex" },
];

export default function Home() {
  return (
    <main className="">
      {links.map(({ link, text }, i) => (
        <div key={i}>
          <Link href={link}>{text}</Link>
        </div>
      ))}
    </main>
  );
}
