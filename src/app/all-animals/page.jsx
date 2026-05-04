import ImageCard from "@/components/ImageCard";
import { allAnimals } from "@/lib/animal";

export default async function AllAnimalsPage() {
    const data = await allAnimals();
    console.log(data);
    
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">All animals</h1>
      <div className="grid grid-cols-2 gap-6">
     {data.map((animal)=>(<ImageCard key={animal.id} animal={animal}/>))}
      </div>
    </div>
  );
}