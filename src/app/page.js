import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="mx-auto px-16 space-y-[200px] max-w-[1440px]">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
