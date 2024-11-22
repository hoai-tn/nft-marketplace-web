import React from "react";
import CollectionTable from "./CollectionTable";
import CollectionFilter from "./CollectionHeader";

const CollectionList = () => {
  return (
    <section>
      <h4 className="text-4xl font-bold">Real Time Data Tracking</h4>
      <CollectionFilter />
      <CollectionTable />
    </section>
  );
};

export default CollectionList;
