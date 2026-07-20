import CareerCard from "./CareerCard";

const CareerCategories = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Explore Career Paths
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Choose a career path and let AI generate your personalized roadmap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <CareerCard
            icon="💻"
            title="Full Stack Development"
            description="Become a modern web developer."
          />

          <CareerCard
            icon="🤖"
            title="Artificial Intelligence"
            description="Learn Machine Learning and AI."
          />

          <CareerCard
            icon="📊"
            title="Data Science"
            description="Master data analysis and visualization."
          />

          <CareerCard
            icon="🔐"
            title="Cybersecurity"
            description="Protect systems and networks."
          />

          <CareerCard
            icon="☁️"
            title="Cloud Computing"
            description="Learn AWS, Azure and cloud technologies."
          />

          <CareerCard
            icon="📱"
            title="Mobile Development"
            description="Build Android and iOS applications."
          />

        </div>

      </div>

    </section>
  );
};

export default CareerCategories;