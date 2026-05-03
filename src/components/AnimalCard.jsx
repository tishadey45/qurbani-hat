import ImageCard from "./ImageCard";

export default async function AnimalCard () {
  const res = await fetch(
    `https://raw.githubusercontent.com/tishadey45/qurbani-hat/refs/heads/main/data.json`,
  );
  const data = await res.json();
  const topPhotos = data.slice(0, 4);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">Featured animals</h1>
      <div className="grid grid-cols-2 gap-6">
        {topPhotos.map((animal) => (
          <ImageCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};
