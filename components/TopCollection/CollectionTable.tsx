import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Collection } from "@/types";

interface CollectionTableProps {
  collections: Collection[];
}
const CollectionTable = ({ collections }: CollectionTableProps) => {
  return (
    <Table>
      <TableHeader className="[&_tr]:border-b-0">
        <TableRow>
          <TableHead className="w-[2px]"></TableHead>
          <TableHead>Collection</TableHead>
          <TableHead>Floor Price</TableHead>
          <TableHead align="right">Volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collections.map((collection, index) => (
          <TableRow key={index} className="border-b-0 font-bold">
            <TableCell className="font-normal text-muted-foreground">
              {index + 1}
            </TableCell>
            <TableCell>{collection.name}</TableCell>
            <TableCell>{collection.floor_price}</TableCell>
            <TableCell>{collection.volume}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CollectionTable;
