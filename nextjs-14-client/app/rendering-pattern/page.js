// https://www.youtube.com/watch?v=PyY8yI47Kqw&list=PLe3J6mZBq1xWbjUtvc2o-haQWgaHWw19t&index=2
import Link from "next/link";
const links = [
  { link: "/libs", text: "libs" },
  { link: "/rendering-pattern/compound-pattern", text: "compound-pattern" },
  {
    link: "/rendering-pattern/render-props-pattern",
    text: "render-props-pattern",
  },{
    link:"/rendering-pattern/container-presentational-pattern/posts",
    text:"container-presentational-pattern"
  },
  {
    link:"/rendering-pattern/hoc-pattern",
    text:"hoc-pattern"
  }
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
