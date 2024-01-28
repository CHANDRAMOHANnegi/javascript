import Link from "next/link";

const links = [
  { link: "/libs", text: "libs" },
  { link: "/libs/react-query", text: "react-query" },
  { link: "/libs/react-test", text: "react-test" },
  { link: "/libs/react-beautiful-dnd", text: "react-beautiful-dnd" },
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
