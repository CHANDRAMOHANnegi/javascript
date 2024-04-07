import Link from "next/link";

const links = [
  { link: "/machine-coding", text: "machine-coding" },
  { link: "/machine-coding/1.feature-flag", text: "1.feature-flag" },
  { link: "/machine-coding/2.stepper", text: "2.stepper" },
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
