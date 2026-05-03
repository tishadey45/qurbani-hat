import AnimalCard from "@/components/AnimalCard";
import Banner from "@/components/Banner";
import ExtraAnimals from "@/components/ExtraAnimals";

export default function Home() {
  return (
    <div className="text-center max-w-7xl mx-auto">
      <Banner />
      <AnimalCard />
      <ExtraAnimals />
    </div>
  );
}
