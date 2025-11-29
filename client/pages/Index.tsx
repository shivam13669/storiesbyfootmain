import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from "lucide-react";

export default function Index() {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    travelers: "2",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Search params:", searchParams);
  };

  const destinations = [
    {
      id: 1,
      name: "Maldives",
      location: "Indian Ocean",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Pristine beaches and crystal clear waters",
      rating: 4.9,
      price: "$1,299",
    },
    {
      id: 2,
      name: "Bali",
      location: "Indonesia",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Tropical paradise with ancient temples",
      rating: 4.8,
      price: "$899",
    },
    {
      id: 3,
      name: "Swiss Alps",
      location: "Switzerland",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Stunning mountain landscapes and adventure",
      rating: 4.9,
      price: "$1,599",
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: "Modern city meets traditional culture",
      rating: 4.7,
      price: "$1,099",
    },
    {
      id: 5,
      name: "Paris",
      location: "France",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      description: "The city of love and timeless elegance",
      rating: 4.9,
      price: "$1,399",
    },
    {
      id: 6,
      name: "New York",
      location: "USA",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      description: "The city that never sleeps",
      rating: 4.8,
      price: "$999",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Best Destinations",
      description: "Curated selection of world's most beautiful places",
    },
    {
      icon: Star,
      title: "Expert Guides",
      description: "Local experts to create perfect itineraries",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support for peace of mind",
    },
    {
      icon: ArrowRight,
      title: "Easy Booking",
      description: "Simple, secure, and transparent booking process",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-foreground mb-6">
              Explore Your <span className="text-primary">Next Adventure</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover extraordinary destinations, create unforgettable memories with StoriesByFoot
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto w-full">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-primary" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={searchParams.destination}
                    onChange={(e) =>
                      setSearchParams({ ...searchParams, destination: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Check In
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-primary" />
                  <input
                    type="date"
                    value={searchParams.checkIn}
                    onChange={(e) =>
                      setSearchParams({ ...searchParams, checkIn: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Check Out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-primary" />
                  <input
                    type="date"
                    value={searchParams.checkOut}
                    onChange={(e) =>
                      setSearchParams({ ...searchParams, checkOut: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="flex flex-col justify-end">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Travelers
                </label>
                <select
                  value={searchParams.travelers}
                  onChange={(e) =>
                    setSearchParams({ ...searchParams, travelers: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ People</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="md:col-span-4 bg-gradient-to-r from-primary to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Destinations
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4">
            Why StoriesByFoot?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            We make travel simple, memorable, and unforgettable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore hand-picked destinations around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div
                    className="h-48 bg-gradient-to-br relative overflow-hidden"
                    style={{ background: destination.image }}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="font-semibold text-sm">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {destination.location}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {destination.price}
                      </span>
                      <div className="text-primary group-hover:translate-x-2 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready for Your Next Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start planning your dream vacation today
          </p>
          <Link
            to="/destinations"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
