import type { ReactNode } from "react";
import HotlineBar from "./HotlineBar";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <HotlineBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
