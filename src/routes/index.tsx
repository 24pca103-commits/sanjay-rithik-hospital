import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dermatologist in Karur | Sanjay Rithik Hospital" },
      {
        name: "description",
        content:
          "Specialist dermatology, hair restoration and US-FDA laser cosmetology in Karur under Dr. S. Kiruthika at Sanjay Rithik Hospital. Acne, melasma, scars, hair fall & glowing skin.",
      },
      { property: "og:title", content: "Dermatology & Laser Cosmetology in Karur | Sanjay Rithik Hospital" },
      {
        property: "og:description",
        content:
          "Doctor-led clinical treatments for acne, pigmentation, hair fall, scars, and anti-aging at Sanjay Rithik Hospital, Karur.",
      },
    ],
  }),
  component: LandingPage,
});
