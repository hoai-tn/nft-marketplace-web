import { Collection } from "@/types";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
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
          <TableHead className="w-24 px-0">Floor Price</TableHead>
          <TableHead className="text-right">Volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collections.map((collection, index) => (
          <TableRow key={index} className="border-b-0 font-bold">
            <TableCell className="font-normal text-muted-foreground">
              {index + 1}
            </TableCell>
            <TableCell className="flex items-center gap-x-2">
              <img
                src={collection.icon_url}
                alt={collection.name}
                width={40}
                height={40}
              />
              <p>{collection.name}</p>
              <Image
                src="/icons/verify-collection.svg"
                alt="Verify Collection"
                width={20}
                height={20}
              />
            </TableCell>
            <TableCell className="text-center">{collection.floor_price}</TableCell>
            <TableCell className="text-right">{collection.volume}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CollectionTable;
