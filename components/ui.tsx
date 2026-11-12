export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow">
          <span>{number}</span>
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
