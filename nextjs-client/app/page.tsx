import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css", text: "css" },
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
