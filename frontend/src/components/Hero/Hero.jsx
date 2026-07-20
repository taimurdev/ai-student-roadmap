const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="text-blue-600 font-semibold">
              AI Powered Career Guidance
            </span>

            <h1 className="text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Your Personalized AI Career Journey Starts Here 🚀
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              Discover the right career path, identify your skill gaps,
              and receive a personalized learning roadmap powered by AI.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="w-96 h-96 bg-blue-100 rounded-3xl flex items-center justify-center">

              <span className="text-7xl">🤖</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;