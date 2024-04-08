import Link from "next/link";

const links = [
  { link: "/", text: "hello" },
  { link: "/react/cloneElements", text: "cloneElements" },
  { link: "/react/hooks/useState", text: "useState" },
  { link: "/react/hooks/useTransition", text: "useTransition" },
  { link: "/react/hooks/useLayoutEffect", text: "useLayoutEffect" },
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
