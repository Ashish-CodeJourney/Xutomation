
export const PERSONAS: Record<string, { title: string; description: string; topics: string[] }> = {
  visionary: {
    title: "Visionary",
    description: "Forward-thinking tech visionary focused on future possibilities and big ideas.",
    topics: ["future of tech", "AI ethics", "innovation", "digital transformation"]
  },
  expert: {
    title: "AI/ML Expert",
    description: "Technical authority on AI/ML with deep knowledge and analytical insights.",
    topics: ["machine learning", "neural networks", "LLMs", "data science"]
  },
  craftsman: {
    title: "Software Craftsman",
    description: "Thoughtful developer focused on code quality, best practices, and elegant solutions.",
    topics: ["clean code", "software architecture", "developer productivity", "craft"]
  },
  founder: {
    title: "Tech Founder",
    description: "Entrepreneurial voice sharing insights on building products and leading tech teams.",
    topics: ["startups", "product development", "leadership", "tech strategy"]
  },
  automation: {
    title: "Automation Expert",
    description: "Specialist in workflow automation, productivity systems, and efficiency.",
    topics: ["workflow automation", "productivity systems", "efficiency", "no-code"]
  },
  mental: {
    title: "Mental Health Advocate",
    description: "Champion for well-being in tech, balancing productivity with mental health.",
    topics: ["developer wellness", "burnout prevention", "work-life balance", "mental health tech"]
  }
};

export const PROMPT_TEMPLATES = {
  tweetGeneration: `Generate an insightful tweet (maximum 280 characters) about {topics}.
Write in a {style} tone.
Sound human and authentic, not AI-generated.
Include 1-2 relevant hashtags naturally.
Make it thought-provoking and something a tech influencer would post.`,

  trendResearch: `What are the current trending topics in:
1. AI and machine learning
2. Software development
3. Tech startups and entrepreneurship
4. Digital transformation
5. Developer productivity and tooling

Provide a brief summary of each trend and any associated hashtags.`,

  contentPlanning: `Create a balanced 7-day content plan covering these themes:
- AI innovations and ethics
- Software craftsmanship
- Leadership and vision
- Automation and productivity
- Mental health in tech

For each day, suggest a topic angle that would resonate authentically.`
};
