import Link from "next/link";

const links = [
  { link: "/web-concepts", text: "libs" },
  { link: "/web-concepts/code-splitting", text: "code-splitting" },
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
