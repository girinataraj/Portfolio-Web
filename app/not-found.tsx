import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container page-intro not-found">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        This page
        <br />
        isn’t <span className="serif-word">here.</span>
      </h1>
      <p>Let’s get you back to the work.</p>
      <Link className="button primary" href="/">
        Back to home →
      </Link>
    </div>
  );
}
