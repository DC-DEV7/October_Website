import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <section className="container section narrow">
      <h1>About {site.name}</h1>
      <p className="lead">
        We&apos;re a small team that trusts good instincts and backs them up with data.
      </p>
      <p>
        {site.name} partners with businesses to plan, design and ship digital
        products. We keep teams small, communication direct and timelines honest.
      </p>
      <h2>How we work</h2>
      <ul className="list">
        <li><strong>Listen first.</strong> Every project starts with your goals, not our toolkit.</li>
        <li><strong>Ship early.</strong> Real feedback beats long specs.</li>
        <li><strong>Measure.</strong> Analytics are built in so decisions rest on evidence.</li>
      </ul>
    </section>
  );
}
