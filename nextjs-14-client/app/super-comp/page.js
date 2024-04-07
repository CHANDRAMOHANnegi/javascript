import Link from "next/link";

const links = [
  { link: "/super-comp", text: "libs" },
  { link: "/super-comp/virtualized-list", text: "virtualized-list" },
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
