"use client";
import HeaderSwiper from "@/components/HeaderSwiper";
import MarketSignalSwiper from "@/components/MarketSignalSwiper";
import CollectionList from "@/components/TopCollection/CollectionList";
import { collections } from "@/lib/mock";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <HeaderSwiper/>
      <CollectionList collections={collections} />
      <MarketSignalSwiper collections={collections} />
    </div>
  );
}
