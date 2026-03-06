import { Navbar } from "@/components/navbar";
import dynamic from "next/dynamic";
import { HeroHeader } from "@/components/hero-header";
import { StorySection } from "@/components/story-section";

const SectionFallback = () => (
  <div
    aria-hidden="true"
    className="h-32 w-full px-6 py-24 sm:h-36 sm:px-10 sm:py-32"
  />
);

const KpisSection = dynamic(
  () => import("@/components/kpis-section").then((m) => m.KpisSection),
  { loading: () => <SectionFallback /> },
);
const CoreValuesSection = dynamic(
  () =>
    import("@/components/core-values-section").then((m) => m.CoreValuesSection),
  { loading: () => <SectionFallback /> },
);
const WhatWeBuildSection = dynamic(
  () =>
    import("@/components/what-we-build-section").then(
      (m) => m.WhatWeBuildSection,
    ),
  { loading: () => <SectionFallback /> },
);
const HowItWorksSection = dynamic(
  () =>
    import("@/components/how-it-works-section").then((m) => m.HowItWorksSection),
  { loading: () => <SectionFallback /> },
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/testimonials-section").then(
      (m) => m.TestimonialsSection,
    ),
  { loading: () => <SectionFallback /> },
);
const FinalCtaSection = dynamic(
  () =>
    import("@/components/final-cta-section").then((m) => m.FinalCtaSection),
  { loading: () => <SectionFallback /> },
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => m.Footer),
  { loading: () => <SectionFallback /> },
);

export default function LocaleHomePage() {
  return (
    <>
      <Navbar />
      <HeroHeader />
      <StorySection />
      <KpisSection />
      <CoreValuesSection />
      <WhatWeBuildSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
