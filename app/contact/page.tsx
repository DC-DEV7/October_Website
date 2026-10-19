import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/site.config";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="container section narrow">
      <h1>Contact</h1>
      <p className="lead">
        Tell us about your project. Or email us directly at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <ContactForm />
    </section>
  );
}
