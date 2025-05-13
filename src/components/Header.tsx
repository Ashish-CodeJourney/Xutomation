
import React from "react";
import { Bot, Github, Share } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Header = () => {
  return (
    <header className="w-full border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Bot className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h1 className="text-xl font-bold font-mono tracking-tight">
          <span className="gradient-text">X</span>utomation
        </h1>
      </div>
      
      <div className="flex items-center space-x-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://github.com/new" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create GitHub repo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Share className="h-5 w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share Xutomation</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
};

export default Header;
