import Layout from "@/components/Layout";
import { MapPin, Plane, Hotel, MapPinned } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: MapPinned,
      title: "Destination Planning",
      description: "Personalized itineraries tailored to your preferences"
    },
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on flights from major airlines"
    },
    {
      icon: Hotel,
      title: "Accommodation",
      description: "Wide range of hotels, resorts, and homestays"
    },
    {
      icon: MapPin,
      title: "Local Experiences",
      description: "Authentic guided tours and activities"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Comprehensive travel solutions for your perfect getaway
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-dashed border-primary p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Plane className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Services Details Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Detailed service descriptions, pricing, and booking information can be added here.
            </p>
            <p className="text-gray-500 italic">
              Ask the AI to add more details about your specific services, packages, and pricing.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
