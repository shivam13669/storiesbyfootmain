const leftDestinations = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F1b5f0c557324403ebe060430d850427d?format=webp&width=800",
    name: "Singapore",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fc9eacb596e724b189604e3421cdb23af?format=webp&width=800",
    name: "Dubai",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F85b5668ee51345b4bfb8816135c5a559?format=webp&width=800",
    name: "Bali",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fc71481c1620f40788961928a7469a1ff?format=webp&width=800",
    name: "Paris",
  },
];

const rightDestinations = [
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Ffd50dfd006534eafa79b6c08d73b10d9?format=webp&width=800",
    name: "London",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fb63d20ed62894912bdd7501569e83e78?format=webp&width=800",
    name: "India",
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fc71481c1620f40788961928a7469a1ff?format=webp&width=800",
    name: "Paris",
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F85b5668ee51345b4bfb8816135c5a559?format=webp&width=800",
    name: "Bali",
  },
];

export default function FloatingDestinations() {
  return (
    <>
      {/* Left Side Destinations */}
      <div className="absolute left-0 top-20 hidden lg:flex flex-col gap-4 z-10">
        <div className="flex gap-3 -ml-8">
          {leftDestinations.slice(0, 2).map((dest, index) => (
            <div
              key={dest.id}
              className={`w-24 h-24 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer ${
                index === 1 ? "mt-6" : ""
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 -ml-16">
          {leftDestinations.slice(2, 4).map((dest, index) => (
            <div
              key={dest.id}
              className="w-20 h-20 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Destinations */}
      <div className="absolute right-0 top-20 hidden lg:flex flex-col gap-4 z-10">
        <div className="flex gap-3 -mr-8 justify-end">
          {rightDestinations.slice(0, 3).map((dest, index) => (
            <div
              key={dest.id}
              className={`w-24 h-24 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer ${
                index === 1 ? "mt-6" : ""
              }`}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 justify-end -mr-12">
          {rightDestinations.slice(1, 3).map((dest, index) => (
            <div
              key={dest.id + 10}
              className="w-20 h-20 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
