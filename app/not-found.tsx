import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section narrow">
      <h1>Page not found</h1>
      <p><Link href="/">Back to home</Link></p>
    </section>
  );
}
