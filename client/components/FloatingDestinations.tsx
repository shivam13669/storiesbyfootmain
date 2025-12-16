const leftDestinations = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fc4d6c68d589a481ebae7de8e8c5e5011?format=webp&width=800",
    name: "Singapore",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2Fb4a89e24f0804345811e93987414963b?format=webp&width=800",
    name: "Dubai",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F11ee7276db324031951861f3a2fed899?format=webp&width=800",
    name: "Bali",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F9cf275092a664f18acd095c989ef2f31?format=webp&width=800",
    name: "Paris",
  },
];

const rightDestinations = [
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F39cd2174de8a455c9806126c0720d89d?format=webp&width=800",
    name: "London",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F5150216d64fa47c68998edd830d5cc58?format=webp&width=800",
    name: "India",
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F9cf275092a664f18acd095c989ef2f31?format=webp&width=800",
    name: "Paris",
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2a56cdad82ba4b609d03ed63f0f0a73d%2F11ee7276db324031951861f3a2fed899?format=webp&width=800",
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
