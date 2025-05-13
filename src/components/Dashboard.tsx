
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Header from "./Header";
import TweetGenerator from "./TweetGenerator";
import SetupGuide from "./SetupGuide";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("generate");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-8 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Twitter Automation</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Generate authentic-sounding tweets about tech, AI, and software craftsmanship that post automatically via GitHub Actions.
          </p>
        </div>

        <Tabs defaultValue="generate" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generate">Generate Tweets</TabsTrigger>
            <TabsTrigger value="setup">Setup Guide</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="generate" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <TweetGenerator />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="setup" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <SetupGuide />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>
      
      <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>Xutomation © {new Date().getFullYear()} - AI Twitter automation made easy</p>
      </footer>
    </div>
  );
};

export default Dashboard;
