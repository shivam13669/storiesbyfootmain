import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            About <span className="text-orange-500">StoriesByFoot</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Founded in October 2020, StoriesByFoot was built on a simple belief that every journey has a story worth living. We design curated motorbike and 4x4 expeditions that balance thrill, culture, comfort and style for everyone from budget explorers and student groups to families, corporate teams, and luxury travellers.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rebranding Note */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12 border-l-4 border-orange-500">
            <p className="text-gray-700 italic">
              Formerly known as <span className="font-semibold">PlanYourTrip</span>, we rebranded to <span className="font-semibold">StoriesByFoot</span> to reflect our deeper vision transforming travel into stories that stay with you forever.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Our Story */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  StoriesByFoot was <span className="font-semibold">founded in October 2020</span> with one guiding idea: travel is more than places it's the stories you collect on the road. We specialise in expertly guided motorbike and 4x4 expeditions across breathtaking regions such as <span className="font-semibold">Ladakh, Zanskar, Meghalaya, Tawang, Bhutan</span> and <span className="font-semibold">Upper Mustang (Nepal)</span>.
                </p>
                <p className="text-gray-700">
                  Each expedition is carefully crafted to combine adventure, cultural connection, and comfort thoughtfully designed routes, trusted local partners, safety-first operations, and seamless logistics. With over <span className="font-semibold">500 completed expeditions</span> and <span className="font-semibold">10,000+ delighted travellers</span> across three nations, our trips aim to transform travel into memorable, story-worthy experiences.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">500+ Bike Trips</h3>
                  <p className="text-gray-600">Years of route experience and route-tested itineraries.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">10,000+ Travellers</h3>
                  <p className="text-gray-600">A growing community of riders, explorers and storytellers.</p>
                </div>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To redefine adventure travel by inspiring people to explore with curiosity and compassion building a community that values discovery, meaningful experiences, and the stories that bind them.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To design authentic, responsible and unforgettable journeys that blend adventure with comfort and cultural depth. Through meticulous planning, trusted local partnerships, and a commitment to safety and sustainability, we create trips that leave lasting impressions.
                </p>
              </div>

              {/* Why Travel with StoriesByFoot */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Travel with StoriesByFoot</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Adventure with Assurance</h3>
                    <p className="text-gray-700">Expert-led expeditions that balance excitement, safety and comfort.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-orange-900 mb-2">Curated Experiences</h3>
                    <p className="text-gray-700">Handcrafted itineraries that prioritize culture, scenery and authenticity.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Seamless Support</h3>
                    <p className="text-gray-700">From permits to logistics, we manage the details so you can enjoy the ride.</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-purple-900 mb-2">Community of Explorers</h3>
                    <p className="text-gray-700">Join a growing tribe of riders who share your passion for travel and stories.</p>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center py-8 border-t border-gray-200">
                <p className="text-2xl font-bold text-foreground">Walk the Road. Live the Story.</p>
                <p className="text-sm text-gray-500 mt-2">© 2025 StoriesByFoot. All rights reserved.</p>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Founded:</p>
                    <p className="text-gray-700 font-semibold">October 2020</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Formerly:</p>
                    <p className="text-gray-700 font-semibold">PlanYourTrip</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Speciality:</p>
                    <p className="text-gray-700 font-semibold">Motorbike & 4x4 expeditions</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Regions:</p>
                    <p className="text-gray-700 font-semibold">Ladakh, Zanskar, Meghalaya, Tawang, Bhutan, Upper Mustang</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Trips:</p>
                    <p className="text-gray-700 font-semibold">500+ completed expeditions</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">Travellers:</p>
                    <p className="text-gray-700 font-semibold">10,000+ served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
