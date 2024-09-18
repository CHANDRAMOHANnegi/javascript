import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/css", text: "css" },
  { link: "/system-design", text: "system-design" },
  { link: "/rendering-pattern", text: "rendering-pattern" },
  { link: "/react", text: "react" },
  { link: "/web-concepts", text: "web-concepts" },
  { link: "/libs", text: "libs" },
  { link: "/machine-coding", text: "machine-coding" },
  { link: "/architecture", text: "architecture" },
  { link: "/super-comp", text: "super-comp" },
  { link: "/lib-implement", text: "lib-implement" },
  { link: "/hooks", text: "hooks" },
  { link: "/learners-bucket/machine-coding", text: "learners-bucket/machine-coding" },
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
