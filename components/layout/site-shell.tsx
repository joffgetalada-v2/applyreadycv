import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteSidebar } from "@/components/layout/site-sidebar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#f3f0ff_42%,#eef7ff_100%)] text-slate-950">
      <SiteHeader />
      <div className="lg:flex">
        <SiteSidebar />
        <div className="min-w-0 flex-1">
          {children}
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
