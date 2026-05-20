
import { useState } from "react";
import styles from "./Home.module.css";

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const BotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>
);
const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const MonitorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
);
const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="gold" stroke="gold" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
);
const UsersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
);
const HeartPulseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65z" /></svg>
);
const DollarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
const ShoppingCartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);
const WifiIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
);
const NetworkIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2a10 10 0 0 1 0 20" /><path d="M12 2a10 10 0 0 0 0 20" /><path d="M2 12h20" /></svg>
);
const KeyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
);
const BarChartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
);

const THREAT_STATS = [
  { icon: <ZapIcon />, stat: "1 cyber attack every 30 seconds", desc: "The threat landscape is growing exponentially." },
  { icon: <MonitorIcon />, stat: "Traditional security tools are slow, reactive, and complex", desc: "Legacy tools slow down your defenses and drain your team." },
  { icon: <AlertIcon />, stat: "Small gaps — massive data breaches", desc: "Minimal misconfigurations damage companies' activity." },
];

const PLATFORM_FEATURES = [
  { icon: <BotIcon />, title: "AI-Powered Threat Detection", desc: "Intelligent algorithms identify anomalies before they become breaches." },
  { icon: <ZapIcon />, title: "Automated Incident Response", desc: "Block threats instantly with zero-touch automation." },
  { icon: <MonitorIcon />, title: "24/7 System Monitoring", desc: "Round-the-clock analysis with infinite-scale cloud architecture." },
  { icon: <LockIcon />, title: "Zero-Trust Security Model", desc: "Every access request is verified, validated, and logged." },
];

const CORE_FEATURES = [
  { icon: <AlertIcon />, title: "Real-Time Threat Detection", desc: "AI-powered analysis identifies and neutralizes new-age threats." },
  { icon: <BotIcon />, title: "AI & Machine Learning Engine", desc: "Self-learning algorithms adapt to the latest new threats." },
  { icon: <NetworkIcon />, title: "Zero Trust Network Access", desc: "ZTNA-based connections—never trust, always verify." },
  { icon: <BarChartIcon />, title: "Security Analytics Dashboard", desc: "Track every metric and event at a glance with real-time dashboards." },
  { icon: <LockIcon />, title: "Data Encryption", desc: "At-rest and in-transit encryption standards." },
  { icon: <KeyIcon />, title: "Role-Based Access Control", desc: "Granular permissions for every team member." },
];

const PROTECT_SEGMENTS = [
  { icon: <UsersIcon />, title: "Startups & SaaS", desc: "Scale fast without sacrificing security." },
  { icon: <BuildingIcon />, title: "Enterprises", desc: "Enterprise-grade protection." },
  { icon: <HeartPulseIcon />, title: "Healthcare", desc: "HIPAA-compliant security." },
  { icon: <DollarIcon />, title: "FinTech", desc: "PCI-DSS compliant finance protection." },
  { icon: <ShoppingCartIcon />, title: "E-commerce", desc: "Customer data, always secure." },
  { icon: <WifiIcon />, title: "Remote Teams", desc: "Secure distributed solutions." },
];

const TESTIMONIALS = [
  { stars: 5, text: "We blocked 891 of threats within minutes of deploying. This is a game changer.", name: "Sarah Chen", role: "CTO, FinTech Startup", img: "SC" },
  { stars: 5, text: "The zero trust model saved us from a potential breach. Best investment we made.", name: "Michael Rodriguez", role: "Security Director", img: "MR" },
  { stars: 5, text: "Setup in 4 hours. Impact was immediate. This is what enterprise security should be.", name: "Jennifer Lee", role: "CTO, Fortune 500 Company", img: "JL" },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started.",
    price: "Free",
    cta: "Get Started",
    highlighted: false,
    features: ["Free security scan", "Basic threat detection", "Community support", "Up to 5 users"],
  },
  {
    name: "Pro",
    tagline: "Defenders and growth.",
    price: "$299",
    period: "/month",
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
    features: ["Advanced threat detection", "24/7 monitoring", "Automated response", "Priority support", "Up to 50 users", "Custom integrations"],
  },
  {
    name: "Enterprise",
    tagline: "Custom enterprise solutions.",
    price: "Custom",
    cta: "Get Started",
    highlighted: false,
    features: ["Unlimited devices", "24/7 dedicated team", "Custom security stack", "SLA guarantee", "On-premise options", "Advanced compliance"],
  },
];

const FAQS = [
  { q: "Is my data safe with CyberShield?", a: "Yes. We use military-grade encryption, zero-trust architecture, and maintain SOC 2 Type II certification. Your data is encrypted at rest and in transit and we conduct regular third-party security audits." },
  { q: "Does it slow down my systems?", a: "No. CyberShield is designed for minimal performance impact using lightweight agents and cloud-based processing." },
  { q: "How fast is the setup?", a: "Most customers are fully operational within 4 hours. Our onboarding team guides you every step of the way." },
  { q: "Do you support cloud and on-prem?", a: "Yes. CyberShield supports hybrid deployments across AWS, Azure, GCP, and on-premises infrastructure." },
  { q: "Is it compliant with regulations?", a: "CyberShield supports GDPR, HIPAA, SOC 2, PCI-DSS, and ISO 27001 compliance frameworks out of the box." },
];


function DashboardWidget() {
  const bars = [40, 65, 50, 80, 60, 90, 75, 55, 85, 70];
  return (
    <div className={styles.dashWidget}>
      <div className={styles.dashHeader}>
        <span className={styles.dashTitle}>Security Dashboard</span>
        <span className={styles.dashLive}><span className={styles.liveDot} />Live</span>
      </div>
      <div className={styles.dashMetricRow}>
        <div className={styles.dashMetricLabel}>Threats Blocked</div>
        <div className={styles.dashMetricValue}>2,847</div>
      </div>
      <div className={styles.dashBars}>
        {bars.map((h, i) => (
          <div key={i} className={styles.dashBar} style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>
      <div className={styles.dashAlerts}>
        <div className={styles.dashAlertRow}><span className={styles.alertDotGreen} />0 active threats detected</div>
        <div className={styles.dashAlertRow}><span className={styles.alertDotGreen} />8 data plans prevented</div>
        <div className={styles.dashAlertRow}><span className={styles.alertDotYellow} />1 system health: Optimal</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Advanced Threat Protection
          </div>
          <h1 className={styles.heroTitle}>
            Cyber Security<br />
            <span className={styles.heroAccent}>Protect Your System</span>
          </h1>
          <p className={styles.heroDesc}>
            Enterprise-grade security platform that detects, prevents, and responds to cyber threats in real-time. Trusted by Fortune 500 companies.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary}>Join Us</button>
            <button className={styles.btnOutlineGreen}>Learn More</button>
          </div>
          <p className={styles.heroMeta}>⭐ 2M+ users · Trusted since Oct 2025</p>
        </div>
        <div className={styles.heroRight}>
          <DashboardWidget />
        </div>
      </div>
    </section>
  );
}


function ThreatSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Threat Is Real</h2>
          <p className={styles.sectionSub}>Your security team is overwhelmed. Your tools are outdated. Your defenses have gaps.</p>
        </div>
        <div className={styles.threatGrid}>
          {THREAT_STATS.map((t, i) => (
            <div key={i} className={styles.threatCard}>
              <div className={styles.threatIcon}>{t.icon}</div>
              <h3 className={styles.threatStat}>{t.stat}</h3>
              <p className={styles.threatDesc}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>One Platform. Complete Protection.</h2>
          <p className={styles.sectionSub}>Everything you need to secure your enterprise, simplified.</p>
        </div>
        <div className={styles.platformGrid}>
          {PLATFORM_FEATURES.map((f, i) => (
            <div key={i} className={styles.platformCard}>
              <div className={styles.platformIcon}>{f.icon}</div>
              <h3 className={styles.platformCardTitle}>{f.title}</h3>
              <p className={styles.platformCardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreFeaturesSection() {
  return (
    <section id={`${styles.section} ${styles.sectionGradient}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Features</h2>
          <p className={styles.sectionSub}>Everything your security team needs in one unified platform.</p>
        </div>
        <div className={styles.coreGrid}>
          {CORE_FEATURES.map((f, i) => (
            <div key={i} className={styles.coreCard}>
              <div className={styles.coreIcon}>{f.icon}</div>
              <h3 className={styles.coreCardTitle}>{f.title}</h3>
              <p className={styles.coreCardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeProtect() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Who We Protect</h2>
          <p className={styles.sectionSub}>Purpose-built security for every industry.</p>
        </div>
        <div className={styles.protectGrid}>
          {PROTECT_SEGMENTS.map((s, i) => (
            <div key={i} className={styles.protectCard}>
              <div className={styles.protectIcon}>{s.icon}</div>
              <h3 className={styles.protectCardTitle}>{s.title}</h3>
              <p className={styles.protectCardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Trusted by Security Leaders</h2>
          <p className={styles.sectionSub}>See why enterprises choose CyberShield for their protection.</p>
        </div>
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.stars }).map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className={styles.testimonialText}>"{t.text}"</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>{t.img}</div>
                <div>
                  <div className={styles.testimonialName}>{t.name}</div>
                  <div className={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Simple, Transparent Pricing</h2>
          <p className={styles.sectionSub}>Flexible plans that scale with your security needs.</p>
        </div>
        <div className={styles.pricingGrid}>
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`${styles.pricingCard} ${plan.highlighted ? styles.pricingHighlighted : ""}`}>
              {plan.badge && <div className={styles.pricingBadge}>{plan.badge}</div>}
              <h3 className={styles.pricingName}>{plan.name}</h3>
              <p className={styles.pricingTagline}>{plan.tagline}</p>
              <div className={styles.pricingPrice}>
                <span className={styles.pricingAmount}>{plan.price}</span>
                {plan.period && <span className={styles.pricingPeriod}>{plan.period}</span>}
              </div>
              <button className={plan.highlighted ? styles.btnPrimary : styles.btnOutlineGreen}>{plan.cta}</button>
              <ul className={styles.pricingFeatures}>
                {plan.features.map((f, j) => (
                  <li key={j} className={styles.pricingFeatureItem}>
                    <CheckIcon />
                     {f}
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

function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className={`${styles.section} ${styles.sectionDark}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <p className={styles.sectionSub}>Quick answers about CyberShield.</p>
        </div>
        <div className={styles.faqList}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openIdx === i ? styles.faqOpen : ""}`}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className={styles.faqQuestion}>
                <span>{faq.q}</span>
                <span className={`${styles.faqChevron} ${openIdx === i ? styles.faqChevronOpen : ""}`}>
                  <ChevronDownIcon />
                </span>
              </div>
              {openIdx === i && <div className={styles.faqAnswer}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <div className={styles.ctaIcon}><ShieldIcon /></div>
        <h2 className={styles.ctaTitle}>Secure Your Business<br />Before the Next Attack</h2>
        <p className={styles.ctaDesc}>
          Don't wait to be attacked. Get protected today with CyberShield's enterprise-grade security platform.
        </p>
        <div className={styles.ctaBtns}>
          <button className={styles.btnPrimary}>Start Free Trial</button>
          <button className={styles.btnOutlineLight}>Talk To Security Expert</button>
        </div>
        <p className={styles.ctaNote}>No credit card required. Free 14-day trial included.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.root}>
      <Hero />
      <ThreatSection />
      <PlatformSection />
      <CoreFeaturesSection />
      <WhoWeProtect />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
