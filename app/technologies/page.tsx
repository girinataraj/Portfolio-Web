import { pageMetadata } from "@/lib/metadata";
import { TechnologyLandscape } from "@/components/engineering-explorers";
import { ContactSection } from "@/components/portfolio";
export const metadata = pageMetadata(
  "Technologies",
  "Explore Giri N S’s interface, backend, data, AI, engineering and delivery technologies through verified project evidence.",
  "/technologies/",
);
export default function TechnologiesPage() {
  return (
    <>
      <div className="container">
        <header className="page-intro">
          <p className="eyebrow">TECHNOLOGIES / CONNECTED TO THE WORK</p>
          <h1>
            A landscape.
            <br />
            <span className="serif-word">Not a scorecard.</span>
          </h1>
          <p>
            Tools are useful in context. Explore a discipline to see the
            technologies, their role and the projects that substantiate them.
          </p>
        </header>
        <TechnologyLandscape />
      </div>
      <ContactSection />
    </>
  );
}
