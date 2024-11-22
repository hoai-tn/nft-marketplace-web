"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

export enum RankingType {
  Trending,
  Top,
  New,
  Popular,
}
export interface CollectionTab {
  name: string;
  icon?: React.FC;
  type: RankingType;
}
interface CollectionTabsProps {
  tabs: CollectionTab[];
}
const CollectionTabs = ({ tabs }: CollectionTabsProps) => {
  const [currentTab, setCurrentTab] = useState(RankingType.Trending);

  return (
    <div className="mt-5 flex gap-x-2">
      {
        // Map through the tabs
        tabs.map((tab) => (
          <Button
            key={tab.type}
            variant={currentTab === tab.type ? "secondary" : "ghost"}
            onClick={() => setCurrentTab(tab.type)}
            className={
              currentTab === tab.type
                ? "font-bold"
                : "font-normal text-muted-foreground"
            }
          >
            {
              // Check if the tab has an icon
              tab.icon && <tab.icon />
            }
            {tab.name}
          </Button>
        ))
      }
    </div>
  );
};

export default CollectionTabs;
