export default function ExtraAnimals() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      
      <section className="max-w-6xl mx-auto px-4 py-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
           Qurbani Tips & Top Breeds
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              📌 Qurbani Tips
            </h3>

            <ul className="space-y-3 text-gray-700 list-disc text-start pl-5">
              <li>Animal must be healthy and disease-free.</li>
              <li>Check age before purchasing (cow: 2+ years).</li>
              <li>Ensure proper weight for fair price.</li>
              <li>Keep animal in clean and safe environment.</li>
              <li>Follow Islamic rules during Qurbani.</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              🐮 Top Breeds
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Deshi Cow</span>
                <span className="text-green-600 font-medium">Most Popular</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Sirajganj Cow</span>
                <span className="text-green-600 font-medium">High Demand</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span>Black Bengal Goat</span>
                <span className="text-green-600 font-medium">Premium</span>
              </div>

              <div className="flex justify-between">
                <span>Hybrid Cow</span>
                <span className="text-green-600 font-medium">Large Size</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
