import React from "react";
import CollectionTable from "./CollectionTable";
import CollectionFilter from "./CollectionHeader";
import { Collection } from "@/types";

interface CollectionListProps {
  collections: Collection[];
}

const CollectionList = ({ collections }: CollectionListProps) => {
  return (
    <section className="space-y-4">
      <h4 className="text-4xl font-bold">Real Time Data Tracking</h4>
      <CollectionFilter />
      <div className="hidden xl:flex xl:flex-row xl:gap-x-8">
        <CollectionTable collections={collections.slice(0, 5)} />
        <CollectionTable collections={collections.slice(5, 10)} />
        <CollectionTable collections={collections.slice(10, 15)} />
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-x-8 xl:hidden">
        <CollectionTable collections={collections.slice(0, 5)} />
        <CollectionTable collections={collections.slice(5, 10)} />
      </div>
      <div className="block lg:hidden">
        <CollectionTable collections={collections.slice(0, 10)} />
      </div>
    </section>
  );
};

export default CollectionList;
