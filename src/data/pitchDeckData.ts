
export interface PitchDeckArticle {
  id: string;
  num: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  readTime: string;
  category: 'Top Tier VCs' | 'Foundations' | 'Data & Metrics' | 'Stage-Specific';
  badge: string;
  stage: string;
  tags: string[];
}

export const pitchDeckArticles: PitchDeckArticle[] = [
  {
    id: "article-1",
    num: "01",
    slug: "6-slides-core-structure",
    title: "6 Slides for Pitch Deck",
    subtitle: "The Universally Agreed-Upon Core Structure",
    desc: "The universally agreed-upon core structure duplicated across Sequoia, YC, NextView, and 500 Global answering the 6 fundamental questions every investor asks.",
    readTime: "10 min read",
    category: "Foundations",
    badge: "ARTICLE 01 • UNIVERSAL FOUNDATIONS",
    stage: "Universal / All Stages",
    tags: ["Foundations", "6 Slides", "Core Structure", "Investor Psychology"]
  },
  {
    id: "article-2",
    num: "02",
    slug: "anatomy-of-a-winning-pitch",
    title: "The Anatomy of a Winning Pitch",
    subtitle: "Comparative Framework Analysis & Strategic Divergences",
    desc: "A comparative analysis of the world's top VC frameworks: universal laws (brevity, bottom-up TAM) and strategic divergences (metrics vs storytelling).",
    readTime: "8 min read",
    category: "Foundations",
    badge: "ARTICLE 02 • COMPARATIVE ANALYSIS",
    stage: "Seed to Series A",
    tags: ["Comparative", "VC Analysis", "Universal Laws", "Synthesis"]
  },
  {
    id: "article-3",
    num: "03",
    slug: "sequoia-capital-framework",
    title: "The Sequoia Capital Framework",
    subtitle: "The 10-Slide Silicon Valley Gold Standard",
    desc: "The definitive 10-slide Silicon Valley gold standard (used by Airbnb): testing founder clarity of thought and the sheer scope of ambition.",
    readTime: "9 min read",
    category: "Top Tier VCs",
    badge: "ARTICLE 03 • TOP TIER VC",
    stage: "Seed to Growth",
    tags: ["Sequoia", "Gold Standard", "10 Slides", "Airbnb", "Top Tier"]
  },
  {
    id: "article-4",
    num: "04",
    slug: "y-combinator-seed-deck",
    title: "The Y Combinator Seed Deck",
    subtitle: "Legible, Simple, Obvious: 9 Essential Slides",
    desc: "Tailored specifically for the seed stage: Kevin Hale's 'Legible, Simple, Obvious' philosophy and the 9 essential slides for early funding.",
    readTime: "8 min read",
    category: "Top Tier VCs",
    badge: "ARTICLE 04 • TOP TIER VC",
    stage: "Seed",
    tags: ["Y Combinator", "Kevin Hale", "Seed Deck", "9 Slides", "Traction"]
  },
  {
    id: "article-5",
    num: "05",
    slug: "docsend-framework",
    title: "The DocSend Framework",
    subtitle: "Investor Attention Heatmaps & Behavioral Data",
    desc: "Data tracked from thousands of pitch decks: why spreading complex topics across 18 airy pages yields higher investor completion than crammed 10-slide decks.",
    readTime: "9 min read",
    category: "Data & Metrics",
    badge: "ARTICLE 05 • BEHAVIORAL DATA",
    stage: "Pre-Seed to Series A",
    tags: ["DocSend", "Behavioral Data", "Investor Heatmaps", "18 Pages", "Data-Driven"]
  },
  {
    id: "article-6",
    num: "06",
    slug: "get-backed-narrative-framework",
    title: "The Get Backed Narrative Framework",
    subtitle: "Relationship-First Pitching & The Friendship Loop",
    desc: "Evan Baehr & Evan Loomis's relationship-first methodology ($150M+ raised): the 4 core narrative arcs, 10 essential slides, and the 4-step 'Friendship Loop'.",
    readTime: "8 min read",
    category: "Stage-Specific",
    badge: "ARTICLE 06 • STORYTELLING",
    stage: "Early Stage",
    tags: ["Get Backed", "Storytelling", "Narrative Arcs", "Friendship Loop", "Relationship"]
  },
  {
    id: "article-7",
    num: "07",
    slug: "guy-kawasaki-10-20-30-rule",
    title: "Guy Kawasaki’s 10/20/30 Rule",
    subtitle: "The Legendary Silicon Valley Constraint Model",
    desc: "The legendary Silicon Valley constraint framework: 10 slides for cognitive focus, 20 minutes to preserve 40 minutes of Q&A, and 30-point font to force radical clarity.",
    readTime: "7 min read",
    category: "Foundations",
    badge: "ARTICLE 07 • CLASSIC RULE",
    stage: "Universal Pitching",
    tags: ["Guy Kawasaki", "10/20/30", "Presentation Rules", "Foundations", "Clarity"]
  },
  {
    id: "article-8",
    num: "08",
    slug: "first-round-capital-framework",
    title: "First Round Capital’s Framework",
    subtitle: "Architected for the VC Partner Meeting",
    desc: "Architected for the Partner Meeting: equipping your internal sponsor with defensible arguments, altitude-shifting traction, and interruption-friendly product flows.",
    readTime: "9 min read",
    category: "Top Tier VCs",
    badge: "ARTICLE 08 • PARTNER MEETING",
    stage: "Seed / Partner Meeting",
    tags: ["First Round", "Partner Meeting", "Internal Sponsor", "Seed Stage", "Defensibility"]
  },
  {
    id: "article-9",
    num: "09",
    slug: "nextview-ventures-framework",
    title: "NextView Ventures",
    subtitle: "The Conversational Deck & Kitchen Sink Appendix",
    desc: "Fixing the rigid monologue flipbook: an 8-slide core discussion deck paired with a massive 'Kitchen Sink' appendix for data-backed dialogue.",
    readTime: "8 min read",
    category: "Stage-Specific",
    badge: "ARTICLE 09 • CONVERSATIONAL DECK",
    stage: "Seed",
    tags: ["NextView", "Kitchen Sink", "Conversational Deck", "8 Slides", "Seed"]
  },
  {
    id: "article-10",
    num: "10",
    slug: "point-nine-capital-framework",
    title: "Point Nine Capital",
    subtitle: "B2B SaaS Metrics & Customer Animal Sizing",
    desc: "Christoph Janz’s SaaS metrics lens: customer animal sizing (Mice to Whales), Net Dollar Retention (NDR > 100%), and unmanipulated unit economics.",
    readTime: "9 min read",
    category: "Data & Metrics",
    badge: "ARTICLE 10 • B2B SAAS METRICS",
    stage: "Seed / Series A",
    tags: ["Point Nine", "Christoph Janz", "B2B SaaS", "Mice to Whales", "NDR", "SaaS Metrics"]
  },
  {
    id: "article-11",
    num: "11",
    slug: "500-global-framework",
    title: "500 Global (500 Startups)",
    subtitle: "Dave McClure's 'Startup Viagra' Blueprint",
    desc: "Dave McClure's 'Startup Viagra' blueprint: strict fill-in-the-blank elevator pitch syntax, 2x2 competitive framing, and TAM > $1B.",
    readTime: "8 min read",
    category: "Stage-Specific",
    badge: "ARTICLE 11 • RAPID GROWTH",
    stage: "Pre-Seed / Seed",
    tags: ["500 Global", "Dave McClure", "Startup Viagra", "Elevator Pitch", "Pre-Seed"]
  },
  {
    id: "article-12",
    num: "12",
    slug: "founder-institute-framework",
    title: "Founder Institute (FI)",
    subtitle: "Systematic De-risking: Market, Product, Execution",
    desc: "Systematic mitigation of Market, Product, and Execution risk: the perfected One-Sentence Pitch, 3-step product UX, and zero advisor fluff.",
    readTime: "10 min read",
    category: "Foundations",
    badge: "ARTICLE 12 • DE-RISKING",
    stage: "Idea / Pre-Seed",
    tags: ["Founder Institute", "De-risking", "One-Sentence Pitch", "Idea Stage", "Execution"]
  }
];

export const slideSummary = [
  {
    num: "01",
    title: "Problem / Opportunity",
    question: "What is broken?",
    desc: "Define the specific pain point or unmet need of your target customer with extreme, relatable specificity."
  },
  {
    num: "02",
    title: "Solution / Value Proposition",
    question: "How do you fix it?",
    desc: "Demonstrate exactly how your product directly cures the established problem with outcome-focused proof."
  },
  {
    num: "03",
    title: "Business Model",
    question: "How do you make money?",
    desc: "Detail your pricing model, unit economics (ACV/LTV), and distribution mechanics in under 20 seconds."
  },
  {
    num: "04",
    title: "Competition",
    question: "Who else is doing it?",
    desc: "Map direct and indirect alternatives using a 2x2 matrix or comparison grid to highlight your unfair edge."
  },
  {
    num: "05",
    title: "Founding Team",
    question: "Who are you?",
    desc: "Prove Founder-Market Fit by highlighting specific past accomplishments that qualify your team to win."
  },
  {
    num: "06",
    title: "Fundraising / The Ask",
    question: "What do you need?",
    desc: "State the exact capital sought, transparent use of funds, and the specific milestones it will unlock."
  }
];

export const frameworkComparisons = [
  {
    firm: "Y Combinator",
    stage: "Seed",
    philosophy: "Narrative & Unique Insight",
    teamPlacement: "End of Deck",
    keyRequirement: "Qualitative founder insight; avoids noisy dashboard mockups."
  },
  {
    firm: "Sequoia Capital",
    stage: "Seed to Growth",
    philosophy: "Problem-First Discipline",
    teamPlacement: "End of Deck",
    keyRequirement: "Mandates current workaround analysis and bottom-up TAM."
  },
  {
    firm: "Point Nine Capital",
    stage: "Seed / Series A",
    philosophy: "B2B SaaS Hardcore Metrics",
    teamPlacement: "Beginning (Slide 2)",
    keyRequirement: "Net Dollar Retention (NDR), Account Expansion, and LTV/CAC ratios."
  },
  {
    firm: "NextView Ventures",
    stage: "Seed",
    philosophy: "Asymmetric / Conversational",
    teamPlacement: "Beginning",
    keyRequirement: "Hyper-condensed 5-8 slide core deck + massive 'Kitchen Sink' appendix."
  },
  {
    firm: "First Round Capital",
    stage: "Seed",
    philosophy: "Internal Committee Consensus",
    teamPlacement: "Flexible",
    keyRequirement: "12-slide structure optimized for internal partner advocacy."
  },
  {
    firm: "500 Global",
    stage: "Pre-Seed / Seed",
    philosophy: "Strict Syntax & Brevity",
    teamPlacement: "End of Deck",
    keyRequirement: "Rigid fill-in-the-blank elevator pitch formula."
  },
  {
    firm: "Founder Institute",
    stage: "Idea / Pre-Seed",
    philosophy: "Jargon-Free One-Sentence Pitch",
    teamPlacement: "End of Deck",
    keyRequirement: "Zero superlatives ('best', 'first', 'only' are strictly forbidden)."
  }
];

export const sequoiaSlides = [
  {
    num: "01",
    title: "Company Purpose",
    headline: "One-Sentence Reason for Existence",
    desc: "Define your company's reason for existing in a single, declarative sentence. Communicate a durable mission rather than a list of features."
  },
  {
    num: "02",
    title: "Problem",
    headline: "Quantified Pain & Current Workarounds",
    desc: "Describe the acute pain of your customer, how they address it today, and the critical shortcomings of existing patchwork workarounds."
  },
  {
    num: "03",
    title: "Solution",
    headline: "The Eureka Moment & Visual Proof",
    desc: "Demonstrate your unique, compelling value proposition. Use a demo, screenshots, or user workflow that directly maps back to the problem."
  },
  {
    num: "04",
    title: "Why Now?",
    headline: "The Critical Inflection Point",
    desc: "Explain why this hasn't been built before. Identify the recent technological breakthrough, behavioral shift, or regulatory catalyst opening this window."
  },
  {
    num: "05",
    title: "Market Potential",
    headline: "Bottom-Up Customer Calculation",
    desc: "Calculate target market size from the bottom up: actual customer count, growth rate, and customer value. Great companies often invent new markets."
  },
  {
    num: "06",
    title: "Competition / Alternatives",
    headline: "Proactive Mapping & Differentiation",
    desc: "Identify direct and indirect competitors proactively. Clearly explain your strategic differentiation and how you plan to win."
  },
  {
    num: "07",
    title: "Business Model",
    headline: "Economic Engine & Distribution",
    desc: "Detail how you intend to thrive: revenue model, pricing strategy, average account size, and your sales/distribution execution plan."
  },
  {
    num: "08",
    title: "Team",
    headline: "Founders & Unfair Advantage",
    desc: "Highlight the specific talents, past successes, or unique domain experiences that make this specific team perfectly suited to win."
  },
  {
    num: "09",
    title: "Financials",
    headline: "Milestone-Driven Capital Deployment",
    desc: "Share your financial model (P&L, cash flow, cap table) with a clear timeline of how capital expenditure (e.g. headcount) unlocks key milestones."
  },
  {
    num: "10",
    title: "Vision",
    headline: "5-Year Scope of Ambition",
    desc: "Zoom out and explain what the company looks like in 5 years if everything goes according to plan, reinforcing the massive scale of your ambition."
  }
];

export const ycSlides = [
  {
    num: "01",
    title: "Title",
    question: "Who are you and what do you do?",
    desc: "Company name and a highly concise, one-line description of exactly what you do."
  },
  {
    num: "02",
    title: "Problem",
    question: "What is the real-world pain?",
    desc: "State the problem clearly and without jargon. Explain how it specifically impacts real-world people or businesses."
  },
  {
    num: "03",
    title: "Solution",
    question: "What is the immediate benefit?",
    desc: "Explain your product in as few words as possible, focusing on concrete user benefits over technical features."
  },
  {
    num: "04",
    title: "Traction / Progress",
    question: "What is your execution velocity?",
    desc: "Show execution over time: how much you accomplished relative to how long you have been working. Keep charts explicit."
  },
  {
    num: "05",
    title: "Unique Insight",
    question: "What do you know that others don't?",
    desc: "Demonstrate an asymmetric understanding of the market derived from deep customer conversations or personal experience."
  },
  {
    num: "06",
    title: "Business Model",
    question: "How do you make money?",
    desc: "Pick the single most logical monetization strategy and own it. Avoid confusing 'potpourri' revenue models."
  },
  {
    num: "07",
    title: "Market Size",
    question: "What is the bottom-up potential?",
    desc: "Narrow down your specific target customer base, multiply by their payment value, and calculate realistic opportunity."
  },
  {
    num: "08",
    title: "Team",
    question: "Who are the founders?",
    desc: "Explain why your specific team is uniquely suited to win. Focus purely on founders—zero peripheral advisors."
  },
  {
    num: "09",
    title: "Ask",
    question: "What does this capital unlock?",
    desc: "State the exact capital sought and map out the next 12 months of milestones required to become Series A ready."
  }
];

export const docsendSections = [
  {
    num: "01",
    title: "Company Purpose",
    pages: "1 page",
    timeSpent: "33s avg",
    question: "What do you do?",
    desc: "A powerful, single-sentence hook outlining exactly what you do. Investors spend an average of 33 seconds on this page just to categorize your business."
  },
  {
    num: "02",
    title: "Problem",
    pages: "1-2 pages",
    timeSpent: "High priority",
    question: "What is the acute pain?",
    desc: "A clear, quantified explanation of the customer's pain point and the cost of inaction."
  },
  {
    num: "03",
    title: "Solution",
    pages: "1-2 pages",
    timeSpent: "Key differentiator",
    question: "How do you solve it?",
    desc: "How your product addresses the specific problem, emphasizing your unique approach without getting overly technical."
  },
  {
    num: "04",
    title: "Why Now?",
    pages: "1 page",
    timeSpent: "Market timing",
    question: "Why hasn't this happened yet?",
    desc: "An explanation of the recent technological, regulatory, or market shifts that make this the perfect time for your company to launch."
  },
  {
    num: "05",
    title: "Product",
    pages: "3-4 pages",
    timeSpent: "77s avg (Heavy scrutiny)",
    question: "What does the experience look like?",
    desc: "This is where the framework heavily expands. Instead of using one crowded slide, founders are encouraged to use up to four pages for high-fidelity screenshots, user flows, and wireframes. VCs spend an average of 77 seconds here, making it one of the most scrutinized sections of the deck."
  },
  {
    num: "06",
    title: "Market Size",
    pages: "1 page",
    timeSpent: "Bottom-up validation",
    question: "How big is the prize?",
    desc: "A realistic, bottom-up calculation of your Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM)."
  },
  {
    num: "07",
    title: "Business Model",
    pages: "1-2 pages",
    timeSpent: "83s avg (Top attention)",
    question: "How do the economics work?",
    desc: "A breakdown of how the company makes money, including pricing structure and unit economics like Customer Acquisition Cost (CAC) and Lifetime Value (LTV). DocSend data shows this section commands up to 83 seconds of investor attention."
  },
  {
    num: "08",
    title: "Traction and Validation",
    pages: "1 page",
    timeSpent: "Proof of demand",
    question: "Do people actually want this?",
    desc: "Hard evidence that people want the product, which can include early revenue growth, waitlists, pilot programs, or letters of intent."
  },
  {
    num: "09",
    title: "Go-To-Market Strategy",
    pages: "1 page",
    timeSpent: "Distribution plan",
    question: "How do you scale customer acquisition?",
    desc: "Your step-by-step plan for acquiring your first significant wave of customers and the channels you will use to do so."
  },
  {
    num: "10",
    title: "Competition",
    pages: "1 page",
    timeSpent: "Red flag risk",
    question: "Who else exists and how do you win?",
    desc: "An honest look at both direct competitors and alternative solutions. Interestingly, tracking data shows investors often skim this slide very quickly, but its absence is a major red flag."
  },
  {
    num: "11",
    title: "Team",
    pages: "1-2 pages",
    timeSpent: "Founder-market fit",
    question: "Why you?",
    desc: "Profiles of the founders and key members, specifically highlighting domain expertise and the balance of technical and business skills."
  },
  {
    num: "12",
    title: "The Ask / Fundraising",
    pages: "1 page",
    timeSpent: "Call to action",
    question: "What does this round unlock?",
    desc: "The final call to action. It must clearly state the round size, the financial runway it provides, and the exact milestones the capital will unlock."
  }
];

export const getBackedNarratives = [
  {
    num: "01",
    title: "The Founder's Origin Story",
    tagline: "Founder-Problem Resonance",
    desc: "Why you are uniquely passionate about and qualified to build this specific business. Establishes personal credibility and unshakeable commitment."
  },
  {
    num: "02",
    title: "The Customer's Struggle",
    tagline: "Empathetic Pain Arc",
    desc: "A deeply empathetic look at the painful problem the customer faces every single day. Moves investors emotionally before presenting logic."
  },
  {
    num: "03",
    title: "The Industry Shift",
    tagline: "Macro Inflection Catalyst",
    desc: "The macroeconomic changes or technological advancements that make this the perfect time for your solution. Explains why this is possible now."
  },
  {
    num: "04",
    title: "The Company's Growth Story",
    tagline: "Venture Scale Trajectory",
    desc: "The financial trajectory and unit metrics that prove this venture can scale sustainably into a massive, category-defining business."
  }
];

export const friendshipLoopSteps = [
  {
    step: "01",
    title: "Introduction",
    action: "Warm Gateway",
    desc: "Getting introduced to someone through a trusted connection who can help move your venture forward."
  },
  {
    step: "02",
    title: "Build a Relationship",
    action: "Genuine Connection",
    desc: "Finding commonalities and asking thoughtful questions to establish a genuine connection rather than a transactional pitch."
  },
  {
    step: "03",
    title: "Delight",
    action: "Value First",
    desc: "Showing gratitude, following up consistently, and providing thoughtful resources or industry insights to the investor."
  },
  {
    step: "04",
    title: "The Ask / Pitch",
    action: "Earned Opportunity",
    desc: "Finally introducing the pitch deck and investment opportunity once a solid foundation of mutual trust has been established."
  }
];

export const getBackedSlides = [
  {
    num: "01",
    title: "Overview",
    question: "What is your elevator pitch?",
    desc: "Your elevator pitch summarizing the exact problem your startup solves with crystal clarity."
  },
  {
    num: "02",
    title: "Opportunity",
    question: "Where is the explosive growth?",
    desc: "A description of your industry and your specific niche within it, demonstrating explosive growth potential."
  },
  {
    num: "03",
    title: "Problem",
    question: "Why is it emotionally painful?",
    desc: "A deep dive into why the problem exists, why it is emotionally painful, and how many people experience it."
  },
  {
    num: "04",
    title: "Solution",
    question: "How do you show (not tell) it?",
    desc: "How your product fixes the pain point. Strongly cautions against bullet points; recommends a video, prototype, or software demo."
  },
  {
    num: "05",
    title: "Traction",
    question: "What is your hard evidence?",
    desc: "Hard evidence of growth in sales or users, proving the company can succeed with or without the investor's help."
  },
  {
    num: "06",
    title: "Customer / Market",
    question: "Is this venture-scale?",
    desc: "A calculation of your Total Addressable Market (TAM) to prove you are playing in a large enough space to generate venture-scale returns."
  },
  {
    num: "07",
    title: "Competition",
    question: "How do alternatives compare?",
    desc: "A map showing how alternative solutions currently handle the problem, comparing them on factors like price, speed, and quality."
  },
  {
    num: "08",
    title: "Business Model",
    question: "What is the financial engine?",
    desc: "Details on the cost of customer acquisition (CAC), cash flow projections, burn rate, and the break-even point."
  },
  {
    num: "09",
    title: "Team",
    question: "Who brings the expertise?",
    desc: "Brief bios that paint a picture of the team's expertise as quickly as possible."
  },
  {
    num: "10",
    title: "Use of Funds",
    question: "What goals will capital fund?",
    desc: "A clear statement of how much capital is being raised and the specific goals it will fund (e.g., scaling sales, platform optimization)."
  }
];

export const kawasakiRules = [
  {
    num: "10",
    title: "10 Slides",
    rule: "Cognitive Constraint",
    desc: "A normal human being cannot comprehend more than ten distinct concepts in a single meeting. If you require more than ten slides, your business concept is not focused enough."
  },
  {
    num: "20",
    title: "20 Minutes",
    rule: "Interactive Buffer",
    desc: "Even in a one-hour meeting slot, deliver your pitch in exactly 20 minutes. This accounts for technical setup and leaves 40 minutes for the most vital part: interactive Q&A."
  },
  {
    num: "30",
    title: "30-Point Font",
    rule: "Forced Distillation",
    desc: "A minimum 30-point font stops you from crowding dense text and reading slides aloud. Because audiences read faster than speakers speak, it forces you to distill to essentials."
  }
];

export const kawasakiSlides = [
  {
    num: "01",
    title: "Title Slide",
    question: "Who are you?",
    desc: "First impression: company name, presenter name & title, contact info, and a brief tagline describing what the company does."
  },
  {
    num: "02",
    title: "Problem / Opportunity",
    question: "What pain do you solve right now?",
    desc: "Clearly articulate the pain point or unmet need of target customers with a specific, relatable client example."
  },
  {
    num: "03",
    title: "Value Proposition",
    question: "What is the concrete outcome?",
    desc: "Explain exactly how your product or service solves the problem, summarized in a single, powerful sentence."
  },
  {
    num: "04",
    title: "Underlying Magic",
    question: "What is your secret sauce?",
    desc: "Showcase core technology, IP, or unfair advantage. Kawasaki highly recommends a live demo or client case study over feature lists."
  },
  {
    num: "05",
    title: "Business Model",
    question: "Who pays and how much?",
    desc: "Outline who pays you, what they are paying for, and your general pricing strategy (e.g. $250k enterprise license vs $10/mo subscription)."
  },
  {
    num: "06",
    title: "Go-to-Market Plan",
    question: "How do you acquire customers?",
    desc: "Your strategy for acquiring customers and distributing your product, logically aligning with your business model pricing."
  },
  {
    num: "07",
    title: "Competitive Analysis",
    question: "Who else exists and why do you win?",
    desc: "Map the market landscape. Acknowledge big competitors to prove market size; explicitly exploit their weaknesses."
  },
  {
    num: "08",
    title: "Management Team",
    question: "Who are the 3-4 key leaders?",
    desc: "Focus on 3-4 key individuals: names, roles, relevant education, and specific past experiences (exits or deep domain expertise)."
  },
  {
    num: "09",
    title: "Financial Projections & Key Metrics",
    question: "What does the 3-5 year forecast look like?",
    desc: "Provide a realistic 3 to 5-year financial forecast with revenue aspirations, profit forecasts, and health metrics."
  },
  {
    num: "10",
    title: "Current Status / Ask",
    question: "What is the reality and the capital needed?",
    desc: "Current product status (MVP, beta, launched), milestones achieved, capital sought, and fund allocation over next 6-12 months."
  }
];

export const firstRoundSlides = [
  {
    num: "01",
    title: "Title Slide",
    question: "How does your sponsor articulate what you do?",
    desc: "Anchor the room immediately with company name, founder details, and a sharp, one-sentence positioning statement that your partner sponsor can easily repeat to peers."
  },
  {
    num: "02",
    title: "Problem",
    question: "Who exactly feels this pain?",
    desc: "Grounded, hyper-specific pain point and the exact customer profile who suffers from it. Built to withstand immediate partner interruptions."
  },
  {
    num: "03",
    title: "Solution",
    question: "Does it cleanly map to the pain?",
    desc: "Logical, conceptual clarity mapping directly back to the problem without overcomplicated technical diagrams that derail the meeting."
  },
  {
    num: "04",
    title: "Why Now?",
    question: "Why now when others failed before?",
    desc: "Defines the exact market, technological, regulatory, or behavioral catalyst that makes this solution viable today."
  },
  {
    num: "05",
    title: "Product Walkthrough",
    question: "What is the 'aha!' moment?",
    desc: "Interruption-friendly product substance: real screenshots, user flow, and the precise moment of value realization."
  },
  {
    num: "06",
    title: "Traction",
    question: "Can you defend the cohorts?",
    desc: "Designed for 'altitude shifting': clean revenue, user retention, and cohort trends you can instantly zoom into when questioned."
  },
  {
    num: "07",
    title: "Customer Proof",
    question: "What measurable outcomes were achieved?",
    desc: "Builds emotional conviction through real case studies, specific customer outcomes, and measurable impact rather than fluffy testimonials."
  },
  {
    num: "08",
    title: "Market Size",
    question: "What is your wedge into the TAM?",
    desc: "Define your sharp initial wedge market and the logical expansion roadmap into a massive venture-scale Total Addressable Market."
  },
  {
    num: "09",
    title: "Business Model",
    question: "Can this support venture-scale margins?",
    desc: "Pricing structure, revenue streams, and early unit economics showing a coherent path to long-term sustainability."
  },
  {
    num: "10",
    title: "Team",
    question: "Why this specific combination?",
    desc: "Prove why this combination of founders possesses the unique domain expertise and technical capability to win."
  },
  {
    num: "11",
    title: "Competition",
    question: "What are your structural advantages?",
    desc: "Map direct competitors, indirect alternatives, and existing substitutes. Clearly articulate your structural moat."
  },
  {
    num: "12",
    title: "Vision & The Ask",
    question: "What changes after we invest?",
    desc: "Link the capital directly to milestone outcomes—revenue targets, market penetration, and key hires—not just a feature wishlist."
  }
];

export const nextViewCoreSlides = [
  {
    num: "01",
    title: "Intro",
    question: "Who are you?",
    desc: "A brief opening slide to set the stage, introduce the company name, and establish a conversational tone."
  },
  {
    num: "02",
    title: "Team",
    question: "Who is building this?",
    desc: "Placed immediately at the beginning (Slide 2) to establish founder credibility upfront without over-engineering."
  },
  {
    num: "03",
    title: "What do you do?",
    question: "What is the physical/digital reality?",
    desc: "Explain the product in 1-2 simple sentences using visual cues like screenshots, customer logos, or a workflow diagram."
  },
  {
    num: "04",
    title: "Is it working? (Traction)",
    question: "What proves early momentum?",
    desc: "Highest-level view of early growth, customer acquisition, or product milestones proving the concept has real velocity."
  },
  {
    num: "05",
    title: "Why does it matter? (Market)",
    question: "What is the killer stat?",
    desc: "Articulate the market problem in one simple sentence using one 'killer stat' or powerful analogy making pain undeniable."
  },
  {
    num: "06",
    title: "Can you be best in the world? (Metrics)",
    question: "What is your competitive engine?",
    desc: "Core product advantages, growth drivers, or unit metrics demonstrating why you will beat competitors and capture the market."
  },
  {
    num: "07",
    title: "Where are you going? (Vision)",
    question: "What does scale look like?",
    desc: "A high-level look at the multi-year vision and where the company will be in the coming years."
  },
  {
    num: "08",
    title: "What do you want? (The Ask)",
    question: "What is the capital round?",
    desc: "State the amount of capital you are raising to conclude the 5-minute formal intro and transition into Q&A."
  }
];

export const nextViewAppendixCategories = [
  {
    num: "01",
    title: "Financial Models & Unit Economics",
    desc: "Granular P&L projections, CAC payback curves, LTV calculations, and gross margin breakdowns."
  },
  {
    num: "02",
    title: "In-Depth Go-to-Market & Funnels",
    desc: "Detailed channel conversion metrics, sales cycle duration, enterprise pipeline, and marketing funnels."
  },
  {
    num: "03",
    title: "Product Roadmap & Tech Architecture",
    desc: "Quarterly development milestones, system architecture, API integrations, and security compliance."
  },
  {
    num: "04",
    title: "Anticipated FAQs & Objection Defenses",
    desc: "Pre-built slides addressing expected investor skepticism, competitive counter-moves, and regulatory hurdles."
  }
];

export const pointNineSlides = [
  {
    num: "01",
    title: "Title",
    question: "What does the business actually do?",
    desc: "A clean introduction with company logo, founder details, and an unambiguous one-liner about what the business actually does."
  },
  {
    num: "02",
    title: "Team (Upfront)",
    question: "Why you before the complexity?",
    desc: "Brought to the very front (Slide 2) to establish deep domain expertise and credibility before delving into SaaS product complexity."
  },
  {
    num: "03",
    title: "Product (Screens & UX)",
    question: "Does it sell itself via PLG?",
    desc: "Tangible evidence—screenshots and user workflows—demonstrating intuitive usability and Product-Led Growth (PLG) dynamics."
  },
  {
    num: "04",
    title: "Customers (Pipeline & Segmentation)",
    question: "Which 'animal' are you hunting?",
    desc: "Target customer segments, sales pipeline, and defining whether you hunt Mice, Rabbits, Deer, Elephants, or Whales."
  },
  {
    num: "05",
    title: "Traction (MRR, ACV, NDR)",
    question: "Are cohorts expanding (NDR > 100%)?",
    desc: "Unmanipulated actuals: historical MRR/ARR growth, ACV vs CAC mathematical alignment, and 100%+ Net Dollar Retention."
  },
  {
    num: "06",
    title: "Market",
    question: "What is your bottom-up calculation?",
    desc: "Comprehensible bottom-up TAM: actual customer volume in your niche multiplied by your pricing model, avoiding lazy $1T reports."
  },
  {
    num: "07",
    title: "Competition",
    question: "How do you defend against rising CAC?",
    desc: "Direct and indirect alternatives, showing how your product differentiation or brand strength defends against rising market CAC."
  },
  {
    num: "08",
    title: "Roadmap (The Plan)",
    question: "What concrete milestones in 12-24 months?",
    desc: "Forward-looking deliverables across product development, critical technical/executive hires, and ARR targets."
  },
  {
    num: "09",
    title: "Ask (The Round)",
    question: "What is your Burn Multiple?",
    desc: "Capital sought, existing commitments, and alignment with an efficient Burn Multiple (capital spent per new dollar of ARR)."
  },
  {
    num: "10",
    title: "Contact / Thank You",
    question: "How do partners reach you?",
    desc: "Simple, professional wrap-up providing clear contact information to transition seamlessly into the Q&A discussion."
  }
];

export const pointNineAnimals = [
  { animal: "Mice", arpa: "< $100 / yr", strategy: "Virality, Self-Serve, Freemium (1,000,000+ customers needed)" },
  { animal: "Rabbits", arpa: "$1K / yr", strategy: "Inbound Marketing, Low-Touch Sales (100,000 customers needed)" },
  { animal: "Deer", arpa: "$10K / yr", strategy: "Inside Sales, Mid-Market Demand Gen (10,000 customers needed)" },
  { animal: "Elephants", arpa: "$100K / yr", strategy: "Field Sales, Executive Selling (1,000 customers needed)" },
  { animal: "Whales", arpa: "$1M+ / yr", strategy: "Bespoke Enterprise, Multi-Stakeholder (100 customers needed)" }
];

export const fiveHundredSlides = [
  {
    num: "01",
    title: "Logo & Elevator Pitch",
    question: "Can a 5-year-old understand it?",
    desc: "Strict syntax: 'A [product type] to help [target customer] with [#1 problem] by [#1 benefit] using our [secret sauce]'."
  },
  {
    num: "02",
    title: "The Problem",
    question: "What is the micro-economic pain?",
    desc: "Explain the problem from the customer's exact economic perspective (e.g. 'Hospitals losing $30B' vs broad global stats)."
  },
  {
    num: "03",
    title: "Your Solution",
    question: "What does it look like?",
    desc: "Primary product screenshot, key features, and major customer benefits mapping directly to the pain in Slide 2."
  },
  {
    num: "04",
    title: "How It Works",
    question: "What is the proprietary workflow?",
    desc: "Deeper dive into the proprietary tech or visual user experience proving the product is tangible and functional."
  },
  {
    num: "05",
    title: "Traction",
    question: "What is your 'Startup Viagra' metric?",
    desc: "One key upward-trending metric (MRR, GMV, or MoM growth) paired prominently with signed client logos."
  },
  {
    num: "06",
    title: "Business Model",
    question: "Direct or indirect revenue?",
    desc: "Top revenue sources prioritized by scale, clarifying direct (e-commerce, SaaS) vs indirect (ads, leads)."
  },
  {
    num: "07",
    title: "Competition",
    question: "Where are you on the 2x2 matrix?",
    desc: "Standard 2x2 matrix placing company in upper-right: 'Unlike [alternatives], [we] [differentiator 1] and [differentiator 2]'."
  },
  {
    num: "08",
    title: "The Market Opportunity",
    question: "Is TAM greater than $1 Billion?",
    desc: "Prove TAM > $1B using bottom-up formula: (Customers) x (Average Transaction Size) x (Purchases Per Year)."
  },
  {
    num: "09",
    title: "Progress to Date",
    question: "How fast do you execute?",
    desc: "Historical milestones proving execution speed: launch date, first customer, notable awards, and prior capital."
  },
  {
    num: "10",
    title: "The Team",
    question: "What is your unfair advantage?",
    desc: "Emphasize unfair traits: prior exits, deep technical expertise, or industry networks. Limit to 1-2 bullets per founder."
  }
];

export const founderInstituteRisks = [
  { risk: "Market Risk", question: "Is the market large and ready?", desc: "Mitigated by bottom-up TAM/SAM and proving customer willingness to pay." },
  { risk: "Product Risk", question: "Can you build an intuitive solution?", desc: "Mitigated by 3-step UX, screenshots, and avoiding glitchy live demos." },
  { risk: "Execution Risk", question: "Can this specific team pull it off?", desc: "Mitigated by proven founder track records and zero advisor dilution." }
];

export const founderInstituteSlides = [
  {
    num: "01",
    title: "Cover Slide",
    question: "What is your One-Sentence Pitch?",
    desc: "10-second hook: a simple, declarative statement introducing your big idea without jargon."
  },
  {
    num: "02",
    title: "Summary Slide",
    question: "Why is this exciting upfront?",
    desc: "Teaser upfront highlighting upside potential, minimized risks, and initial traction."
  },
  {
    num: "03",
    title: "Problem Slide",
    question: "Why are current solutions frustrating?",
    desc: "Core pain point, target user definition, and why customers are frustrated with existing market alternatives."
  },
  {
    num: "04",
    title: "Solution Slide",
    question: "How is it measurably faster/cheaper?",
    desc: "Clear product type (app, device, website) with major benefits mapping directly to the frustrations in Slide 3."
  },
  {
    num: "05",
    title: "Product Slide",
    question: "How does it work in 3 steps?",
    desc: "Make it tangible in three simple steps using screenshots or recorded UX video (avoid live demos that crash); list patents."
  },
  {
    num: "06",
    title: "Business Model Slide",
    question: "Is revenue active and recurring?",
    desc: "Primary active revenue model (subscriptions) with proof that customers are willing to pay the price."
  },
  {
    num: "07",
    title: "Market Opportunity Slide",
    question: "How much if you dominate?",
    desc: "Bottom-up TAM and SAM driven by actual pricing model rather than generic top-down industry reports."
  },
  {
    num: "08",
    title: "Competition Slide",
    question: "Where do you sit on convenience vs expense?",
    desc: "Visual two-axis grid (e.g. convenience vs expense) clearly showing superiority over alternatives."
  },
  {
    num: "09",
    title: "Growth (Customer Acquisition)",
    question: "What are your CAC, LTV, and payback?",
    desc: "Profitable acquisition strategy at scale, detailing CAC, LTV, and payback period dynamics."
  },
  {
    num: "10",
    title: "Traction Slide",
    question: "What measurable proof exists?",
    desc: "Hard proof of love: active users, jobs completed, or gross revenue generated."
  },
  {
    num: "11",
    title: "Financials Slide",
    question: "What is the 3 to 5-year outlook?",
    desc: "Projections detailing best estimates of revenue, user growth, and customer adoption over 3-5 years."
  },
  {
    num: "12",
    title: "Team Slide",
    question: "What is the core team's track record?",
    desc: "Past successes in similar startups or technologies; strictly zero peripheral advisors."
  },
  {
    num: "13",
    title: "Funding (The Ask)",
    question: "What capital unlocks what milestones?",
    desc: "Capital sought (e.g. 'Seeking $2M Series A') and exact milestones achieved (e.g. $6M run rate)."
  },
  {
    num: "14",
    title: "Summary (Closer)",
    question: "What is the final lasting impression?",
    desc: "Summarize highlights and the investment upside, leaving investors with a memorable conclusion."
  }
];