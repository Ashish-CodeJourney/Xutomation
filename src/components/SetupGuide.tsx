import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Copy, Check, Github, ExternalLink, Terminal } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const SetupGuide = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    toast.success("Copied to clipboard!");
    
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Setup Your Twitter Automation</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Follow these steps to set up an automated Twitter posting system with GitHub Actions.
        </p>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="setup">Step-by-Step</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="secrets">Twitter API</TabsTrigger>
        </TabsList>
        
        <TabsContent value="setup" className="space-y-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold flex items-center">
              <Badge className="mr-2">Step 1</Badge>
              Create a GitHub Repository
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Create a new GitHub repository to store your tweet automation code.
            </p>
            <div className="mt-3">
              <Button asChild variant="outline">
                <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  Create Repository
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold flex items-center">
              <Badge className="mr-2">Step 2</Badge>
              Add Twitter API Credentials
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Store your Twitter API credentials as GitHub repository secrets to authenticate API calls.
            </p>
            <ol className="list-decimal list-inside mt-3 text-sm space-y-2 text-slate-600 dark:text-slate-400">
              <li>Go to your GitHub repository</li>
              <li>Navigate to Settings {'>'} Secrets and variables {'>'} Actions</li>
              <li>Create new Environment with name <code className="code-inline">Xutomation</code></li>
              <li>Add the following secrets:
                <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                  <li><code className="code-inline">TWITTER_API_KEY</code></li>
                  <li><code className="code-inline">TWITTER_API_SECRET</code></li>
                  <li><code className="code-inline">TWITTER_ACCESS_TOKEN</code></li>
                  <li><code className="code-inline">TWITTER_ACCESS_SECRET</code></li>
                </ul>
              </li>
            </ol>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold flex items-center">
              <Badge className="mr-2">Step 3</Badge>
              Add Repository Files
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Create the necessary files in your repository to handle tweet generation and posting.
            </p>
            <ol className="list-decimal list-inside mt-3 text-sm space-y-2 text-slate-600 dark:text-slate-400">
              <li>Add <code className="code-inline">tweet-generator.js</code> - Script for generating tweets using HuggingFace or other free APIs</li>
              <li>Add <code className="code-inline">post-tweet.js</code> - Script for posting to Twitter API</li>
              <li>Add <code className="code-inline">.github/workflows/tweet-scheduler.yml</code> - GitHub Actions workflow file</li>
              <li>Add <code className="code-inline">package.json</code> with dependencies</li>
              <li>Add <code className="code-inline">README.md</code> with setup instructions</li>
            </ol>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Switch to the "Files" tab to see the content of each file.
            </p>
          </div>
          
          <div className="rounded-md bg-green-50 dark:bg-green-950 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium text-green-800 dark:text-green-300">
                  Next Steps
                </h3>
                <div className="mt-1 text-sm text-green-700 dark:text-green-400">
                  <p>Once set up, your repository will automatically post tweets twice daily at random times. The tweets will be AI-generated but crafted to sound authentic and human-written.</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="files" className="space-y-6 mt-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-semibold">.github/workflows/tweet-scheduler.yml</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(workflowYml, "workflow")}
                className="h-8"
              >
                {copiedSection === "workflow" ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                Copy
              </Button>
            </div>
            <pre className="code-block text-xs overflow-x-auto whitespace-pre-wrap">
              {workflowYml}
            </pre>
          </div>
          
          <Separator />
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-semibold">tweet-generator.js</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(tweetGeneratorJs, "generator")}
                className="h-8"
              >
                {copiedSection === "generator" ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                Copy
              </Button>
            </div>
            <pre className="code-block text-xs overflow-x-auto whitespace-pre-wrap">
              {tweetGeneratorJs}
            </pre>
          </div>
          
          <Separator />
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-semibold">post-tweet.js</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(postTweetJs, "poster")}
                className="h-8"
              >
                {copiedSection === "poster" ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                Copy
              </Button>
            </div>
            <pre className="code-block text-xs overflow-x-auto whitespace-pre-wrap">
              {postTweetJs}
            </pre>
          </div>
          
          <Separator />
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-md font-semibold">package.json</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(packageJson, "package")}
                className="h-8"
              >
                {copiedSection === "package" ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                Copy
              </Button>
            </div>
            <pre className="code-block text-xs overflow-x-auto whitespace-pre-wrap">
              {packageJson}
            </pre>
          </div>
        </TabsContent>
        
        <TabsContent value="secrets" className="space-y-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold">Obtaining Twitter API Credentials</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Follow these steps to get your Twitter API credentials:
            </p>
            
            <ol className="list-decimal list-inside mt-3 text-sm space-y-3 text-slate-600 dark:text-slate-400">
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">Create a Twitter Developer Account</span>
                <p className="ml-5 mt-1">Visit the <a href="https://developer.twitter.com/en/portal/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter Developer Portal</a> and sign in with your Twitter account.</p>
              </li>
              
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">Create a Project and App</span>
                <p className="ml-5 mt-1">Create a new project, then create an app within that project.</p>
              </li>
              
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">Set App Permissions</span>
                <p className="ml-5 mt-1">Under "User authentication settings", enable OAuth 1.0a and ensure "Read and Write" permissions are set.</p>
              </li>
              
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">Generate Access Token and Secret</span>
                <p className="ml-5 mt-1">Navigate to the "Keys and tokens" tab and generate both Consumer Keys (API Key and Secret) and Access Token and Secret.</p>
              </li>
            </ol>
            
            <div className="mt-5 p-4 border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 rounded-md">
              <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-400">Alternative: Free AI APIs</h4>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-500">
                If you don't want to use Twitter API or it's not accessible, you can modify the code to use only the AI generation part, outputting tweets to a file or displaying them for manual posting.
              </p>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-500">
                Free AI alternatives to use:
              </p>
              <ul className="list-disc list-inside mt-1 text-sm text-amber-700 dark:text-amber-500">
                <li>HuggingFace Inference API (limited free tier)</li>
                <li>GPT4All (local models)</li>
                <li>Ollama (local models)</li>
                <li>Perplexity API (limited free tier)</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold">Setting GitHub Secrets</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Add your Twitter API credentials as secrets in your GitHub repository:
            </p>
            
            <div className="mt-3 space-y-4">
              <div className="relative">
                <div className="code-block text-xs overflow-x-auto flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  <code>Name: TWITTER_API_KEY</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("TWITTER_API_KEY", "apikey")}
                    className="absolute right-2 top-3 h-6"
                  >
                    {copiedSection === "apikey" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="code-block text-xs overflow-x-auto flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  <code>Name: TWITTER_API_SECRET</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("TWITTER_API_SECRET", "apisecret")}
                    className="absolute right-2 top-3 h-6"
                  >
                    {copiedSection === "apisecret" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="code-block text-xs overflow-x-auto flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  <code>Name: TWITTER_ACCESS_TOKEN</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("TWITTER_ACCESS_TOKEN", "accesstoken")}
                    className="absolute right-2 top-3 h-6"
                  >
                    {copiedSection === "accesstoken" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="code-block text-xs overflow-x-auto flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  <code>Name: TWITTER_ACCESS_SECRET</code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("TWITTER_ACCESS_SECRET", "accesssecret")}
                    className="absolute right-2 top-3 h-6"
                  >
                    {copiedSection === "accesssecret" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// GitHub Actions workflow file
const workflowYml = `name: Tweet Scheduler

on:
  schedule:
    # Run twice a day at random times (this example runs at 9:30 and 17:45)
    - cron: '30 9 * * *'
    - cron: '45 17 * * *'
  # Allow manual triggering
  workflow_dispatch:

jobs:
  tweet:
    runs-on: ubuntu-latest
    environment: Xutomation
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm install
      
      - name: Generate Tweet Content
        id: generate
        run: node tweet-generator.js
        
      - name: Post Tweet
        env:
          TWITTER_API_KEY: \${{ secrets.TWITTER_API_KEY }}
          TWITTER_API_SECRET: \${{ secrets.TWITTER_API_SECRET }}
          TWITTER_ACCESS_TOKEN: \${{ secrets.TWITTER_ACCESS_TOKEN }}
          TWITTER_ACCESS_SECRET: \${{ secrets.TWITTER_ACCESS_SECRET }}
        run: node post-tweet.js
        
      - name: Log Success
        run: echo "Tweet posted successfully at $(date)"`;

// Tweet generator JavaScript file
const tweetGeneratorJs = `const fs = require('fs');
const fetch = require('node-fetch');

// List of personas
const PERSONAS = {
  visionary: {
    style: "forward-thinking, inspirational, slightly philosophical",
    topics: ["future of tech", "AI ethics", "innovation mindset"]
  },
  expert: {
    style: "authoritative, insightful, data-backed",
    topics: ["technical deep dives", "industry analysis", "best practices"]
  },
  craftsman: {
    style: "thoughtful, practical, quality-focused",
    topics: ["software craftsmanship", "clean code", "developer productivity"]
  },
  founder: { 
    style: "strategic, growth-oriented, leadership-focused",
    topics: ["startup journey", "team building", "product development"]
  }
};

// Get trending topics related to tech
async function getTrendingTopics() {
  try {
    // Using a free API to get trends - replace with your preferred method
    const response = await fetch('https://api.twtdata.com/trends');
    const data = await response.json();
    
    // Filter for tech-related trends
    const techKeywords = ['ai', 'tech', 'code', 'developer', 'programming', 'software', 'data', 
                         'cloud', 'ml', 'llm', 'gpt', 'automation', 'product', 'startup'];
    
    const techTrends = data.trends
      .filter(trend => {
        const lowercase = trend.name.toLowerCase();
        return techKeywords.some(keyword => lowercase.includes(keyword));
      })
      .slice(0, 3)
      .map(trend => trend.name);
      
    return techTrends;
  } catch (error) {
    console.error('Error fetching trends:', error);
    // Fallback topics if trending fetch fails
    return ['#AI', '#CodeQuality', '#TechTrends'];
  }
}

// Generate tweet content using HuggingFace Inference API (free tier)
async function generateTweetContent(persona, topics) {
  try {
    // Random selection for variety
    const selectedPersona = PERSONAS[persona] || PERSONAS.visionary;
    const promptTopics = [...topics, ...selectedPersona.topics];
    const randomTopics = promptTopics.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    // Create prompt for the LLM
    const prompt = \`Generate a single insightful tweet (maximum 280 characters) about \${randomTopics.join(', ')}. 
                   Write in a \${selectedPersona.style} tone. Sound human and authentic, not AI-generated.
                   Include 1-2 relevant hashtags naturally. Make it thought-provoking and something a tech influencer would post.\`;
    
    // Using HuggingFace Inference API (free tier)
    const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });
    
    const result = await response.json();
    let tweet = result[0].generated_text;
    
    // Clean up the response - extract just the tweet content
    tweet = tweet.replace(prompt, '').trim();
    
    // Ensure tweet is within character limit
    if (tweet.length > 280) {
      tweet = tweet.substring(0, 277) + '...';
    }
    
    return tweet;
  } catch (error) {
    console.error('Error generating tweet:', error);
    return \`The future of AI isn't just about better models—it's about more thoughtful integration with human workflows. Let's build systems that enhance human creativity rather than replace it. #AIEthics #FutureOfWork\`;
  }
}

async function main() {
  try {
    // Get trending topics
    const trendingTopics = await getTrendingTopics();
    
    // Randomly select a persona
    const personas = Object.keys(PERSONAS);
    const randomPersona = personas[Math.floor(Math.random() * personas.length)];
    
    // Generate tweet
    const tweet = await generateTweetContent(randomPersona, trendingTopics);
    
    // Save to file for the post-tweet.js script
    fs.writeFileSync('tweet-content.json', JSON.stringify({ 
      content: tweet,
      persona: randomPersona,
      topics: trendingTopics,
      timestamp: new Date().toISOString()
    }));
    
    console.log('Tweet generated successfully:', tweet);
  } catch (error) {
    console.error('Error in tweet generation process:', error);
    process.exit(1);
  }
}

main();`;

// Post Tweet JavaScript file
const postTweetJs = `const fs = require('fs');
const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const fetch = require('node-fetch');

// Read the generated tweet content
const tweetData = JSON.parse(fs.readFileSync('tweet-content.json', 'utf8'));
const tweetContent = tweetData.content;

// Twitter API v2 endpoint for posting tweets
const endpointURL = 'https://api.twitter.com/2/tweets';

// Get API credentials from environment variables
const consumer_key = process.env.TWITTER_API_KEY;
const consumer_secret = process.env.TWITTER_API_SECRET;
const access_token = process.env.TWITTER_ACCESS_TOKEN;
const access_token_secret = process.env.TWITTER_ACCESS_SECRET;

// OAuth 1.0a setup
const oauth = OAuth({
  consumer: { key: consumer_key, secret: consumer_secret },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto
      .createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});

// Function to post a tweet
async function postTweet() {
  // Check if credentials are available
  if (!consumer_key || !consumer_secret || !access_token || !access_token_secret) {
    console.error('Twitter API credentials are missing. Please set them as environment variables.');
    process.exit(1);
  }

  const token = {
    key: access_token,
    secret: access_token_secret,
  };

  // Prepare request data
  const requestData = {
    url: endpointURL,
    method: 'POST',
    body: {
      text: tweetContent,
    },
  };

  try {
    // Get OAuth authorization header
    const authHeader = oauth.toHeader(oauth.authorize(requestData, token));

    // Make API request
    const response = await fetch(endpointURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader['Authorization'],
      },
      body: JSON.stringify(requestData.body),
    });

    // Parse response
    const data = await response.json();

    // Check if successful
    if (response.ok) {
      console.log('Tweet posted successfully! Tweet ID:', data.data.id);
      // Save successful tweet to history
      saveTweetToHistory(tweetData, data.data.id);
    } else {
      console.error('Error posting tweet:', data);
      process.exit(1);
    }
  } catch (error) {
    console.error('Error posting tweet:', error);
    process.exit(1);
  }
}

// Function to save tweets to history file
function saveTweetToHistory(tweetData, tweetId) {
  try {
    let history = [];
    const historyFilePath = 'tweet-history.json';
    
    // Read existing history if it exists
    if (fs.existsSync(historyFilePath)) {
      history = JSON.parse(fs.readFileSync(historyFilePath, 'utf8'));
    }
    
    // Add new tweet to history
    history.push({
      ...tweetData,
      id: tweetId,
      posted_at: new Date().toISOString()
    });
    
    // Keep only the last 100 tweets to avoid large files
    if (history.length > 100) {
      history = history.slice(-100);
    }
    
    // Save history
    fs.writeFileSync(historyFilePath, JSON.stringify(history, null, 2));
    
  } catch (error) {
    console.error('Error saving tweet to history:', error);
  }
}

// Post the tweet
postTweet();`;

// Package JSON
const packageJson = `{
  "name": "xutomation",
  "version": "1.0.0",
  "description": "Automated AI-generated Twitter posting via GitHub Actions",
  "main": "post-tweet.js",
  "scripts": {
    "generate": "node tweet-generator.js",
    "post": "node post-tweet.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [
    "twitter",
    "automation",
    "ai",
    "github-actions"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "crypto": "^1.0.1",
    "fetch": "^1.1.0",
    "fs": "^0.0.1-security",
    "node-fetch": "^2.6.7",
    "oauth-1.0a": "^2.2.6"
  }
}`;

export default SetupGuide;
