
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Copy, Check, RefreshCw, Stars } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { generateTweet } from "@/services/tweetService";
import { PERSONAS } from "@/utils/promptTemplates";

interface TweetProps {
  content: string;
  topics: string[];
}

const TweetGenerator = () => {
  const [tweet, setTweet] = useState<TweetProps>({
    content: "",
    topics: ["AI", "LLM", "Automation"]
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState("visionary");
  const [customTopic, setCustomTopic] = useState("");
  const [generationSuccess, setGenerationSuccess] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerationSuccess(false);
    
    try {
      const generatedTweet = await generateTweet(selectedPersona, tweet.topics);
      setTweet({
        ...tweet,
        content: generatedTweet
      });
      setGenerationSuccess(true);
      toast.success("Tweet generated successfully!");
    } catch (error) {
      toast.error("Failed to generate tweet. Please try again.");
      console.error("Error generating tweet:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(tweet.content);
    setCopied(true);
    toast.success("Tweet copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleAddTopic = () => {
    if (customTopic && !tweet.topics.includes(customTopic)) {
      setTweet({
        ...tweet,
        topics: [...tweet.topics, customTopic]
      });
      setCustomTopic("");
    }
  };

  const handleRemoveTopic = (topicToRemove: string) => {
    setTweet({
      ...tweet,
      topics: tweet.topics.filter(topic => topic !== topicToRemove)
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="persona">Tweet Persona</Label>
        <Select
          value={selectedPersona}
          onValueChange={setSelectedPersona}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a persona" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(PERSONAS).map(persona => (
              <SelectItem key={persona} value={persona}>
                {PERSONAS[persona].title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">
          {selectedPersona && PERSONAS[selectedPersona]?.description}
        </p>
      </div>

      <div>
        <Label htmlFor="topics" className="mb-2 block">Topics</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {tweet.topics.map(topic => (
            <Badge key={topic} variant="secondary" className="px-2 py-1">
              {topic}
              <button
                onClick={() => handleRemoveTopic(topic)}
                className="ml-2 text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            placeholder="Add a topic (e.g. GPT-4, Software)"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleAddTopic}
            variant="outline"
            size="sm"
            disabled={!customTopic}
          >
            Add
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="tweet">Generated Tweet</Label>
          <div className="flex space-x-2">
            <Button 
              onClick={handleGenerate} 
              size="sm"
              disabled={isGenerating || tweet.topics.length === 0}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : generationSuccess ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </>
              ) : (
                <>
                  <Stars className="mr-2 h-4 w-4" />
                  Generate Tweet
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <Textarea
            id="tweet"
            value={tweet.content}
            onChange={(e) => setTweet({ ...tweet, content: e.target.value })}
            placeholder="Your AI-generated tweet will appear here..."
            className="min-h-[120px] font-mono text-sm resize-none"
            readOnly={isGenerating}
          />
          {tweet.content && (
            <Button
              onClick={handleCopyToClipboard}
              variant="ghost"
              size="icon"
              className="absolute bottom-2 right-2"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
        
        <div className="text-right text-xs text-muted-foreground">
          {tweet.content.length} / 280 characters
        </div>
      </div>

      <div className="rounded-md bg-blue-50 dark:bg-blue-950 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <Stars className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
              Ready for GitHub Actions
            </h3>
            <div className="mt-1 text-sm text-blue-700 dark:text-blue-400">
              <p>
                Your generated tweets can be automated using GitHub Actions.
                Switch to the Setup Guide tab to learn how to set up your
                automatic tweet posting repository.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetGenerator;
