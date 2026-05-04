import { allAnimals } from "@/lib/animal";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function AllDetailsPage({ params }) {
  const { id } = await params;
  const data = await allAnimals(id);
  const animal = data.find((a) => a.id == id);
  //   console.log(animal);

  const {
    name,
    type,
    price,
    image,
    category,
    description,
    breed,
    weight,
    age,
    location,
  } = animal;
  console.log(animal);

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Animal Details
      </h1>

      <Card className="flex flex-col md:flex-row gap-6 p-5 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition duration-300">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-xl">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-xl hover:scale-105 transition duration-300"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

            <p className="text-gray-600 mb-3">{description}</p>

            <p className="text-sm text-gray-500 mb-4">
              {type} • {category}
            </p>

            {/* Info */}
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <span>
                <strong>💰 Price:</strong> BDT {price}
              </span>
              <span>
                <strong>🐄 Breed:</strong> {breed}
              </span>
              <span>
                <strong>⚖️ Weight:</strong> {weight} kg
              </span>
              <span>
                <strong>🎂 Age:</strong> {age} years
              </span>
              <span className="col-span-2">
                <strong>📍 Location:</strong> {location}
              </span>
            </div>
          </div>

          {/* Button (Properly aligned) */}
          <div className="mt-6 flex justify-end">
            <Link href="/booking">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition shadow-md">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
