import type { BrandStyle, Generation, Narrative, PitchSection } from "@/lib/types";

/**
 * Showcase data for the brand gallery (`/gallery`) and the landing-page example.
 *
 * All candidate details here are placeholders (sample candidate "Jane Doe").
 * Replace them with your own real profile and generations before publishing
 * these pages. Only the structure and the per-company brand styling are real.
 */

const NAME = "Jane Doe";
const CONTACT = "https://www.linkedin.com/in/your-handle/";
const EMAIL = "you@example.com";
const CREATED_AT = "2026-01-01T00:00:00Z";

// Placeholder résumé — identical on every card.
const RESUME: Narrative["resume_bullets"] = [
  {
    company: "Example Co",
    title: "Senior Product Manager",
    dates: "January 2022 - Present",
    bullets: [
      "Led a measurable growth initiative across three markets.",
      "Built and launched a 0-to-1 feature used by hundreds of thousands of users.",
      "Improved a core funnel metric through research-led experiments.",
    ],
  },
  {
    company: "Sample Labs",
    title: "Product Manager",
    dates: "January 2019 - December 2021",
    bullets: [
      "Shipped a payments flow that reduced checkout drop-off.",
      "Ran cross-functional launches with engineering and design.",
    ],
  },
];

// Company-agnostic proof points (placeholder metrics).
const WHY_FIT_GENERIC: Narrative["why_im_a_fit"] = [
  {
    bullet: "Placeholder proof point: a concrete launch and its business impact.",
    metric: "Metric A",
  },
  {
    bullet: "Placeholder proof point: team building or ownership scope.",
    metric: "Metric B",
  },
  {
    bullet: "Placeholder proof point: funnel or retention improvement.",
    metric: "Metric C",
  },
];

const ABOUT_BASE =
  "I am a product leader who ships work end to end: research, specs, launch, and analysis. I like roles where strategy has to become shipped product.";

const HEADLINE_PREFIX = "Product leader with a track record of shipping growth work — ";

const aboutFor = (company: string) =>
  `${ABOUT_BASE} At ${company}, I would bring experience building product teams and using data to make engagement feel natural.`;

// ── Sample landing-page generation (placeholder content). ──

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
  seed: "placeholder seed describing the product opportunity",
  title: "What I would ship at Example Company",
  problem: "Placeholder: the user problem observed in the product, with specifics.",
  hypothesis: "Placeholder: the change expected to move the target metric, and why.",
  proposed_solution: "Placeholder: the concrete experiment and how it would be validated.",
  metrics_to_track: [
    "Primary metric",
    "Secondary metric",
    "Guardrail metric",
  ],
  tradeoffs: ["Placeholder tradeoff of the proposal."],
  guardrails: ["Placeholder guardrail the change must respect."],
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
  company: "Example Learning Co",
  domain: "example.com",
  jobTitle: "Group Product Manager",
  shortId: "sample0001",
  brand: SAMPLE_BRAND,
  headline: "Product leader with a track record of growth — interested in building daily habits for learners.",
  about: aboutFor("Example Learning Co"),
  whyFit: SAMPLE_WHY_FIT,
  pitch: SAMPLE_PITCH,
});

// The other sample cards: same placeholder candidate, brand-matched, framing tailored per company.
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
