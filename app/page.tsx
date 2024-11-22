import HeaderSwiper from "@/components/HeaderSwiper";
import CollectionList from "@/components/TopCollection/CollectionList";

export default function Home() {
  return (
    <div className="flex h-[1000px] flex-col gap-10">
      <HeaderSwiper />
      <CollectionList />
    </div>
  );
}
