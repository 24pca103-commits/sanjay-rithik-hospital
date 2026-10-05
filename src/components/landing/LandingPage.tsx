import { useState, useRef, useId } from "react";
import {
  Phone,
  MessageCircle,
  Calendar,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  Activity,
  ArrowRight,
  Play,
  Pause,
  HelpCircle,
  ChevronDown,
  Layers,
  Flame,
  Zap,
  Users,
  Menu,
  X,
  Send,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";

// Assets
import hospitalLogo from "@/assets/hospital-logo.png";
import heroImage from "@/assets/anti-aging-hero-v2.jpg";
import doctorKiruthika from "@/assets/doctor-kiruthika.jpg";
import clinicOfficial from "@/assets/clinic-official.jpg";
import skinCareOfficial from "@/assets/skin-care-official.jpg";
import pinkLaserTreatment from "@/assets/luxury-glow/pink-laser-treatment.png";
import pinkTreatmentRoom from "@/assets/luxury-glow/pink-treatment-room.png";
import spaRoomTreatment from "@/assets/luxury-glow/spa-room-treatment.png";
import headerTreatmentRoom from "@/assets/luxury-glow/header-treatment-room-teal.png";
import heroTreatmentGlow from "@/assets/hero-treatment-glow.png";
import serviceAcneBreakouts from "@/assets/luxury-glow/service-acne-breakouts.png";
import servicePigmentation from "@/assets/luxury-glow/service-pigmentation.png";
import serviceScarsTexture from "@/assets/luxury-glow/service-scars-texture.png";
import serviceSensitiveSkin from "@/assets/luxury-glow/service-sensitive-skin.png";
import serviceAntiAging from "@/assets/luxury-glow/service-anti-aging-firmness.png";
import hairScalpConsultation from "@/assets/luxury-glow/hair-scalp-consultation.png";
import beforeAfterFace from "@/assets/luxury-glow/before-after-face.png";
import beforeAfterKnee from "@/assets/luxury-glow/before-after-knee.png";
import beforeAfterLeg from "@/assets/luxury-glow/before-after-leg.png";
import antiAgingReelVideo from "@/assets/videos/anti-aging-treatment-reel.mp4?url";

// Testimonials data
import { testimonials } from "@/data/testimonials";

const CLINIC_PHONE = "+91 89030 09723";
const CLINIC_PHONE_LINK = "tel:+918903009723";
const CLINIC_WHATSAPP_LINK =
  "https://wa.me/918903009723?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dermatology%20consultation%20at%20Sanjay%20Rithik%20Hospital%2C%20Karur";
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Sanjay+Rithik+Baby+Care+and+Skin+Laser+Cosmetology+Hospital+Karur";

// Skin Concerns Data
const SKIN_CONCERNS = [
  {
    id: "acne",
    name: "Acne & Active Breakouts",
    tagline: "Persistent pimples, painful cystic flares & clogged pores",
    image: serviceAcneBreakouts,
    treatments: ["Chemical Peels", "Comedone Extraction", "Anti-Acne Laser Therapy", "Oral/Topical Protocols"],
    benefits: "Stops active inflammation, regulates sebum, prevents deep pit scarring",
    time: "Visible relief in 2-4 weeks",
  },
  {
    id: "pigmentation",
    name: "Pigmentation & Melasma",
    tagline: "Dark patches, sun spots, tan & stubborn hyperpigmentation",
    image: servicePigmentation,
    treatments: ["Q-Switched Nd:YAG Laser", "Melano-Breakdown Peels", "Glutathione & Medical Facials"],
    benefits: "Directly fragments deep melanin deposits for unified, luminous skin tone",
    time: "Progressive lightening over 3-5 sessions",
  },
  {
    id: "scars",
    name: "Acne Scars & Texture",
    tagline: "Ice-pick, boxcar pitted marks & open pores",
    image: serviceScarsTexture,
    treatments: ["Fractional CO2 Laser", "Microneedling RF", "Subcision & Collagen Fill"],
    benefits: "Stimulates deep dermal collagen to lift depressions and smooth rough skin",
    time: "Long-lasting structural skin resurfacing",
  },
  {
    id: "hair",
    name: "Hair Fall & Scalp Thinning",
    tagline: "Excessive shedding, male/female pattern thinning & dandruff",
    image: hairScalpConsultation,
    treatments: ["GFC (Growth Factor Concentrate)", "PRP Therapy", "Mesotherapy", "Scalp Detox"],
    benefits: "Awakens dormant follicles, strengthens roots, significantly reduces hair drop",
    time: "Reduction in fall by session 2-3",
  },
  {
    id: "anti-aging",
    name: "Fine Lines & Anti-Aging",
    tagline: "Loss of firmness, sagging cheeks, hollows & dullness",
    image: serviceAntiAging,
    treatments: ["Collagen Induction Therapy", "Non-Surgical Tightening", "Hydrafacial Rejuvenation"],
    benefits: "Restores natural bounce, tightens facial contours without looking artificial",
    time: "Immediate glow with continuous firming",
  },
  {
    id: "sensitive",
    name: "Sensitive & Damaged Skin",
    tagline: "Redness, burning sensations, eczema & damaged barrier",
    image: serviceSensitiveSkin,
    treatments: ["Barrier Repair Therapy", "Calming LED Protocols", "Gentle Medical Hydration"],
    benefits: "Rebuilds damaged lipid mantle, calms reactivity, returns daily skin comfort",
    time: "Soothes within first session",
  },
];

// All Treatments Catalog
const TREATMENT_CATEGORIES = [
  {
    title: "Laser & Advanced Cosmetology",
    icon: Sparkles,
    items: [
      {
        name: "Q-Switched Nd:YAG Laser",
        desc: "US-FDA approved gold standard for stubborn melasma, dark spots, tattoo removal & instant skin brightening.",
        duration: "30-45 mins",
        downtime: "Zero downtime",
      },
      {
        name: "Fractional CO2 Laser",
        desc: "Deep skin resurfacing laser that rebuilds collagen fibers to erase acne scars, surgical marks and deep wrinkles.",
        duration: "45-60 mins",
        downtime: "Mild redness (2-3 days)",
      },
      {
        name: "Carbon Laser Peel (Hollywood Peel)",
        desc: "Activated carbon lotion vaporized by laser pulse to shrink enlarged pores, eliminate excess oil and impart instant party glow.",
        duration: "30 mins",
        downtime: "Zero downtime",
      },
      {
        name: "Laser Hair Reduction",
        desc: "Painless triple-wavelength laser removing unwanted facial and body hair permanently with silky-smooth results.",
        duration: "20-60 mins",
        downtime: "Zero downtime",
      },
    ],
  },
  {
    title: "Hair & Scalp Regeneration",
    icon: Zap,
    items: [
      {
        name: "GFC (Growth Factor Concentrate)",
        desc: "Next-generation autologous therapy extracting high concentrations of your own growth factors to trigger vigorous hair regrowth.",
        duration: "45 mins",
        downtime: "Zero downtime",
      },
      {
        name: "PRP Hair Therapy",
        desc: "Platelet-Rich Plasma enriched with natural bioactive peptides injected directly into thinning scalp areas to arrest hair fall.",
        duration: "45 mins",
        downtime: "Zero downtime",
      },
      {
        name: "Dandruff & Scalp Medical Detox",
        desc: "Doctor-prescribed clarifying treatment eradicating stubborn fungal flakes and restoring balanced scalp microflora.",
        duration: "30 mins",
        downtime: "Zero downtime",
      },
    ],
  },
  {
    title: "Medi-Facials & Skin Brightening",
    icon: Flame,
    items: [
      {
        name: "Hydra-Dermabrasion Glow",
        desc: "Multi-step vortex suction cleansing, painless pore extraction, and deep infusion of hydrating antioxidant serums.",
        duration: "45 mins",
        downtime: "Instant glass skin",
      },
      {
        name: "Targeted Chemical Peels",
        desc: "Custom-blended glycolic, salicylic, lactic, and TCA peels tailored for active acne, stubborn pigmentation and dullness.",
        duration: "25 mins",
        downtime: "Mild flaking (1-2 days)",
      },
      {
        name: "Under-Eye Dark Circle Therapy",
        desc: "Targeted treatment combating hollows, puffiness, and hyperpigmentation around sensitive periorbital tissue.",
        duration: "30 mins",
        downtime: "Zero downtime",
      },
    ],
  },
  {
    title: "Clinical Dermatology & Minor Procedures",
    icon: Stethoscope,
    items: [
      {
        name: "Cystic Acne & Scar Management",
        desc: "Comprehensive medical dermatologist diagnosis addressing internal hormonal and external microbial triggers.",
        duration: "Consultation based",
        downtime: "None",
      },
      {
        name: "Radiofrequency Wart, Mole & Skin Tag Removal",
        desc: "Precision RF ablation removing benign skin tags, moles, and viral warts cleanly with minimal to no scar formation.",
        duration: "15-30 mins",
        downtime: "Quick 3-day heal",
      },
      {
        name: "Eczema, Psoriasis & Allergy Management",
        desc: "Scientific dermatologist care managing chronic skin conditions with personalized medical plans and barrier rehabilitation.",
        duration: "Consultation based",
        downtime: "None",
      },
    ],
  },
];

// FAQs Data
const FAQS = [
  {
    q: "How do I know which treatment is right for my skin or hair?",
    a: "You do not need to guess! When you arrive at Sanjay Rithik Hospital, Dr. S. Kiruthika performs a comprehensive dermatoscope assessment of your skin type, pigment depth, and hair follicle health. We explain all suitable options with complete transparency before beginning any procedure.",
  },
  {
    q: "Are laser treatments painful or unsafe?",
    a: "Not at all. We utilize US-FDA cleared medical lasers equipped with advanced contact-cooling tips that protect your skin. Most patients describe the sensation as a light tingling or warm prick. For deeper resurfacing treatments, a gentle topical numbing cream is applied so you remain completely comfortable.",
  },
  {
    q: "How does clinical dermatology differ from regular beauty salon facials?",
    a: "Beauty salons only work on the dead outermost layer of skin with temporary cosmetic creams. At Sanjay Rithik Hospital, our treatments are medically formulated and administered by a qualified dermatologist. We target cellular layers, pigment-producing melanocytes, and deep collagen reserves to deliver lasting medical results.",
  },
  {
    q: "How many sessions are typically required for results?",
    a: "Medi-facials and laser toning deliver an immediate radiant glow after just 1 session. For deeper concerns like acne scars, stubborn melasma, or hair regrowth (PRP/GFC), optimal clinical outcomes generally take 3 to 6 sessions spaced 3 to 4 weeks apart.",
  },
  {
    q: "Can I book a consultation through WhatsApp or phone call?",
    a: "Yes! In fact, most of our Karur patients prefer direct WhatsApp or a quick phone call (+91 89030 09723). Our clinic reception will immediately check Dr. Kiruthika's schedule and confirm a convenient appointment time for you.",
  },
  {
    q: "Where is Sanjay Rithik Hospital located in Karur?",
    a: "We are located at 77A, Sengunthapuram Main Road, Karur 639002 — very easily accessible from all parts of the city with dedicated parking and a welcoming reception.",
  },
];

export function LandingPage() {
  const [selectedConcern, setSelectedConcern] = useState(SKIN_CONCERNS[0].id);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Assessment Quiz State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [quizConcern, setQuizConcern] = useState("Acne & Breakouts");
  const [quizDuration, setQuizDuration] = useState("A few months");
  const [quizSkinType, setQuizSkinType] = useState("Oily / Combination");
  const [quizGoal, setQuizGoal] = useState("Clear blemishes & glow");
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  // Form Booking State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formConcern, setFormConcern] = useState("Dermatology Consultation");
  const [formDate, setFormDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type: "consultation_booking",
          name: formName,
          phone: formPhone,
          primary_concern: formConcern,
          preferred_date: formDate || "Earliest available",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast.success("Consultation Request Received!", {
          description: "Our clinic reception will call you shortly to confirm your appointment.",
        });
        setFormName("");
        setFormPhone("");
        setFormDate("");
      } else {
        // Fallback friendly message
        toast.success("Request Sent!", {
          description: "You can also message us directly on WhatsApp for an immediate response.",
        });
      }
    } catch {
      toast.success("Request logged!", {
        description: "Please call +91 89030 09723 or connect on WhatsApp for immediate confirmation.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getQuizWhatsAppText = () => {
    const text = `Hi Dr. Kiruthika, I took the Skin & Hair Assessment on your website:\n• Concern: ${quizConcern}\n• Duration: ${quizDuration}\n• Skin/Scalp Type: ${quizSkinType}\n• Desired Goal: ${quizGoal}\n\nI would like to book a consultation at Sanjay Rithik Hospital, Karur.`;
    return `https://wa.me/918903009723?text=${encodeURIComponent(text)}`;
  };

  const currentConcernData = SKIN_CONCERNS.find((c) => c.id === selectedConcern) || SKIN_CONCERNS[0];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#241c18] font-sans antialiased selection:bg-[#0088b6]/20 selection:text-[#0088b6]">
      {/* Top Notification Bar */}
      <div className="bg-[#1a1412] text-[#fff8fc] text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-[#f1e7dc]">
              <MapPin className="w-3.5 h-3.5 text-[#0088b6]" />
              77A, Sengunthapuram Main Road, Karur
            </span>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="hidden sm:flex items-center gap-1 text-[#f1e7dc]/80">
              <Clock className="w-3.5 h-3.5 text-[#0088b6]" />
              Mon–Sat: 9 AM–8 PM · 24x7 Emergency
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CLINIC_PHONE_LINK}
              className="flex items-center gap-1 text-[#f1e7dc] hover:text-[#0088b6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0088b6]" />
              <span className="font-semibold">{CLINIC_PHONE}</span>
            </a>
            <a
              href={CLINIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* High-Converting Minimalist Digital Marketing Header */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7ddd3]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Hospital Identity */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img
              src={hospitalLogo}
              alt="Sanjay Rithik Hospital Logo"
              className="h-11 sm:h-12 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col justify-center shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg tracking-tight text-[#1a1412] font-serif whitespace-nowrap">
                  Sanjay Rithik Hospital
                </span>
                <span className="shrink-0 bg-[#0088b6]/10 text-[#0088b6] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap">
                  Dermatology
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#746961] font-medium whitespace-nowrap mt-0.5">
                Skin Laser & Cosmetology Centre · Karur
              </span>
            </div>
          </a>

          {/* Social Proof Trust Badge in Center (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7ddd3] shadow-xs shrink-0">
            <div className="flex text-[#ffb703]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1a1412] whitespace-nowrap">4.5 / 5.0</span>
            <span className="text-xs text-[#746961] whitespace-nowrap">
              (440+ Verified Reviews)
            </span>
          </div>

          {/* Direct Conversion Actions (Zero Distraction / High Intent) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone Call Button */}
            <a
              href={CLINIC_PHONE_LINK}
              className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#d6c7b8] text-[#1a1412] bg-white hover:bg-[#f1e7dc]/40 font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0"
            >
              <Phone className="w-4 h-4 text-[#0088b6] shrink-0" />
              <span className="hidden md:inline">{CLINIC_PHONE}</span>
              <span className="md:hidden">Call</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={CLINIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#25D366]/40 text-[#128C7E] bg-[#25D366]/10 hover:bg-[#25D366]/20 font-bold text-xs sm:text-sm transition-all shadow-xs shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Booking Button */}
            <a
              href="#booking"
              className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#0088b6] hover:bg-[#007096] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#0088b6]/25 hover:shadow-lg hover:shadow-[#0088b6]/35 shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#e8f7fa]/60 via-[#faf8f5] to-[#faf8f5]">
        {/* Subtle Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0088b6]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#006583]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7ddd3] shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#0088b6] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#746961]">
                  Specialist Dermatology & Laser Cosmetology · Karur
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1a1412] leading-[1.12] tracking-tight">
                Clear Skin, Healthy Hair &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088b6] to-[#006583]">
                  Youthful Radiance.
                </span>{" "}
                Guided by Specialist Care.
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-[#5c5048] leading-relaxed max-w-2xl">
                Personalized, doctor-led clinical solutions for acne, stubborn pigmentation, acne scars, hair thinning, and age-defying skin rejuvenation under{" "}
                <strong className="text-[#1a1412] font-semibold">Dr. S. Kiruthika</strong> at Sanjay Rithik Hospital, Karur.
              </p>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-[#3e342e]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0088b6] flex-shrink-0" />
                  <span>Dermatologist Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0088b6] flex-shrink-0" />
                  <span>US-FDA Approved Lasers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0088b6] flex-shrink-0" />
                  <span>Non-Surgical, Natural Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0088b6] flex-shrink-0" />
                  <span>440+ Verified 5-Star Reviews</span>
                </div>
              </div>

              {/* Primary Call-to-Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={CLINIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-base transition-all shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Chat with Doctor on WhatsApp</span>
                </a>
                <a
                  href={CLINIC_PHONE_LINK}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-[#f1e7dc]/40 text-[#1a1412] border border-[#d6c7b8] font-semibold text-base transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-[#0088b6]" />
                  <span>Call {CLINIC_PHONE}</span>
                </a>
              </div>

              {/* Secondary Quiz Action Link */}
              <div className="pt-1 flex items-center gap-2 text-sm text-[#746961]">
                <span>Not sure what you need?</span>
                <a
                  href="#assessment"
                  className="text-[#0088b6] font-semibold underline underline-offset-4 hover:text-[#007096] flex items-center gap-1"
                >
                  Take our 2-Minute Skin Assessment
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Proof Strip */}
              <div className="pt-4 border-t border-[#e7ddd3] flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#ffb703]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-[#1a1412] text-sm ml-1">4.5 / 5.0</span>
                  <span className="text-xs text-[#746961]">(440+ Google Reviews)</span>
                </div>
                <div className="text-xs text-[#746961] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0088b6]" />
                  <span>Karur&apos;s Landmark Healthcare Facility</span>
                </div>
              </div>
            </div>

            {/* Right Visual Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card with Doctor and Suite */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={heroImage}
                    alt="Skin and aesthetic consultation at Sanjay Rithik Hospital Karur"
                    className="w-full h-[440px] sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Doctor Highlight Tag on Image */}
                  <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-3">
                      <img
                        src={doctorKiruthika}
                        alt="Dr. S. Kiruthika Dermatologist"
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#0088b6]"
                      />
                      <div>
                        <h4 className="font-bold text-white text-base">Dr. S. Kiruthika</h4>
                        <p className="text-xs text-white/80">Consultant Dermatologist & Cosmetologist</p>
                        <p className="text-[11px] text-[#38bdf8] font-medium mt-0.5">Sanjay Rithik Hospital, Karur</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: 15+ Years Trust */}
                <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#e7ddd3] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0088b6]/10 flex items-center justify-center text-[#0088b6]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a1412]">15+ Years</p>
                    <p className="text-[11px] text-[#746961]">Hospital Excellence</p>
                  </div>
                </div>

                {/* Floating Badge 2: Modern Lasers */}
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#e7ddd3] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1a1412]">FDA-Approved</p>
                    <p className="text-[11px] text-[#746961]">Cosmetology Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS / TRUST STRIP */}
      <section className="bg-white border-y border-[#e7ddd3] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#e7ddd3]">
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-[#0088b6]">12,000+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#746961] mt-1">Patients Treated</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-[#1a1412]">4.5 ★</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#746961] mt-1">440+ Google Reviews</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-[#0088b6]">100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#746961] mt-1">Doctor-Led Care</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-serif font-bold text-[#1a1412]">24x7</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#746961] mt-1">Hospital Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHAT CONCERN ARE YOU FACING? (INTERACTIVE FINDER) */}
      <section id="concerns" className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              Targeted Medical Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              What Skin or Hair Concern Are You Facing?
            </h2>
            <p className="text-base text-[#746961]">
              Select your concern below to discover its underlying clinical cause and how our dermatologist solves it with non-invasive, lasting procedures.
            </p>
          </div>

          {/* Interactive Concern Tabs/Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {SKIN_CONCERNS.map((concern) => (
              <button
                key={concern.id}
                onClick={() => setSelectedConcern(concern.id)}
                className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedConcern === concern.id
                    ? "bg-[#0088b6] text-white shadow-md shadow-[#0088b6]/30 scale-105"
                    : "bg-white text-[#4a3f38] border border-[#e7ddd3] hover:border-[#0088b6]/50 hover:bg-[#f0f9fb]"
                }`}
              >
                {concern.name}
              </button>
            ))}
          </div>

          {/* Active Concern Detail Card */}
          <div className="mt-10 bg-white rounded-3xl border border-[#e7ddd3] p-6 sm:p-10 shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-md h-72 sm:h-80">
                  <img
                    src={currentConcernData.image}
                    alt={currentConcernData.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                      Karur Clinical Care
                    </span>
                    <h3 className="text-lg font-bold">{currentConcernData.name}</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold text-[#0088b6] uppercase tracking-wider">
                    Clinical Diagnosis
                  </span>
                  <h3 className="text-2xl font-serif text-[#1a1412] font-semibold mt-1">
                    {currentConcernData.tagline}
                  </h3>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#746961]">
                    Recommended Medical Procedures:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentConcernData.treatments.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-[#faf8f5] border border-[#e7ddd3] text-xs font-bold text-[#241c18]"
                      >
                        ✓ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e7ddd3]/80 space-y-1">
                  <p className="text-xs font-bold text-[#1a1412]">Why this works:</p>
                  <p className="text-sm text-[#5c5048]">{currentConcernData.benefits}</p>
                  <p className="text-xs font-semibold text-[#0088b6] pt-1">
                    Expected timeline: {currentConcernData.time}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/918903009723?text=${encodeURIComponent(
                      `Hi Dr. Kiruthika, I am interested in treatment for ${currentConcernData.name} at Sanjay Rithik Hospital, Karur.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-sm flex items-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuss {currentConcernData.name} on WhatsApp
                  </a>
                  <a
                    href="#booking"
                    className="px-6 py-3 rounded-xl bg-[#1a1412] hover:bg-black text-white font-semibold text-sm flex items-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Doctor Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPLETE TREATMENT PORTFOLIO */}
      <section id="treatments" className="py-20 bg-white border-t border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              Hospital Services & Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              Advanced Dermatology, Hair & Laser Cosmetology
            </h2>
            <p className="text-base text-[#746961]">
              Every treatment is selected for safety, clinically backed outcomes, and zero to minimal downtime.
            </p>
          </div>

          {/* Department Tabs */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {TREATMENT_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? "bg-[#faf8f5] border-[#0088b6] ring-2 ring-[#0088b6]/20 shadow-md"
                      : "bg-white border-[#e7ddd3] hover:border-[#0088b6]/40"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isActive ? "text-[#0088b6]" : "text-[#746961]"}`} />
                  <h3 className={`text-sm font-bold ${isActive ? "text-[#1a1412]" : "text-[#4a3f38]"}`}>
                    {cat.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Category Items Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TREATMENT_CATEGORIES[activeTab].items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] p-6 rounded-2xl border border-[#e7ddd3] hover:border-[#0088b6]/50 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-lg font-serif font-bold text-[#1a1412]">{item.name}</h4>
                    <span className="px-2.5 py-1 rounded-full bg-white text-[11px] font-semibold text-[#0088b6] border border-[#e7ddd3] whitespace-nowrap">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[#5c5048] leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#e7ddd3]/80 flex items-center justify-between text-xs">
                  <span className="text-[#746961] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    {item.downtime}
                  </span>
                  <a
                    href={`https://wa.me/918903009723?text=${encodeURIComponent(
                      `Hi Dr. Kiruthika, I would like to know more about ${item.name} at Sanjay Rithik Hospital, Karur.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0088b6] font-bold hover:underline flex items-center gap-1"
                  >
                    Enquire on WhatsApp <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Showcase of Treatment Rooms */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img
                src={pinkLaserTreatment}
                alt="Laser treatment setup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">US-FDA Laser Suite</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img
                src={pinkTreatmentRoom}
                alt="Luxury Private Treatment Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">Private Aesthetic Suite</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52 group">
              <img
                src={spaRoomTreatment}
                alt="Sterile Medi-Facial Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold">Sterile Hydrafacial & PRP Station</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE 4-STEP SKIN & HAIR ASSESSMENT TOOL */}
      <section id="assessment" className="py-20 bg-gradient-to-b from-[#faf8f5] to-[#e8f7fa]/60 border-t border-[#e7ddd3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              Free 2-Minute Diagnostic Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              Check What Your Skin & Hair Needs
            </h2>
            <p className="text-base text-[#746961] max-w-xl mx-auto">
              Answer 4 simple questions to receive immediate tailored recommendations and direct WhatsApp advice from Dr. Kiruthika.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-3xl border border-[#e7ddd3] p-6 sm:p-10 shadow-xl">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e7ddd3]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#746961]">
                Step {assessmentStep} of 4
              </span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-2 rounded-full transition-all ${
                      step === assessmentStep
                        ? "w-8 bg-[#0088b6]"
                        : step < assessmentStep
                        ? "w-4 bg-[#0088b6]/50"
                        : "w-4 bg-[#e7ddd3]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Main Concern */}
            {assessmentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#1a1412]">
                  1. What is your primary area of concern?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Acne & Active Breakouts",
                    "Stubborn Pigmentation & Melasma",
                    "Acne Scars & Pitted Texture",
                    "Hair Fall & Scalp Thinning",
                    "Fine Lines & Ageing Skin",
                    "Dullness & Uneven Skin Tone",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setQuizConcern(option);
                        setAssessmentStep(2);
                      }}
                      className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all ${
                        quizConcern === option
                          ? "bg-[#0088b6]/10 border-[#0088b6] text-[#0088b6]"
                          : "bg-[#faf8f5] border-[#e7ddd3] hover:border-[#0088b6]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Duration */}
            {assessmentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#1a1412]">
                  2. How long have you been dealing with this?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Recent flare (Less than 3 months)", "A few months to 1 year", "Long term (Over 1 year)"].map(
                    (option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setQuizDuration(option);
                          setAssessmentStep(3);
                        }}
                        className={`p-5 rounded-2xl border text-left font-semibold text-sm transition-all ${
                          quizDuration === option
                            ? "bg-[#0088b6]/10 border-[#0088b6] text-[#0088b6]"
                            : "bg-[#faf8f5] border-[#e7ddd3] hover:border-[#0088b6]"
                        }`}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() => setAssessmentStep(1)}
                  className="text-xs font-semibold text-[#746961] hover:underline"
                >
                  ← Back to previous question
                </button>
              </div>
            )}

            {/* Step 3: Skin Type */}
            {assessmentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#1a1412]">
                  3. What is your skin / scalp type?
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Oily / Acne-prone", "Dry / Flaky", "Combination", "Sensitive / Easily Red"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setQuizSkinType(option);
                        setAssessmentStep(4);
                      }}
                      className={`p-4 rounded-2xl border text-center font-semibold text-sm transition-all ${
                        quizSkinType === option
                          ? "bg-[#0088b6]/10 border-[#0088b6] text-[#0088b6]"
                          : "bg-[#faf8f5] border-[#e7ddd3] hover:border-[#0088b6]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setAssessmentStep(2)}
                  className="text-xs font-semibold text-[#746961] hover:underline"
                >
                  ← Back to previous question
                </button>
              </div>
            )}

            {/* Step 4: Primary Goal */}
            {assessmentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#1a1412]">
                  4. What is your ideal goal from treatment?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Clear blemishes & restore confidence",
                    "Stop hair fall & regrow density",
                    "Fade deep dark spots & brighten tone",
                    "Smooth pitted scars & tighten skin",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setQuizGoal(option);
                        setAssessmentSubmitted(true);
                      }}
                      className={`p-4 rounded-2xl border text-left font-semibold text-sm transition-all ${
                        quizGoal === option
                          ? "bg-[#0088b6]/10 border-[#0088b6] text-[#0088b6]"
                          : "bg-[#faf8f5] border-[#e7ddd3] hover:border-[#0088b6]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setAssessmentStep(3)}
                  className="text-xs font-semibold text-[#746961] hover:underline"
                >
                  ← Back to previous question
                </button>
              </div>
            )}

            {/* Assessment Result Card */}
            {assessmentSubmitted && (
              <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-[#faf8f5] border border-[#0088b6]/40 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0088b6] uppercase tracking-wider">
                      Personalized Recommendation
                    </span>
                    <h4 className="text-xl font-serif font-bold text-[#1a1412]">
                      Custom Protocol for {quizConcern}
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-white p-4 rounded-xl border border-[#e7ddd3]">
                  <div>
                    <span className="text-[#746961] block">Concern:</span>
                    <strong className="text-[#1a1412] font-semibold">{quizConcern}</strong>
                  </div>
                  <div>
                    <span className="text-[#746961] block">Duration:</span>
                    <strong className="text-[#1a1412] font-semibold">{quizDuration}</strong>
                  </div>
                  <div>
                    <span className="text-[#746961] block">Skin Type:</span>
                    <strong className="text-[#1a1412] font-semibold">{quizSkinType}</strong>
                  </div>
                  <div>
                    <span className="text-[#746961] block">Goal:</span>
                    <strong className="text-[#1a1412] font-semibold">{quizGoal}</strong>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-bold text-[#1a1412]">Doctor&apos;s Advice:</h5>
                  <p className="text-sm text-[#5c5048] leading-relaxed">
                    Based on your profile, we recommend a non-invasive dermatologist evaluation with targeted medical therapy (such as customized peels, Q-switched laser toning, or GFC therapy). Over-the-counter products often fail to penetrate deep enough.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getQuizWhatsAppText()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send This Result on WhatsApp to Dr. Kiruthika
                  </a>
                  <button
                    onClick={() => {
                      setAssessmentSubmitted(false);
                      setAssessmentStep(1);
                    }}
                    className="py-3.5 px-6 rounded-xl bg-white border border-[#e7ddd3] text-[#4a3f38] font-semibold text-center hover:bg-[#faf8f5]"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: MEET THE DOCTOR & HOSPITAL AUTHORITY */}
      <section id="doctor" className="py-20 bg-white border-t border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Image and Accolades */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf8f5]">
                <img
                  src={doctorKiruthika}
                  alt="Dr. S. Kiruthika - Consultant Dermatologist Sanjay Rithik Hospital"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
                    Lead Dermatologist
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">Dr. S. Kiruthika</h3>
                  <p className="text-sm text-white/90">Consultant Dermatologist & Cosmetologist</p>
                  <p className="text-xs text-white/70">Sanjay Rithik Hospital, Karur</p>
                </div>
              </div>

              {/* Verified Trust Stamp */}
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-[#e7ddd3] flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0088b6]/10 flex items-center justify-center text-[#0088b6]">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1412]">Assessment-First</p>
                  <p className="text-xs text-[#746961]">No Unnecessary Procedures</p>
                </div>
              </div>
            </div>

            {/* Doctor Bio and Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
                  Specialist Guidance
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
                  Expert Clinical Diagnosis with a Caring, Gentle Touch
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#5c5048] leading-relaxed">
                At Sanjay Rithik Hospital, our dermatology and cosmetology department is guided by a simple medical principle:{" "}
                <strong className="text-[#1a1412]">diagnose before prescribing.</strong> We take the time to inspect your skin under magnification, understand your lifestyle and medical history, and craft a treatment blueprint specifically for you.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0088b6]/10 text-[#0088b6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1412]">Honest & Transparent Advice</h4>
                    <p className="text-xs sm:text-sm text-[#746961]">
                      We do not upsell packages or promise unrealistic overnight miracles. You receive honest timelines and realistic expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0088b6]/10 text-[#0088b6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1412]">US-FDA Cleared Laser Standards</h4>
                    <p className="text-xs sm:text-sm text-[#746961]">
                      All equipment strictly meets international clinical safety guidelines, delivering deep results with zero risk to Indian skin types.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0088b6]/10 text-[#0088b6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1412]">Comprehensive Dermatology & Pediatric Care</h4>
                    <p className="text-xs sm:text-sm text-[#746961]">
                      Backed by Sanjay Rithik Hospital’s multi-specialty medical infrastructure and 24x7 emergency medical capability in Karur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={CLINIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white font-semibold text-sm flex items-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book with Dr. Kiruthika on WhatsApp
                </a>
                <a
                  href="#booking"
                  className="px-6 py-3.5 rounded-xl bg-[#1a1412] hover:bg-black text-white font-semibold text-sm flex items-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule In-Person Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Video Walkthrough / Reel Section */}
          <div className="mt-16 bg-[#faf8f5] rounded-3xl border border-[#e7ddd3] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-[#0088b6] uppercase tracking-wider">
                  Inside Sanjay Rithik Hospital
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1412] font-bold">
                  Take a Virtual Tour of Our Cosmetology Suite
                </h3>
                <p className="text-sm sm:text-base text-[#5c5048] leading-relaxed">
                  Watch our clinical environment, private procedural suites, and comfortable patient journey in Karur.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={toggleVideo}
                    className="px-5 py-3 rounded-xl bg-[#0088b6] hover:bg-[#007096] text-white font-semibold text-sm flex items-center gap-2 shadow-md shadow-[#0088b6]/20"
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    {isVideoPlaying ? "Pause Video" : "Watch Clinical Tour"}
                  </button>
                  <span className="text-xs text-[#746961]">HD Video • 1 min</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
                  <video
                    ref={videoRef}
                    src={antiAgingReelVideo}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REAL RESULTS & VERIFIED TESTIMONIALS */}
      <section id="results" className="py-20 bg-[#faf8f5] border-t border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              Real Patient Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              Transformations & Verified Patient Experiences
            </h2>
            <p className="text-base text-[#746961]">
              Read verified feedback from real Karur residents who trusted Dr. Kiruthika with their skin and hair journey.
            </p>
          </div>

          {/* Before & After Visual Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-[#e7ddd3] overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={beforeAfterFace}
                  alt="Facial pigmentation and glow transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-bold text-[#0088b6] uppercase">4 Sessions</span>
                <h4 className="text-base font-bold text-[#1a1412]">Facial Tone & Pigment Clearance</h4>
                <p className="text-xs text-[#746961]">
                  Targeted Q-Switched laser toning and medical peeling for uneven skin.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e7ddd3] overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={beforeAfterKnee}
                  alt="Skin texture and smoothing transformation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-bold text-[#0088b6] uppercase">6 Sessions</span>
                <h4 className="text-base font-bold text-[#1a1412]">Smooth Skin Texture Pathway</h4>
                <p className="text-xs text-[#746961]">
                  Comfort-led laser resurfacing and collagen restoration.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e7ddd3] overflow-hidden shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={beforeAfterLeg}
                  alt="Permanent laser hair reduction results"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-1">
                <span className="text-[11px] font-bold text-[#0088b6] uppercase">5 Sessions</span>
                <h4 className="text-base font-bold text-[#1a1412]">Permanent Hair Reduction</h4>
                <p className="text-xs text-[#746961]">
                  Painless triple-wavelength laser for silky, ingrown-free skin.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#e7ddd3] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex text-[#ffb703]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#4a3f38] leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#e7ddd3]/70 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-[#1a1412]">{review.name}</h5>
                    <p className="text-[11px] text-[#746961]">{review.meta}</p>
                  </div>
                  <span className="text-[10px] bg-[#25D366]/10 text-[#25D366] font-semibold px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: THE 5-STEP PATIENT EXPERIENCE JOURNEY */}
      <section className="py-20 bg-white border-t border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              No Stress, Complete Comfort
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              What to Expect During Your Visit
            </h2>
            <p className="text-base text-[#746961]">
              From your initial WhatsApp chat to post-procedure aftercare, here is how we care for you.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Quick Appointment",
                desc: "Book easily via WhatsApp or direct call with zero waiting queues.",
              },
              {
                step: "02",
                title: "Dermatoscope Check",
                desc: "Dr. Kiruthika inspects your skin layer depth and underlying root causes.",
              },
              {
                step: "03",
                title: "Clear Treatment Plan",
                desc: "We discuss procedure options, timelines, and costs transparently.",
              },
              {
                step: "04",
                title: "Comfortable Session",
                desc: "Painless US-FDA laser or clinical facial in a pristine private suite.",
              },
              {
                step: "05",
                title: "Post-Care Support",
                desc: "Direct follow-up instructions and aftercare guidance for lasting radiance.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] p-5 rounded-2xl border border-[#e7ddd3] relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-serif font-bold text-[#0088b6]">{s.step}</span>
                  <h4 className="text-base font-bold text-[#1a1412] mt-2 mb-1">{s.title}</h4>
                  <p className="text-xs text-[#5c5048] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-20 bg-[#faf8f5] border-t border-[#e7ddd3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0088b6] uppercase">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1a1412] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#746961]">
              Everything you need to know about safety, sessions, pricing, and clinic consultations.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#e7ddd3] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1a1412] hover:text-[#0088b6]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0088b6] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#5c5048] leading-relaxed border-t border-[#e7ddd3]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center p-6 bg-white rounded-2xl border border-[#e7ddd3]">
            <p className="text-sm font-semibold text-[#1a1412]">Have another question not listed here?</p>
            <p className="text-xs text-[#746961] mt-1">Our clinic reception is happy to guide you over WhatsApp or call.</p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={CLINIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
              </a>
              <a
                href={CLINIC_PHONE_LINK}
                className="px-5 py-2.5 rounded-xl bg-[#1a1412] text-white font-semibold text-xs flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> Call Clinic Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BOOKING FORM & CLINIC CONTACT DETAILS */}
      <section id="booking" className="py-20 bg-white border-t border-[#e7ddd3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Online Consultation Booking Form */}
            <div className="lg:col-span-7 bg-[#faf8f5] rounded-3xl border border-[#e7ddd3] p-6 sm:p-10 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold text-[#0088b6] uppercase tracking-wider">
                  Direct Appointment Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1412] font-bold mt-1">
                  Schedule Your Consultation
                </h3>
                <p className="text-sm text-[#746961] mt-1">
                  Fill out this quick form or call us directly. We will confirm your preferred timing immediately.
                </p>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4a3f38] uppercase mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7ddd3] text-sm text-[#1a1412] focus:outline-none focus:border-[#0088b6]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#4a3f38] uppercase mb-1">
                      Mobile Number (Calling & WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7ddd3] text-sm text-[#1a1412] focus:outline-none focus:border-[#0088b6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4a3f38] uppercase mb-1">
                      Primary Concern
                    </label>
                    <select
                      value={formConcern}
                      onChange={(e) => setFormConcern(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7ddd3] text-sm text-[#1a1412] focus:outline-none focus:border-[#0088b6]"
                    >
                      <option value="Dermatology Consultation">General Skin / Dermatology</option>
                      <option value="Acne & Breakouts">Acne & Active Breakouts</option>
                      <option value="Pigmentation & Melasma">Pigmentation & Melasma</option>
                      <option value="Acne Scars & Texture">Acne Scars & Pores</option>
                      <option value="Hair Fall & PRP / GFC">Hair Fall & PRP / GFC</option>
                      <option value="Anti-Aging & Firmness">Anti-Aging & Skin Tightening</option>
                      <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                      <option value="Medi-Facial / Glow">Hydrafacial / Party Glow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#4a3f38] uppercase mb-1">
                      Preferred Date / Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow Afternoon"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7ddd3] text-sm text-[#1a1412] focus:outline-none focus:border-[#0088b6]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#0088b6] hover:bg-[#007096] text-white font-bold text-base transition-all shadow-lg shadow-[#0088b6]/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Submitting Request..." : "Request Appointment"}
                </button>
              </form>

              {/* Fast WhatsApp Route */}
              <div className="pt-2 text-center border-t border-[#e7ddd3]">
                <p className="text-xs text-[#746961] mb-2">Want an instant response?</p>
                <a
                  href={CLINIC_WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Click here to message directly on WhatsApp (+91 89030 09723)
                </a>
              </div>
            </div>

            {/* Right: Hospital Location & Contact Details */}
            <div id="clinic" className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0088b6] uppercase tracking-wider">
                  Visit Sanjay Rithik Hospital
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1412] font-bold">
                  Karur Location & Contact
                </h3>
              </div>

              <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#e7ddd3] space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0088b6] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-[#1a1412] block">Hospital Address:</strong>
                    <p className="text-sm text-[#5c5048] leading-relaxed">
                      77A, Sengunthapuram Main Road,<br />
                      Karur, Tamil Nadu – 639002.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0088b6] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-[#1a1412] block">Direct Phone Line:</strong>
                    <a
                      href={CLINIC_PHONE_LINK}
                      className="text-sm text-[#0088b6] font-bold hover:underline"
                    >
                      {CLINIC_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0088b6] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-sm font-bold text-[#1a1412] block">Consultation Hours:</strong>
                    <p className="text-xs text-[#5c5048]">
                      Monday – Saturday: 9:00 AM – 8:00 PM<br />
                      Sunday: 10:00 AM – 2:00 PM<br />
                      Hospital Casualty / Emergency: 24 Hours Open
                    </p>
                  </div>
                </div>

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white border border-[#d6c7b8] hover:bg-[#f0f9fb] text-[#1a1412] font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#0088b6]" />
                  Open in Google Maps Directions
                  <ExternalLink className="w-3 h-3 text-[#746961]" />
                </a>
              </div>

              {/* Hospital Facade Photo */}
              <div className="rounded-2xl overflow-hidden border border-[#e7ddd3] shadow-md h-48">
                <img
                  src={clinicOfficial}
                  alt="Sanjay Rithik Hospital Karur Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1412] text-[#fff8fc] py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src={hospitalLogo}
                  alt="Sanjay Rithik Hospital"
                  className="h-10 w-auto brightness-0 invert"
                />
                <span className="font-serif font-bold text-lg text-white">
                  Sanjay Rithik Hospital
                </span>
              </div>
              <p className="text-xs text-white/70 max-w-sm leading-relaxed">
                Specialist Dermatology, Hair Restoration & Aesthetic Laser Cosmetology in Karur. Guided by Dr. S. Kiruthika with advanced clinical protocols and compassionate patient care.
              </p>
              <p className="text-xs text-[#38bdf8] font-semibold">
                77A, Sengunthapuram Main Road, Karur 639002 • {CLINIC_PHONE}
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-3">
                Key Services
              </h4>
              <p><a href="#treatments" className="text-white/70 hover:text-[#38bdf8]">Acne & Scar Laser Resurfacing</a></p>
              <p><a href="#treatments" className="text-white/70 hover:text-[#38bdf8]">Pigmentation & Melasma Removal</a></p>
              <p><a href="#treatments" className="text-white/70 hover:text-[#38bdf8]">GFC & PRP Hair Fall Therapy</a></p>
              <p><a href="#treatments" className="text-white/70 hover:text-[#38bdf8]">Hydrafacial & Medi-Glow Peels</a></p>
              <p><a href="#treatments" className="text-white/70 hover:text-[#38bdf8]">Permanent Laser Hair Reduction</a></p>
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-3">
                Patient Actions
              </h4>
              <p><a href={CLINIC_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#38bdf8]">Instant WhatsApp Consultation</a></p>
              <p><a href={CLINIC_PHONE_LINK} className="text-white/70 hover:text-[#38bdf8]">Call {CLINIC_PHONE}</a></p>
              <p><a href="#assessment" className="text-white/70 hover:text-[#38bdf8]">Take 2-Min Skin Check</a></p>
              <p><a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#38bdf8]">Google Maps Directions</a></p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <p>© {new Date().getFullYear()} Sanjay Rithik Hospital. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Medical Disclaimer: Information on this site is for educational purposes. Consult our dermatologist for personal medical advice.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION BAR FOR MOBILE (Direct WhatsApp & Call) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e7ddd3] p-3 sm:hidden shadow-2xl flex items-center gap-2">
        <a
          href={CLINIC_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={CLINIC_PHONE_LINK}
          className="flex-1 py-3 rounded-xl bg-[#1a1412] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
        >
          <Phone className="w-4 h-4" />
          Call Clinic
        </a>
        <a
          href="#booking"
          className="px-4 py-3 rounded-xl bg-[#0088b6] text-white font-bold text-xs flex items-center justify-center gap-1 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          Book
        </a>
      </div>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (Bottom-Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={CLINIC_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1ebd5a] transition-all hover:scale-105"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="font-bold text-sm pr-1">Chat with Doctor</span>
        </a>
      </div>
    </div>
  );
}
