"use client";

import React from "react";
import CollectionTabs, { RankingType } from "./CollectionTabs";
import TimeFilter from "@/components/ui/time-filter";
import { Crown, Rocket } from "lucide-react";
import { Button } from "../ui/button";

const CollectionFilter = () => {
  const tabs = [
    { name: "Trending", icon: Rocket, type: RankingType.Trending },
    { name: "Top", icon: Crown, type: RankingType.Top },
  ];
  const times = ["15m", "1h", "4h", "1d", "7d"];
  return (
    <div className="flex items-center justify-between">
      <CollectionTabs tabs={tabs} />
      <div className="flex gap-x-3">
        <TimeFilter times={times} />
        <Button variant="outline">
          View All
        </Button>
      </div>
    </div>
  );
};

export default CollectionFilter;
