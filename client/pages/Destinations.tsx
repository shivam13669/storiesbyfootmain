import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  MapPin,
  Star,
  ArrowRight,
  Filter,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [rating, setRating] = useState("All");

  const destinations = [
    {
      id: 1,
      name: "Maldives",
      location: "Indian Ocean",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Pristine beaches and crystal clear waters",
      rating: 4.9,
      price: 1299,
      category: "Beach",
      duration: "5 days",
    },
    {
      id: 2,
      name: "Bali",
      location: "Indonesia",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Tropical paradise with ancient temples",
      rating: 4.8,
      price: 899,
      category: "Beach",
      duration: "6 days",
    },
    {
      id: 3,
      name: "Swiss Alps",
      location: "Switzerland",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Stunning mountain landscapes and adventure",
      rating: 4.9,
      price: 1599,
      category: "Mountain",
      duration: "7 days",
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      description: "Modern city meets traditional culture",
      rating: 4.7,
      price: 1099,
      category: "City",
      duration: "5 days",
    },
    {
      id: 5,
      name: "Paris",
      location: "France",
      image: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      description: "The city of love and timeless elegance",
      rating: 4.9,
      price: 1399,
      category: "City",
      duration: "5 days",
    },
    {
      id: 6,
      name: "New York",
      location: "USA",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      description: "The city that never sleeps",
      rating: 4.8,
      price: 999,
      category: "City",
      duration: "4 days",
    },
    {
      id: 7,
      name: "Dubai",
      location: "UAE",
      image: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
      description: "Luxury shopping and desert adventures",
      rating: 4.7,
      price: 1199,
      category: "Luxury",
      duration: "4 days",
    },
    {
      id: 8,
      name: "Iceland",
      location: "Iceland",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Northern lights and natural wonders",
      rating: 4.9,
      price: 1499,
      category: "Adventure",
      duration: "6 days",
    },
    {
      id: 9,
      name: "Greece",
      location: "Greece",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Ancient history and island hopping",
      rating: 4.8,
      price: 1099,
      category: "Beach",
      duration: "6 days",
    },
  ];

  const categories = [
    "All",
    "Beach",
    "Mountain",
    "City",
    "Luxury",
    "Adventure",
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || dest.category === selectedCategory;
    const matchesPrice =
      priceRange === "All" ||
      (priceRange === "Low" && dest.price < 1000) ||
      (priceRange === "Medium" && dest.price >= 1000 && dest.price < 1300) ||
      (priceRange === "High" && dest.price >= 1300);
    const matchesRating =
      rating === "All" ||
      (rating === "4.5+" && dest.rating >= 4.5) ||
      (rating === "4.7+" && dest.rating >= 4.7) ||
      (rating === "4.8+" && dest.rating >= 4.8);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Explore Destinations
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Find your perfect travel destination from our curated collection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-6">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="category"
                          value={cat}
                          checked={selectedCategory === cat}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Price Range
                  </label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  >
                    <option>All</option>
                    <option>Low (&lt; $1000)</option>
                    <option>Medium ($1000 - $1300)</option>
                    <option>High (&gt; $1300)</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Rating
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                  >
                    <option>All</option>
                    <option>4.5+</option>
                    <option>4.7+</option>
                    <option>4.8+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredDestinations.length}
                  </span>{" "}
                  destinations
                </p>
              </div>

              {filteredDestinations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredDestinations.map((destination) => (
                    <Link
                      key={destination.id}
                      to={`/destinations/${destination.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div
                          className="h-48 bg-gradient-to-br relative overflow-hidden"
                          style={{ background: destination.image }}
                        >
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="font-semibold text-sm">
                              {destination.rating}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-primary">
                            {destination.duration}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {destination.name}
                          </h3>
                          <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {destination.location}
                          </p>
                          <p className="text-gray-600 text-sm mb-4 flex-grow">
                            {destination.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-primary">
                              ${destination.price}
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No destinations found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
