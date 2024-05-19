import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css/properties", text: "properties" },
  { link: "/css/flex", text: "flex" },
  { link: "/css/grid", text: "grid" },
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
