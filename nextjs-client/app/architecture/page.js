import React from 'react'
import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/architecture", text: "architecture" },
  { link: "/architecture/pagination", text: "pagination" },
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
