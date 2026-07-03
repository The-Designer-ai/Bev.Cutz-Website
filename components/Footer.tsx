import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-[0.24em] text-white">
            {siteConfig.businessName}
          </p>
          <p className="mt-2">{siteConfig.location}</p>
        </div>
        <div className="grid gap-1 sm:text-right">
          <a href={siteConfig.instagramUrl} className="transition hover:text-white" target="_blank" rel="noreferrer">
            Instagram: {siteConfig.instagramHandle}
          </a>
          <p>DM: {siteConfig.contactHandle}</p>
          <p>{year} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
