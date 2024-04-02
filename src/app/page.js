import Image from "next/image";

import { HeaderSection } from "@/components/component/header-section";
import { AboutSection } from "@/components/component/about-section";
import { Carousel } from "@/components/component/carousel";
import { Header } from "@/components/component/header";
import { Footer } from "@/components/component/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="" style={{ width: "100vw" }}>
        <Header />
      </div>
      <div className="w-full">
        <AboutSection />
      </div>
      {/* <div className="w-full">
        <Carousel />
      </div> */}
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
