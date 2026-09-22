"use client";

import { usePathname } from "next/navigation";

// Pages listed here render without the site Nav and Footer
const STANDALONE_ROUTES = ["/links"];

export default function SiteChrome({
  nav,
  footer,
  children,
}: {
  nav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const standalone = STANDALONE_ROUTES.includes(pathname);

  return (
    <>
      {!standalone && nav}
      <main>{children}</main>
      {!standalone && footer}
    </>
  );
}
