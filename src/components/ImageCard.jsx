import Image from "next/image";

export default function ImageCard({ animal }) {
  const { name, type, price, image, category } = animal;
  console.log(animal);
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className="object-cover rounded-xl"
        />

        <p size="sm" className="absolute right-2 top-2">
          {category}
        </p>
      </div>
    </div>
  );
}

//  "id": 1,
//     "name": "Deshi Shahi Cow",
//     "type": "Cow",
//     "breed": "Local Deshi",
//     "price": 120000,
//     "weight": 280,
//     "age": 3,
//     "location": "Bogura",
//     "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural food.",
//     "image": "https://i.postimg.cc/example-cow1.jpg",
//     "category": "Large Animal"
