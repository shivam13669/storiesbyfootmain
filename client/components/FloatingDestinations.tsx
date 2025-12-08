const leftDestinations = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop",
    name: "Singapore",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1518684029980-cf92db92df51?w=300&h=300&fit=crop",
    name: "Dubai",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=300&h=300&fit=crop",
    name: "Bali",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop",
    name: "Paris",
  },
];

const rightDestinations = [
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=300&h=300&fit=crop",
    name: "London",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
    name: "India",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop",
    name: "Paris",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=300&h=300&fit=crop",
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
