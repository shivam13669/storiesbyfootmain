import Layout from "@/components/Layout";
import { Lightbulb, Award, Users } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            About StoriesByFoot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover our mission, values, and the story behind StoriesByFoot
          </p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-dashed border-primary p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Lightbulb className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              About Page
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This page is ready to showcase your company story, mission, and values.
            </p>
            <p className="text-gray-500 italic">
              Prompt the AI to fill in this page with your company information, team members, history, and values.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Innovation</h3>
              <p className="text-gray-600">Placeholder for your company's innovation values</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Excellence</h3>
              <p className="text-gray-600">Placeholder for your company's excellence values</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-gray-600">Placeholder for your company's community values</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
