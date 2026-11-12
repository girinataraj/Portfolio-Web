import { pageMetadata } from "@/lib/metadata";
import { CareerTimeline } from "@/components/engineering-explorers";
import { ContactSection } from "@/components/portfolio";
export const metadata = pageMetadata(
  "Experience",
  "Confirmed iGEN and AST internships, B.Tech IT education, and the boundaries between professional and independent project work.",
  "/experience/",
);
export default function ExperiencePage() {
  return (
    <>
      <div className="container">
        <header className="page-intro">
          <p className="eyebrow">EXPERIENCE / THE CONFIRMED RECORD</p>
          <h1>
            Learning where
            <br />
            <span className="serif-word">software lives.</span>
          </h1>
          <p>
            Two internships, undergraduate study and a growing body of
            independent work. Select a chapter to explore the verified scope.
          </p>
        </header>
        <CareerTimeline />
      </div>
      <ContactSection />
    </>
  );
}
