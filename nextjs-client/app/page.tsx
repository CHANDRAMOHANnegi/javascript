import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css", text: "css" },
  { link: "/system-design", text: "system-design" },
  { link: "/design-pattern", text: "design-pattern" },
  { link: "/react/setState", text: "setState" },
  { link: "/web-concepts", text: "web-concepts" },
  { link: "/libs", text: "libs" },
  { link: "/machine-coding", text: "machine-coding" },
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
