/**
 * pageRegistry.js — Centralized content for all Research Library pages.
 *
 * Each entry is keyed by its URL slug and contains structured data
 * that the PatternPage template renders.
 */

// ─── Navigation structure — Double Diamond ───
export const LIBRARY_CATEGORIES = [
  {
    title: 'Phase 1: Discover / Explore',
    pages: [
      { slug: 'problem-hypothesis', label: 'Problem Hypothesis' },
      { slug: 'steep-pestle', label: 'STEEP/PESTLE Analysis' },
      { slug: 'set-analysis', label: 'SET Analysis' },
      { slug: 'secondary-research', label: 'Secondary Research' },
      { slug: 'primary-research', label: 'Primary Research' },
      { slug: 'qtv', label: 'QTV (Quantitative Research)' },
      { slug: 'demographics', label: 'Demographic / Recruiting Strategy' },
      { slug: 'discussion-guide', label: 'Design Research Discussion Guide' },
      { slug: 'aeiou', label: 'AEIOU Framework' },
      { slug: 'exploratory-interviews', label: 'Exploratory Interviews' },
      { slug: 'exploratory-surveys', label: 'Exploratory Surveys' },
    ],
  },
  {
    title: 'Phase 2: Define',
    pages: [
      // ── Transition: Discover → Define ──
      { slug: 'affinity-mapping', label: 'Affinity Mapping' },
      { slug: 'framing-lenses', label: 'Framing Lenses' },
      // ── Synthesis & Strategy ──
      { slug: 'ira', label: 'IRA Framework' },
      { slug: '5es-journey', label: "5 E's Journey Mapping" },
      { slug: 'journey-mapping', label: 'User Journey Mapping' },
      { slug: 'jtbd', label: 'Jobs to Be Done (JTBD)' },
      { slug: 'personas', label: 'Persona Definition' },
      { slug: 'card-sorting', label: 'Card Sorting' },
      { slug: 'directional-insights', label: 'Directional Insights' },
      { slug: 'prfaq', label: 'PRFAQ' },
      { slug: 'mrd', label: 'MRD (Market Requirements)' },
    ],
  },
  {
    title: 'Phase 3: Develop / Ideate',
    pages: [
      { slug: 'prd', label: 'PRD (Product Requirements)' },
      { slug: 'hmw', label: 'How Might We (HMW)' },
      { slug: 'low-fidelity', label: 'Low-Fidelity Design' },
      { slug: 'prototyping', label: 'Prototyping (Vibecoding)' },
      { slug: 'lofi-interviews', label: 'Low-Fidelity Design Interviews' },
      { slug: 'design-guide', label: 'Design Guide & Principles' },
    ],
  },
  {
    title: 'Phase 4: Deliver / Validate',
    pages: [
      { slug: 'testing', label: 'Testing' },
    ],
  },
];

// ─── Page content definitions ───
export const PAGE_DATA = {
  "problem-hypothesis": {
  "slug": "problem-hypothesis",
  "title": "Problem Hypothesis",
  "tags": [
    "Discovery",
    "Problem Framing"
  ],
  "purpose": "Articulate a clear, testable assumption about a user problem to guide early research efforts.",
  "learn": {
    "sections": [
      {
        "title": "What is a Problem Hypothesis?",
        "blocks": [
          {
            "type": "p",
            "text": "A Problem Hypothesis is an educated guess about a challenge or unmet need your users may face. It acts as a North Star for early discovery research, helping teams focus their efforts before they have validated insights. Think of it as planting a flag in uncharted territory—you believe there's something valuable there, but you need to explore to confirm it."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Problem Hypotheses are formulated at the very start of the product discovery process—even before primary research. They emerge from:"
          },
          {
            "type": "ul",
            "items": [
              "Observed market trends or competitive gaps",
              "Anecdotal feedback from support tickets or sales calls",
              "Visionary product ideas or strategic business goals",
              "Light secondary research (articles, industry reports, internal data)"
            ]
          },
          {
            "type": "p",
            "text": "Once stated, the hypothesis becomes the focus of exploratory research (interviews, surveys, secondary research) to validate or invalidate the assumption."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Be Specific:</strong> Vague problems lead to vague research. \"Users struggle with productivity\" is too broad. \"Freelance designers waste time re-invoicing clients due to unclear payment terms\" is actionable.",
              "<strong>Make it Testable:</strong> Frame your hypothesis so you can prove or disprove it through research. Avoid opinions; focus on observable behaviors or outcomes.",
              "<strong>Stay User-Centered:</strong> Ground the hypothesis in a user need, not just a business goal. \"We need to increase revenue\" is not a problem hypothesis. \"SMB owners lack affordable tools to manage inventory\" is.",
              "<strong>Embrace Being Wrong:</strong> A disproven hypothesis is still valuable—it saves you from building the wrong thing. Research is about learning, not confirming your biases.",
              "<strong>Limit Scope:</strong> Start with one clear problem. You can expand later, but early focus prevents analysis paralysis."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Problem Hypothesis Statement",
        "blocks": [
          {
            "type": "code",
            "text": "We believe that [USER SEGMENT]<br> experiences [PROBLEM/PAIN POINT]<br> when [SITUATION/CONTEXT].<br> <br> This matters because [IMPACT/CONSEQUENCE].<br> <br> We will know we're right if we observe [SUCCESS CRITERIA/EVIDENCE]."
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Identify the User Segment:</strong> Who are you designing for? Be specific (e.g., \"remote workers in tech startups\" vs. \"office workers\").",
              "<strong>Define the Problem:</strong> What pain point or unmet need do you suspect exists? Use clear, observable language.",
              "<strong>Add Context:</strong> When or where does this problem occur? Context helps narrow the scope and makes the problem more tangible.",
              "<strong>Articulate the Impact:</strong> Why does this problem matter? What are the consequences if it goes unsolved?",
              "<strong>Set Success Criteria:</strong> What evidence would validate your hypothesis? This could be user quotes, behavioral data, or measurable outcomes.",
              "<strong>Review & Refine:</strong> Share your hypothesis with stakeholders. Does it align with business goals? Is it specific enough to guide research?"
            ]
          }
        ]
      },
      {
        "title": "Example",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Hypothesis:</strong>",
              "We believe that <strong>freelance graphic designers</strong> experience <strong>cash flow anxiety and wasted administrative time</strong> when <strong>tracking payments from multiple clients with inconsistent invoicing schedules</strong>.",
              "This matters because <strong>missed or delayed payments can threaten their financial stability, and time spent chasing invoices reduces billable hours</strong>.",
              "We will know we're right if we observe <strong>designers mentioning invoice tracking as a top-3 pain point in interviews, or if we find data showing 40%+ of invoices are paid late</strong>."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Intuition from lived experience and domain expertise",
      "Ability to read between the lines and spot nuanced patterns",
      "Contextual judgment to assess what's strategically important",
      "Empathy to frame problems in human-centered terms"
    ],
    "aiValue": [
      "Rapid synthesis of large datasets (competitor info, industry reports, forums)",
      "Identification of language patterns in user feedback (support tickets, reviews)",
      "Generation of multiple hypothesis variations for team discussion",
      "Benchmarking against similar problems in other industries"
    ],
    "considerations": [
      "<strong>AI as a Research Assistant:</strong> Use AI to scan Reddit threads, reviews, or support logs for recurring themes. But always validate with real user conversations—AI can spot frequency, not emotional weight.",
      "<strong>Bias Risk:</strong> AI models reflect the data they're trained on. If you ask AI to generate a hypothesis, it may default to common assumptions rather than novel insights. Always stress-test AI-generated ideas with human intuition.",
      "<strong>Hypothesis Refinement:</strong> AI excels at rewriting and sharpening language. Use it to make your hypothesis more concise or testable, but ensure the core idea stays human-driven."
    ],
    "aiInLoop": [
      "<strong>Exploratory Input:</strong> AI scans secondary sources (articles, forums, competitor reviews) to surface potential problem areas. Humans then curate and prioritize based on strategic fit.",
      "<strong>Iterative Shaping:</strong> Humans draft an initial hypothesis. AI suggests alternative framings, identifies ambiguities, or proposes testable success criteria. The team refines collaboratively.",
      "<strong>Validation Prep:</strong> AI generates interview questions or survey prompts aligned with the hypothesis. Humans review for tone, bias, and cultural appropriateness before deployment."
    ],
    "watchOuts": [
      "Don't let AI generate the entire hypothesis from scratch—it lacks strategic context and user empathy.",
      "Avoid over-reliance on AI-scraped data (reviews, forums) as the sole foundation. This data is noisy and may not represent your actual user base.",
      "Be cautious of \"HiPPO Bias\" (Highest Paid Person's Opinion). AI can accidentally amplify existing biases if trained on your internal documents. Seek external perspectives."
    ]
  }
},

  "secondary-research": {
  "slug": "secondary-research",
  "title": "Secondary Research",
  "tags": [
    "Discovery",
    "Desk Research"
  ],
  "purpose": "Leverage existing data, reports, and studies to build foundational understanding before primary research.",
  "learn": {
    "sections": [
      {
        "title": "What is Secondary Research?",
        "blocks": [
          {
            "type": "p",
            "text": "Secondary Research (also called Desk Research) involves gathering and analyzing existing information—industry reports, academic studies, competitor analyses, market data—rather than collecting new data directly from users. It's the foundation layer that informs smarter primary research questions and prevents teams from \"reinventing the wheel.\""
          }
        ]
      },
      {
        "title": "Why It Matters",
        "blocks": [
          {
            "type": "p",
            "text": "Before spending time and money on interviews or surveys, secondary research helps you:"
          },
          {
            "type": "ul",
            "items": [
              "Understand the broader market landscape and trends",
              "Identify what's already known (and what gaps exist)",
              "Validate or challenge initial assumptions",
              "Refine your problem hypothesis with evidence",
              "Prepare smarter, more targeted primary research questions"
            ]
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Secondary Research happens early in the <strong>Discovery phase</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Problem hypothesis formulation",
              "<strong>Before:</strong> Primary research (interviews, surveys, field studies)"
            ]
          },
          {
            "type": "p",
            "text": "It sets the stage for deeper, user-centered inquiry by establishing baseline knowledge."
          }
        ]
      },
      {
        "title": "Common Sources",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Industry Reports:</strong> Gartner, Forrester, Nielsen, Statista",
              "<strong>Academic Research:</strong> Google Scholar, ResearchGate, university libraries",
              "<strong>Competitor Analysis:</strong> Product reviews (G2, Capterra), pricing pages, feature comparisons",
              "<strong>Public Data:</strong> Census data, government databases (e.g., BLS, CDC), open datasets",
              "<strong>Media & Trends:</strong> TechCrunch, HBR, trade publications, trend reports",
              "<strong>Internal Data:</strong> Support tickets, CRM data, sales call notes, analytics"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Start Broad, Then Narrow:</strong> Begin with general market trends, then zoom into specific user behaviors or pain points.",
              "<strong>Evaluate Source Quality:</strong> Not all data is reliable. Check publication dates, sample sizes, and methodologies. Peer-reviewed > blog posts.",
              "<strong>Document Everything:</strong> Keep a research log with links, key findings, and citations. You'll need to reference this later.",
              "<strong>Look for Gaps:</strong> What questions can't be answered by secondary research? These become your primary research focus.",
              "<strong>Synthesize, Don't Summarize:</strong> Don't just list findings. Connect dots, identify patterns, and form hypotheses.",
              "<strong>Timebox It:</strong> Secondary research can be a rabbit hole. Set a deadline (e.g., 1-2 weeks) to prevent analysis paralysis."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Secondary Research Brief",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Research Question:</strong> [What are you trying to learn?]<br> <br> <strong>Sources Consulted:</strong><br> - [Source 1: Title, Author, Year, Link]<br> - [Source 2: ...]<br> <br> <strong>Key Findings:</strong><br> 1. [Finding 1: Summary + evidence]<br> 2. [Finding 2: ...]<br> <br> <strong>Patterns & Insights:</strong><br> [Synthesize themes across sources. What's surprising? What's consistent?]<br> <br> <strong>Gaps & Open Questions:</strong><br> [What couldn't you answer? What needs primary research?]<br> <br> <strong>Implications for Design:</strong><br> [What does this mean for your product/strategy?]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Research Question:</strong> What do you need to know? (e.g., \"What are the top pain points for freelance designers managing invoices?\")",
              "<strong>Identify Relevant Sources:</strong> List 5-10 high-quality sources (reports, studies, competitor reviews, forums). Prioritize recent data (last 2-3 years).",
              "<strong>Extract Key Data Points:</strong> As you read, highlight quantitative stats (e.g., \"40% of freelancers report late payments\") and qualitative insights (e.g., \"Users describe invoice tracking as 'time-consuming'\").",
              "<strong>Organize Findings by Theme:</strong> Group related data points. Use affinity mapping or a simple spreadsheet to cluster insights.",
              "<strong>Synthesize Patterns:</strong> What trends emerge? Are findings consistent across sources? Where do sources contradict?",
              "<strong>Identify Gaps:</strong> What questions remain unanswered? These gaps become your primary research focus.",
              "<strong>Document & Share:</strong> Write a 1-2 page brief summarizing findings, insights, and next steps. Share with your team."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Research Question:</strong> What are the primary challenges freelancers face when managing invoices and payments?",
              "<strong>Key Findings:</strong>",
              "<strong>Patterns:</strong> Freelancers prioritize tools that save time and reduce payment anxiety. Simplicity > feature depth. Mobile access is increasingly critical (remote work trend).",
              "<strong>Gaps:</strong> Why do freelancers tolerate manual processes (spreadsheets)? What psychological barriers prevent them from adopting invoice software?",
              "<strong>Next Steps:</strong> Conduct 10-15 interviews with freelancers to validate findings and explore emotional motivations.",
              "• <strong>Finding 1:</strong> 43% of freelancers report late payments as their biggest financial stressor (Freelancers Union Survey, 2024).",
              "• <strong>Finding 2:</strong> Average time spent on invoicing: 2.5 hours/week (Freshbooks Report, 2023).",
              "• <strong>Finding 3:</strong> Top-rated features in invoice tools: automated reminders (87%), payment tracking (82%), mobile access (76%) (G2 Reviews).",
              "• <strong>Finding 4:</strong> Competitor weakness: QuickBooks rated \"too complex for solo freelancers\" (avg 2.8/5 on ease-of-use)."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Critical thinking to evaluate source credibility and bias",
      "Contextual judgment to assess relevance to your specific problem",
      "Synthesis ability to connect disparate findings into coherent themes",
      "Strategic prioritization of which gaps to explore in primary research"
    ],
    "aiValue": [
      "Rapid scanning of large volumes of reports, articles, and studies",
      "Extraction of key statistics and quotes from lengthy documents",
      "Summarization of complex reports into digestible insights",
      "Cross-referencing findings across multiple sources"
    ],
    "considerations": [
      "<strong>AI for Speed, Humans for Depth:</strong> AI can quickly surface relevant reports and summarize findings, but humans must assess quality, relevance, and strategic implications.",
      "<strong>Source Validation:</strong> AI may pull from unreliable or outdated sources. Always verify publication dates, sample sizes, and methodologies manually.",
      "<strong>Synthesis Over Summarization:</strong> AI excels at summarizing individual sources but struggles with cross-source synthesis. Humans must connect the dots and identify patterns."
    ],
    "aiInLoop": [
      "<strong>Source Discovery:</strong> AI scans databases (Google Scholar, industry reports) to identify relevant studies based on keywords. Humans evaluate and prioritize sources.",
      "<strong>Data Extraction:</strong> AI reads reports and extracts key data points (stats, quotes, methodologies). Humans review for accuracy and context.",
      "<strong>Pattern Identification:</strong> AI flags recurring themes across sources. Humans synthesize these themes, identifying insights and gaps that warrant primary research."
    ],
    "watchOuts": [
      "Don't rely on AI-generated summaries without reading the original source. AI may miss critical nuances or misinterpret findings.",
      "Avoid \"data dump\" syndrome. Just because AI can surface 100 reports doesn't mean you should read them all. Focus on high-quality, relevant sources.",
      "Be cautious of echo chambers. AI may surface sources that confirm your hypothesis rather than challenge it. Actively seek contradictory perspectives."
    ]
  }
},

  "steep-pestle": {
  "slug": "steep-pestle",
  "title": "STEEP/PESTLE Analysis",
  "tags": [
    "Discovery",
    "Environmental Analysis"
  ],
  "purpose": "Assess macro-environmental factors that influence product strategy and user behavior.",
  "learn": {
    "sections": [
      {
        "title": "What is STEEP/PESTLE?",
        "blocks": [
          {
            "type": "p",
            "text": "STEEP and PESTLE are strategic frameworks for analyzing external macro-environmental factors that impact your product, market, or users. Both examine Social, Technological, Economic, Environmental/Ecological, and Political/Legal forces. PESTLE adds \"Legal\" as a distinct category. These frameworks help teams anticipate trends, risks, and opportunities outside their direct control."
          }
        ]
      },
      {
        "title": "The Five (or Six) Forces",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Social:</strong> Demographics, cultural trends, lifestyle changes, values shifts",
              "<strong>Technological:</strong> Innovation, automation, digital transformation, emerging tech",
              "<strong>Economic:</strong> Market conditions, employment, inflation, purchasing power",
              "<strong>Environmental/Ecological:</strong> Sustainability, climate impact, resource scarcity",
              "<strong>Political:</strong> Government policy, regulations, trade agreements, political stability",
              "<strong>Legal (PESTLE only):</strong> Laws, compliance, intellectual property, data privacy"
            ]
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "STEEP/PESTLE is used during <strong>Discovery</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Problem hypothesis formation",
              "<strong>Before:</strong> Primary research and detailed user studies"
            ]
          },
          {
            "type": "p",
            "text": "It provides strategic context for product planning and helps identify external risks and opportunities."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Focus on Relevance:</strong> Not every factor matters for every product. Prioritize forces with the highest impact on your users or business.",
              "<strong>Look 3-5 Years Ahead:</strong> STEEP/PESTLE is about anticipating change, not reacting to today's news.",
              "<strong>Use Data:</strong> Ground your analysis in reports, studies, and trends—not assumptions. Cite sources.",
              "<strong>Identify Opportunities and Threats:</strong> For each factor, ask: \"How does this create an opportunity?\" and \"What risks does this introduce?\"",
              "<strong>Connect to User Behavior:</strong> Macro trends only matter if they affect how users think, feel, or act. Draw clear links to user needs.",
              "<strong>Revisit Regularly:</strong> Environmental factors change. Update your analysis annually or when major events occur."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: STEEP/PESTLE Analysis",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Social</strong><br> Trends: [Demographics, culture, lifestyle changes]<br> Impact on Users: [How this affects behavior/needs]<br> Opportunities: [What can we leverage?]<br> Threats: [What risks do we face?]<br> <br> <strong>Technological</strong><br> Trends: [Emerging tech, automation, digital shifts]<br> Impact: [...]<br> <br> <strong>Economic</strong><br> Trends: [Market conditions, purchasing power, employment]<br> Impact: [...]<br> <br> <strong>Environmental</strong><br> Trends: [Sustainability, climate, resource concerns]<br> Impact: [...]<br> <br> <strong>Political/Legal</strong><br> Trends: [Regulations, policy changes, compliance]<br> Impact: [...]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Scope:</strong> Are you analyzing a specific market, user segment, or product category? Be clear on what you're assessing.",
              "<strong>Research Each Factor:</strong> Gather data from industry reports, government statistics, news, and trend forecasts. Look for credible, recent sources.",
              "<strong>Identify Key Trends:</strong> For each STEEP/PESTLE category, list 2-5 major trends relevant to your product/users.",
              "<strong>Assess Impact:</strong> How does each trend affect your users' behaviors, needs, or purchasing decisions? Be specific.",
              "<strong>Flag Opportunities:</strong> Where can your product align with or capitalize on these trends?",
              "<strong>Flag Threats:</strong> What risks or barriers do these trends introduce? What could derail your strategy?",
              "<strong>Prioritize:</strong> Not all factors are equally important. Rank by potential impact and urgency."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Social:</strong>",
              "<strong>Technological:</strong>",
              "<strong>Economic:</strong>",
              "<strong>Environmental:</strong>",
              "<strong>Political/Legal:</strong>",
              "• <strong>Trend:</strong> 59 million Americans freelance (36% of workforce). Gen Z/Millennials value flexibility over traditional employment.",
              "• <strong>Impact:</strong> Growing market of freelancers needing financial tools designed for non-traditional work.",
              "• <strong>Opportunity:</strong> Position as the \"finance OS for the freelance economy.\"",
              "• <strong>Trend:</strong> AI-powered accounting tools, embedded payments (Stripe, PayPal APIs), mobile-first workflows.",
              "• <strong>Impact:</strong> Users expect automation, real-time syncing, and mobile access.",
              "• <strong>Threat:</strong> Competitors may out-innovate us with AI-powered features (e.g., automated expense categorization).",
              "• <strong>Trend:</strong> Economic uncertainty increases freelancing (people seek side income). But recessions reduce client budgets.",
              "• <strong>Impact:</strong> More freelancers need invoicing tools, but they're price-sensitive.",
              "• <strong>Opportunity:</strong> Offer a freemium model to capture budget-conscious users.",
              "• <strong>Trend:</strong> Digital-first work reduces paper invoicing. Sustainability is a growing value for consumers.",
              "• <strong>Impact:</strong> Users prefer paperless, eco-friendly solutions.",
              "• <strong>Opportunity:</strong> Market as a sustainable alternative to traditional invoicing.",
              "• <strong>Trend:</strong> New gig economy regulations (e.g., California AB5, EU platform worker laws). Tax compliance complexity for freelancers.",
              "• <strong>Impact:</strong> Freelancers face increased legal/tax burdens.",
              "• <strong>Opportunity:</strong> Build compliance features (tax estimation, 1099 generation).",
              "• <strong>Threat:</strong> Regulations could reclassify freelancers as employees, shrinking our market."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Strategic judgment to assess which trends matter most",
      "Contextual understanding of local/regional nuances",
      "Critical thinking to connect macro trends to user behavior",
      "Ability to anticipate second-order effects of trends"
    ],
    "aiValue": [
      "Rapid scanning of reports, news, and trend forecasts",
      "Extraction of key statistics and data points",
      "Identification of emerging patterns across sources",
      "Generation of trend summaries by category"
    ],
    "considerations": [
      "<strong>AI for Data Gathering:</strong> Use AI to scan industry reports and news for relevant trends. But humans must validate sources and assess credibility.",
      "<strong>Trend Interpretation:</strong> AI can surface trends but struggles to assess strategic importance. Humans must prioritize based on business context.",
      "<strong>Regional Nuances:</strong> AI may miss local/cultural factors. Humans must add context for specific markets."
    ],
    "aiInLoop": [
      "<strong>Trend Discovery:</strong> AI scans databases (Gartner, Statista, news) for STEEP/PESTLE factors. Humans curate the most relevant trends.",
      "<strong>Data Extraction:</strong> AI extracts key statistics and quotes from reports. Humans synthesize into actionable insights.",
      "<strong>Impact Assessment:</strong> Humans evaluate how each trend affects users and strategy. AI cross-references with competitor analyses."
    ],
    "watchOuts": [
      "Don't let AI generate the entire analysis. It lacks strategic judgment and business context.",
      "Avoid echo chambers. AI may surface trends that confirm your existing beliefs. Seek contradictory perspectives.",
      "Be cautious of AI overweighting sensational news. Focus on substantive, long-term trends, not headlines."
    ]
  }
},

  "demographics": {
  "slug": "demographics",
  "title": "Demographics",
  "tags": [
    "Discovery",
    "Market Research"
  ],
  "purpose": "Understand your target market through quantifiable characteristics like age, location, income, and education.",
  "learn": {
    "sections": [
      {
        "title": "What are Demographics?",
        "blocks": [
          {
            "type": "p",
            "text": "Demographics are quantifiable characteristics of populations—age, gender, income, education, location, occupation, family status. In product design, demographic data helps you understand the size and composition of your target market, but remember: demographics describe who users are, not why they behave a certain way. Always pair demographic research with behavioral and psychographic insights."
          }
        ]
      },
      {
        "title": "Common Demographic Variables",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Age:</strong> Generation cohorts (Gen Z, Millennials, Gen X, Boomers)",
              "<strong>Location:</strong> Country, region, urban vs. rural, climate",
              "<strong>Income:</strong> Household income, purchasing power",
              "<strong>Education:</strong> Highest level completed",
              "<strong>Occupation:</strong> Industry, job role, employment status",
              "<strong>Family Status:</strong> Marital status, children, household size",
              "<strong>Gender & Identity:</strong> Self-reported gender, sexual orientation",
              "<strong>Ethnicity & Culture:</strong> Race, language, cultural background"
            ]
          }
        ]
      },
      {
        "title": "Why Demographics Matter",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Market Sizing:</strong> Estimate total addressable market (TAM)",
              "<strong>Segmentation:</strong> Identify distinct user groups for targeted design",
              "<strong>Accessibility:</strong> Ensure designs work for diverse populations (age, ability, literacy)",
              "<strong>Business Strategy:</strong> Inform pricing, distribution, marketing"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Don't Over-Index on Demographics:</strong> Two 30-year-old designers may have completely different needs. Focus on behaviors and motivations, not just demographics.",
              "<strong>Use Data Sources:</strong> Census data, industry reports (Statista, Pew Research), survey panels",
              "<strong>Avoid Stereotypes:</strong> Demographics describe populations, not individuals. Always validate with real user research.",
              "<strong>Consider Intersectionality:</strong> People belong to multiple demographic groups. A young, urban, low-income freelancer has unique needs.",
              "<strong>Update Regularly:</strong> Demographics shift. Refresh data every 1-2 years."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Demographic Profile",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Target Market:</strong> [Who you're designing for]<br> <br> <strong>Age Range:</strong> [e.g., 25-40 years]<br> <strong>Location:</strong> [Geographic focus]<br> <strong>Income:</strong> [$X-$Y annual household income]<br> <strong>Education:</strong> [Most common level]<br> <strong>Occupation:</strong> [Primary industries/roles]<br> <strong>Family Status:</strong> [Single, married, children?]<br> <br> <strong>Market Size:</strong> [Estimated total users in demographic]<br> <strong>Sources:</strong> [Where you got this data]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Target Market:</strong> Who is your product for? Be specific (e.g., \"freelance creatives in the US\" not \"everyone\").",
              "<strong>Identify Key Demographics:</strong> Which demographic variables matter most for your product? (Age and income for pricing; location for distribution)",
              "<strong>Gather Data:</strong> Use census data (census.gov), industry reports (Statista, Pew Research), or run surveys.",
              "<strong>Calculate Market Size:</strong> Estimate how many people fit your demographic profile. TAM = total addressable market.",
              "<strong>Segment:</strong> Break demographics into 2-4 segments if there are meaningful differences (e.g., \"early-career freelancers\" vs. \"established consultants\").",
              "<strong>Validate with Behavior:</strong> Demographics alone don't predict behavior. Pair with interviews or surveys to understand motivations."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Target Market:</strong> Freelancers and independent contractors in the United States",
              "<strong>Demographics:</strong>",
              "<strong>Market Size:</strong> 59 million freelancers in US (36% of workforce). Target segment: ~20M in creative/tech fields earning $30K+.",
              "<strong>Key Insight:</strong> Income variability means pricing must be flexible (freemium or tiered). High education level suggests users are comfortable with tech but expect polished UX.",
              "• <strong>Age:</strong> 25-45 years (68% of freelancers, per Freelancers Union)",
              "• <strong>Location:</strong> Primarily urban areas (NYC, SF, Austin, Seattle). 35% in suburbs, 15% rural.",
              "• <strong>Income:</strong> $30K-$100K annual (highly variable; median ~$55K)",
              "• <strong>Education:</strong> 65% have bachelor's degree or higher",
              "• <strong>Occupation:</strong> Creative services (design, writing, photography), tech (dev, consulting), business services",
              "• <strong>Family Status:</strong> 52% single, 40% married, 30% have children"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Strategic judgment to determine which demographics matter",
      "Contextual understanding of cultural nuances and sensitivities",
      "Ability to segment markets based on behavioral patterns, not just demographics",
      "Critical evaluation of data sources for bias and accuracy"
    ],
    "aiValue": [
      "Rapid extraction of demographic data from reports and databases",
      "Market size calculations and projections",
      "Identification of demographic trends across sources",
      "Cross-referencing multiple data sources for validation"
    ],
    "considerations": [
      "<strong>AI for Data Aggregation:</strong> Use AI to scan census data, reports, and surveys for relevant demographics. Humans validate sources and assess relevance.",
      "<strong>Market Sizing:</strong> AI can calculate TAM based on demographic filters. Humans must adjust for behavioral filters (e.g., not all 25-40-year-olds are freelancers).",
      "<strong>Avoid Bias:</strong> AI-trained demographic models may reflect historical biases. Always cross-check with diverse, representative data."
    ],
    "aiInLoop": [
      "<strong>Data Discovery:</strong> AI scans demographic databases (Census, Statista) for relevant population segments. Humans prioritize which variables to investigate.",
      "<strong>Market Sizing:</strong> AI calculates market size based on demographic filters. Humans validate calculations and adjust for behavioral factors.",
      "<strong>Trend Analysis:</strong> AI identifies demographic shifts over time (aging population, urbanization). Humans assess implications for product strategy."
    ],
    "watchOuts": [
      "Don't let demographics alone define your target user. Behavior and psychographics are equally important.",
      "Avoid stereotyping. Demographics describe populations, not individuals. Always validate with real user research.",
      "Be cautious of outdated data. AI may surface old census reports. Always check publication dates.",
      "Consider intersectionality. AI may treat demographics as independent variables, but real users belong to multiple groups with compounding needs."
    ]
  }
},

  "primary-research": {
  "slug": "primary-research",
  "title": "Primary Research",
  "tags": [
    "Discovery",
    "User Research"
  ],
  "purpose": "Collect original data directly from users through interviews, surveys, observations, and testing.",
  "learn": {
    "sections": [
      {
        "title": "What is Primary Research?",
        "blocks": [
          {
            "type": "p",
            "text": "Primary Research involves collecting firsthand data directly from your users, rather than relying on existing studies (secondary research). It's the cornerstone of user-centered design: you observe behaviors, ask questions, and test assumptions in real-world contexts. Primary research gives you insights no competitor can replicate—because they're unique to your users and your product."
          }
        ]
      },
      {
        "title": "Why Primary Research Matters",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Uncover Hidden Needs:</strong> Users can't tell you what they don't know they need. Observation reveals unarticulated problems.",
              "<strong>Validate Assumptions:</strong> Your hypothesis might be wrong. Primary research prevents you from building the wrong thing.",
              "<strong>Build Empathy:</strong> Talking to real users transforms abstract \"personas\" into people with real struggles and motivations.",
              "<strong>Reduce Risk:</strong> Invest time in research now to avoid expensive pivots later."
            ]
          }
        ]
      },
      {
        "title": "Qualitative vs. Quantitative",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Qualitative:</strong> Explores the \"why\" and \"how.\" Methods: interviews, observations, diary studies. Generates rich, narrative insights. Small sample sizes (10-15 participants).",
              "<strong>Quantitative:</strong> Measures the \"what\" and \"how many.\" Methods: surveys, analytics, A/B tests. Generates statistical data. Large sample sizes (100s-1000s of participants)."
            ]
          },
          {
            "type": "p",
            "text": "Best practice: Use both. Qualitative to discover problems; quantitative to validate scale and prioritize."
          }
        ]
      },
      {
        "title": "Common Primary Research Methods",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>User Interviews:</strong> One-on-one conversations to understand behaviors, motivations, and pain points.",
              "<strong>Surveys:</strong> Structured questionnaires to gather data at scale.",
              "<strong>Usability Testing:</strong> Watch users interact with prototypes or products to identify friction.",
              "<strong>Field Observations:</strong> Observe users in their natural environment (ethnography, contextual inquiry).",
              "<strong>Diary Studies:</strong> Users log experiences over time to capture longitudinal patterns.",
              "<strong>A/B Testing:</strong> Compare two versions to see which performs better."
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Start with \"Why\":</strong> Define clear research questions before choosing a method. What do you need to learn?",
              "<strong>Recruit the Right Users:</strong> Target your actual user segment, not \"anyone.\" Use screeners to filter.",
              "<strong>Triangulate:</strong> Use multiple methods. If interviews and surveys tell different stories, dig deeper.",
              "<strong>Stay Neutral:</strong> Avoid leading questions or confirmation bias. You're here to learn, not validate your ideas.",
              "<strong>Iterate:</strong> Research isn't one-and-done. Conduct multiple rounds as your understanding evolves.",
              "<strong>Involve Stakeholders:</strong> Invite team members to observe research sessions. Seeing users struggle builds shared empathy."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Research Plan",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Research Goals</strong><br> What are we trying to learn? [1-3 specific questions]<br> <br> <strong>Method(s)</strong><br> Which research methods will we use? [Interviews, surveys, etc.]<br> Why these methods?<br> <br> <strong>Participants</strong><br> Who: [Target user segment]<br> Sample Size: [How many participants?]<br> Recruitment: [How will we find them?]<br> <br> <strong>Timeline</strong><br> Recruitment: [Dates]<br> Data Collection: [Dates]<br> Analysis & Synthesis: [Dates]<br> <br> <strong>Deliverables</strong><br> What will we produce? [Report, personas, insights deck, etc.]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Research Questions:</strong> What do you need to know? Be specific. \"Why do freelancers delay invoicing?\" is better than \"Learn about freelancers.\"",
              "<strong>Choose Methods:</strong> Match methods to questions. Qualitative for \"why\"; quantitative for \"how many.\"",
              "<strong>Write a Research Plan:</strong> Document goals, methods, timeline, and deliverables. Share with stakeholders for alignment.",
              "<strong>Recruit Participants:</strong> Create a screener to filter for your target users. Aim for 10-15 for interviews, 100+ for surveys.",
              "<strong>Prepare Materials:</strong> Draft interview guides, survey questions, or test scenarios. Pilot with 1-2 users to refine.",
              "<strong>Collect Data:</strong> Conduct interviews, send surveys, run observations. Record sessions (with permission). Take detailed notes.",
              "<strong>Synthesize Findings:</strong> Use affinity mapping to cluster themes. Identify patterns, surprises, and contradictions.",
              "<strong>Share Insights:</strong> Create a report or presentation with key findings, evidence (quotes, data), and recommendations."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Research Goals:</strong>",
              "<strong>Methods:</strong>",
              "<strong>Participants:</strong>",
              "<strong>Key Findings:</strong>",
              "<strong>Recommendation:</strong> Build MVP focused on invoice tracking and automated reminders—users' #1 and #2 requests.",
              "• Understand how freelancers currently manage invoicing and payments",
              "• Identify pain points in the invoice-to-payment process",
              "• Validate demand for an automated invoicing tool",
              "• <strong>Qualitative:</strong> 12 one-on-one interviews with freelance designers and developers (45 mins each)",
              "• <strong>Quantitative:</strong> Survey of 200 freelancers to measure prevalence of pain points",
              "• Freelancers in creative/tech fields, 1-5 years experience, $30K-$100K annual income",
              "• Recruited via LinkedIn, Upwork, design communities",
              "• 85% of survey respondents track invoices manually (spreadsheets, email)",
              "• 12/12 interview participants cited \"late payment stress\" as a top-3 pain point",
              "• Users want: automated reminders, payment tracking, mobile access"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to build rapport with participants",
      "Active listening to probe deeper on unexpected responses",
      "Contextual judgment to separate signal from noise",
      "Ethical oversight to protect participant privacy and wellbeing"
    ],
    "aiValue": [
      "Transcription of interviews and focus groups",
      "Analysis of large-scale survey data",
      "Pattern recognition across multiple research sessions",
      "Generation of research report drafts from findings"
    ],
    "considerations": [
      "<strong>AI for Transcription:</strong> Use AI to transcribe interviews, freeing researchers to focus on listening. But review for accuracy—AI struggles with accents and jargon.",
      "<strong>Survey Analysis:</strong> AI can quickly analyze quantitative survey data, identifying correlations and trends. Humans must interpret what these patterns mean strategically.",
      "<strong>No AI as Interviewer:</strong> Never replace human researchers with AI. User research requires empathy, adaptability, and ethical judgment that AI cannot provide."
    ],
    "aiInLoop": [
      "<strong>Preparation:</strong> AI suggests research methods and interview questions based on objectives. Humans refine for context and tone.",
      "<strong>Data Collection:</strong> Humans conduct research. AI transcribes recordings and tags key moments (pain points, workarounds, emotions).",
      "<strong>Synthesis:</strong> AI clusters quotes and themes across sessions. Humans validate patterns, prioritize insights, and connect findings to product strategy."
    ],
    "watchOuts": [
      "Never let AI conduct user research. It lacks empathy, cultural sensitivity, and ethical judgment.",
      "Don't rely solely on AI sentiment analysis. It misses sarcasm, tone, and cultural nuances. Always validate with human review.",
      "Be cautious of AI-generated insights. They may be statistically accurate but strategically meaningless. Humans must assess business impact.",
      "Privacy first: Ensure AI tools comply with data protection laws (GDPR, CCPA). Always inform participants if AI is involved."
    ]
  }
},

  "aeiou": {
  "slug": "aeiou",
  "title": "AEIOU Framework",
  "tags": [
    "Observation",
    "Field Research"
  ],
  "purpose": "Structure observational research by capturing Activities, Environments, Interactions, Objects, and Users.",
  "learn": {
    "sections": [
      {
        "title": "What is AEIOU?",
        "blocks": [
          {
            "type": "p",
            "text": "AEIOU is an observational framework that helps researchers capture and organize field research findings. It stands for <strong>Activities, Environments, Interactions, Objects, and Users</strong>. By systematically documenting these five dimensions, researchers can build a rich, multi-layered understanding of user behavior in context."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Use AEIOU during:"
          },
          {
            "type": "ul",
            "items": [
              "Ethnographic research and contextual inquiry",
              "Field observations (workplace studies, home visits, retail experiences)",
              "Early discovery when you need to understand \"how things work today\""
            ]
          },
          {
            "type": "p",
            "text": "AEIOU is especially useful when entering unfamiliar domains or when existing assumptions might be wrong."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Observe First, Interpret Later:</strong> Capture raw observations without judgment. Analysis happens after fieldwork.",
              "<strong>Be Specific:</strong> Instead of \"user was frustrated,\" note \"user sighed, closed laptop, walked away.\"",
              "<strong>Use All Five Lenses:</strong> Don't skip categories. Even \"Objects\" can reveal critical insights (e.g., users relying on post-it notes instead of your app).",
              "<strong>Pair with Photos/Sketches:</strong> Visual documentation strengthens AEIOU notes. Capture the environment, objects, and body language.",
              "<strong>Debrief Immediately:</strong> Review notes within 24 hours while details are fresh. Fill in gaps and clarify ambiguities."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: AEIOU Observation Grid",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Activities:</strong><br> [What are users trying to accomplish? What tasks are they performing?]<br> <br> <strong>Environments:</strong><br> [Where does this happen? What's the context? Physical space, digital platform, time of day?]<br> <br> <strong>Interactions:</strong><br> [How do users communicate with others? How do they interact with tools/systems?]<br> <br> <strong>Objects:</strong><br> [What tools, devices, or materials are present? Which are used (or not used)?]<br> <br> <strong>Users:</strong><br> [Who is involved? What are their roles, goals, pain points, workarounds?]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Focus:</strong> What behavior or context are you studying? Be clear on the scope (e.g., \"morning commute routine\" vs. \"all transportation habits\").",
              "<strong>Prepare Your Tools:</strong> Bring a notebook, camera, and AEIOU template. Brief your team on the framework.",
              "<strong>Observe Holistically:</strong> Watch users in their natural environment. Take detailed notes across all five categories. Don't interrupt—observe first, ask questions later.",
              "<strong>Document Everything:</strong> Capture what users say, do, and the tools/spaces they use. Note discrepancies (e.g., user says \"it's easy\" but struggles for 5 minutes).",
              "<strong>Debrief as a Team:</strong> After fieldwork, review notes together. Identify patterns, surprises, and gaps that need follow-up.",
              "<strong>Synthesize Insights:</strong> Use affinity mapping or thematic analysis to turn observations into actionable insights."
            ]
          }
        ]
      },
      {
        "title": "Example: Coffee Shop Work Session",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Activities:</strong> User opens laptop, connects to WiFi, responds to emails, joins video call. Pauses to order coffee. Returns to laptop, works on design mockups in Figma.",
              "<strong>Environments:</strong> Corner table near outlet. Moderate noise (music, chatter). Natural light from window. Other remote workers nearby. Barista occasionally asks if user needs refills.",
              "<strong>Interactions:</strong> User waves to barista to order. During video call, user mutes frequently due to background noise. No interaction with other patrons.",
              "<strong>Objects:</strong> MacBook Pro, AirPods, external mouse, notebook, phone (face-down on table), reusable water bottle, coffee cup.",
              "<strong>Users:</strong> Freelance designer, mid-30s. Prefers working outside home office for \"ambient noise.\" Values proximity to outlets and reliable WiFi. Frustrated when internet drops during calls."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Contextual interpretation of behaviors and body language",
      "Ability to ask follow-up questions and probe deeper",
      "Recognition of cultural nuances and unspoken social dynamics",
      "Empathetic understanding of emotional states"
    ],
    "aiValue": [
      "Pattern recognition across multiple observation sessions",
      "Clustering of similar behaviors or environments",
      "Transcription of audio/video field recordings",
      "Tagging and categorization of large volumes of notes"
    ],
    "considerations": [
      "<strong>AI for Note Organization:</strong> Use AI to tag and cluster field notes by AEIOU category. But humans must validate the tagging—AI can misclassify subtle observations.",
      "<strong>Video Analysis:</strong> AI can transcribe and timestamp video recordings, making it easier to review key moments. But humans must interpret the \"why\" behind actions.",
      "<strong>Pattern Detection:</strong> AI can surface recurring themes (e.g., \"users always check phone before starting task\"). Humans must assess if patterns are meaningful or coincidental."
    ],
    "aiInLoop": [
      "<strong>Field Note Augmentation:</strong> Humans capture observations in the field. AI transcribes audio notes and categorizes them into AEIOU buckets. Humans review and refine.",
      "<strong>Pattern Highlighting:</strong> AI scans multiple observation sessions to identify recurring Activities, Objects, or Interactions. Humans prioritize which patterns to investigate further.",
      "<strong>Synthesis Support:</strong> AI generates initial themes from AEIOU notes. Humans validate, merge themes, and connect insights to design opportunities."
    ],
    "watchOuts": [
      "AI cannot replace the researcher's physical presence. Contextual insights (tone, body language, environmental cues) are lost in automated analysis.",
      "Don't rely on AI for ethical decisions. Observational research requires consent and respect for privacy—AI cannot make these judgments.",
      "Beware of over-categorization. AI may force observations into rigid AEIOU buckets when reality is messier. Always allow for ambiguity and overlap."
    ]
  }
},

  "exploratory-interviews": {
  "slug": "exploratory-interviews",
  "title": "Exploratory Interviews",
  "tags": [
    "Discovery",
    "Qualitative Research"
  ],
  "purpose": "Conduct open-ended conversations with users to uncover problems, motivations, and behaviors.",
  "learn": {
    "sections": [
      {
        "title": "What are Exploratory Interviews?",
        "blocks": [
          {
            "type": "p",
            "text": "Exploratory Interviews are semi-structured, open-ended conversations designed to understand user behaviors, needs, and pain points before you've committed to a solution. Unlike usability testing (which validates designs), exploratory interviews help you discover the right problems to solve."
          }
        ]
      },
      {
        "title": "When to Use",
        "blocks": [
          {
            "type": "p",
            "text": "Conduct exploratory interviews during the <strong>Discovery phase</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "When you have a problem hypothesis but need to validate it",
              "Before designing solutions (don't show mockups—just listen)",
              "When entering a new market or user segment",
              "To understand the \"why\" behind quantitative data"
            ]
          }
        ]
      },
      {
        "title": "Core Principles",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Ask \"Why\" 5 Times:</strong> Surface-level answers hide deeper motivations. Keep probing.",
              "<strong>Focus on Past Behavior:</strong> \"Tell me about the last time you...\" beats \"Would you ever...?\" Stories reveal truth; hypotheticals don't.",
              "<strong>Stay Neutral:</strong> Don't lead with your solution or bias responses. You're here to learn, not validate.",
              "<strong>Embrace Silence:</strong> Pause after the user speaks. Silence invites them to elaborate.",
              "<strong>Observe Non-Verbals:</strong> Tone, hesitation, and body language reveal as much as words."
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Sample Size:</strong> 10-15 interviews typically reveal 80%+ of themes. Diminishing returns after that.",
              "<strong>Duration:</strong> 30-60 minutes per interview. Shorter = surface-level; longer = fatigue.",
              "<strong>Record & Transcribe:</strong> Focus on listening, not note-taking. Get permission to record.",
              "<strong>Two-Person Teams:</strong> One facilitates, one takes notes. Both debrief immediately after.",
              "<strong>Iterate Your Guide:</strong> After 3-5 interviews, refine questions based on what you're learning.",
              "<strong>Compensate Participants:</strong> Respect their time. Gift cards or cash are standard ($50-150 depending on audience)."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Interview Guide",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Introduction (5 min)</strong><br> - Thank you for your time<br> - Purpose: Learn about your experience with [topic]<br> - No right/wrong answers; we want honest feedback<br> - Recording for notes (with permission)<br> - Confidentiality: We won't share your name<br> <br> <strong>Warm-Up (5 min)</strong><br> - Tell me about your role/work<br> - Walk me through a typical day<br> <br> <strong>Core Questions (35-45 min)</strong><br> 1. Tell me about the last time you [relevant activity]<br> - What prompted that?<br> - How did you approach it?<br> - What went well? What was frustrating?<br> <br> 2. What tools/methods do you currently use for [task]?<br> - Why those specifically?<br> - What do you like/dislike?<br> <br> 3. Describe a time when [problem scenario]<br> - What caused that?<br> - How did you resolve it?<br> - What would have made it easier?<br> <br> <strong>Wrap-Up (5 min)</strong><br> - Is there anything I didn't ask that I should have?<br> - Who else should I talk to?<br> - Thank you + next steps"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Research Questions:</strong> What do you need to learn? (Not \"Will users like our idea?\" but \"What problems do users face with X?\")",
              "<strong>Recruit Participants:</strong> Target your user segment. Use screeners to filter. Recruit 15-20 to account for no-shows.",
              "<strong>Craft Your Interview Guide:</strong> Write 5-10 open-ended questions. Focus on stories, not opinions.",
              "<strong>Pilot the Guide:</strong> Test with 1-2 people. Time it. Refine confusing questions.",
              "<strong>Conduct Interviews:</strong> Create a comfortable environment. Start broad, then narrow. Probe deeply when something interesting emerges.",
              "<strong>Debrief Immediately:</strong> Spend 10 minutes after each interview capturing key insights while they're fresh.",
              "<strong>Synthesize Findings:</strong> Use affinity mapping to cluster themes across interviews. Look for patterns, surprises, and contradictions."
            ]
          }
        ]
      },
      {
        "title": "Example Questions: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Warm-Up:</strong> \"Tell me about your freelance work. How many clients do you typically work with at a time?\"",
              "<strong>Core:</strong> \"Walk me through the last time you invoiced a client. What steps did you take? Which parts felt smooth, and which felt tedious?\"",
              "<strong>Probing:</strong> \"You mentioned tracking payments is stressful—can you tell me more about a specific time that happened? What made it stressful?\"",
              "<strong>Pain Point Exploration:</strong> \"What tools do you use to manage invoices today? Why those? What do they do well? Where do they fall short?\"",
              "<strong>Emotional Layer:</strong> \"How do you feel when an invoice is overdue? What goes through your mind when deciding whether to follow up?\"",
              "<strong>Wrap-Up:</strong> \"If you had a magic wand and could fix one thing about invoicing, what would it be?\""
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to build rapport and make participants comfortable",
      "Active listening to pick up on emotional cues and body language",
      "Adaptability to probe deeper when something interesting emerges",
      "Contextual judgment to distinguish signal from noise"
    ],
    "aiValue": [
      "Transcription of interview recordings with timestamps",
      "Extraction of key quotes and themes from transcripts",
      "Pattern identification across multiple interviews",
      "Suggested follow-up questions based on responses"
    ],
    "considerations": [
      "<strong>AI for Transcription:</strong> Use AI to transcribe interviews automatically, freeing you to focus on listening. But always review transcripts—AI misses sarcasm, tone, and overlapping speech.",
      "<strong>Quote Mining:</strong> AI can scan transcripts to extract impactful quotes related to specific themes. But humans must assess which quotes are representative vs. outliers.",
      "<strong>No AI in the Room:</strong> Don't use AI during live interviews. It introduces privacy concerns and can make participants uncomfortable. Focus on human connection."
    ],
    "aiInLoop": [
      "<strong>Preparation:</strong> AI suggests interview questions based on research objectives and industry best practices. Humans refine questions for specificity and cultural appropriateness.",
      "<strong>Post-Interview Processing:</strong> AI transcribes recordings and tags key moments (pain points, workarounds, emotional reactions). Humans review and annotate with context.",
      "<strong>Synthesis:</strong> AI clusters quotes by theme across interviews. Humans validate clusters, identify patterns, and prioritize insights for action."
    ],
    "watchOuts": [
      "Never let AI conduct the interview. User research requires empathy, adaptability, and human intuition that AI cannot replicate.",
      "Don't rely solely on AI-generated questions. They're generic and miss your product's unique context. Use AI as a starting point, not the final guide.",
      "Be cautious of AI sentiment analysis. It can misread tone, sarcasm, and cultural nuances. Always validate with human review.",
      "Privacy first: If using AI transcription, ensure compliance with privacy laws (GDPR, etc.) and inform participants."
    ]
  }
},

  "exploratory-surveys": {
  "slug": "exploratory-surveys",
  "title": "Exploratory Surveys",
  "tags": [
    "Discovery",
    "Quantitative Research"
  ],
  "purpose": "Gather quantitative data at scale to validate hypotheses, measure prevalence, and prioritize user needs.",
  "learn": {
    "sections": [
      {
        "title": "What are Exploratory Surveys?",
        "blocks": [
          {
            "type": "p",
            "text": "Exploratory Surveys are structured questionnaires used to collect quantitative data from a large sample of users. Unlike interviews (which explore \"why\"), surveys measure \"what\" and \"how many\"—validating the scale of problems, ranking priorities, and testing assumptions with statistical confidence."
          }
        ]
      },
      {
        "title": "When to Use Surveys",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>After Interviews:</strong> You've identified problems qualitatively; now measure their prevalence.",
              "<strong>Validate Assumptions:</strong> Test if your hypothesis holds true across a larger population.",
              "<strong>Prioritize Features:</strong> Ask users to rank needs or rate importance.",
              "<strong>Segment Users:</strong> Identify distinct user groups based on behaviors or preferences."
            ]
          }
        ]
      },
      {
        "title": "Surveys vs. Interviews",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Surveys:</strong> Broad, shallow. Large sample (100s-1000s). Structured questions. Statistical analysis. Answer \"what\" and \"how many.\"",
              "<strong>Interviews:</strong> Narrow, deep. Small sample (10-15). Open-ended questions. Thematic analysis. Answer \"why\" and \"how.\""
            ]
          },
          {
            "type": "p",
            "text": "<strong>Best Practice:</strong> Interview first to discover problems. Survey second to validate scale."
          }
        ]
      },
      {
        "title": "Types of Survey Questions",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Multiple Choice:</strong> Select one or many from a list. Good for categorical data.",
              "<strong>Rating Scales:</strong> Likert scales (1-5, Strongly Disagree → Strongly Agree). Measure attitudes.",
              "<strong>Ranking:</strong> Order items by preference or importance. Reveals priorities.",
              "<strong>Open-Ended:</strong> Free-text responses. Captures nuance but harder to analyze.",
              "<strong>Yes/No:</strong> Binary questions. Simple, but limited insight."
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Keep It Short:</strong> 5-10 minutes max. Long surveys = high drop-off rates.",
              "<strong>One Question, One Concept:</strong> Avoid compound questions. \"Do you use invoicing and payment tracking tools?\" is two questions.",
              "<strong>Avoid Leading Questions:</strong> \"Don't you think automated reminders are useful?\" biases responses. Ask neutral: \"How useful are automated reminders?\"",
              "<strong>Use Scales Consistently:</strong> If 1 = \"Strongly Disagree\" in Q1, keep it consistent throughout.",
              "<strong>Test Your Survey:</strong> Pilot with 5-10 people. Check for confusing questions, typos, or technical issues.",
              "<strong>Sample Size Matters:</strong> 100+ responses for directional insights. 300+ for statistical confidence."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Survey Structure",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Introduction</strong><br> - Purpose: [Why we're asking]<br> - Time: [~5 minutes]<br> - Confidentiality: [Data handling]<br> <br> <strong>Screener Questions (Optional)</strong><br> - Filter for target users<br> <br> <strong>Core Questions</strong><br> 1. [Demographic/background questions]<br> 2. [Behavioral questions]<br> 3. [Problem/pain point questions]<br> 4. [Priority/ranking questions]<br> <br> <strong>Open-Ended Question (Optional)</strong><br> - \"Anything else you'd like to share?\"<br> <br> <strong>Thank You & Next Steps</strong>"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Your Research Question:</strong> What do you need to measure? (e.g., \"How many freelancers experience late payment stress?\")",
              "<strong>Write Questions:</strong> Start with demographics, then behaviors, then attitudes. Keep questions short and neutral.",
              "<strong>Choose Question Types:</strong> Multiple choice for categories. Rating scales for attitudes. Ranking for priorities.",
              "<strong>Pilot the Survey:</strong> Test with 5-10 people. Time it. Fix confusing questions.",
              "<strong>Recruit Participants:</strong> Use email lists, social media, user panels, or tools like UserTesting, SurveyMonkey Audience.",
              "<strong>Launch & Monitor:</strong> Track response rate. Send reminders after 3-5 days. Aim for 100+ responses minimum.",
              "<strong>Analyze Results:</strong> Calculate percentages, averages, correlations. Look for patterns across demographics.",
              "<strong>Report Findings:</strong> Summarize key stats (e.g., \"85% track invoices manually\"). Include charts for clarity."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Survey",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Research Question:</strong> What are freelancers' biggest invoicing pain points, and how prevalent are they?",
              "<strong>Sample Questions:</strong>",
              "<strong>Results (n=250):</strong>",
              "<strong>Insight:</strong> High stress + manual tracking + late payments = strong product-market fit for automated invoice tool.",
              "• <strong>How long have you been freelancing?</strong> [Multiple choice: <1 year, 1-3 years, 3-5 years, 5+ years]",
              "• <strong>How do you currently track invoices?</strong> [Select all: Spreadsheet, Email, Accounting software, Paper, Other]",
              "• <strong>How often do clients pay invoices late?</strong> [Multiple choice: Never, Rarely (10%), Sometimes (25%), Often (40%), Very often (50%+)]",
              "• <strong>Rate your agreement: \"Tracking invoice payments is stressful.\"</strong> [Scale 1-5: Strongly Disagree → Strongly Agree]",
              "• <strong>Rank these features by importance:</strong> [Drag to rank: Automated reminders, Payment tracking, Mobile access, Invoice templates, Tax reporting]",
              "• <strong>What's your biggest invoicing frustration?</strong> [Open-ended]",
              "• 85% track invoices manually (spreadsheets or email)",
              "• 68% report clients pay late \"sometimes\" or more frequently",
              "• 92% agree or strongly agree that payment tracking is stressful",
              "• <strong>Top 3 priorities:</strong> 1) Automated reminders, 2) Payment tracking, 3) Mobile access"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Question design to avoid bias and ensure clarity",
      "Contextual judgment to interpret statistical patterns",
      "Strategic prioritization of which insights matter most",
      "Qualitative interpretation of open-ended responses"
    ],
    "aiValue": [
      "Rapid analysis of large-scale quantitative data",
      "Identification of correlations and statistical significance",
      "Sentiment analysis of open-ended responses",
      "Segmentation of respondents into behavioral clusters"
    ],
    "considerations": [
      "<strong>AI for Data Analysis:</strong> Use AI to calculate stats (percentages, averages, correlations). Humans interpret what these numbers mean strategically.",
      "<strong>Open-Ended Analysis:</strong> AI can tag themes in free-text responses. But humans must validate—AI misses sarcasm, context, and nuance.",
      "<strong>Bias Detection:</strong> AI can flag leading questions or biased language. But humans must design neutral questions from the start."
    ],
    "aiInLoop": [
      "<strong>Question Generation:</strong> Humans define research goals. AI suggests question formats based on best practices. Humans refine for clarity and neutrality.",
      "<strong>Data Collection:</strong> Humans launch survey. AI monitors response rates and identifies quality issues (speeders, straight-liners).",
      "<strong>Analysis:</strong> AI calculates stats and identifies patterns. Humans interpret findings, prioritize insights, and connect to product strategy."
    ],
    "watchOuts": [
      "Don't let AI write survey questions alone. It lacks contextual understanding and may introduce bias.",
      "Avoid over-reliance on AI sentiment analysis for open-ended responses. It misses cultural context and emotional depth.",
      "Be cautious of AI-identified correlations. Correlation ≠ causation. Humans must assess if patterns are meaningful or coincidental.",
      "Privacy first: Ensure survey tools comply with data protection laws (GDPR, CCPA). Anonymize sensitive data."
    ]
  }
},

  "discussion-guide": {
  "slug": "discussion-guide",
  "title": "Discussion Guide",
  "tags": [
    "Discovery",
    "Interview Planning"
  ],
  "purpose": "Structure interview sessions with strategic questions, prompts, and follow-ups to elicit rich user insights.",
  "learn": {
    "sections": [
      {
        "title": "What is a Discussion Guide?",
        "blocks": [
          {
            "type": "p",
            "text": "A Discussion Guide is a structured document that outlines the flow, questions, and prompts for user interviews or focus groups. It's not a rigid script—it's a flexible framework that ensures you cover key topics while leaving room for organic conversation. Think of it as your research GPS: it keeps you on track without forcing a specific route."
          }
        ]
      },
      {
        "title": "Why Use a Discussion Guide?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Consistency:</strong> Ensures all interviews cover the same topics, making synthesis easier.",
              "<strong>Efficiency:</strong> Keeps interviews focused and on-time (30-60 mins).",
              "<strong>Confidence:</strong> Reduces facilitator anxiety. You won't forget important questions.",
              "<strong>Team Alignment:</strong> Multiple researchers can conduct interviews using the same structure.",
              "<strong>Adaptability:</strong> Provides flexibility to probe deeper when interesting insights emerge."
            ]
          }
        ]
      },
      {
        "title": "Core Components",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Introduction:</strong> Set expectations, build rapport, explain purpose",
              "<strong>Warm-Up:</strong> Easy, non-threatening questions to ease participants in",
              "<strong>Core Questions:</strong> The heart of the interview—exploring behaviors, problems, motivations",
              "<strong>Probing Questions:</strong> Follow-ups to dig deeper (\"Tell me more,\" \"Why is that important?\")",
              "<strong>Wrap-Up:</strong> Final reflections, anything missed, next steps"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Open-Ended Questions:</strong> \"How do you...\" beats \"Do you...?\" Stories reveal truth; yes/no answers don't.",
              "<strong>Chronological Flow:</strong> Start broad, narrow down. Past behavior → Current state → Future needs.",
              "<strong>Neutral Language:</strong> Avoid leading questions. \"What do you think about X?\" not \"Don't you love X?\"",
              "<strong>Timebox Sections:</strong> Allocate time (e.g., Intro: 5min, Core: 40min, Wrap: 5min). Stay flexible but aware.",
              "<strong>Build in Probes:</strong> Add follow-up prompts for common responses. Prepare for \"I don't know\" or silence.",
              "<strong>Iterate:</strong> After 3-5 interviews, refine questions based on what's working (or not)."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Discussion Guide",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Research Goal:</strong> [What are we trying to learn?]<br> <strong>Duration:</strong> [45-60 minutes]<br> <br> <strong>Introduction (5 min)</strong><br> - Thank participant<br> - Explain purpose & confidentiality<br> - Get permission to record<br> - Set expectations (no right/wrong answers)<br> <br> <strong>Warm-Up (5 min)</strong><br> - Tell me about your [role/work/day]<br> - How long have you been [doing X]?<br> <br> <strong>Core Questions (35-40 min)</strong><br> Topic 1: [Behavioral Context]<br> - Walk me through the last time you [task]<br> - What prompted that? How did it go?<br> - [Probe: What made it easy/hard?]<br> <br> Topic 2: [Pain Points]<br> - What's most frustrating about [process]?<br> - Describe a time when [problem] happened<br> - [Probe: How did you resolve it?]<br> <br> Topic 3: [Motivations & Goals]<br> - Why is [goal] important to you?<br> - What would make [task] easier?<br> <br> <strong>Wrap-Up (5 min)</strong><br> - Anything we didn't cover?<br> - Who else should we talk to?<br> - Thank you & next steps"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Research Objectives:</strong> What specific questions do you need answered? Write them down.",
              "<strong>Identify Key Topics:</strong> Break objectives into 3-5 themes (e.g., current behaviors, pain points, needs).",
              "<strong>Write Questions:</strong> For each topic, write 2-4 open-ended questions. Focus on past behavior and stories.",
              "<strong>Add Probes:</strong> Under each question, add 2-3 follow-up prompts to dig deeper.",
              "<strong>Time It:</strong> Assign time to each section. Total should be 45-60 mins.",
              "<strong>Pilot the Guide:</strong> Test with 1-2 people. Are questions clear? Do you get useful answers? Adjust as needed.",
              "<strong>Use It Flexibly:</strong> During interviews, follow the guide but allow organic detours. If a participant says something interesting, probe deeper."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Discussion Guide",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Research Goal:</strong> Understand freelancers' invoicing workflows, pain points, and unmet needs.",
              "<strong>Introduction (5 min):</strong> \"Thanks for joining. We're learning about how freelancers manage invoices and payments. No right or wrong answers—just your honest experience. Can I record for notes?\"",
              "<strong>Warm-Up (5 min):</strong>",
              "<strong>Core Questions (40 min):</strong>",
              "<strong>Topic 1: Current Process</strong>",
              "<strong>Topic 2: Pain Points</strong>",
              "<strong>Topic 3: Needs & Solutions</strong>",
              "<strong>Wrap-Up (5 min):</strong> \"Is there anything I didn't ask that I should have?\" \"Thanks! We'll share findings soon.\"",
              "• \"Tell me about your freelance work. What do you do?\"",
              "• \"How many clients do you work with at a time?\"",
              "• \"Walk me through the last time you invoiced a client. What steps did you take?\"",
              "• [Probe: What tools did you use? How long did it take?]",
              "• \"How do you track whether clients have paid?\"",
              "• [Probe: Where do you keep that information? How often do you check?]",
              "• \"What's the most frustrating part of invoicing and tracking payments?\"",
              "• \"Tell me about a time when an invoice went unpaid. What happened?\"",
              "• [Probe: How did you follow up? How did it make you feel?]",
              "• \"If you had a magic wand, what would you change about invoicing?\"",
              "• \"What would make you feel more in control of getting paid?\""
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to craft questions that resonate with participants",
      "Contextual understanding to sequence topics logically",
      "Strategic judgment to prioritize which topics matter most",
      "Adaptability to refine guide based on pilot learnings"
    ],
    "aiValue": [
      "Suggestion of question formats and phrasing",
      "Generation of follow-up probes for common responses",
      "Benchmarking against research best practices",
      "Identification of leading or biased language"
    ],
    "considerations": [
      "<strong>AI for Question Drafting:</strong> Use AI to generate initial question ideas. But humans must refine for context, tone, and strategic focus.",
      "<strong>Bias Detection:</strong> AI can flag leading questions (\"Don't you think...?\"). But humans must ensure neutrality throughout.",
      "<strong>Cultural Sensitivity:</strong> AI may miss cultural nuances in question phrasing. Humans must adapt for audience."
    ],
    "aiInLoop": [
      "<strong>Drafting:</strong> Humans define research objectives. AI suggests question frameworks and phrasing. Humans refine for clarity and context.",
      "<strong>Probing:</strong> AI generates follow-up probe ideas for each question. Humans select the most useful probes and add custom ones.",
      "<strong>Iteration:</strong> After pilot interviews, humans identify weak questions. AI suggests alternatives. Humans test and finalize."
    ],
    "watchOuts": [
      "Don't let AI write the entire guide. It lacks strategic context and understanding of your specific research goals.",
      "Avoid AI-generated generic questions. They work for any topic but lack depth. Tailor questions to your product and users.",
      "Be cautious of AI-suggested \"best practices\" that don't fit your context. Not every guide needs the same structure.",
      "Never use AI to conduct interviews. Discussion guides are for human facilitators only."
    ]
  }
},

  "set-analysis": {
  "slug": "set-analysis",
  "title": "SET Analysis",
  "tags": [
    "Synthesis",
    "Problem Analysis"
  ],
  "purpose": "Analyze problems through Social, Emotional, and Technical lenses to ensure holistic solutions.",
  "learn": {
    "sections": [
      {
        "title": "What is SET Analysis?",
        "blocks": [
          {
            "type": "p",
            "text": "SET Analysis is a framework for examining user problems and design solutions across three dimensions: <strong>Social</strong> (how people interact), <strong>Emotional</strong> (how people feel), and <strong>Technical</strong> (how things work). It prevents teams from over-indexing on one dimension while neglecting others—ensuring solutions are technically feasible, emotionally resonant, and socially appropriate."
          }
        ]
      },
      {
        "title": "The Three Dimensions",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Social:</strong> Group dynamics, cultural norms, collaboration, communication, status, identity, belonging",
              "<strong>Emotional:</strong> Feelings, motivations, anxieties, desires, trust, confidence, satisfaction",
              "<strong>Technical:</strong> Functionality, performance, reliability, usability, integration, scalability"
            ]
          }
        ]
      },
      {
        "title": "Why SET Matters",
        "blocks": [
          {
            "type": "p",
            "text": "Most teams default to technical solutions (\"Let's build a feature!\") while ignoring social and emotional needs. SET forces balanced thinking:"
          },
          {
            "type": "ul",
            "items": [
              "A technically perfect tool fails if it makes users feel anxious or incompetent",
              "An emotionally delightful experience fails if it doesn't work reliably",
              "A socially appropriate solution fails if it ignores how people actually collaborate"
            ]
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Use SET Analysis during <strong>Synthesis & Definition</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Primary research and affinity mapping",
              "<strong>Before:</strong> Solution ideation and feature prioritization"
            ]
          },
          {
            "type": "p",
            "text": "It helps translate research findings into multi-dimensional problem statements."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Balance All Three:</strong> Don't let one dimension dominate. Technical feasibility matters, but so do emotions and social dynamics.",
              "<strong>Root in Research:</strong> Each SET dimension should be supported by evidence (user quotes, observations, data).",
              "<strong>Use for Problem AND Solution:</strong> Analyze the current problem through SET, then validate your solution addresses all three.",
              "<strong>Collaborate Cross-Functionally:</strong> Engineers see Technical clearly. Designers see Emotional. Researchers see Social. Bring all perspectives.",
              "<strong>Look for Conflicts:</strong> Sometimes dimensions contradict (e.g., technical efficiency vs. emotional reassurance). Identify tradeoffs explicitly."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: SET Analysis",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Problem Being Analyzed:</strong> [Brief description]<br> <br> <strong>Social Dimension</strong><br> - How does this affect interactions between people?<br> - What social norms or dynamics are at play?<br> - Evidence: [User quotes, observations]<br> <br> <strong>Emotional Dimension</strong><br> - What feelings does this evoke? (anxiety, frustration, delight)<br> - What are the underlying motivations or fears?<br> - Evidence: [User quotes, behavioral signals]<br> <br> <strong>Technical Dimension</strong><br> - What are the functional requirements or constraints?<br> - What technical barriers exist?<br> - Evidence: [System limitations, performance data]<br> <br> <strong>Insights & Tradeoffs</strong><br> [Where do dimensions conflict? What must be balanced?]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define the Problem:</strong> State the user problem or design challenge you're analyzing.",
              "<strong>Analyze Social Factors:</strong> How does this problem affect relationships, collaboration, or group dynamics? What social context matters?",
              "<strong>Analyze Emotional Factors:</strong> What emotions do users experience? What are their motivations and anxieties?",
              "<strong>Analyze Technical Factors:</strong> What functional or system requirements exist? What are the constraints?",
              "<strong>Identify Conflicts:</strong> Where do dimensions contradict? (E.g., efficiency vs. emotional reassurance)",
              "<strong>Validate with Research:</strong> Ensure each dimension is supported by evidence, not assumptions.",
              "<strong>Design Holistically:</strong> Use SET to evaluate solution ideas. Does your solution address all three dimensions?"
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Problem:</strong> Freelancers delay following up on overdue invoices, leading to cash flow problems.",
              "<strong>Social Dimension:</strong>",
              "<strong>Emotional Dimension:</strong>",
              "<strong>Technical Dimension:</strong>",
              "<strong>Solution Implications:</strong>",
              "• Freelancers fear damaging client relationships by appearing \"pushy\" or \"desperate\"",
              "• Power dynamic: clients hold financial leverage, making confrontation risky",
              "• <em>Evidence:</em> \"I don't want to seem like I'm nagging. What if they stop working with me?\" (Interview #7)",
              "• Anxiety about cash flow and ability to pay bills",
              "• Embarrassment about asking for money (\"feels awkward\")",
              "• Desire to appear professional and in control",
              "• <em>Evidence:</em> \"I lose sleep over unpaid invoices. But I hate being the person who has to ask.\" (Interview #3)",
              "• No automated system to track invoice status or send reminders",
              "• Manual follow-up requires remembering due dates and composing emails",
              "• No integration between invoicing and payment platforms",
              "• <em>Evidence:</em> 85% of survey respondents use manual tracking (spreadsheets, email)",
              "• <strong>Social:</strong> Automate reminders so freelancers don't have to personally \"nag.\" Frame as system-generated, not personal.",
              "• <strong>Emotional:</strong> Provide reassurance (\"80% of invoices are paid within 7 days\"). Reduce anxiety with visibility.",
              "• <strong>Technical:</strong> Build auto-reminders, payment tracking, and sync with Stripe/PayPal."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to interpret emotional and social nuances",
      "Contextual understanding of cultural norms and power dynamics",
      "Strategic judgment to balance conflicting dimensions",
      "Ability to identify second-order effects of solutions"
    ],
    "aiValue": [
      "Pattern recognition across research data (transcripts, surveys)",
      "Tagging of emotional keywords and sentiment",
      "Technical feasibility assessment based on system constraints",
      "Cross-referencing SET dimensions with similar case studies"
    ],
    "considerations": [
      "<strong>AI for Data Tagging:</strong> Use AI to scan research data and tag content by SET category (social interactions, emotional language, technical mentions). Humans validate and interpret.",
      "<strong>Emotional Analysis Limits:</strong> AI can flag emotional keywords (\"anxious,\" \"frustrated\") but cannot understand the depth or cultural context. Humans must interpret.",
      "<strong>Social Nuance:</strong> AI struggles with social dynamics, power structures, and cultural norms. These require human cultural intelligence."
    ],
    "aiInLoop": [
      "<strong>Data Categorization:</strong> AI scans research findings (interviews, surveys) and tags content by SET dimension. Humans review and refine categories.",
      "<strong>Pattern Identification:</strong> AI identifies recurring themes within each dimension (e.g., \"payment anxiety\" in Emotional). Humans assess strategic importance.",
      "<strong>Conflict Mapping:</strong> Humans identify where SET dimensions conflict. AI suggests similar cases or precedents. Humans decide on tradeoffs."
    ],
    "watchOuts": [
      "Don't let AI perform the entire SET analysis. It lacks the empathy, cultural awareness, and strategic judgment required.",
      "Avoid over-reliance on AI sentiment analysis. Emotional and social dimensions require deep human interpretation.",
      "Be cautious of AI missing power dynamics and social hierarchies. These are often implicit and require contextual understanding."
    ]
  }
},

  "personas": {
  "slug": "personas",
  "title": "Personas",
  "tags": [
    "Synthesis",
    "User Archetypes"
  ],
  "purpose": "Create evidence-based user archetypes that embody patterns from research to guide design decisions.",
  "learn": {
    "sections": [
      {
        "title": "What are Personas?",
        "blocks": [
          {
            "type": "p",
            "text": "Personas are fictional yet data-driven representations of your users. They synthesize research findings—demographics, behaviors, goals, pain points—into memorable archetypes that humanize user data. Think of them as design tools, not marketing profiles: they help teams make user-centered decisions by asking \"What would Sarah, the busy freelancer, need here?\""
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Personas are created during the <strong>Synthesis & Definition</strong> phase:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Primary research (interviews, surveys, observations), affinity mapping, and SET analysis",
              "<strong>Before:</strong> Ideation, feature prioritization, journey mapping, and solution design"
            ]
          },
          {
            "type": "p",
            "text": "They bridge discovery and execution by translating abstract research data into tangible user stories."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Root in Data, Not Assumptions:</strong> Every persona trait (goal, pain point, behavior) should trace back to research evidence. Cite specific user quotes or survey results.",
              "<strong>Focus on Behaviors, Not Demographics:</strong> Age, job title, and location matter less than how users think and act. Two 35-year-old designers may have completely different needs.",
              "<strong>Create 2-4 Personas Max:</strong> Too many personas dilute focus. Identify the most critical user segments and prioritize those.",
              "<strong>Make Them Memorable:</strong> Give personas names, photos, and a compelling narrative. Teams should be able to reference \"Busy Freelancer Fran\" without looking at a document.",
              "<strong>Include Goals and Frustrations:</strong> Personas aren't just demographics—they're about what users want to achieve and what stands in their way.",
              "<strong>Avoid Stereotypes:</strong> Personas should feel realistic and respectful, not caricatures. Use real user quotes to ground them in authenticity."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Persona Profile",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Name & Photo</strong><br> [Give them a memorable name and image]<br> <br> <strong>Background</strong><br> Role: [Job title or life role]<br> Context: [Brief 1-2 sentence snapshot of their life/work]<br> <br> <strong>Goals</strong><br> 1. [Primary goal related to your product/service]<br> 2. [Secondary goal]<br> <br> <strong>Pain Points & Frustrations</strong><br> 1. [Key challenge they face]<br> 2. [Another pain point]<br> <br> <strong>Behaviors & Preferences</strong><br> - [How they currently solve this problem]<br> - [Tools they use]<br> - [Communication preferences]<br> <br> <strong>Quote</strong><br> \"[A real user quote that captures their mindset]\""
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Review Research Data:</strong> Analyze interview transcripts, survey responses, and observational notes. Look for recurring patterns in goals, behaviors, and pain points.",
              "<strong>Identify User Segments:</strong> Group users by shared characteristics (behaviors, needs, contexts). Aim for 2-4 distinct segments.",
              "<strong>Extract Key Attributes:</strong> For each segment, identify the most defining traits: goals, frustrations, behaviors, and context.",
              "<strong>Craft the Persona Narrative:</strong> Write a 1-2 paragraph story that brings the persona to life. Use real user quotes to add authenticity.",
              "<strong>Validate with Stakeholders:</strong> Share personas with your team and 2-3 actual users. Do they ring true? Are you missing anything?",
              "<strong>Use Them in Decision-Making:</strong> Reference personas in design reviews, feature prioritization, and roadmap planning. Ask: \"How would this help or hinder [Persona Name]?\""
            ]
          }
        ]
      },
      {
        "title": "Example Persona: Freelance Designer Fran",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Name:</strong> Fran Martinez",
              "<strong>Role:</strong> Freelance Graphic Designer",
              "<strong>Background:</strong> Fran left her agency job two years ago to pursue freelance work. She juggles 3-5 clients at a time, ranging from startups to small businesses. She values flexibility but struggles with the administrative burden of invoicing, contracts, and payment tracking.",
              "<strong>Goals:</strong>",
              "<strong>Pain Points:</strong>",
              "<strong>Behaviors:</strong>",
              "<strong>Quote:</strong> \"I became a freelancer to design, not to chase invoices. I need tools that handle the boring stuff so I can focus on the creative work.\"",
              "• Spend more time designing and less time on admin tasks",
              "• Get paid on time without awkward follow-up emails",
              "• Build a sustainable, stress-free freelance business",
              "• Manually tracking invoices across email, spreadsheets, and bank accounts",
              "• Cash flow anxiety when clients pay late (40% of invoices are overdue)",
              "• Uncertainty about how to price projects competitively",
              "• Uses Figma for design, Google Sheets for invoices, Gmail for client communication",
              "• Prefers tools that \"just work\" — no long setup or learning curve",
              "• Active in online design communities (Dribbble, Twitter)"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to craft personas that feel authentic and human",
      "Strategic judgment to prioritize which personas to build",
      "Contextual understanding to balance conflicting user needs",
      "Storytelling ability to make personas memorable and actionable"
    ],
    "aiValue": [
      "Clustering of user data to identify behavioral segments",
      "Extraction of common goals and pain points from transcripts/surveys",
      "Generation of persona drafts based on research patterns",
      "Benchmarking against industry-standard persona attributes"
    ],
    "considerations": [
      "<strong>AI for Segmentation:</strong> Use AI to analyze survey data and interview transcripts, identifying clusters of similar users. But humans must validate these segments—AI may group users by superficial traits rather than meaningful behavioral patterns.",
      "<strong>Quote Mining:</strong> AI can scan transcripts to extract impactful quotes that align with persona traits. But humans must curate quotes for authenticity and emotional resonance.",
      "<strong>Avoiding \"Frankenpersonas\":</strong> AI may generate personas by averaging user traits, creating unrealistic composites. Humans must ensure personas represent real user archetypes, not statistical averages."
    ],
    "aiInLoop": [
      "<strong>Data Clustering:</strong> AI analyzes research data to propose user segments based on behaviors, goals, and pain points. Humans review and refine these clusters, merging or splitting as needed.",
      "<strong>Persona Drafting:</strong> AI generates initial persona profiles (goals, frustrations, behaviors) based on clustered data. Humans edit for clarity, authenticity, and strategic relevance.",
      "<strong>Validation & Iteration:</strong> AI cross-checks persona attributes against research data to ensure evidence-backing. Humans validate with real users and stakeholders, refining based on feedback."
    ],
    "watchOuts": [
      "Don't let AI create personas from scratch. They'll lack the nuance and empathy that make personas useful.",
      "Avoid over-relying on quantitative data. Personas need qualitative depth—stories, emotions, context—that numbers can't capture.",
      "Be cautious of bias amplification. If your research data skews toward certain demographics, AI will reinforce those biases. Actively seek diverse perspectives."
    ]
  }
},

  "affinity-mapping": {
  "slug": "affinity-mapping",
  "title": "Affinity Mapping",
  "tags": [
    "Synthesis",
    "Pattern Recognition"
  ],
  "purpose": "Organize and cluster qualitative research data to uncover patterns, themes, and actionable insights.",
  "learn": {
    "sections": [
      {
        "title": "What is Affinity Mapping?",
        "blocks": [
          {
            "type": "p",
            "text": "Affinity Mapping (also called Affinity Diagramming) is a collaborative synthesis method that transforms raw research data—interview quotes, observations, sticky notes—into structured themes. By grouping similar ideas, teams surface patterns, identify problems, and discover opportunities that might be invisible in unorganized data."
          }
        ]
      },
      {
        "title": "Why It Works",
        "blocks": [
          {
            "type": "p",
            "text": "The power of Affinity Mapping lies in its emergent structure. Instead of forcing data into pre-defined categories, you let themes reveal themselves through clustering. This bottom-up approach prevents confirmation bias and often uncovers surprising insights."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Use Affinity Mapping during <strong>Synthesis</strong>, immediately after:"
          },
          {
            "type": "ul",
            "items": [
              "Completing multiple user interviews or surveys",
              "Conducting field observations (AEIOU, ethnography)",
              "Gathering feedback from stakeholders or customers"
            ]
          },
          {
            "type": "p",
            "text": "The output feeds directly into persona creation, journey mapping, and problem framing."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Keep Notes Atomic:</strong> One idea per sticky note. \"Users are frustrated with onboarding\" is better than a paragraph of mixed thoughts.",
              "<strong>Stay Silent While Clustering:</strong> Let team members sort notes independently at first. Discussion comes later. This prevents groupthink.",
              "<strong>Name Themes After Clustering:</strong> Don't start with categories. Let the data speak first, then label the clusters.",
              "<strong>Use Hierarchy:</strong> Small clusters → mid-level themes → high-level insights. Aim for 3-7 top-level themes.",
              "<strong>Capture Outliers:</strong> Not everything will fit neatly. Park outliers in a \"miscellaneous\" area—they might reveal edge cases or future opportunities.",
              "<strong>Timebox It:</strong> Initial clustering should take 30-60 minutes. Don't over-engineer—you can refine later."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Materials Needed",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "Sticky notes (physical or digital tools like Miro, FigJam)",
              "Large wall space or infinite digital canvas",
              "Research data: interview transcripts, observation notes, survey responses",
              "Team members (2-6 people ideal for collaboration)"
            ]
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Extract Individual Data Points:</strong> Review research findings. Write each distinct observation, quote, or insight on a separate sticky note. Aim for 50-200 notes depending on research volume.",
              "<strong>Spread Notes on Canvas:</strong> Lay all notes out randomly. This creates a \"data soup\" ready for clustering.",
              "<strong>Silent Clustering (10-15 mins):</strong> Team members individually move notes that \"feel related\" near each other. No talking yet—just intuitive grouping.",
              "<strong>Discuss and Refine:</strong> As a group, review clusters. Move notes that seem misplaced. Split large clusters into sub-themes. Merge tiny clusters that overlap.",
              "<strong>Label Themes:</strong> Once clusters stabilize, name them. Use descriptive labels that capture the essence (e.g., \"Payment tracking anxiety,\" \"Onboarding confusion\").",
              "<strong>Create Hierarchy:</strong> Group related clusters into higher-level themes. You should end with 3-7 major insights that summarize the map.",
              "<strong>Document and Share:</strong> Take photos or export the map. Write a summary of key themes and supporting evidence. Share with stakeholders."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Research",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Data Points (Sample):</strong>",
              "<strong>Cluster Theme:</strong> <strong>\"Payment Tracking Friction\"</strong>",
              "<strong>High-Level Insight:</strong> Freelancers waste significant time and mental energy manually tracking invoice payments due to disconnected tools and lack of automation. <em>Opportunity: Build a unified dashboard with auto-sync and smart reminders.</em>",
              "• \"I spend 2-3 hours/week tracking who paid me\" (Interview #3)",
              "• \"I never know when to follow up on late invoices\" (Survey response)",
              "• \"My bank doesn't tell me which invoice a payment is for\" (Interview #7)",
              "• \"I want automated reminders for overdue invoices\" (Feature request)",
              "• Sub-theme: Manual reconciliation across platforms",
              "• Sub-theme: Lack of automated reminders",
              "• Sub-theme: Poor visibility into payment status"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Intuition to spot meaningful patterns and outliers",
      "Contextual understanding to interpret ambiguous data",
      "Empathy to prioritize user pain points over noise",
      "Collaborative sense-making through team dialogue"
    ],
    "aiValue": [
      "Rapid clustering of large datasets (100s-1000s of notes)",
      "Identification of semantic similarity across varied wording",
      "Suggestion of initial theme labels based on cluster content",
      "Cross-referencing themes with external research or benchmarks"
    ],
    "considerations": [
      "<strong>AI for Pre-Clustering:</strong> Use AI to analyze transcripts and suggest initial groupings. But always validate—AI may cluster by keyword similarity, missing deeper semantic meaning.",
      "<strong>Theme Naming:</strong> AI can propose theme labels, but humans must refine for clarity and emotional resonance. \"Payment anxiety\" is more actionable than \"Invoice-related concerns.\"",
      "<strong>Bias Check:</strong> AI clusters may reflect training data biases. Ensure diverse human perspectives in the final synthesis."
    ],
    "aiInLoop": [
      "<strong>Data Extraction:</strong> AI scans interview transcripts and survey responses, extracting key quotes and observations. Humans review and supplement with notes from field observations.",
      "<strong>Initial Clustering:</strong> AI proposes clusters based on semantic similarity. Humans adjust clusters, splitting or merging based on contextual understanding.",
      "<strong>Theme Validation:</strong> AI suggests theme labels. Humans refine labels, write summaries, and prioritize themes by impact and feasibility."
    ],
    "watchOuts": [
      "Don't let AI do the clustering alone. Human-in-the-loop is critical for interpreting nuance, tone, and context.",
      "Avoid \"garbage clustering\" where AI groups unrelated notes due to superficial keyword overlap. Always review AI-generated clusters.",
      "Be cautious of over-reliance on AI theme naming. Generic labels like \"User Experience Issues\" lack specificity. Humans should craft actionable, descriptive names."
    ]
  }
},

  "framing-lenses": {
  "slug": "framing-lenses",
  "title": "Framing Lenses",
  "tags": [
    "Synthesis",
    "Problem Framing"
  ],
  "purpose": "Reframe problems from multiple perspectives to uncover novel insights and breakthrough solutions.",
  "learn": {
    "sections": [
      {
        "title": "What are Framing Lenses?",
        "blocks": [
          {
            "type": "p",
            "text": "Framing Lenses are different perspectives you can use to view the same problem, revealing new insights and solution possibilities. The way you frame a problem determines the solutions you see. \"How do we make invoicing faster?\" yields different ideas than \"How do we reduce freelancers' payment anxiety?\" Lenses help you break out of default thinking patterns."
          }
        ]
      },
      {
        "title": "Why Reframe Problems?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Escape Fixation:</strong> First-instinct framings are often narrow. Reframing opens new solution spaces.",
              "<strong>Challenge Assumptions:</strong> \"The problem is X\" may be wrong. Lenses force you to question your framing.",
              "<strong>Unlock Creativity:</strong> Different lenses inspire different solutions. More framings = more creative options.",
              "<strong>Align Teams:</strong> Teams often talk past each other because they're solving different problems. Explicit framing creates shared understanding."
            ]
          }
        ]
      },
      {
        "title": "Common Framing Lenses",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>User-Centered:</strong> \"How might we help users accomplish [goal]?\"",
              "<strong>Pain Point:</strong> \"How might we eliminate [frustration]?\"",
              "<strong>Emotional:</strong> \"How might we make users feel [emotion]?\"",
              "<strong>Social:</strong> \"How might we improve [interaction/relationship]?\"",
              "<strong>Technical:</strong> \"How might we leverage [technology] to...\"",
              "<strong>Business:</strong> \"How might we increase [metric/value]?\"",
              "<strong>Opposite:</strong> \"What if we did the opposite of conventional wisdom?\"",
              "<strong>Analogous:</strong> \"How do other industries solve similar problems?\""
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Generate Multiple Frames:</strong> Don't stop at one. Try 5-10 different framings of the same problem.",
              "<strong>Use \"How Might We\" (HMW):</strong> This phrasing keeps framings open-ended and optimistic.",
              "<strong>Challenge Your Default Frame:</strong> The first way you state a problem is rarely the best. Push yourself to reframe.",
              "<strong>Mix Lenses:</strong> Combine user-centered + emotional, or technical + business. Compound framings reveal richer solutions.",
              "<strong>Test with Solutions:</strong> Ideate briefly for each framing. Which frames inspire the best ideas?",
              "<strong>Align on the Right Frame:</strong> Before building, ensure the team agrees on which framing to pursue."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Framing Exercise",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Original Problem Statement:</strong><br> [How you initially framed the problem]<br> <br> <strong>Reframing #1 (User-Centered):</strong><br> How might we help [user] accomplish [goal]?<br> <br> <strong>Reframing #2 (Pain Point):</strong><br> How might we eliminate [frustration]?<br> <br> <strong>Reframing #3 (Emotional):</strong><br> How might we make users feel [emotion]?<br> <br> <strong>Reframing #4 (Social):</strong><br> How might we improve [relationship/interaction]?<br> <br> <strong>Reframing #5 (Opposite):</strong><br> What if we [did the opposite]?<br> <br> <strong>Reframing #6 (Analogous):</strong><br> How do [other industry/domain] solve this?<br> <br> <strong>Selected Frame:</strong> [Which framing unlocks the best solutions?]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>State Your Default Frame:</strong> Write down how you currently describe the problem. This is your baseline.",
              "<strong>Apply Lenses:</strong> Rewrite the problem using 5-7 different lenses (user, pain, emotional, social, technical, business, opposite, analogous).",
              "<strong>Brainstorm Solutions:</strong> For each framing, spend 5 minutes generating solution ideas. Don't judge—just generate.",
              "<strong>Compare Frames:</strong> Which framing inspired the most interesting/feasible/novel ideas?",
              "<strong>Synthesize:</strong> Can you combine multiple frames? (e.g., \"How might we reduce payment anxiety [emotional] while saving time [pain]?\")",
              "<strong>Choose & Commit:</strong> Select 1-2 framings to pursue. Share with your team for alignment.",
              "<strong>Test with Users:</strong> Validate that the framing resonates with real user needs."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Original Frame:</strong> \"How do we build an invoice tracking tool?\"",
              "<strong>Reframing #1 (User-Centered):</strong> \"How might we help freelancers get paid faster and more reliably?\"",
              "<strong>Reframing #2 (Pain Point):</strong> \"How might we eliminate the manual work of tracking invoice payments?\"",
              "<strong>Reframing #3 (Emotional):</strong> \"How might we reduce freelancers' anxiety about cash flow?\"",
              "<strong>Reframing #4 (Social):</strong> \"How might we make it less awkward for freelancers to follow up with clients on late payments?\"",
              "<strong>Reframing #5 (Technical):</strong> \"How might we use automation (Stripe/PayPal APIs) to track payments in real-time?\"",
              "<strong>Reframing #6 (Opposite):</strong> \"What if instead of tracking invoices, we ensured clients always pay on time? (Incentives? Contracts?)\"",
              "<strong>Reframing #7 (Analogous):</strong> \"How do subscription services (Netflix, Spotify) handle payment tracking? Can we borrow their patterns?\"",
              "<strong>Insights:</strong>",
              "<strong>Selected Frame:</strong> \"How might we reduce freelancers' payment anxiety and make follow-ups feel less awkward?\"",
              "• <strong>Best Frame:</strong> #3 (Emotional) + #4 (Social). Reframing around anxiety and awkwardness reveals that automation alone isn't enough—users need reassurance and a way to follow up without feeling pushy.",
              "• <strong>Solution Implications:</strong> Build automated reminders (reduces awkwardness) + real-time status dashboard (reduces anxiety) + gentle nudge copy (\"Friendly reminder from InvoiceFlow\")."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Creative thinking to generate novel framings",
      "Empathy to assess which frames resonate with users",
      "Strategic judgment to select the most impactful framing",
      "Contextual understanding to combine frames meaningfully"
    ],
    "aiValue": [
      "Generation of multiple framing variations quickly",
      "Suggestion of analogous problems from other domains",
      "Identification of assumptions embedded in original framing",
      "Cross-referencing with similar case studies and patterns"
    ],
    "considerations": [
      "<strong>AI for Quantity:</strong> Use AI to generate 10-20 reframings quickly. Humans select the most promising ones for deeper exploration.",
      "<strong>Assumption Detection:</strong> AI can flag assumptions in your original framing (e.g., \"assumes users want speed over accuracy\"). Humans decide which assumptions to challenge.",
      "<strong>Analogous Inspiration:</strong> AI can suggest how other industries solve similar problems. Humans adapt these analogies to your context."
    ],
    "aiInLoop": [
      "<strong>Initial Framing:</strong> Humans state the problem. AI flags embedded assumptions and suggests 5-10 alternative framings using different lenses.",
      "<strong>Analogous Thinking:</strong> AI proposes how other industries/products solve similar problems. Humans evaluate relevance and adapt patterns.",
      "<strong>Frame Selection:</strong> Humans brainstorm solutions for each framing. AI suggests which framings align best with user research and business goals. Humans make final call."
    ],
    "watchOuts": [
      "Don't let AI define the problem. Framing requires strategic judgment and deep user understanding that AI lacks.",
      "Avoid generic AI-generated reframings. They may be grammatically correct but lack contextual depth.",
      "Be cautious of AI analogies. Just because another industry does something doesn't mean it fits your users' needs.",
      "Don't skip human ideation. AI can suggest frames, but humans must explore which frames unlock creative solutions."
    ]
  }
},

  "directional-insights": {
  "slug": "directional-insights",
  "title": "Directional Insights",
  "tags": [
    "Synthesis",
    "Strategic Insights"
  ],
  "purpose": "Transform research findings into actionable strategic insights that guide product decisions and innovation.",
  "learn": {
    "sections": [
      {
        "title": "What are Directional Insights?",
        "blocks": [
          {
            "type": "p",
            "text": "Directional Insights are high-level, strategic takeaways from research that point toward product opportunities and design directions. They're not just observations (\"users struggle with X\")—they're interpretations that connect user needs to business strategy (\"If we solve X, we can differentiate in the market\"). Insights answer \"So what?\" and \"What now?\""
          }
        ]
      },
      {
        "title": "Insights vs. Observations",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Observation:</strong> \"75% of freelancers track invoices manually in spreadsheets.\"",
              "<strong>Insight:</strong> \"Freelancers tolerate manual tracking because existing tools feel too complex for their needs—there's an opportunity for a simple, automation-first solution.\""
            ]
          },
          {
            "type": "p",
            "text": "Observations state facts. Insights reveal why those facts matter and what to do about them."
          }
        ]
      },
      {
        "title": "Characteristics of Strong Insights",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Evidence-Based:</strong> Rooted in research data (quotes, behaviors, patterns), not assumptions",
              "<strong>Surprising:</strong> Challenges conventional wisdom or reveals something non-obvious",
              "<strong>Actionable:</strong> Suggests a clear direction for design or strategy",
              "<strong>Human-Centered:</strong> Explains user motivations, not just behaviors",
              "<strong>Strategic:</strong> Connects user needs to business opportunities"
            ]
          }
        ]
      },
      {
        "title": "Types of Directional Insights",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Unmet Need:</strong> \"Users want X but no current solution provides it well.\"",
              "<strong>Workaround:</strong> \"Users hack together Y because existing tools don't support their workflow.\"",
              "<strong>Tension:</strong> \"Users value both A and B, but current solutions force them to choose.\"",
              "<strong>Emotional Driver:</strong> \"Users choose products based on feeling X, not feature Y.\"",
              "<strong>Behavioral Pattern:</strong> \"Users consistently do Z, revealing an underlying need.\""
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Connect Dots:</strong> Insights emerge from synthesizing multiple data points, not single observations.",
              "<strong>Ask \"Why?\" 5 Times:</strong> Surface-level insights miss deeper motivations. Keep probing.",
              "<strong>Frame as Opportunities:</strong> Shift from \"Users struggle with X\" to \"Opportunity to help users Y.\"",
              "<strong>Prioritize Ruthlessly:</strong> Not all insights are equally important. Focus on high-impact, differentiating opportunities.",
              "<strong>Make Them Memorable:</strong> Use vivid language. Insights should stick in people's heads.",
              "<strong>Validate with Stakeholders:</strong> Share insights with product, eng, business leads. Do they resonate? Inspire action?"
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Insight Statement",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Insight:</strong> [One-sentence synthesis]<br> <br> <strong>Evidence:</strong><br> - [Data point 1: quote, behavior, stat]<br> - [Data point 2: ...]<br> - [Data point 3: ...]<br> <br> <strong>Why It Matters:</strong><br> [Connection to user needs and business goals]<br> <br> <strong>Opportunity:</strong><br> [What we could build/do to address this]<br> <br> <strong>Impact:</strong> [High/Medium/Low]<br> <strong>Confidence:</strong> [High/Medium/Low based on evidence strength]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Review Research Synthesis:</strong> Start with affinity maps, personas, journey maps. What patterns emerge?",
              "<strong>Identify Themes:</strong> Cluster observations into 5-10 high-level themes (e.g., \"payment anxiety,\" \"tool complexity\").",
              "<strong>Ask \"So What?\":</strong> For each theme, probe deeper. Why does this matter to users? To the business?",
              "<strong>Craft Insight Statements:</strong> Write 1-2 sentence summaries that explain the deeper meaning behind observations.",
              "<strong>Support with Evidence:</strong> Cite specific data—user quotes, behavioral patterns, survey stats.",
              "<strong>Frame Opportunities:</strong> For each insight, articulate what product/design direction it suggests.",
              "<strong>Prioritize:</strong> Rate insights by impact (user value + business value) and confidence (strength of evidence).",
              "<strong>Socialize & Iterate:</strong> Share with team. Do insights spark \"aha!\" moments? Refine based on feedback."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Insight #1: The \"Social Awkwardness Tax\"</strong>",
              "<strong>Insight:</strong> Freelancers delay following up on overdue invoices not because they forget, but because it feels socially awkward and threatens client relationships. They'll absorb financial loss to avoid confrontation.",
              "<strong>Evidence:</strong>",
              "<strong>Why It Matters:</strong> This isn't a technical problem—it's emotional and social. Automation alone won't help if users still feel awkward initiating reminders.",
              "<strong>Opportunity:</strong> Build automated, system-generated reminders that remove the personal element (\"This is from InvoiceFlow, not me\"). Frame reminders as helpful nudges, not complaints.",
              "<strong>Impact:</strong> High (addresses #1 pain point)<br> <strong>Confidence:</strong> High (consistent across interviews and survey)",
              "<strong>Insight #2: Complexity is a Deal-Breaker</strong>",
              "<strong>Insight:</strong> Freelancers tolerate manual, inefficient processes (spreadsheets, email) because they perceive dedicated invoice tools as \"too complicated\" or \"overkill.\" Simplicity beats features.",
              "<strong>Evidence:</strong>",
              "<strong>Why It Matters:</strong> The market is saturated with feature-rich tools. There's a gap for a dead-simple solution focused on the 20% of features freelancers actually use.",
              "<strong>Opportunity:</strong> Position as the \"anti-accounting software.\" Onboarding in under 2 minutes. One core workflow: create invoice → send → track payment.",
              "<strong>Impact:</strong> High (differentiates from competitors)<br> <strong>Confidence:</strong> High (validated across multiple data sources)",
              "• \"I don't want to seem like I'm nagging. What if they stop working with me?\" (Interview #7)",
              "• 68% of survey respondents report invoices paid late, but only 30% follow up proactively",
              "• Observation: Users check invoice status daily but wait weeks before sending a reminder",
              "• 85% track invoices manually despite knowing better tools exist",
              "• \"QuickBooks is too much. I don't need accounting software—I just need to track payments.\" (Interview #3)",
              "• Competitor reviews cite \"steep learning curve\" as top complaint"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to interpret emotional and social motivations",
      "Strategic thinking to connect insights to business opportunities",
      "Pattern recognition across qualitative and quantitative data",
      "Contextual judgment to assess which insights are most actionable"
    ],
    "aiValue": [
      "Rapid clustering of themes across large datasets",
      "Identification of recurring patterns in transcripts and surveys",
      "Extraction of supporting evidence (quotes, stats) for insights",
      "Cross-referencing with industry trends and benchmarks"
    ],
    "considerations": [
      "<strong>AI for Theme Extraction:</strong> Use AI to scan research data and propose themes. But humans must synthesize themes into meaningful insights—AI can't make the \"so what?\" leap.",
      "<strong>Evidence Gathering:</strong> AI can quickly pull quotes and data points that support an insight. Humans must curate the most compelling evidence.",
      "<strong>Strategic Connection:</strong> AI can suggest industry trends. But humans must assess strategic fit and opportunity uniqueness."
    ],
    "aiInLoop": [
      "<strong>Pattern Detection:</strong> AI scans research data (interviews, surveys, analytics) to identify recurring themes. Humans validate and prioritize themes.",
      "<strong>Insight Drafting:</strong> Humans craft insight statements. AI suggests supporting evidence and checks for logical gaps. Humans refine.",
      "<strong>Opportunity Mapping:</strong> AI proposes solution directions based on patterns. Humans evaluate feasibility, impact, and strategic alignment."
    ],
    "watchOuts": [
      "Don't let AI generate insights. They'll be surface-level observations, not strategic synthesis.",
      "Avoid over-reliance on AI-identified themes. They may cluster by keyword similarity, missing deeper semantic patterns.",
      "Be cautious of AI \"opportunities\" that sound good but lack user validation. Always ground recommendations in real user needs.",
      "Don't skip human interpretation. The \"why\" behind patterns requires empathy and contextual understanding AI cannot provide."
    ]
  }
},

  "journey-mapping": {
  "slug": "journey-mapping",
  "title": "User Journey Mapping",
  "tags": [
    "Synthesis",
    "Experience Mapping"
  ],
  "purpose": "Visualize the end-to-end user experience to identify pain points, opportunities, and moments that matter.",
  "learn": {
    "sections": [
      {
        "title": "What is User Journey Mapping?",
        "blocks": [
          {
            "type": "p",
            "text": "User Journey Mapping visualizes a user's experience with your product or service over time—from first awareness to ongoing use. It captures actions, thoughts, emotions, and pain points at each stage, revealing where the experience delights or frustrates. Journey maps turn abstract research data into a tangible story that teams can rally around."
          }
        ]
      },
      {
        "title": "Why Create Journey Maps?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Identify Friction:</strong> See where users get stuck, confused, or frustrated.",
              "<strong>Find Opportunities:</strong> Discover moments to delight users or remove barriers.",
              "<strong>Build Empathy:</strong> Teams viscerally understand user struggles when visualized.",
              "<strong>Align Stakeholders:</strong> Maps create shared understanding across functions (product, eng, support, marketing).",
              "<strong>Prioritize Features:</strong> Fix critical pain points before building new features."
            ]
          }
        ]
      },
      {
        "title": "Core Elements of a Journey Map",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Persona/User:</strong> Who is experiencing this journey?",
              "<strong>Scenario:</strong> What goal are they trying to accomplish?",
              "<strong>Phases:</strong> Distinct stages of the journey (Awareness → Consideration → Purchase → Use → Advocacy)",
              "<strong>Actions:</strong> What users do in each phase",
              "<strong>Thoughts & Questions:</strong> What's going through their mind?",
              "<strong>Emotions:</strong> How do they feel? (Happy, frustrated, anxious, confident)",
              "<strong>Touchpoints:</strong> Where do interactions happen? (Website, app, email, support call)",
              "<strong>Pain Points:</strong> Where does friction occur?",
              "<strong>Opportunities:</strong> What could we improve?"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Ground in Research:</strong> Base maps on real user data (interviews, observations, analytics), not assumptions.",
              "<strong>Focus on One Persona + One Scenario:</strong> Don't try to map everyone's journey. Pick your primary user and their main goal.",
              "<strong>Make It Visual:</strong> Use timelines, icons, color-coding (red = pain, green = delight). Make it scannable.",
              "<strong>Include Emotions:</strong> Maps without emotions are just process flows. Show how users feel.",
              "<strong>Identify Quick Wins:</strong> Flag 2-3 high-impact, low-effort improvements. Don't just diagnose—prescribe.",
              "<strong>Collaborate Cross-Functionally:</strong> Involve product, design, eng, support, marketing. Each sees different touchpoints."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Journey Map",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Persona:</strong> [Name & brief description]<br> <strong>Scenario:</strong> [Goal user is trying to achieve]<br> <br> <strong>Phase 1: [Awareness]</strong><br> Actions: [What user does]<br> Thoughts: [What they're thinking]<br> Emotions: [Happy/Frustrated/etc]<br> Touchpoints: [Website, ad, friend, etc]<br> Pain Points: [Friction or confusion]<br> Opportunities: [How to improve]<br> <br> <strong>Phase 2: [Consideration]</strong><br> [Repeat structure...]<br> <br> <strong>Phase 3: [Purchase/Signup]</strong><br> [...]<br> <br> <strong>Phase 4: [First Use]</strong><br> [...]<br> <br> <strong>Phase 5: [Ongoing Use]</strong><br> [...]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define Scope:</strong> Which persona? Which scenario? (e.g., \"Freelancer Fran creating her first invoice\")",
              "<strong>Gather Research:</strong> Pull data from interviews, surveys, analytics, support tickets. What do you know about this journey?",
              "<strong>Identify Phases:</strong> Break the journey into 4-7 stages. Start broad (Awareness, Use, Advocacy), then detail.",
              "<strong>Map Actions:</strong> For each phase, list what users actually do. Use real behavioral data, not guesses.",
              "<strong>Add Thoughts & Emotions:</strong> Review user quotes. What were they thinking? Feeling? Plot emotional highs/lows.",
              "<strong>Mark Touchpoints:</strong> Where do interactions happen? Website, app, email, chat, phone?",
              "<strong>Highlight Pain Points:</strong> Where do users struggle? Drop off? Complain? Mark these clearly (red flags, etc.).",
              "<strong>Brainstorm Opportunities:</strong> For each pain point, ask \"How might we fix this?\" Prioritize by impact/effort.",
              "<strong>Visualize:</strong> Turn notes into a visual timeline. Use tools like Miro, FigJam, or PowerPoint.",
              "<strong>Validate & Iterate:</strong> Share with 3-5 users. Does it match their experience? Refine."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelancer Creating First Invoice",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Persona:</strong> Fran Martinez, Freelance Designer",
              "<strong>Scenario:</strong> Creating and sending her first invoice using a new invoicing app",
              "<strong>Phase 1: Discovery</strong>",
              "<strong>Phase 2: Signup & Onboarding</strong>",
              "<strong>Phase 3: Creating Invoice</strong>",
              "<strong>Phase 4: Tracking Payment</strong>",
              "• <strong>Actions:</strong> Searches \"invoice app for freelancers,\" reads reviews, clicks ad",
              "• <strong>Thoughts:</strong> \"I need something simple. Is this worth the switch from spreadsheets?\"",
              "• <strong>Emotions:</strong> Curious but skeptical",
              "• <strong>Touchpoints:</strong> Google, app website, G2 reviews",
              "• <strong>Pain Point:</strong> Landing page doesn't clearly differentiate from competitors",
              "• <strong>Opportunity:</strong> Add comparison chart + customer testimonials",
              "• <strong>Actions:</strong> Signs up, prompted to create first invoice",
              "• <strong>Thoughts:</strong> \"Let me try this quickly. Hopefully it's not complicated.\"",
              "• <strong>Emotions:</strong> Excited but impatient",
              "• <strong>Touchpoints:</strong> Web app, onboarding flow",
              "• <strong>Pain Point:</strong> Onboarding asks for too much info upfront (business details, tax ID)",
              "• <strong>Opportunity:</strong> Allow \"skip for now\" option. Let users create basic invoice immediately",
              "• <strong>Actions:</strong> Enters client name, amount, due date. Previews invoice. Clicks Send.",
              "• <strong>Thoughts:</strong> \"This is actually easy! Way better than my spreadsheet.\"",
              "• <strong>Emotions:</strong> Relieved and confident",
              "• <strong>Touchpoints:</strong> Invoice form, preview screen",
              "• <strong>Pain Point:</strong> None—this phase works well!",
              "• <strong>Opportunity:</strong> Add celebration moment (confetti animation, \"Nice work!\") to reinforce success",
              "• <strong>Actions:</strong> Checks dashboard daily. Sees \"Pending\" status. Gets notification when paid.",
              "• <strong>Thoughts:</strong> \"Finally! No more checking my bank account manually.\"",
              "• <strong>Emotions:</strong> Satisfied and less anxious",
              "• <strong>Touchpoints:</strong> Dashboard, email notification",
              "• <strong>Pain Point:</strong> No mobile app—has to use laptop to check status",
              "• <strong>Opportunity:</strong> Build mobile app or responsive web version"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to interpret emotional highs and lows",
      "Contextual understanding to identify meaningful pain points",
      "Strategic judgment to prioritize which opportunities to pursue",
      "Storytelling ability to make the journey resonate with stakeholders"
    ],
    "aiValue": [
      "Analysis of behavioral data (clickstreams, analytics) to map actions",
      "Identification of drop-off points and friction",
      "Clustering of similar user paths",
      "Sentiment analysis of user feedback by journey phase"
    ],
    "considerations": [
      "<strong>AI for Data Analysis:</strong> Use AI to analyze user flows and identify where users drop off. But humans must interpret why (UX issue? Value prop? Technical bug?).",
      "<strong>Emotion Detection:</strong> AI can flag emotional keywords in feedback (\"frustrated,\" \"love\"). But humans must validate emotional depth through qualitative research.",
      "<strong>Opportunity Prioritization:</strong> AI can suggest improvements based on patterns. But humans must assess feasibility, impact, and strategic fit."
    ],
    "aiInLoop": [
      "<strong>Behavioral Mapping:</strong> AI analyzes user flows (analytics, session recordings) to map actual paths. Humans validate and annotate with qualitative context (thoughts, emotions).",
      "<strong>Pain Point Detection:</strong> AI identifies drop-off points and friction. Humans investigate root causes through follow-up interviews.",
      "<strong>Opportunity Generation:</strong> AI proposes improvements based on patterns and benchmarks. Humans evaluate and prioritize based on user impact and business goals."
    ],
    "watchOuts": [
      "Don't let AI auto-generate journey maps. They lack emotional depth, context, and strategic insight.",
      "Avoid over-reliance on quantitative data. Journey maps need qualitative richness—stories, emotions, \"why.\"",
      "Be cautious of \"average user\" maps. AI may create generic journeys that don't represent any real user. Segment intentionally.",
      "Don't skip human validation. Always test maps with 3-5 real users to ensure accuracy."
    ]
  }
},

  "jtbd": {
  "slug": "jtbd",
  "title": "Jobs to Be Done (JTBD)",
  "tags": [
    "Strategy",
    "User Needs"
  ],
  "purpose": "Frame user needs as functional goals (\"jobs\") rather than demographics or features.",
  "learn": {
    "sections": [
      {
        "title": "What is Jobs to Be Done?",
        "blocks": [
          {
            "type": "p",
            "text": "Jobs to Be Done (JTBD) is a framework that shifts focus from <em>who users are</em> to <em>what they're trying to accomplish</em>. The core idea: people \"hire\" products to do a job. Understanding the job—not the demographics—reveals why users choose your product over alternatives."
          },
          {
            "type": "p",
            "text": "<strong>Example:</strong> A milkshake isn't hired for its flavor, but for the job of \"keeping me full during my commute.\" This lens helps teams innovate beyond surface-level features."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "JTBD is used during <strong>Strategy & Planning</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> User interviews, personas, and journey mapping",
              "<strong>Before:</strong> Feature prioritization, roadmap planning, and solution design"
            ]
          },
          {
            "type": "p",
            "text": "It bridges user research and product strategy by translating behaviors into actionable product requirements."
          }
        ]
      },
      {
        "title": "Core Concepts",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Functional Job:</strong> The core task (e.g., \"send money to a friend quickly\")",
              "<strong>Emotional Job:</strong> How users want to feel (e.g., \"feel confident I'm managing finances responsibly\")",
              "<strong>Social Job:</strong> How users want to be perceived (e.g., \"appear generous to friends\")",
              "<strong>Circumstances:</strong> The context that triggers the job (e.g., \"splitting a dinner bill\")",
              "<strong>Success Criteria:</strong> What \"done\" looks like (e.g., \"payment received instantly, no awkward follow-up\")"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Start with \"When... I want to...\":</strong> Frame jobs as situational needs, not product features.",
              "<strong>Focus on Progress, Not Tasks:</strong> Users don't want a drill; they want a hole in the wall. What progress are they trying to make?",
              "<strong>Include Emotional and Social Dimensions:</strong> Functional jobs alone miss why users care. Dig into feelings and identity.",
              "<strong>Map Competing Solutions:</strong> What do users hire today? (Competitors, workarounds, DIY hacks?) This reveals unmet needs.",
              "<strong>Validate with Real Stories:</strong> Ask users to describe a recent time they \"hired\" a solution. Stories reveal true jobs, not hypothetical ones."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: JTBD Statement",
        "blocks": [
          {
            "type": "code",
            "text": "When [SITUATION],<br> I want to [MOTIVATION/GOAL],<br> So I can [EXPECTED OUTCOME].<br> <br> <strong>Functional Job:</strong> [Core task to accomplish]<br> <strong>Emotional Job:</strong> [Desired feeling/state]<br> <strong>Social Job:</strong> [Desired perception by others]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Identify the Situation:</strong> What triggers the need? Be specific about context (time, place, circumstances).",
              "<strong>Define the Motivation:</strong> What is the user trying to achieve? Focus on the goal, not the product.",
              "<strong>Articulate the Outcome:</strong> What does success look like? What changes when the job is done?",
              "<strong>Layer in Emotional/Social Jobs:</strong> What feelings or social signals matter? How does this job relate to the user's identity?",
              "<strong>Map Current Solutions:</strong> What do users hire today? (Your product, competitors, workarounds?) Why do they switch or stick?",
              "<strong>Identify Underserved Jobs:</strong> Where are existing solutions failing? What progress do users struggle to make?",
              "<strong>Validate with User Stories:</strong> Interview 5-10 users. Ask them to recount a specific time they faced this situation. Do their stories confirm the job?"
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>JTBD Statement:</strong>",
              "When <strong>I complete a project for a client</strong>,<br> I want to <strong>get paid quickly and without awkward follow-up</strong>,<br> So I can <strong>maintain cash flow and focus on my next project</strong>.",
              "<strong>Functional Job:</strong> Create and send professional invoices; track payment status; automate reminders.",
              "<strong>Emotional Job:</strong> Feel confident and in control of finances; reduce anxiety about late payments.",
              "<strong>Social Job:</strong> Appear professional and organized to clients; avoid seeming desperate when chasing payments.",
              "<strong>Current Solutions (Competing Products):</strong>",
              "<strong>Underserved Need:</strong> Existing tools are either too manual (spreadsheets) or too complex (enterprise software). Freelancers need a middle ground: simple, automated, and payment-integrated.",
              "• Google Sheets + Gmail (free, but manual and error-prone)",
              "• QuickBooks (powerful, but overkill for freelancers—too complex)",
              "• PayPal Invoicing (integrated payments, but limited customization)"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to uncover emotional and social job dimensions",
      "Contextual understanding of situational triggers",
      "Strategic judgment to prioritize high-impact jobs",
      "Ability to probe beyond surface-level responses in interviews"
    ],
    "aiValue": [
      "Pattern recognition across large interview datasets",
      "Identification of recurring \"when... I want to...\" phrases",
      "Mapping of competing solutions from market research",
      "Generation of JTBD statement variations for refinement"
    ],
    "considerations": [
      "<strong>AI for Job Extraction:</strong> Use AI to scan interview transcripts for language patterns (\"I need to,\" \"I wish I could,\" \"I struggle with\"). But humans must interpret context—AI misses sarcasm and nuance.",
      "<strong>Emotional Layer:</strong> AI can flag emotional keywords (\"anxious,\" \"frustrated,\" \"confident\"), but humans must validate the emotional job through follow-up questions.",
      "<strong>Job Prioritization:</strong> AI can quantify job frequency (how often it's mentioned), but humans must assess strategic importance (impact, differentiation, feasibility)."
    ],
    "aiInLoop": [
      "<strong>Job Hypothesis Generation:</strong> AI scans user feedback (interviews, support tickets, reviews) to propose potential jobs. Humans validate and refine based on strategic fit.",
      "<strong>Competing Solution Mapping:</strong> AI analyzes competitor reviews and market data to identify what users currently \"hire.\" Humans assess why users switch or churn.",
      "<strong>JTBD Statement Drafting:</strong> AI generates initial \"When... I want to...\" statements. Humans refine for clarity, add emotional/social dimensions, and validate with users."
    ],
    "watchOuts": [
      "Don't let AI define jobs based on product features. JTBD is about user progress, not \"use our calendar tool.\" Keep it outcome-focused.",
      "Avoid over-reliance on AI sentiment analysis. Emotional jobs require deep listening—AI can't replace human empathy in interviews.",
      "Be cautious of \"average job\" bias. AI may surface the most common job, missing high-value niche jobs that differentiate your product."
    ]
  }
},

  "ira": {
  "slug": "ira",
  "title": "IRA Framework",
  "tags": [
    "Strategy",
    "Planning"
  ],
  "purpose": "Transform research insights into strategic recommendations and concrete actions.",
  "learn": {
    "sections": [
      {
        "title": "What is IRA?",
        "blocks": [
          {
            "type": "p",
            "text": "IRA stands for <strong>Insight → Recommendation → Action</strong>. It's a strategic framework that bridges the gap between research findings and product decisions. IRA helps teams move from \"what we learned\" to \"what we should do\" by systematically translating raw insights into prioritized actions."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "IRA sits at the transition point between research synthesis and product planning:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Affinity mapping, persona creation, journey mapping, or any deep synthesis activity",
              "<strong>Before:</strong> PRD writing, feature prioritization, or roadmap planning"
            ]
          },
          {
            "type": "p",
            "text": "It's especially useful when you have rich qualitative data but need to communicate its implications to cross-functional stakeholders (engineering, product, business)."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>One Insight, One Recommendation:</strong> Resist the temptation to derive multiple recommendations from a single insight. Keep the chain linear and clear.",
              "<strong>Evidence-Based Insights:</strong> Every insight should trace back to specific research data (user quotes, behavioral observations, survey results).",
              "<strong>Actionable Recommendations:</strong> Recommendations should be strategic but feasible. \"Redesign the entire platform\" is not helpful. \"Simplify the onboarding flow by removing steps 2-4\" is.",
              "<strong>Measurable Actions:</strong> Actions should have clear success criteria. Define what \"done\" looks like and how you'll measure impact.",
              "<strong>Prioritize Ruthlessly:</strong> Not all insights are equally important. Rank them by user impact, business value, and feasibility. The IRA format makes prioritization transparent."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: IRA Table",
        "blocks": []
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Extract Key Insights:</strong> Review your research synthesis (affinity maps, personas, journey maps). Identify 5-10 critical insights that affect user experience or business outcomes.",
              "<strong>Validate with Evidence:</strong> For each insight, ensure you can cite specific research data. If you can't, it's an assumption, not an insight.",
              "<strong>Formulate Recommendations:</strong> For each insight, ask \"So what?\" What strategic change does this insight suggest? Think product strategy, not just features.",
              "<strong>Define Actions:</strong> Break each recommendation into concrete, assignable tasks. Use the format: \"[Role] will [specific action] by [timeframe].\"",
              "<strong>Prioritize:</strong> Rank insights by impact (high/medium/low) and effort (high/medium/low). Focus on high-impact, low-effort actions first.",
              "<strong>Review with Stakeholders:</strong> Share the IRA table with product, engineering, and design leads. Align on priorities and adjust actions based on constraints."
            ]
          }
        ]
      },
      {
        "title": "Example",
        "blocks": []
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Strategic judgment to prioritize insights by business impact",
      "Contextual understanding of organizational constraints and politics",
      "Ability to connect insights to broader product vision",
      "Nuanced interpretation of qualitative research data"
    ],
    "aiValue": [
      "Rapid extraction of themes from large datasets (transcripts, surveys)",
      "Pattern recognition across disparate data sources",
      "Generation of multiple recommendation/action variations for discussion",
      "Benchmarking against industry best practices and case studies"
    ],
    "considerations": [
      "<strong>AI for Insight Extraction:</strong> Use AI to analyze interview transcripts or survey responses at scale, identifying recurring themes. But always validate with human review—AI can miss sarcasm, cultural context, or emotional subtext.",
      "<strong>Human-Led Recommendations:</strong> Recommendations require strategic thinking and organizational knowledge that AI lacks. AI can suggest options, but humans must choose based on feasibility and alignment with business goals.",
      "<strong>Action Validation:</strong> AI can draft action items, but humans must ensure they're realistic given team capacity, technical constraints, and timelines."
    ],
    "aiInLoop": [
      "<strong>Insight Clustering:</strong> AI analyzes research data (transcripts, notes, surveys) and proposes initial insight themes. Humans refine, merge, or discard based on strategic relevance.",
      "<strong>Recommendation Brainstorming:</strong> For each validated insight, AI generates 3-5 potential recommendations. Humans evaluate and select the most feasible and impactful option.",
      "<strong>Action Planning:</strong> AI drafts specific action items with suggested owners and timelines. Humans adjust based on team availability, skill sets, and organizational priorities."
    ],
    "watchOuts": [
      "AI-generated insights may lack the depth of human interpretation. Always cross-check with raw research data.",
      "Avoid \"garbage in, garbage out\"—if your research data is biased or incomplete, AI will amplify those flaws.",
      "Don't let AI prioritize actions. Prioritization requires business context, user empathy, and strategic vision that AI cannot replicate."
    ]
  }
},

  "prfaq": {
  "slug": "prfaq",
  "title": "PRFAQ (Press Release / FAQ)",
  "tags": [
    "Strategy",
    "Product Planning"
  ],
  "purpose": "Work backwards from the customer by writing a future press release and FAQ before building the product.",
  "learn": {
    "sections": [
      {
        "title": "What is PRFAQ?",
        "blocks": [
          {
            "type": "p",
            "text": "PRFAQ is Amazon's signature product development approach: write a Press Release (PR) and Frequently Asked Questions (FAQ) document as if the product already launched successfully. This \"working backwards\" method forces teams to think from the customer's perspective first, clarifying the value proposition before writing a single line of code."
          }
        ]
      },
      {
        "title": "Why It Works",
        "blocks": [
          {
            "type": "p",
            "text": "Traditional product planning starts with features and capabilities. PRFAQ flips this: start with customer benefits and outcomes. By articulating what success looks like externally, teams avoid building features no one wants. If you can't write a compelling press release, you probably shouldn't build the product."
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "PRFAQ is used during <strong>Strategy & Planning</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Research synthesis, personas, JTBD, and IRA framework",
              "<strong>Before:</strong> PRD/MRD writing, engineering kickoff, and detailed feature specs"
            ]
          },
          {
            "type": "p",
            "text": "It serves as a strategic alignment document that bridges research insights and execution."
          }
        ]
      },
      {
        "title": "Structure: Two Parts",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Press Release (PR):</strong> 1-page customer-facing announcement written in future tense. Includes headline, subhead, problem statement, solution description, customer quote, and call to action.",
              "<strong>FAQ:</strong> Internal document answering tough questions about feasibility, costs, risks, and tradeoffs. This is where you pressure-test the idea."
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Write for Customers, Not Stakeholders:</strong> Use plain language. Avoid jargon, acronyms, or technical specs. A customer should understand the value immediately.",
              "<strong>Lead with Benefits, Not Features:</strong> \"Save 3 hours per week\" beats \"automated invoice reminders.\" Focus on outcomes.",
              "<strong>Include a Real Customer Quote:</strong> Even if hypothetical, ground it in research. It should sound like something a user would actually say.",
              "<strong>Be Specific:</strong> Vague PRs lead to vague products. Instead of \"improved experience,\" say \"onboarding takes 2 minutes instead of 15.\"",
              "<strong>Pressure-Test in the FAQ:</strong> Don't shy away from hard questions: \"Why would users switch from competitors?\" \"What's the biggest risk?\" \"What if adoption is low?\"",
              "<strong>Iterate:</strong> PRFAQs are living documents. Revise as you learn more. If you can't answer FAQ questions confidently, you need more research."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Press Release",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>[Headline]</strong><br> [Company] Launches [Product Name] to [Customer Benefit]<br> <br> <strong>[Subhead]</strong><br> [One sentence expanding on the headline. What's the big idea?]<br> <br> <strong>[Location, Date]</strong><br> <br> <strong>[Problem]</strong><br> [2-3 sentences describing the customer problem. Use empathy.]<br> <br> <strong>[Solution]</strong><br> [3-4 sentences explaining what your product does and how it solves the problem. Focus on benefits, not features.]<br> <br> <strong>[Customer Quote]</strong><br> \"[A quote from a real or hypothetical customer expressing excitement and describing the value they receive.]\" — [Name, Role]<br> <br> <strong>[Company Quote]</strong><br> \"[Quote from product leader explaining the vision and commitment.]\" — [Your Name, Title]<br> <br> <strong>[Availability & Call to Action]</strong><br> [When/how can customers access this? What should they do next?]"
          }
        ]
      },
      {
        "title": "Template: FAQ",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Customer FAQs</strong><br> Q: Who is this for?<br> A: [Target audience and use cases]<br> <br> Q: How much does it cost?<br> A: [Pricing model]<br> <br> Q: Why is this better than [competitor]?<br> A: [Differentiation]<br> <br> <strong>Internal FAQs</strong><br> Q: What's the biggest risk?<br> A: [Honest assessment]<br> <br> Q: Why now?<br> A: [Market timing, strategic fit]<br> <br> Q: What are we NOT building?<br> A: [Scope clarity]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Review Research Insights:</strong> Before writing, ensure you understand the customer problem deeply. Reference personas, JTBD, and research findings.",
              "<strong>Draft the Press Release:</strong> Write as if the product launched successfully 6-12 months from now. Use customer language, not internal jargon.",
              "<strong>Get Feedback:</strong> Share the PR with team members who haven't been involved. Can they understand the value in 30 seconds? If not, revise.",
              "<strong>Write the FAQ:</strong> Brainstorm every tough question stakeholders might ask. Answer honestly, even if the answer is \"we don't know yet—here's how we'll find out.\"",
              "<strong>Stress-Test:</strong> Play devil's advocate. What could go wrong? Why might customers NOT adopt this? Add these to the FAQ.",
              "<strong>Iterate Based on Feedback:</strong> PRFAQs evolve as you learn. Update the document as assumptions are validated or invalidated."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Headline:</strong> InvoiceFlow Launches to Help Freelancers Get Paid Faster Without the Hassle",
              "<strong>Subhead:</strong> New app automates invoice tracking, payment reminders, and reconciliation—saving freelancers hours per week and reducing late payment anxiety.",
              "<strong>Problem:</strong> Freelancers waste 2-3 hours per week manually tracking invoices across email, spreadsheets, and bank accounts. When clients pay late—which happens 40% of the time—freelancers face cash flow stress and awkward follow-up conversations.",
              "<strong>Solution:</strong> InvoiceFlow is a simple, mobile-friendly tool that syncs with payment platforms (Stripe, PayPal), automatically tracks invoice status, and sends smart reminders to clients when payments are overdue. Freelancers get real-time visibility into cash flow without switching between tools.",
              "<strong>Customer Quote:</strong> \"I used to spend hours chasing invoices. Now InvoiceFlow does it for me, and I get paid faster without feeling like I'm nagging my clients.\" — Fran Martinez, Freelance Designer",
              "<strong>Company Quote:</strong> \"We built InvoiceFlow for the 59 million freelancers who deserve to focus on their craft, not on admin work. Getting paid shouldn't be painful.\" — Sarah Chen, Founder",
              "<strong>Availability:</strong> InvoiceFlow is available now on web and iOS. Sign up for a free 30-day trial at invoiceflow.com."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Strategic vision to frame the product narrative compellingly",
      "Empathy to write customer-centric language that resonates",
      "Judgment to pressure-test assumptions and identify risks",
      "Storytelling ability to make the press release engaging"
    ],
    "aiValue": [
      "Drafting initial PR structure and headline variations",
      "Generating FAQ questions based on common product launches",
      "Polishing language for clarity and conciseness",
      "Benchmarking against competitor press releases"
    ],
    "considerations": [
      "<strong>AI as Draft Assistant:</strong> Use AI to generate initial PR drafts or headline variations, but always rewrite in your own voice. Generic AI language lacks authenticity.",
      "<strong>Customer Quote Authenticity:</strong> AI can suggest quote structures, but ground them in real research. Use actual user language from interviews.",
      "<strong>FAQ Depth:</strong> AI can propose common questions, but humans must add the hard, company-specific questions that require strategic thinking."
    ],
    "aiInLoop": [
      "<strong>Outline Generation:</strong> AI proposes a PRFAQ structure and headline options based on product description. Humans select the most compelling angle and refine.",
      "<strong>Language Polishing:</strong> Humans write the first draft. AI suggests edits for clarity, conciseness, and customer-friendliness. Humans approve changes that maintain authentic voice.",
      "<strong>FAQ Brainstorming:</strong> AI generates a list of potential FAQ questions (customer and internal). Humans prioritize the toughest questions and write honest, strategic answers."
    ],
    "watchOuts": [
      "Don't let AI write the entire PRFAQ. It will produce generic, buzzword-filled content that lacks strategic depth and customer empathy.",
      "Avoid over-polishing. PRFAQs should be clear but not marketing fluff. If it sounds like corporate jargon, rewrite in plain language.",
      "Be cautious of AI generating overly optimistic PRs. Humans must reality-check feasibility and risks in the FAQ section."
    ]
  }
},

  "low-fidelity": {
  "slug": "low-fidelity",
  "title": "Low-Fidelity Design",
  "tags": [
    "Execution",
    "Ideation"
  ],
  "purpose": "Rapidly sketch and wireframe concepts to explore ideas, test flows, and iterate cheaply before committing to high-fidelity design.",
  "learn": {
    "sections": [
      {
        "title": "What is Low-Fidelity Design?",
        "blocks": [
          {
            "type": "p",
            "text": "Low-Fidelity (Lo-Fi) Design includes paper sketches, basic wireframes, and grayscale layouts that focus on structure and flow rather than visual polish. The goal: explore ideas quickly, test concepts cheaply, and iterate without the overhead of pixel-perfect design. Lo-fi is about thinking, not perfection."
          }
        ]
      },
      {
        "title": "Why Start Low-Fi?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Speed:</strong> Sketch 10 ideas in the time it takes to perfect one high-fi design.",
              "<strong>Low Commitment:</strong> Easy to throw away bad ideas. No sunk cost fallacy.",
              "<strong>Focus on Structure:</strong> Forces attention on layout, hierarchy, and flow—not colors and fonts.",
              "<strong>Inclusive Collaboration:</strong> Anyone can sketch. Non-designers can participate without feeling intimidated.",
              "<strong>User Testing:</strong> Test concepts before investing in visual design. Users focus on functionality, not aesthetics."
            ]
          }
        ]
      },
      {
        "title": "Types of Lo-Fi Artifacts",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Paper Sketches:</strong> Hand-drawn screens. Fastest method. Great for early ideation.",
              "<strong>Wireframes:</strong> Digital grayscale layouts (Figma, Sketch, Whimsical). More refined than sketches, still quick.",
              "<strong>Paper Prototypes:</strong> Sketches arranged to simulate clickable flow. Test with users by \"clicking\" with fingers.",
              "<strong>Clickable Wireframes:</strong> Basic digital prototypes with simple interactions. Good for flow testing."
            ]
          }
        ]
      },
      {
        "title": "When to Use Lo-Fi",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "Early exploration: \"What should this even do?\"",
              "Testing information architecture and navigation",
              "Validating user flows before visual design",
              "Rapid iteration based on feedback"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Embrace Imperfection:</strong> Sketches should be rough. If it looks polished, you're overthinking it.",
              "<strong>Quantity Over Quality:</strong> Generate many options quickly. Defer judgment.",
              "<strong>Annotate:</strong> Add notes explaining interactions, states, or content. Sketches alone can be ambiguous.",
              "<strong>Test Early:</strong> Show lo-fi designs to users within days, not weeks. Get feedback when changes are cheap.",
              "<strong>Use Real Content:</strong> Even in wireframes, use realistic labels and copy. \"Lorem ipsum\" hides problems.",
              "<strong>Know When to Level Up:</strong> Once flows are validated, move to mid/high fidelity. Lo-fi can't test visual hierarchy or micro-interactions."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Tools for Lo-Fi Design",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Paper & Pen:</strong> Fastest. Use templates (mobile frames, browser windows) for consistency.",
              "<strong>Whiteboard:</strong> Great for collaborative sketching with teams.",
              "<strong>Figma/Sketch:</strong> Digital wireframing with basic shapes and text. Reusable components.",
              "<strong>Whimsical/Balsamiq:</strong> Purpose-built wireframing tools with \"sketchy\" aesthetic.",
              "<strong>Marvel/InVision:</strong> Turn static wireframes into clickable prototypes."
            ]
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define the Problem:</strong> What user flow or feature are you designing? Be specific.",
              "<strong>Sketch Rapidly:</strong> Set a timer (5-10 mins per idea). Sketch 3-5 variations. Don't edit—just generate.",
              "<strong>Review & Select:</strong> With your team, evaluate sketches. Which best solves the problem? Why?",
              "<strong>Refine into Wireframes:</strong> Take the best idea(s) and create digital wireframes. Add real content (labels, copy).",
              "<strong>Add Interactions:</strong> Link screens together to create a clickable flow. Focus on the happy path + 1-2 edge cases.",
              "<strong>Test with Users:</strong> Run 5-8 usability tests. Give users tasks. Observe where they get confused.",
              "<strong>Iterate:</strong> Fix major issues. Repeat testing until flow works smoothly (90%+ task success).",
              "<strong>Level Up:</strong> Once validated, move to high-fidelity design with visual polish."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Onboarding",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Goal:</strong> Design onboarding flow for first-time users to create their first invoice in under 2 minutes.",
              "<strong>Sketching Phase:</strong> Sketch 5 variations in 30 minutes",
              "<strong>Selected:</strong> Option A (wizard) + Option C (progressive disclosure). Wizard provides structure; progressive disclosure keeps it simple.",
              "<strong>Wireframe Flow:</strong>",
              "<strong>Test Results:</strong> 7/8 users completed task in under 2 minutes. 1 user confused by \"due date\" (expected dropdown, got calendar). <strong>Fix:</strong> Add calendar icon to clarify input type.",
              "• Option A: Multi-step wizard (client info → invoice details → preview → send)",
              "• Option B: Single-page form with all fields visible",
              "• Option C: Progressive disclosure (start with minimal fields, expand as needed)",
              "• Option D: Template-based (\"Use this invoice template\")",
              "• Option E: Conversational UI (chatbot-style)",
              "• Welcome screen: \"Create your first invoice\"",
              "• Step 1: Client name + email (minimal required fields)",
              "• Step 2: Amount + due date",
              "• Step 3: Preview invoice",
              "• Step 4: Confirmation \"Invoice sent!\""
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Creative ideation to generate novel layout concepts",
      "Contextual judgment to assess which ideas solve user needs",
      "Empathy to design for accessibility and diverse use cases",
      "Strategic thinking to balance business goals with user experience"
    ],
    "aiValue": [
      "Generation of multiple wireframe layout variations",
      "Conversion of hand sketches to digital wireframes",
      "Suggestion of UI patterns based on best practices",
      "Rapid resizing and adaptation of layouts for different devices"
    ],
    "considerations": [
      "<strong>AI for Speed, Not Strategy:</strong> AI can generate wireframe options quickly, but humans must select which best solves the user problem.",
      "<strong>Sketch-to-Digital:</strong> AI tools can convert hand sketches to digital wireframes. But always review—AI misinterprets ambiguous drawings.",
      "<strong>Pattern Libraries:</strong> AI can suggest common UI patterns (forms, navigation, cards). Humans must adapt patterns to specific context."
    ],
    "aiInLoop": [
      "<strong>Ideation:</strong> Humans sketch 3-5 concepts on paper. AI converts sketches to digital wireframes for easier iteration.",
      "<strong>Layout Exploration:</strong> AI generates layout variations based on content hierarchy. Humans select and refine the most promising direction.",
      "<strong>Responsive Adaptation:</strong> AI auto-generates mobile/tablet versions of desktop wireframes. Humans review and adjust for touch targets and readability."
    ],
    "watchOuts": [
      "Don't let AI design the entire wireframe. It lacks contextual understanding of user needs and brand requirements.",
      "Avoid AI-generated \"generic\" patterns. They may follow best practices but lack differentiation and creativity.",
      "Be cautious of AI misinterpreting sketches. Always review AI-converted wireframes for accuracy.",
      "Don't skip human sketching. Early ideation benefits from pen-and-paper freedom, not AI constraints."
    ]
  }
},

  "prototyping": {
  "slug": "prototyping",
  "title": "Prototyping",
  "tags": [
    "Execution",
    "Design Validation"
  ],
  "purpose": "Build interactive representations of your product to test ideas, gather feedback, and validate designs before development.",
  "learn": {
    "sections": [
      {
        "title": "What is Prototyping?",
        "blocks": [
          {
            "type": "p",
            "text": "Prototyping is the process of creating interactive, tangible representations of a product or feature before building the real thing. Prototypes range from paper sketches to high-fidelity interactive mockups. The goal: test assumptions, gather user feedback, and iterate quickly without the cost of full development."
          }
        ]
      },
      {
        "title": "Why Prototype?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Fail Fast, Fail Cheap:</strong> Discover flaws in paper or Figma, not in production code.",
              "<strong>User Validation:</strong> Put something tangible in front of users to test behaviors, not hypotheticals.",
              "<strong>Stakeholder Alignment:</strong> Show, don't tell. Prototypes communicate vision better than specs.",
              "<strong>Design Iteration:</strong> Explore multiple solutions quickly. Prototypes are disposable—code isn't."
            ]
          }
        ]
      },
      {
        "title": "Fidelity Spectrum",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Low-Fidelity:</strong> Paper sketches, wireframes, clickable wireframes. Fast to make, great for testing flows and concepts.",
              "<strong>Mid-Fidelity:</strong> Grayscale mockups with basic interactions. Good for testing information architecture and hierarchy.",
              "<strong>High-Fidelity:</strong> Pixel-perfect designs with full interactions, animations, and real content. Best for final validation before development."
            ]
          }
        ]
      },
      {
        "title": "Framework & Placement",
        "blocks": [
          {
            "type": "p",
            "text": "Prototyping happens during <strong>Execution</strong>:"
          },
          {
            "type": "ul",
            "items": [
              "<strong>After:</strong> Problem definition, journey mapping, feature prioritization",
              "<strong>Before:</strong> Development handoff and production build"
            ]
          },
          {
            "type": "p",
            "text": "Start with low-fidelity to test concepts, then increase fidelity as you validate assumptions."
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Match Fidelity to Questions:</strong> Testing a concept? Use low-fi. Testing visual polish? Use high-fi. Don't over-invest early.",
              "<strong>Make It Interactive:</strong> Static mockups can't test flows. Even simple clickable prototypes reveal usability issues.",
              "<strong>Use Real Content:</strong> Lorem ipsum hides problems. Use realistic data, especially for complex interfaces.",
              "<strong>Test Early and Often:</strong> Don't wait for perfection. Get a prototype in front of users within days, not weeks.",
              "<strong>Focus on Critical Paths:</strong> Prototype the happy path and 1-2 edge cases. Don't build every screen.",
              "<strong>Set Context:</strong> When testing, give users a scenario (\"You just received an invoice...\"). Don't explain the UI—see if they figure it out."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Prototyping Tools",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Paper & Pencil:</strong> Fastest for early concepts. Draw screens, cut them out, simulate clicks.",
              "<strong>Figma:</strong> Industry standard for digital prototypes. Collaborative, component-based, supports interactions.",
              "<strong>Framer:</strong> Code-based prototyping with advanced animations. Best for high-fidelity.",
              "<strong>Marvel/InVision:</strong> Simple clickable prototypes from static images. Good for quick demos.",
              "<strong>Code Prototypes:</strong> HTML/CSS/JS for testing technical feasibility or specific interactions."
            ]
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define What You're Testing:</strong> What specific questions do you need answered? (e.g., \"Can users complete onboarding in under 2 minutes?\")",
              "<strong>Choose Fidelity Level:</strong> Low-fi for concepts and flows. High-fi for visual design and micro-interactions.",
              "<strong>Sketch the Flow:</strong> Map out the user journey on paper first. Identify critical screens and decision points.",
              "<strong>Build the Prototype:</strong> Create screens in your tool of choice. Add interactions (clicks, transitions). Focus on the critical path.",
              "<strong>Add Realistic Content:</strong> Replace placeholders with real or realistic data. Test with actual copy.",
              "<strong>Test with Users:</strong> Run 5-8 usability tests. Observe where users struggle. Don't explain—let them explore.",
              "<strong>Iterate:</strong> Fix major issues and test again. Repeat until the prototype validates your assumptions."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Prototype",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Goal:</strong> Test if freelancers can create and send their first invoice in under 2 minutes.",
              "<strong>Fidelity:</strong> Mid-fidelity clickable prototype in Figma.",
              "<strong>Key Screens:</strong>",
              "<strong>Interactions:</strong>",
              "<strong>Test Scenario:</strong> \"You just finished a logo design for a client. Create an invoice for $500, due in 30 days, and send it.\"",
              "<strong>Success Metrics:</strong> 90% of users complete task in under 2 minutes without asking for help.",
              "• Onboarding: \"Create your first invoice\" prompt",
              "• Invoice form: Client name, amount, due date, description",
              "• Preview screen: Review before sending",
              "• Confirmation: \"Invoice sent! You'll be notified when paid.\"",
              "• Click \"Create Invoice\" → Navigate to form",
              "• Fill fields → \"Preview\" button becomes active",
              "• Click \"Send\" → Show success animation + confirmation"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Design intuition to craft intuitive, delightful user experiences",
      "Contextual understanding of user needs and brand identity",
      "Strategic judgment on what to prototype and test",
      "Creative problem-solving for novel interaction patterns"
    ],
    "aiValue": [
      "Generation of wireframe and layout variations",
      "Conversion of sketches to digital mockups",
      "Auto-generation of UI components from design systems",
      "Rapid iteration of visual design alternatives"
    ],
    "considerations": [
      "<strong>AI for Speed, Not Strategy:</strong> AI can generate wireframe variations quickly, but humans must decide which direction aligns with user needs and brand.",
      "<strong>Component Generation:</strong> AI can create UI components based on design systems, but humans must ensure consistency and usability.",
      "<strong>Interaction Design Limits:</strong> AI struggles with complex interaction patterns and animations. Humans must define the \"feel\" of the prototype."
    ],
    "aiInLoop": [
      "<strong>Wireframe Generation:</strong> AI generates multiple layout options based on content hierarchy and best practices. Humans select and refine the most promising direction.",
      "<strong>Design System Application:</strong> AI applies design tokens (colors, typography, spacing) from your design system to components. Humans review for brand consistency.",
      "<strong>Content Population:</strong> AI generates realistic placeholder content (names, descriptions, data) for prototypes. Humans validate for relevance and tone."
    ],
    "watchOuts": [
      "Don't let AI design the entire prototype. It lacks the contextual understanding of user needs, brand voice, and strategic goals.",
      "Avoid AI-generated \"dark patterns.\" Always review AI suggestions for ethical design and accessibility.",
      "Be cautious of AI overcomplicating simple flows. Humans must simplify and prioritize user needs.",
      "AI-generated designs may lack originality. Use AI to accelerate iteration, but inject human creativity for differentiation."
    ]
  }
},

  "design-guide": {
  "slug": "design-guide",
  "title": "Design Guide",
  "tags": [
    "Execution",
    "Design Systems"
  ],
  "purpose": "Document design principles, patterns, and components to ensure consistency and scalability across your product.",
  "learn": {
    "sections": [
      {
        "title": "What is a Design Guide?",
        "blocks": [
          {
            "type": "p",
            "text": "A Design Guide (also called a Design System or Style Guide) is a comprehensive reference document that codifies your product's visual language, interaction patterns, and component library. It's the single source of truth that ensures designers, developers, and stakeholders create consistent, on-brand experiences. Think of it as your product's design DNA."
          }
        ]
      },
      {
        "title": "Why Create a Design Guide?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Consistency:</strong> Ensures UI looks and behaves the same across features, platforms, and teams.",
              "<strong>Efficiency:</strong> Designers and developers reuse components instead of reinventing them.",
              "<strong>Scalability:</strong> New team members onboard faster with clear documentation.",
              "<strong>Quality:</strong> Pre-tested, accessible components reduce bugs and improve UX.",
              "<strong>Brand Coherence:</strong> Visual identity remains cohesive as the product grows."
            ]
          }
        ]
      },
      {
        "title": "Core Components of a Design Guide",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Design Principles:</strong> High-level values that guide decisions (e.g., \"Simple over complex\")",
              "<strong>Color Palette:</strong> Primary, secondary, neutral, semantic colors (success, error, warning)",
              "<strong>Typography:</strong> Font families, scales, weights, line heights",
              "<strong>Spacing & Layout:</strong> Grid systems, spacing tokens, breakpoints",
              "<strong>Components:</strong> Buttons, forms, cards, modals, navigation—with code examples",
              "<strong>Patterns:</strong> Common UI patterns (empty states, error handling, loading states)",
              "<strong>Accessibility:</strong> WCAG guidelines, contrast ratios, keyboard navigation",
              "<strong>Voice & Tone:</strong> Writing guidelines for UI copy"
            ]
          }
        ]
      },
      {
        "title": "Maturity Levels",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Level 1: Static Style Guide:</strong> PDF or Figma file with colors, fonts, and basic components",
              "<strong>Level 2: Living Documentation:</strong> Web-based guide with interactive examples and code snippets",
              "<strong>Level 3: Component Library:</strong> Reusable, versioned components in code (React, Vue, etc.) synced with design tools",
              "<strong>Level 4: Design System Team:</strong> Dedicated team maintaining, evolving, and supporting the system"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Start Small:</strong> Begin with colors, typography, and 5-10 core components. Expand as needed.",
              "<strong>Make It Accessible:</strong> Host it where everyone can access it (web, not just Figma or code repo).",
              "<strong>Show, Don't Just Tell:</strong> Include visual examples and live code demos, not just descriptions.",
              "<strong>Version Control:</strong> Track changes. Communicate updates to teams when components change.",
              "<strong>Include Do's and Don'ts:</strong> Show correct and incorrect usage with examples.",
              "<strong>Make It Searchable:</strong> Teams should find what they need in under 30 seconds.",
              "<strong>Keep It Alive:</strong> Design guides aren't one-and-done. Update regularly as the product evolves."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Design Guide Structure",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>1. Introduction</strong><br> - Purpose of this guide<br> - Design principles (3-5 core values)<br> <br> <strong>2. Foundation</strong><br> - Color palette (primary, secondary, neutral, semantic)<br> - Typography (font families, scales, weights)<br> - Spacing system (tokens: 4px, 8px, 16px, etc.)<br> - Grid & layout (columns, breakpoints)<br> <br> <strong>3. Components</strong><br> For each component:<br> - Visual example<br> - Variants (default, hover, disabled, etc.)<br> - Usage guidelines (when to use, when not to use)<br> - Code snippet (HTML/CSS/React/etc.)<br> - Accessibility notes<br> <br> <strong>4. Patterns</strong><br> - Form validation<br> - Empty states<br> - Loading states<br> - Error handling<br> <br> <strong>5. Voice & Tone</strong><br> - Writing guidelines<br> - Example microcopy"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Audit Existing Design:</strong> Take inventory of all UI elements currently in your product. What's consistent? What's inconsistent?",
              "<strong>Define Design Principles:</strong> Write 3-5 core values (e.g., \"Clarity over cleverness,\" \"Fast and lightweight\"). These guide all decisions.",
              "<strong>Document Foundation:</strong> Extract color palette, typography, and spacing from existing designs. Create semantic tokens (e.g., `color-primary`, `spacing-md`).",
              "<strong>Catalog Components:</strong> List all UI components (buttons, inputs, cards, etc.). For each, capture variants, states, and usage rules.",
              "<strong>Build Examples:</strong> Create visual examples and code snippets. Show components in context (e.g., button in a form).",
              "<strong>Add Accessibility:</strong> Document contrast ratios, keyboard navigation, ARIA labels. Test with screen readers.",
              "<strong>Publish & Share:</strong> Host on a web platform (Storybook, Zeroheight, custom site). Share link with all teams.",
              "<strong>Iterate:</strong> Gather feedback. Update as you design new features. Version major changes."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App Design Guide",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Design Principles:</strong>",
              "<strong>Color Palette:</strong>",
              "<strong>Typography:</strong>",
              "<strong>Component Example: Primary Button</strong>",
              "<strong>Pattern Example: Invoice Status</strong>",
              "• <strong>1. Simple First:</strong> Prioritize clarity over features. If it requires explanation, simplify.",
              "• <strong>2. Fast & Light:</strong> Interactions should feel instant. No unnecessary animations or bloat.",
              "• <strong>3. Human, Not Corporate:</strong> Friendly, conversational tone. Reduce anxiety, not increase it.",
              "• <strong>Primary:</strong> Purple #963BF7 (CTAs, links, highlights)",
              "• <strong>Success:</strong> Green #10B981 (paid invoices, success states)",
              "• <strong>Warning:</strong> Orange #F59E0B (overdue invoices)",
              "• <strong>Error:</strong> Red #EF4444 (errors, destructive actions)",
              "• <strong>Neutral:</strong> Gray scale from #050506 (text) to #FAFAFA (backgrounds)",
              "• <strong>Headings:</strong> Geist, 700 weight",
              "• <strong>Body:</strong> Google Sans, 400 weight",
              "• <strong>Code/Numbers:</strong> JetBrains Mono, 400 weight",
              "• <strong>Scale:</strong> 12px (small), 14px (body), 16px (default), 20px (subheading), 24px+ (headings)",
              "• <strong>Default:</strong> Purple background (#963BF7), white text, 8px vertical padding, 16px horizontal padding, 8px border radius",
              "• <strong>Hover:</strong> Darken to #7B2FD8",
              "• <strong>Disabled:</strong> Gray background (#DDD8DD), gray text (#C9C4CC)",
              "• <strong>Usage:</strong> Use for primary actions (Send Invoice, Save, Create). Limit to 1 per screen.",
              "• <strong>Don't:</strong> Use for destructive actions (Delete). Use error-styled button instead.",
              "• <strong>Pending:</strong> Orange dot + \"Pending\" text",
              "• <strong>Paid:</strong> Green checkmark + \"Paid\" text + celebration animation",
              "• <strong>Overdue:</strong> Red warning icon + \"Overdue by X days\" text"
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Strategic vision to define design principles that align with brand",
      "Design judgment to create cohesive visual systems",
      "Contextual understanding of when to break the rules",
      "Accessibility expertise to ensure inclusive design"
    ],
    "aiValue": [
      "Automated extraction of colors and typography from existing designs",
      "Generation of component variants and states",
      "Documentation drafting with code examples",
      "Contrast ratio calculations and accessibility checks"
    ],
    "considerations": [
      "<strong>AI for Extraction:</strong> Use AI to scan existing designs and extract color palettes, spacing patterns, and typography scales. Humans curate and refine into semantic tokens.",
      "<strong>Component Variants:</strong> AI can generate common component states (hover, disabled, focus). Humans ensure they match brand and accessibility standards.",
      "<strong>Documentation Drafting:</strong> AI can draft component documentation and code snippets. Humans add usage guidelines, do's/don'ts, and context."
    ],
    "aiInLoop": [
      "<strong>Audit:</strong> AI scans Figma files or codebase to extract design tokens (colors, fonts, spacing). Humans review and organize into a semantic system.",
      "<strong>Component Documentation:</strong> AI generates initial component specs (props, variants, code examples). Humans add usage guidelines and accessibility notes.",
      "<strong>Accessibility Checks:</strong> AI calculates contrast ratios and flags WCAG violations. Humans adjust colors and document keyboard navigation patterns."
    ],
    "watchOuts": [
      "Don't let AI define your design principles. They require strategic brand alignment and human judgment.",
      "Avoid AI-generated component names. They may be generic (\"Button1\", \"Card2\"). Use semantic names (\"PrimaryButton\", \"InvoiceCard\").",
      "Be cautious of AI accessibility checks. They catch contrast and structure issues but miss semantic HTML and screen reader UX.",
      "Don't auto-generate the entire design guide. It needs human curation, examples, and storytelling to be useful."
    ]
  }
},

  "testing": {
  "slug": "testing",
  "title": "Usability Testing",
  "tags": [
    "Testing",
    "Validation"
  ],
  "purpose": "Observe users interacting with your product or prototype to identify usability issues and validate design decisions.",
  "learn": {
    "sections": [
      {
        "title": "What is Usability Testing?",
        "blocks": [
          {
            "type": "p",
            "text": "Usability Testing is a method where you observe real users attempting to complete tasks with your product, prototype, or design. The goal: identify where users get stuck, confused, or frustrated—and fix those issues before launch. It's the reality check that transforms assumptions into validated designs."
          }
        ]
      },
      {
        "title": "Why Test?",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Catch Problems Early:</strong> Fix usability issues in prototypes, not production. Cheaper and faster.",
              "<strong>See What Users Actually Do:</strong> What users say they'll do ≠ what they actually do. Testing reveals truth.",
              "<strong>Validate Design Decisions:</strong> Gut feelings don't ship products. User behavior does.",
              "<strong>Build Confidence:</strong> Stakeholders trust designs that pass real user scrutiny."
            ]
          }
        ]
      },
      {
        "title": "Types of Usability Testing",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Moderated:</strong> Researcher facilitates in real-time (in-person or remote). Best for exploring \"why\" users struggle.",
              "<strong>Unmoderated:</strong> Users complete tasks independently, recorded for later review. Faster, scales better.",
              "<strong>Formative:</strong> Early-stage testing to identify problems. Goal: learn and iterate.",
              "<strong>Summative:</strong> Late-stage testing to validate readiness. Goal: measure success metrics before launch."
            ]
          }
        ]
      },
      {
        "title": "Core Metrics",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Task Success Rate:</strong> % of users who complete tasks without help",
              "<strong>Time on Task:</strong> How long it takes to complete tasks",
              "<strong>Error Rate:</strong> Frequency of user mistakes",
              "<strong>Satisfaction:</strong> Self-reported ease of use (e.g., SUS score)"
            ]
          }
        ]
      },
      {
        "title": "Best Practices",
        "blocks": [
          {
            "type": "ul",
            "items": [
              "<strong>Test with 5-8 Users:</strong> Nielsen research shows 5 users reveal 85% of usability issues. Diminishing returns after that.",
              "<strong>Use Realistic Tasks:</strong> Give users scenarios, not instructions. \"Find and book a flight\" beats \"Click the search button.\"",
              "<strong>Think Aloud Protocol:</strong> Ask users to narrate their thought process. \"What are you thinking?\" \"What would you do next?\"",
              "<strong>Don't Intervene:</strong> Let users struggle. Their mistakes reveal design flaws. Only help if they're completely stuck.",
              "<strong>Record Sessions:</strong> Capture screen + audio. Review later to catch details you missed live.",
              "<strong>Test Iteratively:</strong> Fix major issues, then test again. Repeat until task success rate hits 90%+."
            ]
          }
        ]
      }
    ]
  },
  "build": {
    "sections": [
      {
        "title": "Template: Test Plan",
        "blocks": [
          {
            "type": "code",
            "text": "<strong>Test Goals</strong><br> What are we testing? [Prototype, feature, flow]<br> What questions do we need answered?<br> <br> <strong>Tasks</strong><br> 1. [Task description + success criteria]<br> 2. [Task 2...]<br> <br> <strong>Participants</strong><br> Who: [Target user segment]<br> How Many: [5-8 for qualitative; 20+ for quantitative]<br> <br> <strong>Metrics</strong><br> - Task success rate<br> - Time on task<br> - Error rate<br> - Satisfaction (1-5 scale)<br> <br> <strong>Scenarios</strong><br> [Set context for each task. Give users a \"why.\"]"
          }
        ]
      },
      {
        "title": "Step-by-Step Instructions",
        "blocks": [
          {
            "type": "ol",
            "items": [
              "<strong>Define What You're Testing:</strong> A specific flow? The overall product? Be clear on scope.",
              "<strong>Write Task Scenarios:</strong> Create 3-5 realistic tasks users would actually do. Frame as goals, not instructions.",
              "<strong>Recruit Participants:</strong> Target your actual user segment. Use screeners to filter. Recruit 5-8 for moderated tests.",
              "<strong>Prepare Your Prototype:</strong> Ensure it's functional enough to test the critical path. Fix obvious bugs first.",
              "<strong>Run a Pilot:</strong> Test with 1 colleague to refine tasks and timing. Adjust as needed.",
              "<strong>Conduct Tests:</strong> Introduce the test. Give users the first task. Observe. Take notes. Don't interrupt. Ask follow-up questions after each task.",
              "<strong>Analyze Results:</strong> Calculate success rates, identify patterns in errors. Cluster issues by severity (critical, major, minor).",
              "<strong>Prioritize Fixes:</strong> Fix critical issues (task blockers) first. Iterate and retest."
            ]
          }
        ]
      },
      {
        "title": "Example: Freelance Invoice App",
        "blocks": [
          {
            "type": "example",
            "items": [
              "<strong>Test Goal:</strong> Validate that new users can create and send their first invoice in under 2 minutes without assistance.",
              "<strong>Tasks:</strong>",
              "<strong>Participants:</strong> 6 freelance designers/developers, 1-3 years experience",
              "<strong>Results:</strong>",
              "<strong>Action:</strong> Fix button placement. Retest with 3 new users. Target: 100% success rate.",
              "• <strong>Task 1:</strong> You just finished a logo design for a client, Sarah Lee. Create an invoice for $500, due in 30 days, and send it to sarah@example.com.",
              "• <strong>Task 2:</strong> Check the status of the invoice you just sent.",
              "• <strong>Task 1 Success:</strong> 5/6 users (83%) completed without help",
              "• <strong>Avg Time:</strong> 1m 45s (meets <2min goal)",
              "• <strong>Issue Found:</strong> 3 users struggled to find the \"Send\" button (placed too low on form). <strong>Fix:</strong> Move \"Send\" to sticky footer."
            ]
          }
        ]
      }
    ]
  },
  "ai": {
    "humanValue": [
      "Empathy to understand why users struggle",
      "Active observation to catch non-verbal cues (frustration, confusion)",
      "Contextual judgment to assess severity of usability issues",
      "Strategic prioritization of which issues to fix first"
    ],
    "aiValue": [
      "Automated analysis of heatmaps and click patterns",
      "Transcription and tagging of session recordings",
      "Calculation of metrics (success rate, time on task)",
      "Pattern identification across multiple test sessions"
    ],
    "considerations": [
      "<strong>AI for Analytics:</strong> Use AI to analyze quantitative data (click paths, time on task). But humans must interpret what these patterns mean for design.",
      "<strong>Session Review:</strong> AI can tag moments of hesitation or errors in recordings. Humans must watch to understand the \"why.\"",
      "<strong>No AI as Moderator:</strong> Usability testing requires human empathy and adaptability. AI cannot probe deeper or adjust questions in real-time."
    ],
    "aiInLoop": [
      "<strong>Test Setup:</strong> AI suggests task scenarios based on user flows. Humans refine for realism and clarity.",
      "<strong>Session Recording:</strong> AI transcribes user think-aloud commentary and tags friction moments. Humans review to understand root causes.",
      "<strong>Analysis:</strong> AI calculates metrics and identifies common error patterns. Humans prioritize fixes based on user impact and technical feasibility."
    ],
    "watchOuts": [
      "Don't let AI conduct tests. Usability testing requires human judgment, empathy, and the ability to ask follow-up questions.",
      "Avoid over-reliance on heatmaps. They show where users click, not why. Combine with qualitative observation.",
      "Be cautious of AI-generated insights. \"Users spent 10s on this button\" doesn't tell you if that's good or bad. Context matters.",
      "Privacy: Ensure AI analysis tools comply with data protection laws. Always inform participants if AI is involved."
    ]
  }
},

};
