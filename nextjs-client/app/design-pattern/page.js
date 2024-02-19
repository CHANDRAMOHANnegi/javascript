import Link from "next/link";

const links = [
  { link: "/libs", text: "libs" },
  { link: "/design-pattern/compound-pattern", text: "compound-pattern" },
  {
    link: "/design-pattern/render-props-pattern",
    text: "render-props-pattern",
  },
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
