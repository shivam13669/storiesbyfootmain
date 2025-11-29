import Layout from "@/components/Layout";
import { Star, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      text: "StoriesByFoot made my dream vacation come true. The itinerary was perfect!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      text: "Excellent service and amazing support throughout my journey. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Davis",
      location: "London, UK",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      text: "The best travel experience I've ever had. Can't wait to book my next trip!",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            What Our Travelers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Read stories from our happy customers
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br`}
                    style={{ background: testimonial.image }}
                  ></div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for More Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-dashed border-primary p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Your testimonial could inspire other travelers to explore with
              StoriesByFoot.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
