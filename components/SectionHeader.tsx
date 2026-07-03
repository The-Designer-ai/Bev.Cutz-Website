type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.34em] text-blood">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}
