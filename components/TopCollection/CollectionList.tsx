import React from "react";
import CollectionTable from "./CollectionTable";
import CollectionFilter from "./CollectionHeader";
import { collections } from "@/lib/mock";

const CollectionList = () => {
  return (
    <section className="space-y-4">
      <h4 className="text-4xl font-bold">Real Time Data Tracking</h4>
      <CollectionFilter />
      <div className="hidden md:flex md:flex-row md:gap-x-8">
        <CollectionTable collections={collections.slice(0, 5)} />
        <CollectionTable collections={collections.slice(5, 10)} />
        <CollectionTable collections={collections.slice(10, 15)} />
      </div>
      <div className="block md:hidden">
        <CollectionTable collections={collections} />
      </div>
    </section>
  );
};

export default CollectionList;
