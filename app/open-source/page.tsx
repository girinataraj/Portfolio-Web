import { pageMetadata } from "@/lib/metadata";
import {
  OpenSourceSection,
  ContactSection,
  ExternalLink,
} from "@/components/portfolio";
export const metadata = pageMetadata(
  "Open source",
  "Merged contributions to Silex and Python-Markdown, with the problem, change, regression context and original pull requests.",
  "/open-source/",
);
export default function OpenSourcePage() {
  return (
    <>
      <header className="container page-intro">
        <p className="eyebrow">OPEN SOURCE / CHANGES THAT CAN BE INSPECTED</p>
        <h1>
          Small surface.
          <br />
          <span className="serif-word">Real edge cases.</span>
        </h1>
        <p>
          Contributing to existing software means understanding its contracts.
          These two merged changes address visible behavior and parsing
          correctness.
        </p>
      </header>
      <OpenSourceSection />
      <div className="container source-context">
        <article>
          <p className="eyebrow">SILEX / TYPESCRIPT</p>
          <h2>An action should match a capability.</h2>
          <p>
            The storage provider can disable logout. The editor’s Sign out
            action must respect that capability, including delayed user
            information and changing user state.
          </p>
          <p>
            The merged PR documents the scope and review context. It does not
            establish that the entire upstream test suite passed; four Windows
            baseline failures were recorded.
          </p>
          <ExternalLink
            href="https://github.com/silexlabs/Silex/pull/1935"
            className="text-link"
          >
            Inspect PR #1935 ↗
          </ExternalLink>
        </article>
        <article>
          <p className="eyebrow">PYTHON-MARKDOWN / PYTHON</p>
          <h2>URLs have more than one shape.</h2>
          <p>
            The autolink contribution expands recognized schemes, including SSH
            and Git URLs with user information. Regression tests and
            documentation accompany the parser change.
          </p>
          <p>
            The public PR discloses Codex assistance. The contribution is
            presented as the actual merged fix, with the original discussion
            available for review.
          </p>
          <ExternalLink
            href="https://github.com/Python-Markdown/markdown/pull/1675"
            className="text-link"
          >
            Inspect PR #1675 ↗
          </ExternalLink>
        </article>
      </div>
      <ContactSection />
    </>
  );
}
