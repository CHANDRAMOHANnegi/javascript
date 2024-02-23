import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css", text: "css" },
  { link: "/system-design", text: "system-design" },
  { link: "/design-pattern", text: "design-pattern" },
  { link: "/react", text: "react" },
  { link: "/web-concepts", text: "web-concepts" },
  { link: "/libs", text: "libs" },
  { link: "/machine-coding", text: "machine-coding" },
  { link: "/architecture", text: "architecture" },
  { link: "/super-comp", text: "super-comp" },
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
