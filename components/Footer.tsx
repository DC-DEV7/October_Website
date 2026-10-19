import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} {site.name} · {site.location}
      </div>
    </footer>
  );
}
