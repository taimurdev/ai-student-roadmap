import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose RoadMapAI?
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Everything you need to plan your career journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <FeatureCard
            icon="🤖"
            title="AI Guidance"
            description="Receive personalized career recommendations."
          />

          <FeatureCard
            icon="🗺️"
            title="Roadmaps"
            description="Follow step-by-step learning paths."
          />

          <FeatureCard
            icon="📈"
            title="Progress Tracking"
            description="Monitor your learning progress."
          />

          <FeatureCard
            icon="📚"
            title="Resources"
            description="Discover curated learning resources."
          />

        </div>

      </div>

    </section>
  );
};

export default Features;