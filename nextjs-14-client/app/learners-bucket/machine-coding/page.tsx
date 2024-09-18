import Link from "next/link";

const links = [
  { link: "/learners-bucket/machine-coding/7.editable-todo-list", text: "7.editable-todo-list" },
  { link: "/learners-bucket/machine-coding/13.detect-overlapping-circles", text: "13.detect-overlapping-circles" },
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
