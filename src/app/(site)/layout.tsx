import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiBackdrop } from "@/components/AiBackdrop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AiBackdrop />
      <Header />
      <main className="relative z-10 flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
