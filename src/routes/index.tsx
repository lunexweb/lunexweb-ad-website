import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import trustBadge from "@/assets/trust.jpg";
import reviewPriya from "@/assets/Priya N.jpg";
import reviewThabo from "@/assets/Thabo M.jpg";
import reviewJohan from "@/assets/Johan V.jpg";
import reviewFatima from "@/assets/Fatima K.jpg";
import reviewMichael from "@/assets/Michael O.jpg";
import reviewLinda from "@/assets/Linda J.jpg";
import workflowImg from "@/assets/lunex-workflow.jpg";
import devsImg from "@/assets/lunex-devs.jpg";
import teamLightImg from "@/assets/lunex-team-light.jpg";
import dashboardImg from "@/assets/lunex-dashboard.jpg";
import supportImg from "@/assets/lunex-support.jpg";
import shotSolar from "@/assets/work/solarquench.jpg";
import shotMotlee from "@/assets/work/motlee.jpg";
import shotLindaJacobs from "@/assets/work/lindajacobs.jpeg";
import shotEverglow from "@/assets/work/everglow.jpg";
import shotElshadai from "@/assets/work/elshadai.jpg";
import shotDoctor from "@/assets/work/doctor.jpg";
import shotMohideen from "@/assets/work/mohideen.jpg";
import shotTshwaneng from "@/assets/work/tshwaneng.jpg";
import shotDominant from "@/assets/work/dominant.jpg";
import shotAmulak from "@/assets/work/amulak.jpg";
import shotSasteel from "@/assets/work/sasteel.jpg";
import shotSteelSolutions from "@/assets/work/steelsolutions.jpg";
import { LunexLogo, LunexMark } from "@/components/lunex-logo";
import {
  IconArrowRight,
  IconCash,
  IconChart,
  IconCheck,
  IconClock,
  IconCode,
  IconLayers,
  IconMail,
  IconPin,
  IconPlug,
  IconRocket,
  IconSearch,
  IconShield,
  IconSpeed,
  IconWhatsapp,
  IconWorkflow,
} from "@/components/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lunexweb — Websites, Systems, Social Media & Ads | South Africa" },
      {
        name: "description",
        content:
          "We build websites, custom business systems, manage social media and run ads for South African businesses. Get more customers, save time, grow your business. Free consultation.",
      },
      {
        name: "keywords",
        content:
          "web development South Africa, custom business systems, social media management, Google ads, Facebook ads, website design, business automation, TikTok marketing, Instagram management",
      },
      { property: "og:title", content: "Lunexweb — Get Found, Get Booked, Grow Your Business" },
      {
        property: "og:description",
        content:
          "Websites, systems, social media and ads for South African businesses. One team for everything you need to grow.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Lunexweb" },
      { name: "geo.region", content: "ZA" },
      { name: "geo.placename", content: "South Africa" },
    ],
    links: [
      { rel: "canonical", href: "https://www.lunexweb.co.za" },
    ],
  }),
  component: Landing,
});

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

const PAINS = [
  {
    icon: IconClock,
    title: "Your team copies the same info 5 times a day",
    body: "Orders, quotes, invoices. Same details typed into WhatsApp, email, and spreadsheets. Hours wasted every week.",
  },
  {
    icon: IconCash,
    title: "Money disappears and nobody notices",
    body: "Jobs you forgot to bill. Stock you can't find. Customers who never got called back. You only see it at month-end.",
  },
  {
    icon: IconSearch,
    title: "Your website looks good but does nothing",
    body: "Visitors come. Visitors leave. No calls. No messages. Nobody knows what to do next.",
  },
];

const SERVICES = [
  {
    icon: IconCode,
    title: "Websites that get you customers",
    body: "Visitors see what you do. They understand it. They contact you. Fast, clear, and gets you calls.",
    points: ["Loads in under 2 seconds", "Contact forms that actually work", "Shows up on Google"],
  },
  {
    icon: IconWorkflow,
    title: "Custom business systems",
    body: "Your team stops wasting hours on spreadsheets and WhatsApp. Everything they need in one place. Built exactly how you work.",
    points: ["Quotes and invoices sent automatically", "Live dashboard you can trust", "Your team gets trained"],
  },
  {
    icon: IconPlug,
    title: "Connect your tools together",
    body: "Your payment app talks to your accounting software. Your WhatsApp connects to your customer list. No more copying info between systems.",
    points: ["Payment gateways connected", "WhatsApp and email automated", "Data syncs itself"],
  },
  {
    icon: IconRocket,
    title: "Social media management",
    body: "We post for you on TikTok, Instagram and Facebook. Consistent content that keeps you visible and brings in customers.",
    points: ["Content created for you", "Posted regularly", "On-brand and professional"],
  },
  {
    icon: IconChart,
    title: "Ads that bring customers",
    body: "Google, Facebook and TikTok ads. We manage them for you. Built to bring real leads and sales, not just clicks.",
    points: ["Your budget, our expertise", "Real leads, not fake clicks", "We track what works"],
  },
  {
    icon: IconShield,
    title: "We keep it running",
    body: "We host it. We back it up. We fix it when something breaks. You focus on your business.",
    points: ["We watch it 24/7", "Automatic backups", "We answer when you call"],
  },
];

const STEPS = [
  {
    n: "01",
    icon: IconSearch,
    title: "Tell us your problem (Free)",
    body: "30-minute call. You tell us what wastes your time. We tell you how to fix it. No charge.",
  },
  {
    n: "02",
    icon: IconLayers,
    title: "You get a fixed price",
    body: "We show you exactly what we'll build. We tell you exactly what it costs. One price. No surprises.",
  },
  {
    n: "03",
    icon: IconCode,
    title: "We build it",
    body: "You see it working every week. Tell us what to change while it's easy to change.",
  },
  {
    n: "04",
    icon: IconRocket,
    title: "We launch it and watch",
    body: "We teach your team. We watch the numbers for 30 days. We fix what needs fixing.",
  },
];

const RESULTS = [
  { stat: "14 hrs", label: "Saved every week for a South African logistics company" },
  { stat: "3x", label: "More customers calling after we fixed their website" },
  { stat: "2 days", label: "Quotes now done in 2 days instead of 5" },
  { stat: "100%", label: "Every project at the price we promised" },
];

const PACKAGES = [
  {
    name: "Website",
    tag: "One time",
    body: "Get customers calling you. Fast website that shows up on Google.",
    features: [
      "Built to get you calls and messages",
      "Works perfectly on phones",
      "Loads in under 2 seconds",
      "Contact forms + WhatsApp button",
      "Shows up on Google searches",
      "Done in 2 weeks",
    ],
  },
  {
    name: "Business system",
    tag: "Most popular",
    featured: true,
    body: "Stop wasting hours on admin. We build exactly what you need to run your business.",
    features: [
      "Free call to find your problems",
      "Fixed price before we start",
      "Automatic quotes and invoices",
      "Dashboard with your important numbers",
      "We train your team",
      "We watch it work for 30 days",
    ],
  },
  {
    name: "Social media + ads",
    tag: "Monthly",
    body: "We post on your social media and run your ads. You get more customers.",
    features: [
      "TikTok, Instagram, Facebook posts",
      "Google and Facebook ads",
      "Content created for you",
      "We manage everything",
      "Track leads and sales",
      "Cancel anytime",
    ],
  },
];

const FAQ = [
  {
    q: "Where are you? Do you work with people far away?",
    a: "We work remotely with businesses all over South Africa and beyond. Everything happens on video calls. Fast, simple, no travel needed.",
  },
  {
    q: "How long does it take?",
    a: "A website takes 2 to 3 weeks. A business system takes 6 to 10 weeks. You'll see it working in the first 2 weeks.",
  },
  {
    q: "Do I own it?",
    a: "Yes. When you pay the final bill, everything is yours. The code. The data. Everything. No lock-in.",
  },
  {
    q: "What if I already have a website or system?",
    a: "We look at it first. If we can fix it, we tell you. If it needs to be rebuilt, we tell you why. We don't rebuild just because.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Lunexweb",
            "image": "https://www.lunexweb.co.za/logo.png",
            "description": "We build websites, custom business systems, manage social media and run ads for South African businesses.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "ZA",
              "addressRegion": "South Africa"
            },
            "telephone": "+27789992503",
            "email": "lunexweb@gmail.com",
            "url": "https://www.lunexweb.co.za",
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "South Africa"
            },
            "serviceType": [
              "Web Development",
              "Custom Business Systems",
              "Social Media Management",
              "Digital Advertising"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "12"
            }
          })
        }}
      />
      
      {/* Facebook Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2355566648267804');
            fbq('track', 'PageView');
          `
        }}
      />
      
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-D7CV314M41"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7CV314M41');
          `
        }}
      />
      
      <UrgencyBanner />
      <Nav />
      <Hero />
      <LogoStrip />
      <SocialProof />
      {/* PAIN: Show the problems */}
      <Pains />
      {/* TRUST: Social proof - work we've done */}
      <Work />
      <Results />
      <Testimonials />
      {/* BENEFITS: What they get */}
      <Services />
      <Process />
      <Packages />
      <MoneyBackGuarantee />
      {/* Final push */}
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingWhatsapp />
      <ExitPopup />
    </div>
  );
}

const WA_LINK = "https://wa.me/27789992503?text=Hi%20Lunexweb%2C%20I%27d%20like%20a%20quote";

function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 });
  const [hasOffer, setHasOffer] = useState(true); // Changed to true by default for testing
  
  useEffect(() => {
    // Check if user has seen the offer before
    const offerData = localStorage.getItem('lunexweb_first_time_offer');
    
    if (!offerData) {
      // First time visitor - set offer expiry (3 days from now)
      const expiryTime = Date.now() + (3 * 24 * 60 * 60 * 1000); // 3 days
      localStorage.setItem('lunexweb_first_time_offer', JSON.stringify({
        expiryTime,
        claimed: false
      }));
      setHasOffer(true);
    } else {
      const data = JSON.parse(offerData);
      const now = Date.now();
      
      // Check if offer is still valid
      if (now < data.expiryTime && !data.claimed) {
        setHasOffer(true);
        
        // Update countdown with milliseconds
        const timer = setInterval(() => {
          const remaining = data.expiryTime - Date.now();
          
          if (remaining <= 0) {
            setHasOffer(false);
            clearInterval(timer);
          } else {
            const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            const ms = Math.floor((remaining % 1000) / 10); // Centiseconds (00-99)
            
            setTimeLeft({ days, hours, minutes, seconds, ms });
          }
        }, 50); // Update every 50ms for smooth stopwatch effect
        
        return () => clearInterval(timer);
      } else if (now >= data.expiryTime) {
        // Offer expired, reset after 30 days
        const offerCreated = data.expiryTime - (3 * 24 * 60 * 60 * 1000);
        const daysSinceExpiry = (now - data.expiryTime) / (1000 * 60 * 60 * 24);
        
        if (daysSinceExpiry > 30) {
          // Reset offer after 30 days
          localStorage.removeItem('lunexweb_first_time_offer');
          const newExpiryTime = Date.now() + (3 * 24 * 60 * 60 * 1000);
          localStorage.setItem('lunexweb_first_time_offer', JSON.stringify({
            expiryTime: newExpiryTime,
            claimed: false
          }));
          setHasOffer(true);
        }
      }
    }
    
    // Force initial countdown even if no data yet
    const initialTimer = setInterval(() => {
      const offerData = localStorage.getItem('lunexweb_first_time_offer');
      if (offerData) {
        const data = JSON.parse(offerData);
        const remaining = data.expiryTime - Date.now();
        
        if (remaining > 0) {
          const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
          const ms = Math.floor((remaining % 1000) / 10);
          
          setTimeLeft({ days, hours, minutes, seconds, ms });
        }
      }
    }, 50);
    
    return () => clearInterval(initialTimer);
  }, []);
  
  // Always show for now (debugging)
  // if (!hasOffer) return null;
  
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-[1200px] flex-row items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3">
        <div className="flex min-w-0 flex-row items-center gap-2 sm:gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-background/20 px-2.5 py-1 text-[10px] font-bold backdrop-blur-sm sm:gap-2 sm:px-3 sm:text-xs">
            🎉 <span className="hidden xs:inline">NEW CLIENT OFFER</span><span className="xs:hidden">OFFER</span>
          </span>
          <p className="truncate text-xs font-semibold sm:text-sm">
            20% OFF<span className="hidden xs:inline"> Your First Project</span>
          </p>
        </div>
        
        <a
          href={`https://wa.me/27789992503?text=${encodeURIComponent("Hi, I'd like to claim my FIRST20 discount (20% off first project)")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-red-500/90 px-2.5 py-1.5 text-white backdrop-blur-sm transition-all hover:bg-red-600 hover:shadow-lg active:scale-95 sm:gap-2 sm:px-3"
        >
          <IconClock className="size-3.5 sm:size-4" />
          <span className="num whitespace-nowrap text-xs font-bold tabular-nums sm:text-sm">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m:{String(timeLeft.seconds).padStart(2, '0')}.{String(timeLeft.ms).padStart(2, '0')}
          </span>
        </a>
      </div>
      
      {/* Mobile code display */}
      <div className="border-t border-primary-foreground/20 px-4 py-2 text-center text-xs opacity-90 sm:hidden">
        Use code: <span className="font-bold">FIRST20</span> when you WhatsApp us
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 sm:py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by businesses across South Africa
        </p>
        
        {/* Trust Badge */}
        <div className="mx-auto mb-8 flex justify-center">
          <img
            src={trustBadge}
            alt="Trusted by South African businesses"
            className="h-auto w-full max-w-[280px] sm:max-w-[320px]"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-muted-foreground sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">47+</p>
            <p className="mt-1 text-xs">Businesses helped</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">100%</p>
            <p className="mt-1 text-xs">On-time delivery</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">5★</p>
            <p className="mt-1 text-xs">Average rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">14hrs</p>
            <p className="mt-1 text-xs">Saved per week</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MoneyBackGuarantee() {
  return (
    <section className="border-b border-border bg-primary/5">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/30">
            <IconShield className="size-8 text-primary" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
            30-Day Money-Back Guarantee
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            If you're not happy with what we build in the first 30 days, we'll refund you 100%. No questions asked. No fine print. That's how confident we are.
          </p>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-5">
              <IconCheck className="size-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">See it working first</p>
              <p className="mt-1 text-xs text-muted-foreground">You approve every step before we continue</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <IconCheck className="size-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">Fixed price, no surprises</p>
              <p className="mt-1 text-xs text-muted-foreground">You know exactly what it costs before we start</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5">
              <IconCheck className="size-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">You own everything</p>
              <p className="mt-1 text-xs text-muted-foreground">Code, data, accounts — all yours at the end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExitPopup() {
  const [show, setShow] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, ms: 0 });
  
  useEffect(() => {
    let triggered = false;
    
    // Check if offer is still valid
    const offerData = localStorage.getItem('lunexweb_first_time_offer');
    if (!offerData) return;
    
    const data = JSON.parse(offerData);
    const now = Date.now();
    
    if (now >= data.expiryTime || data.claimed) return;
    
    // Update countdown with milliseconds
    const updateCountdown = () => {
      const remaining = data.expiryTime - Date.now();
      if (remaining > 0) {
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        const ms = Math.floor((remaining % 1000) / 10); // Centiseconds (00-99)
        setTimeLeft({ hours, minutes, seconds, ms });
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 50); // Update every 50ms
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(timer);
    };
  }, []);
  
  if (!show) return null;
  
  const handleClaim = () => {
    // Mark as claimed
    const offerData = localStorage.getItem('lunexweb_first_time_offer');
    if (offerData) {
      const data = JSON.parse(offerData);
      data.claimed = true;
      localStorage.setItem('lunexweb_first_time_offer', JSON.stringify(data));
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm">
      <div className="panel relative w-full max-w-lg overflow-hidden p-0">
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 text-primary-foreground">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-background/20 px-3 py-1 text-xs font-bold backdrop-blur-sm">
              🎉 SPECIAL OFFER
            </span>
            <button
              onClick={() => setShow(false)}
              className="rounded-lg p-2 transition-colors hover:bg-background/20"
              aria-label="Close"
            >
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h3 className="mt-3 text-2xl font-bold">Wait! Don't Miss Your 20% OFF</h3>
          <p className="mt-2 text-sm opacity-90">
            Your first-time client discount expires in{' '}
            <span className="font-bold text-red-400 tabular-nums">
              {timeLeft.hours}h {timeLeft.minutes}m:{String(timeLeft.seconds).padStart(2, '0')}.{String(timeLeft.ms).padStart(2, '0')}
            </span>
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <p className="text-center text-2xl font-bold text-primary">FIRST20</p>
              <p className="mt-1 text-center text-xs text-muted-foreground">Your discount code</p>
            </div>
            
            <ul className="space-y-2 text-sm">
              {[
                "20% off your first project (max R10,000 discount)",
                "Valid for websites, systems, or social media packages",
                "Fixed price guarantee included",
                "Just mention code FIRST20 when you contact us",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <IconCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <a
              href={`https://wa.me/27789992503?text=${encodeURIComponent("Hi, I'd like to claim my FIRST20 discount (20% off first project)")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClaim}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <IconWhatsapp className="size-4.5" />
              Claim My 20% Discount Now
            </a>
            
            <p className="text-center text-xs text-muted-foreground">
              ⏰ Offer expires in{' '}
              <span className="font-bold tabular-nums text-red-500">
                {timeLeft.hours}h {timeLeft.minutes}m:{String(timeLeft.seconds).padStart(2, '0')}.{String(timeLeft.ms).padStart(2, '0')}
              </span>
              {' '}• One-time use only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingWhatsapp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lunexweb on WhatsApp"
      className={`fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow-win)] transition-all duration-300 hover:brightness-110 sm:bottom-6 sm:right-6 sm:px-4 sm:py-3.5 sm:text-sm ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <IconWhatsapp className="size-6 sm:size-5.5" />
      <span className="sm:hidden">WhatsApp</span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-4 py-3 sm:gap-8 sm:px-6 sm:py-4">
        <a href="#top" className="shrink-0">
          <LunexLogo />
        </a>
        
        {/* Desktop Nav */}
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto flex size-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.99] md:inline-flex"
        >
          <IconWhatsapp className="size-4" />
          Contact us
        </a>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 text-base font-medium transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-base font-semibold text-primary-foreground"
            >
              <IconWhatsapp className="size-5" />
              WhatsApp us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 });
  const [hasTimer, setHasTimer] = useState(false);
  
  useEffect(() => {
    const offerData = localStorage.getItem('lunexweb_first_time_offer');
    if (!offerData) {
      // Create initial offer
      const expiryTime = Date.now() + (3 * 24 * 60 * 60 * 1000);
      localStorage.setItem('lunexweb_first_time_offer', JSON.stringify({
        expiryTime,
        claimed: false
      }));
      setHasTimer(true);
    } else {
      const data = JSON.parse(offerData);
      const now = Date.now();
      
      if (now < data.expiryTime && !data.claimed) {
        setHasTimer(true);
      }
    }
    
    const timer = setInterval(() => {
      const offerData = localStorage.getItem('lunexweb_first_time_offer');
      if (offerData) {
        const data = JSON.parse(offerData);
        const remaining = data.expiryTime - Date.now();
        
        if (remaining > 0) {
          const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
          const ms = Math.floor((remaining % 1000) / 10);
          
          setTimeLeft({ days, hours, minutes, seconds, ms });
        }
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="top" className="grid-glow relative overflow-hidden border-b border-border" itemScope itemType="https://schema.org/WebPageElement">
      <div className="mx-auto grid max-w-[1200px] items-center gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:text-[11px]">
            <IconPin className="size-3.5" /> South Africa
          </span>
          <h1 className="mt-5 text-[2rem] font-semibold leading-[1.08] tracking-tight sm:mt-4 sm:text-[1.9rem] md:text-4xl lg:text-[3.1rem]">
            <span itemProp="name">We help your business</span>
            <span className="text-primary"> get found, get booked, grow</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-[15px] md:text-base" itemProp="description">
            Websites, systems, social media and ads — all in one place. Everything you need to look professional and win more customers.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center">
            <a
              href={`https://wa.me/27789992503?text=${encodeURIComponent("Hi, I'd like to claim my FIRST20 discount (20% off first project)")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-red-500 px-7 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all hover:bg-red-600 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] active:scale-[0.99] sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <IconWhatsapp className="size-5 sm:size-4.5" />
              <span>Claim 20% off</span>
              {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 && (
                <span className="ml-1.5 hidden rounded bg-white/20 px-2 py-0.5 text-xs font-bold tabular-nums backdrop-blur-sm sm:inline">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m:{String(timeLeft.seconds).padStart(2, '0')}.{String(timeLeft.ms).padStart(2, '0')}
                </span>
              )}
              <div className="absolute inset-0 -z-10 animate-pulse bg-red-400/20"></div>
            </a>
          </div>

          {/* Trust Indicators - Above the fold */}
          <div className="mt-8 space-y-4 sm:mt-6">
            {/* Trust badges row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="size-4 fill-primary text-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium">5.0 rating</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <span className="font-medium">47+ businesses helped</span>
              <div className="h-4 w-px bg-border"></div>
              <span className="font-medium">Trusted by businesses worldwide</span>
            </div>

            {/* Benefits row - larger, more visible */}
            <dl className="grid grid-cols-3 gap-4 rounded-xl border border-primary/30 bg-primary/5 p-4 sm:gap-6 sm:p-5">
              {[
                ["Fixed", "price before we start"],
                ["2 wks", "to see it working"],
                ["100%", "yours, no lock-in"],
              ].map(([stat, label]) => (
                <div key={label} className="text-center">
                  <dt className="num text-2xl font-bold text-primary sm:text-3xl">{stat}</dt>
                  <dd className="mt-1.5 text-xs leading-tight text-muted-foreground sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>

            {/* FOMO indicator */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-2 animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
              </div>
              <span className="font-medium">5 spots left this month · 12 businesses enquired this week</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block lg:-mt-32">
          <div className="panel overflow-hidden p-0">
            <img
              src={heroImg}
              alt="Lunexweb developers building a custom business system"
              width={1536}
              height={1024}
              className="h-[420px] w-full object-cover xl:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <div className="border-b border-border bg-surface/40">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>Logistics</span>
        <span>Property</span>
        <span>Construction</span>
        <span>Professional services</span>
        <span>Retail & wholesale</span>
        <span>Healthcare</span>
      </div>
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p>}
    </div>
  );
}

function Pains() {
  return (
    <section className="section-light border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <SectionHead
          eyebrow="The problem"
          title="Your business is bleeding time and money every single day"
          body="We find the leaks. Then we fix them."
          center
        />
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {PAINS.map((p) => (
            <div key={p.title} className="panel p-6 sm:p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <p.icon className="size-5.5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="panel mt-8 grid items-center gap-0 overflow-hidden p-0 sm:mt-10 lg:grid-cols-2">
          <img
            src={workflowImg}
            alt="Lunexweb team mapping a client workflow on a whiteboard"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">
              We listen first. Then we build.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We talk to your team. We watch how they work. We find what wastes time. Then we build something that fixes it. Not a template. Not a guess. Built for how YOU work.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "We map your process (you keep the docs)",
                "We only build what actually helps",
                "We train your team on what we built",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Thabo M.",
    role: "Construction Company Owner",
    company: "",
    location: "Johannesburg",
    image: reviewThabo,
    rating: 5,
    review: "We needed a system to track projects and invoices. Lunexweb built exactly what we asked for. My team learned it in one day. Now we bill clients on time, every time.",
  },
  {
    name: "Priya N.",
    role: "Law Firm Marketing Director",
    company: "",
    location: "Durban",
    image: reviewPriya,
    rating: 5,
    review: "Our old website looked good but did nothing. Lunexweb rebuilt it. Now we get 3 calls a week from people who found us on Google. Money well spent.",
  },
  {
    name: "Johan V.",
    role: "Transport Operations Manager",
    company: "",
    location: "Cape Town",
    image: reviewJohan,
    rating: 5,
    review: "They connected our WhatsApp to our system. Drivers get job details automatically. No more calling the office 20 times a day. Saved us 10 hours a week.",
  },
  {
    name: "Fatima K.",
    role: "Pharmacy Group Owner",
    company: "",
    location: "Pretoria",
    image: reviewFatima,
    rating: 5,
    review: "Fixed price. Done in 3 weeks. Everything they promised. Staff got trained. System still works perfectly 8 months later. Would hire them again.",
  },
  {
    name: "Michael O.",
    role: "Security Company Director",
    company: "",
    location: "Johannesburg",
    image: reviewMichael,
    rating: 5,
    review: "We needed quotes sent fast for tenders. They built a form that does it automatically. Took 2 weeks. Now we respond to tenders in hours, not days.",
  },
  {
    name: "Linda J.",
    role: "Real Estate Agent",
    company: "",
    location: "Cape Town",
    image: reviewLinda,
    rating: 5,
    review: "Mobile-first website with property search. Buyers can filter and contact me directly. Gets me 5 new leads every week. Best investment I made this year.",
  },
];

function Testimonials() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="Client reviews"
          title="What South African businesses say"
          body="Real feedback from business owners, managers and entrepreneurs who work with us."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="panel flex flex-col p-6"
            >
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="size-4 fill-primary text-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  onError={(e) => {
                    // If image fails to load, hide it and show initials
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                  className="size-12 shrink-0 rounded-full object-cover"
                />
                <div className="hidden size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-bold text-primary">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-border" itemScope itemType="https://schema.org/Service">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="What we do"
          title="Websites, systems, social media and ads"
          body="All in one place. Everything you need to look professional and win more customers."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="panel overflow-hidden p-0">
            <img
              src={devsImg}
              alt="Lunexweb developers writing code for a custom business system"
              width={1280}
              height={960}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>
          <div className="panel overflow-hidden p-0">
            <img
              src={teamLightImg}
              alt="Client team reviewing their new reporting dashboard with Lunexweb"
              width={1280}
              height={960}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-64"
            />
          </div>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="panel group p-7 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <s.icon className="size-5.5" />
              </span>
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <IconCheck className="size-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section-light border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="How it works"
          title="Simple. No confusing process."
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="panel relative p-7">
              <span className="num absolute right-6 top-6 text-xs font-semibold text-muted-foreground">
                {s.n}
              </span>
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <s.icon className="size-5.5" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    name: "Linda Jacobs Properties",
    sector: "Real Estate",
    url: "https://linda-jacobs.vercel.app/",
    img: shotLindaJacobs,
    blurb: "Real estate agency website. Browse properties, filter by type, contact agent directly. Built for mobile-first property searches.",
    tags: ["Website", "Property listings", "Filters", "Mobile-first"],
  },
  {
    name: "Solar Quench",
    sector: "Energy",
    url: "https://www.solarquench.co.za/",
    img: shotSolar,
    blurb: "Solar company website. Visitors book site visits. Built to catch people searching during load-shedding.",
    tags: ["Website", "Booking forms", "Google SEO"],
  },
  {
    name: "Motlee Organics",
    sector: "Direct selling",
    url: "https://www.motleeorganics.com/login",
    img: shotMotlee,
    blurb: "Members log in. See their team. Track orders. No more spreadsheets.",
    tags: ["Member portal", "Login system", "Dashboards"],
  },
  {
    name: "Everglow Community",
    sector: "Direct selling",
    url: "https://www.everglowcommunity.co.za/",
    img: shotEverglow,
    blurb: "Platform for new members. See your team. Check your payments. All in one place.",
    tags: ["Platform", "Members", "Reports"],
  },
  {
    name: "El Shadai Adonai",
    sector: "Healthcare",
    url: "https://el-shadai-adonai.vercel.app/",
    img: shotElshadai,
    blurb: "Clinic website with services and booking form. Goes straight to reception.",
    tags: ["Website", "Bookings"],
  },
  {
    name: "Doctor Showcase",
    sector: "Healthcare",
    url: "https://doctor-animated-showcase.vercel.app/",
    img: shotDoctor,
    blurb: "Doctor's practice website. Builds trust before the first visit.",
    tags: ["Website", "Animations"],
  },
  {
    name: "Mohideen Attorneys",
    sector: "Legal",
    url: "https://mohideen-attorneys.vercel.app/",
    img: shotMohideen,
    blurb: "Law firm website organized by what they do. Form gets real consultation requests.",
    tags: ["Website", "Practice areas", "Forms"],
  },
  {
    name: "Tshwaneng Security",
    sector: "Security",
    url: "https://tshwaneng-security.vercel.app/",
    img: shotTshwaneng,
    blurb: "Security company site. Built for tenders and quick quotes.",
    tags: ["Website", "Quote forms"],
  },
  {
    name: "Dominant Multi Projects",
    sector: "Security",
    url: "https://dominantmultiprojects.com/",
    img: shotDominant,
    blurb: "One company. Multiple services. Security, cleaning, projects. All on one site.",
    tags: ["Website", "Multi-service"],
  },
  {
    name: "Amulak Motors",
    sector: "Automotive",
    url: "https://amulak-motors.vercel.app/",
    img: shotAmulak,
    blurb: "Car dealership. Show stock. Filter cars. Finance questions go to WhatsApp.",
    tags: ["Car listings", "Filters", "WhatsApp"],
  },
  {
    name: "SA Steel",
    sector: "Construction",
    url: "https://sa-steel-business.vercel.app/",
    img: shotSasteel,
    blurb: "Steel supplier. Show products. Get bulk quote requests.",
    tags: ["Product catalogue", "Quote forms"],
  },
  {
    name: "Steel Solutions",
    sector: "Construction",
    url: "https://steel-solutions-nine.vercel.app/",
    img: shotSteelSolutions,
    blurb: "Steel fabrication and supply. Built for contractors and site managers.",
    tags: ["Website", "B2B"],
  },
];

const SECTORS = ["All", "Real Estate", "Energy", "Direct selling", "Healthcare", "Legal", "Security", "Automotive", "Construction"];

function Work() {
  const [sector, setSector] = useState("All");
  const shown = sector === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector);

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Selected work"
            title="Live systems and sites we've shipped"
            body="Real client builds across South African industries — every one live, fast and built around how the business actually operates."
          />
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
          >
            Start your project <IconArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                sector === s
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group relative overflow-hidden p-0 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-win)]"
            >
              <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-surface-2">
                <img
                  src={p.img}
                  alt={`${p.name} website built by Lunexweb`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {p.sector}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight">{p.name}</h3>
                  <IconArrowRight className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-surface-2 px-2 py-1 text-[0.68rem] font-medium text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


function Results() {
  return (
    <section id="results" className="border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="Real results"
          title="What happens after we build it"
          body="Less time wasted. More customers calling. More money in your pocket."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r) => (
            <div key={r.label} className="panel p-7">
              <p className="num text-3xl font-semibold text-primary">{r.stat}</p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="panel mt-8 grid items-stretch gap-0 overflow-hidden p-0 lg:grid-cols-[0.85fr_1fr]">
          <img
            src={dashboardImg}
            alt="Live business dashboard built by Lunexweb showing revenue and job status"
            width={1280}
            height={860}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="p-6 sm:p-8 lg:p-10">
            <blockquote className="text-base leading-relaxed sm:text-lg">
              &ldquo;They listened first. They learned how we quote jobs. Then they built it. Our quotes now take 2 days instead of 5. Our admin team stopped working Saturdays.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm text-muted-foreground">
              Sarah M., Operations Manager · Logistics company
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <IconCheck className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">14 hours saved per week</p>
                  <p className="text-sm text-muted-foreground">That's 60+ hours per month back to the business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconCheck className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Quote turnaround: 5 days → 2 days</p>
                  <p className="text-sm text-muted-foreground">Faster quotes = more deals closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconCheck className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">No more weekend work</p>
                  <p className="text-sm text-muted-foreground">Team morale improved, retention up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="section-light border-b border-border">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="How much it costs"
          title="One price. No surprises."
          body="Tell us your problem. We tell you exactly what it costs before we start."
          center
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "panel relative border-primary/50 p-8 ring-1 ring-primary/25"
                  : "panel p-8"
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <span
                  className={
                    p.featured
                      ? "rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground"
                      : "rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
                  }
                >
                  {p.tag}
                </span>
              </div>
              <p className="mt-4 text-xl font-semibold text-primary">Quoted per project</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  p.featured
                    ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                    : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                }
              >
                <IconWhatsapp className="size-4" />
                Contact us
              </a>
            </div>
          ))}
        </div>

        <div className="panel mt-10 grid items-center gap-0 overflow-hidden p-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">
              Not sure which one you need? Just ask.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Send us a WhatsApp with what's slowing your business down. We'll tell you what we'd
              build, how long it takes and what it costs — free.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              <IconWhatsapp className="size-4.5" />
              WhatsApp 078 999 2503
            </a>
          </div>
          <img
            src={supportImg}
            alt="Lunexweb client support consultant helping a business on a call"
            width={1024}
            height={1024}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <SectionHead eyebrow="Questions" title="Things people ask us" center />
        <div className="panel mt-12 divide-y divide-border">
          {FAQ.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="text-sm font-medium sm:text-sm">{f.q}</span>
                <span className="ml-auto text-primary">
                  <IconArrowRight
                    className={`size-4 transition-transform ${open === i ? "rotate-90" : ""}`}
                  />
                </span>
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="grid-glow border-b border-border">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div>
          <SectionHead
            eyebrow="Let's talk"
            title="Stop wasting time. Let's fix it."
            body="Free 30-minute call. Tell us your problem. We'll tell you how to fix it. No charge. No sales pitch."
          />
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <IconWhatsapp className="size-4.5 text-primary" /> WhatsApp 078 999 2503
            </a>
            <a
              href="mailto:lunexweb@gmail.com"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <IconMail className="size-4.5 text-primary" /> lunexweb@gmail.com
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <IconPin className="size-4.5 text-primary" /> Remote-first · Serving South Africa
            </p>
          </div>
        </div>

        <ProblemSelectorCard />
      </div>
    </section>
  );
}

function ProblemSelectorCard() {
  const problems = [
    {
      text: "My team copies data between systems all day",
      waMessage: "Hi Lunexweb, my team wastes hours copying data between systems. Can you help?",
    },
    {
      text: "My website gets no customers",
      waMessage: "Hi Lunexweb, my website looks good but nobody contacts us. Can you help?",
    },
    {
      text: "I need social media and ads managed",
      waMessage: "Hi Lunexweb, I need help with social media posts and running ads. Can you help?",
    },
    {
      text: "I lose track of money and jobs",
      waMessage: "Hi Lunexweb, I lose track of money and jobs. Things slip through the cracks. Can you help?",
    },
    {
      text: "Something else (I'll explain on the call)",
      waMessage: "Hi Lunexweb, I have a business problem I'd like to discuss. Can we talk?",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Problem Selector */}
      <div className="panel p-5 sm:p-7">
        <h3 className="text-lg font-semibold tracking-tight">Which problem costs you the most time?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Click the one that matches your situation
        </p>
        <div className="mt-5 space-y-2.5">
          {problems.map((problem, i) => (
            <a
              key={i}
              href={`https://wa.me/27789992503?text=${encodeURIComponent(problem.waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-xl border border-border bg-background/50 px-4 py-3.5 text-left text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/5 active:scale-[0.99]"
            >
              <IconArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{problem.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Guarantee Box */}
      <div className="panel border-primary/30 bg-primary/5 p-5 ring-1 ring-primary/20 sm:p-7">
        <h3 className="text-lg font-semibold tracking-tight">We promise</h3>
        <ul className="mt-4 space-y-3 text-sm">
          {[
            "Tell you the exact price before we start",
            "Show you working software every week",
            "Give you everything when you pay",
            "Stay available after launch",
          ].map((promise) => (
            <li key={promise} className="flex items-start gap-3">
              <IconCheck className="mt-0.5 size-4.5 shrink-0 text-primary" />
              <span className="text-muted-foreground">{promise}</span>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/27789992503?text=${encodeURIComponent("Hi Lunexweb, I'd like to talk about fixing my business problems.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-win)] transition-all hover:brightness-110 active:scale-[0.99]"
        >
          <IconWhatsapp className="size-4.5" />
          WhatsApp us now
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block rounded-2xl border border-border bg-background/50 px-4 py-3 transition-colors focus-within:border-primary/50">
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground/60"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-6 px-4 py-10 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
            <LunexMark className="size-5" />
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Lunexweb</span> — Building digital solutions for South African businesses
          </p>
        </div>
        <nav className="ml-auto flex flex-wrap gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <p className="w-full text-xs text-muted-foreground">
          078 999 2503 · Remote-first team · South Africa
        </p>
        <p className="w-full text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lunexweb (Pty) LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

