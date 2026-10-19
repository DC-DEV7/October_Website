import Link from "next/link";
import { site } from "@/site.config";

const services = [
  { title: "Strategy", body: "Clarify the problem, the audience and what success looks like before a line of code." },
  { title: "Design", body: "Clean, usable interfaces that make the next step obvious." },
  { title: "Build", body: "Fast, modern websites and apps, deployed and measured from day one." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{site.name}</p>
          <h1>{site.tagline}</h1>
          <p className="lead">{site.description}</p>
          <div className="actions">
            <Link href="/contact" className="btn">Start a project</Link>
            <Link href="/about" className="btn btn-ghost">Learn more</Link>
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>What we do</h2>
        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
