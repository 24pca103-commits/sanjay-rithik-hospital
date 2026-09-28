// import { useRef, useState, type PointerEvent } from "react";
// import { ArrowLeftRight, ShieldCheck } from "lucide-react";
// import { cn } from "@/comparison/a/lib/utils";
// import case01Before from "@/comparison/a/assets/aviclear-gallery/01-before.png";
// import case01After from "@/comparison/a/assets/aviclear-gallery/01-after.png";
// import case02Before from "@/comparison/a/assets/aviclear-gallery/02-before.png";
// import case02After from "@/comparison/a/assets/aviclear-gallery/02-after.png";
// import case03Before from "@/comparison/a/assets/aviclear-gallery/03-before.png";
// import case03After from "@/comparison/a/assets/aviclear-gallery/03-after.png";
// import case04Before from "@/comparison/a/assets/aviclear-gallery/04-before.png";
// import case04After from "@/comparison/a/assets/aviclear-gallery/04-after.png";
// import case05Before from "@/comparison/a/assets/aviclear-gallery/05-before.png";
// import case05After from "@/comparison/a/assets/aviclear-gallery/05-after.png";
// import case06Before from "@/comparison/a/assets/aviclear-gallery/06-before.png";
// import case06After from "@/comparison/a/assets/aviclear-gallery/06-after.png";

// const CASES = [
//   [case01Before, case01After],
//   [case02Before, case02After],
//   [case03Before, case03After],
//   [case04Before, case04After],
//   [case05Before, case05After],
//   [case06Before, case06After],
// ] as const;

// function BeforeAfterCard({ before, after, index }: { before: string; after: string; index: number }) {
//   const surfaceRef = useRef<HTMLDivElement>(null);
//   const [position, setPosition] = useState(50);

//   function setFromPointer(event: PointerEvent<HTMLDivElement>) {
//     const bounds = event.currentTarget.getBoundingClientRect();
//     const next = ((event.clientX - bounds.left) / bounds.width) * 100;
//     setPosition(Math.min(100, Math.max(0, next)));
//   }

//   function startDrag(event: PointerEvent<HTMLDivElement>) {
//     if ((event.target as HTMLElement).closest("input, button")) return;
//     event.currentTarget.setPointerCapture(event.pointerId);
//     setFromPointer(event);
//   }

//   return (
//     <article className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft">
//       <div
//         ref={surfaceRef}
//         className="relative aspect-[4/3] select-none overflow-hidden bg-[#efe7df] [touch-action:none]"
//         onPointerDown={startDrag}
//         onPointerMove={(event) => {
//           if (event.currentTarget.hasPointerCapture(event.pointerId)) setFromPointer(event);
//         }}
//         onPointerUp={(event) => {
//           if (event.currentTarget.hasPointerCapture(event.pointerId)) {
//             setFromPointer(event);
//             event.currentTarget.releasePointerCapture(event.pointerId);
//           }
//         }}
//         onPointerCancel={(event) => {
//           if (event.currentTarget.hasPointerCapture(event.pointerId)) {
//             event.currentTarget.releasePointerCapture(event.pointerId);
//           }
//         }}
//         onDragStart={(event) => event.preventDefault()}
//       >
//         <img src={before} alt={`Acne reference example ${index + 1}, before`} draggable={false} className="absolute inset-0 size-full object-cover" />
//         <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
//           <img src={after} alt={`Acne reference example ${index + 1}, after`} draggable={false} className="absolute inset-0 size-full object-cover" />
//         </div>
//         <div className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,.2)]" style={{ left: `${position}%` }}>
//           <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-ink/85 text-white shadow-lg">
//             <ArrowLeftRight className="size-4" />
//           </span>
//         </div>
//         <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-ink/75 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">Before</span>
//         <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-clay px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-clay-foreground">After</span>
//         <label className="absolute inset-x-4 bottom-4 z-20 rounded-full border border-white/20 bg-ink/70 px-3 py-2 backdrop-blur">
//           <span className="sr-only">Drag before and after comparison {index + 1}</span>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={position}
//             onChange={(event) => setPosition(Number(event.target.value))}
//             aria-label={`Drag before and after comparison ${index + 1}`}
//             className="age-range w-full"
//           />
//         </label>
//       </div>
//       <p className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">Drag the divider to compare</p>
//     </article>
//   );
// }

// export function BeforeAfterGallery() {
//   return (
//     <section id="a-before-after" className="section-shell bg-sand">
//       <div className="mx-auto w-full max-w-6xl">
//         <div className="max-w-3xl">
//           <p className="eyebrow text-clay">Before &amp; after gallery</p>
//           <h2 className="mt-5 text-4xl leading-[1.04] sm:text-5xl">See the kind of change people explore with acne care.</h2>
//           <p className="mt-5 leading-relaxed text-muted-foreground">Move each divider to compare the reference images. Individual results vary and suitability can only be assessed during consultation.</p>
//         </div>
//         <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {CASES.map(([before, after], index) => (
//             <BeforeAfterCard key={before} before={before} after={after} index={index} />
//           ))}
//         </div>
//         <div className="mt-8 flex items-start gap-3 rounded-2xl border border-clay/20 bg-card/70 p-5 text-xs leading-relaxed text-muted-foreground">
//           <ShieldCheck className="mt-0.5 size-4 shrink-0 text-clay" />
//           <p>Warning: These photos are published for information purposes only to provide information on the nature of the intervention. They do not constitute any guarantee of results. These are reference examples from Clinique AntiAge’s AviClear gallery, not Sanjay Rithik Hospital patient results.</p>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ShieldCheck } from "lucide-react";

import beforeAfterFace from "@/assets/luxury-glow/before-after-face.png";
import beforeAfterKnee from "@/assets/luxury-glow/before-after-knee.png";
import beforeAfterLeg from "@/assets/luxury-glow/before-after-leg.png";
import headerTreatmentRoom from "@/assets/luxury-glow/header-treatment-room-teal.png";
import legSkincareGlow from "@/assets/luxury-glow/leg-skincare-glow.png";
import premiumConcernMirror from "@/assets/premium-concern-mirror.png";
import spaRoomTreatment from "@/assets/luxury-glow/spa-room-treatment.png";

const FEATURE = {
  image: premiumConcernMirror,
  title: "Skin Clarity Moment",
  detail: "A premium mirror-led visual for noticing skin changes with calm confidence.",
};

const CASES = [
  {
    image: beforeAfterFace,
    title: "Facial Skin Renewal",
    detail: "Tone, texture and visible clarity references",
  },
  {
    image: legSkincareGlow,
    title: "Smooth Skin Planning",
    detail: "Treatment goals discussed with clarity before sessions begin",
    featured: false,
  },
  {
    image: beforeAfterLeg,
    title: "Laser Hair Reduction",
    detail: "Reference visual for smooth-skin treatment goals",
    featured: false,
  },
  {
    image: headerTreatmentRoom,
    title: "Clinical Comfort",
    detail: "A calm dermatology setting with teal, premium clinical cues",
  },
  {
    image: beforeAfterKnee,
    title: "Targeted Body Care",
    detail: "Reference visual for focused treatment planning",
  },
] as const;

type PremiumGalleryCardProps = {
  image: string;
  title: string;
  detail: string;
};

function PremiumGalleryCard({
  image,
  title,
  detail,
}: PremiumGalleryCardProps) {
  return (
    <article className="premium-gallery-card">
      <div className="premium-gallery-photo">
        <img
          src={image}
          alt={title}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="premium-gallery-copy">
        <span>Premium care</span>
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
    </article>
  );
}

export function BeforeAfterGallery() {
  return (
    <section
      id="a-before-after"
      className="premium-gallery-section"
    >
      <div className="premium-gallery-shell">
        <div className="premium-gallery-editorial">
          <figure className="premium-gallery-feature">
            <img src={FEATURE.image} alt={FEATURE.title} loading="lazy" draggable="false" />
            <figcaption>
              <span>Signature visual</span>
              <strong>{FEATURE.title}</strong>
              <p>{FEATURE.detail}</p>
            </figcaption>
          </figure>
          <header className="premium-gallery-header">
            <p>
              Reference comparisons
            </p>
            <h2>Premium Skin Wellness Gallery</h2>
            <p>
              A cleaner editorial view of skin clarity, consultation-led planning and realistic
              reference outcomes, kept in a teal clinical wellness direction.
            </p>
            <div className="premium-gallery-points" aria-label="Gallery principles">
              <span>Clinical clarity</span>
              <span>Calm image rhythm</span>
              <span>Realistic references</span>
            </div>
          </header>
        </div>

        <div className="premium-gallery-grid">
          {CASES.map((item) => (
            <PremiumGalleryCard
              key={item.title}
              image={item.image}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>

        <div className="premium-gallery-note">
          <ShieldCheck />
          <p>
            Visuals are educational and brand-experience references. Suitability, sessions,
            recovery and outcomes vary and must be discussed with the dermatologist.
          </p>
        </div>
      </div>
    </section>
  );
}
