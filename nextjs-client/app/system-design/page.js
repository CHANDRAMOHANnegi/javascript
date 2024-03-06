import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/system-design/poll-system", text: "poll-system" },
  { link: "/system-design/news-feed", text: "news-feed" },
  { link: "/system-design/autocomplete", text: "autocomplete" },
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
