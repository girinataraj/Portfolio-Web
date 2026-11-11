import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import {
  ArrowUpRight,
  Download,
  Code as Github,
  Briefcase as Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { ExternalLink } from "@/components/portfolio";
import { site } from "@/lib/portfolio";
export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact Giri N S about software development, full-stack engineering, AI application roles, or collaboration.",
  "/contact/",
);
export default function ContactPage() {
  return (
    <div className="container contact-page">
      <div className="page-intro">
        <p className="eyebrow">
          <span className="status-dot" /> LET’S CONNECT
        </p>
        <h1>
          A conversation
          <br />
          is a good <span className="serif-word">start.</span>
        </h1>
        <p>
          I’m interested in software developer, full-stack developer, and AI
          application developer opportunities. Have a role, project, or idea to
          discuss? I’d be glad to hear from you.
        </p>
      </div>
      <a className="contact-email-card" href={`mailto:${site.email}`}>
        <span>
          <Mail aria-hidden="true" />
          <span className="eyebrow">SEND ME AN EMAIL</span>
        </span>
        <span>
          {site.email}
          <ArrowUpRight aria-hidden="true" />
        </span>
      </a>
      <div className="contact-options">
        <ExternalLink href={site.github}>
          <Github aria-hidden="true" />
          <div>
            <h2>GitHub</h2>
            <p>Explore my source code.</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </ExternalLink>
        <ExternalLink href={site.linkedin}>
          <Linkedin aria-hidden="true" />
          <div>
            <h2>LinkedIn</h2>
            <p>Connect professionally.</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </ExternalLink>
        <a href="/resume/Giri-Resume.pdf" download>
          <Download aria-hidden="true" />
          <div>
            <h2>Resume</h2>
            <p>Existing PDF; iGEN details are on this site.</p>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <p className="contact-location">
        <MapPin size={17} aria-hidden="true" />
        Erode, Tamil Nadu, India · IST (UTC+05:30)
      </p>
    </div>
  );
}
