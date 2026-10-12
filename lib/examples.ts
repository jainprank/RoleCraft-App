import type { BrandStyle, Generation, Narrative, PitchSection } from "@/lib/types";

/**
 * Showcase data for the brand gallery (`/gallery`) and the landing-page example.
 *
 * The candidate and track record come from the public profile at
 * priyankajain.vercel.app. The pitch copy and target-company brands are
 * illustrative examples, not real applications.
 */

const NAME = "Priyanka Jain";
const CONTACT = "https://www.linkedin.com/in/jainprank";
const EMAIL = "you@example.com";
const CREATED_AT = "2026-01-01T00:00:00Z";

// Career history, from the public profile.
const RESUME: Narrative["resume_bullets"] = [
  {
    company: "The Hashgraph Group",
    title: "Lead Product Owner",
    dates: "December 2025 - Present",
    bullets: [
      "Own strategy, roadmap and cross-portfolio prioritization for the H4E suite: EcoGuard, TrackTrace and Flowgenix-AI.",
      "Led Flowgenix-AI, cutting carbon-methodology processing from 4–5 months to 1–2 days.",
      "Took EcoGuard live with clients across India, the Philippines and Latin America.",
      "Built IDTrust, a decentralized identity product, using Claude from requirements through delivery.",
      "Lead and mentor a team of product owners.",
    ],
  },
  {
    company: "The Hashgraph Group",
    title: "Associate Manager · Product Manager",
    dates: "December 2024 - December 2025",
    bullets: [
      "Product management for enterprise products on Hedera.",
    ],
  },
  {
    company: "Accenture",
    title: "Lead Consultant · Functional Lead",
    dates: "November 2021 - December 2024",
    bullets: [
      "Led track-and-trace DLT work that drove a $50M supply-chain cost reduction for a global cloud provider.",
      "Led 30+ team members across several workstreams and stakeholder groups.",
      "Delivered a tokenized digital-identity platform for a major Japanese telecom.",
    ],
  },
  {
    company: "Accenture",
    title: "Senior Analyst · Scrum Master",
    dates: "December 2020 - November 2021",
    bullets: [
      "Scrum Master on blockchain delivery teams.",
    ],
  },
  {
    company: "Accenture",
    title: "Analyst · Business Analyst",
    dates: "July 2017 - December 2020",
    bullets: [
      "Business analyst on blockchain programs for global clients.",
    ],
  },
];

// Proof points, from the public profile's metrics.
const WHY_FIT_GENERIC: Narrative["why_im_a_fit"] = [
  {
    bullet:
      "Built Flowgenix-AI, a multi-agent GenAI system with human-in-the-loop checkpoints that turns carbon-methodology documents into executable workflows.",
    metric: "~98% faster",
  },
  {
    bullet:
      "Led a blockchain track-and-trace program for a global cloud provider's supply chain, with 30+ team members.",
    metric: "$50M cost reduction",
  },
  {
    bullet:
      "Turn discovery into prioritized roadmaps across a three-product enterprise portfolio, from workshops through delivery.",
    metric: "3-product portfolio",
  },
];

const ABOUT_BASE =
  "I'm a Lead Product Owner who turns complex problems into products that ship. I trained as a chemical engineer at IIT Roorkee, spent eight years at Accenture on blockchain programs, and now own a portfolio of enterprise products on Hedera. I'm most useful where the domain is hard and the stakeholders are many: carbon markets, digital identity and supply chains.";

const HEADLINE_PREFIX = "Lead Product Owner shipping GenAI and Web3 products — ";

const aboutFor = (company: string) =>
  `${ABOUT_BASE} At ${company}, I'd bring that same loop: start from the problem, price in delivery cost, and keep humans in the loop where trust matters.`;

// ── Sample landing-page generation (illustrative target company). ──

const SAMPLE_BRAND: BrandStyle = {
  primary: "#58CC02",
  secondary: "#FFFFFF",
  background: "#FFFFFF",
  headline_font: "din-round",
  body_font: "din-round",
  mood: "minimal",
  source: "brandfetch",
};

const SAMPLE_WHY_FIT: Narrative["why_im_a_fit"] = WHY_FIT_GENERIC;

const SAMPLE_PITCH: PitchSection = {
  stance: "builder",
  seed: "illustrative product opportunity for the sample company",
  title: "What I would ship at Example Co",
  problem: "Illustrative: a user problem observed in the product, with specifics.",
  hypothesis: "Illustrative: the change expected to move the target metric, and why.",
  proposed_solution: "Illustrative: the concrete experiment and how it would be validated.",
  metrics_to_track: [
    "Primary metric",
    "Secondary metric",
    "Guardrail metric",
  ],
  tradeoffs: ["Illustrative tradeoff of the proposal."],
  guardrails: ["Illustrative guardrail the change must respect."],
  evidence: [],
  confidence: 0.8,
};

function makeGeneration(args: {
  readonly company: string;
  readonly domain: string;
  readonly jobTitle: string;
  readonly shortId: string;
  readonly brand: BrandStyle;
  readonly headline: string;
  readonly about: string;
  readonly whyFit: Narrative["why_im_a_fit"];
  readonly pitch: PitchSection | null;
}): Generation {
  return {
    id: args.shortId,
    short_id: args.shortId,
    job_id: args.shortId,
    pitch_reviewed: args.pitch !== null,
    job_context: {
      job_title: args.jobTitle,
      company_name: args.company,
      company_domain: args.domain,
      jd_summary: "",
      must_have_skills: [],
      nice_to_have_skills: [],
      responsibilities: [],
      team_context: "",
      location: "Remote",
      career_level: "manager",
      pitch_suggested_stance: "builder",
      degraded: false,
    },
    brand_style: args.brand,
    narrative: {
      candidate_name: NAME,
      candidate_contact: CONTACT,
      candidate_email: EMAIL,
      headline: args.headline,
      why_im_a_fit: args.whyFit,
      about: args.about,
      cover_letter: "",
      resume_bullets: RESUME,
    },
    pitch_section: args.pitch,
    pitch_stance: args.pitch?.stance ?? null,
    zip_url: null,
    zip_size_bytes: null,
    zip_generated_at: null,
    created_at: CREATED_AT,
    download_count: 0,
  };
}

/** Sample generation shown on the landing page and the gallery lead card. */
export const DUOLINGO_EXAMPLE: Generation = makeGeneration({
  company: "Example Co",
  domain: "example.com",
  jobTitle: "Group Product Manager",
  shortId: "sample0001",
  brand: SAMPLE_BRAND,
  headline: "Lead Product Owner shipping GenAI and Web3 products — interested in building daily habits for learners.",
  about: aboutFor("Example Co"),
  whyFit: SAMPLE_WHY_FIT,
  pitch: SAMPLE_PITCH,
});

// The other sample cards: same candidate, brand-matched, framing tailored per company.
interface CardConfig {
  readonly company: string;
  readonly domain: string;
  readonly moodLabel: string;
  readonly aspiration: string;
  readonly brand: BrandStyle;
}

const OTHER_CARDS: ReadonlyArray<CardConfig> = [
  {
    company: "Notion",
    domain: "notion.so",
    moodLabel: "minimal",
    aspiration: "interested in helping new users build habits with Notion.",
    brand: { primary: "#000000", secondary: "#37352F", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
  {
    company: "Tropic",
    domain: "tropicapp.io",
    moodLabel: "editorial",
    aspiration: "interested in making spend management effortless for finance teams.",
    brand: { primary: "#6C40ED", secondary: "#323234", background: "#FFFFFF", headline_font: "Fraunces", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
  {
    company: "Atlassian",
    domain: "atlassian.com",
    moodLabel: "systematic",
    aspiration: "interested in scaling team software used by millions.",
    brand: { primary: "#0052CC", secondary: "#172B4D", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
  {
    company: "Google",
    domain: "google.com",
    moodLabel: "systematic",
    aspiration: "interested in building consumer products where small UX wins reach billions.",
    brand: { primary: "#4285F4", secondary: "#EA4335", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
  {
    company: "Stripe",
    domain: "stripe.com",
    moodLabel: "tech-dark",
    aspiration: "interested in extending payments product craft to more businesses.",
    brand: { primary: "#635BFF", secondary: "#0A2540", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "tech-dark", source: "codex-fallback" },
  },
  {
    company: "Figma",
    domain: "figma.com",
    moodLabel: "warm-creative",
    aspiration: "interested in deepening daily engagement across a creative community.",
    brand: { primary: "#F24E1E", secondary: "#A259FF", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
  {
    company: "Sarvam",
    domain: "sarvam.ai",
    moodLabel: "minimal",
    aspiration: "interested in building products for the next hundred million users.",
    brand: { primary: "#C1CCF5", secondary: "#323232", background: "#FFFFFF", headline_font: "Inter", body_font: "Inter", mood: "minimal", source: "brandfetch" },
  },
];

export interface GalleryCard {
  readonly generation: Generation;
  readonly moodLabel: string;
}

/** The sample generation leads; the seven brand samples follow. */
export const GALLERY_CARDS: ReadonlyArray<GalleryCard> = [
  { generation: DUOLINGO_EXAMPLE, moodLabel: "systematic" },
  ...OTHER_CARDS.map((c) => ({
    moodLabel: c.moodLabel,
    generation: makeGeneration({
      company: c.company,
      domain: c.domain,
      jobTitle: "Group Product Manager",
      shortId: c.domain,
      brand: c.brand,
      headline: `${HEADLINE_PREFIX}${c.aspiration}`,
      about: aboutFor(c.company),
      whyFit: WHY_FIT_GENERIC,
      pitch: null,
    }),
  })),
];
