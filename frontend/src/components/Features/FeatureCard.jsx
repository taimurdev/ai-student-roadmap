const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;