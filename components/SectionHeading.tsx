type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#c7a45d]">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold text-[#fff4df] sm:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-xl leading-8 text-[#f2e4cf]/78">{children}</div> : null}
    </div>
  );
}
