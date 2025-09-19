import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  "Who we are",
  "Why Sapphire", 
  "Benefits / What we offer",
  "Life at Sapphire",
  "Hiring Process",
  "Current Openings"
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="py-8 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => onTabChange(tab)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};