import { allAnimals } from "@/lib/animal";
import ImageCard from "./ImageCard";

export default async function AnimalCard() {
  const data = await allAnimals();
  const topAnimals = data.slice(0, 4);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Featured animals</h1>
      <div className="grid grid-cols-2 gap-6">
        {topAnimals.map((animal) => (
          <ImageCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}
