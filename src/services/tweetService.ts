
import { PERSONAS } from "@/utils/promptTemplates";
import { toast } from "sonner";

// Function to simulate API call for tweet generation
export const generateTweet = async (persona: string, topics: string[]): Promise<string> => {
  // In a real implementation, this would call an AI service API
  // For now, we'll simulate the response with pre-written tweets and a delay

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Log the request
  console.log("Generating tweet for:", { persona, topics });

  // Get the persona details
  const personaDetails = PERSONAS[persona] || PERSONAS.visionary;

  // Predefined tweet templates
  const tweetTemplates = [
    "The future of {topic1} isn't just about technology—it's about {topic2}. We need to think beyond the tools and focus on the human impact. #{topic1} #{topic2}",
    
    "Just spent the morning diving into {topic1}. The potential to transform {topic2} is mind-blowing. We're just scratching the surface of what's possible.",
    
    "Hot take: {topic1} won't matter if we don't solve for {topic2} first. The real innovation happens at the intersection of both. Thoughts?",
    
    "The most underrated skill in {topic1}? Understanding {topic2}. Technical expertise without context is just academic.",
    
    "The gap between {topic1} hype and reality is closing fast. What used to be sci-fi is now just Tuesday. Most exciting time to be working in {topic2}!",
    
    "3 things I've learned about {topic1} this week: 1) It's evolving faster than we thought 2) {topic2} integration is key 3) The human element still matters most",
    
    "Unpopular opinion: We're overthinking {topic1}. Sometimes the simplest approach to {topic2} yields the most powerful results. Focus on fundamentals first.",
    
    "The real challenge with {topic1} isn't technical—it's cultural. How we adapt our thinking around {topic2} will determine the winners in this space.",
    
    "Watching {topic1} transform {topic2} in real-time is both terrifying and exhilarating. The pace of change has never been this fast.",
    
    "Remember when we thought {topic1} was just hype? Now it's reshaping entire industries. {topic2} is following the same trajectory—don't miss it.",
    
    "Spent the day experimenting with {topic1} for {topic2} workflows. The productivity gains are real, but the learning curve is steeper than most admit."
  ];

  // Randomly select a tweet template
  const template = tweetTemplates[Math.floor(Math.random() * tweetTemplates.length)];
  
  // Get random topics from the provided list
  const shuffledTopics = [...topics].sort(() => 0.5 - Math.random());
  const topic1 = shuffledTopics[0] || personaDetails.topics[0];
  const topic2 = shuffledTopics[1] || personaDetails.topics[1];

  // Generate the tweet by replacing placeholders with topics
  let tweet = template
    .replace(/{topic1}/g, topic1)
    .replace(/{topic2}/g, topic2);

  // Add occasionally a style element based on the persona
  if (Math.random() > 0.5) {
    const personaStyleElements = {
      visionary: [
        "The horizon is closer than it appears.",
        "This is just the beginning.",
        "We're writing the future together.",
        "The possibilities are endless."
      ],
      expert: [
        "The data supports this.",
        "I've tested this extensively.",
        "Research confirms this approach.",
        "Based on my analysis,"
      ],
      craftsman: [
        "Quality over quantity, always.",
        "The details matter.",
        "Elegant solutions require time.",
        "Perfection is in the details."
      ],
      founder: [
        "Building for scale requires vision.",
        "Team alignment is everything.",
        "Execution > ideas.",
        "Growth demands intention."
      ]
    };
    
    const styleElements = personaStyleElements[persona] || personaStyleElements.visionary;
    const styleElement = styleElements[Math.floor(Math.random() * styleElements.length)];
    
    // Sometimes add the style element at the beginning, sometimes at the end
    if (Math.random() > 0.5) {
      tweet = `${styleElement} ${tweet}`;
    } else {
      tweet = `${tweet} ${styleElement}`;
    }
  }
  
  return tweet;
};
