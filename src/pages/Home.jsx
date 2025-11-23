import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sampleData = [
    { Fever: 1, Cough: 1, Headache: 1, SoreThroat: 0, RunnyNose: 1, Nausea: 0, BodyPain: 1, Disease: 'Flu' },
    { Fever: 0, Cough: 1, Headache: 0, SoreThroat: 1, RunnyNose: 1, Nausea: 0, BodyPain: 0, Disease: 'Cold' },
    { Fever: 1, Cough: 0, Headache: 1, SoreThroat: 0, RunnyNose: 0, Nausea: 1, BodyPain: 1, Disease: 'Malaria' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            AI-Powered Disease Prediction
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get instant, accurate predictions for common diseases based on your symptoms using our advanced machine learning technology.
          </p>
          <Link 
            to="/predict" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Start Predicting Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Enter Symptoms",
                description: "Select or type your symptoms from our comprehensive medical database"
              },
              {
                icon: "🤖",
                title: "AI Analysis",
                description: "Our advanced ML model analyzes symptom patterns in real-time"
              },
              {
                icon: "📊",
                title: "Get Results",
                description: "Receive instant predictions with confidence scores and medical advice"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Data Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sample Data</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fever</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cough</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Headache</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sore Throat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runny Nose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nausea</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Body Pain</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disease</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Fever}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Cough}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Headache}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.SoreThroat}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.RunnyNose}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.Nausea}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.BodyPain}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">{row.Disease}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 text-lg">Join thousands of users who trust our AI-powered diagnosis tool.</p>
            <Link 
              to="/predict" 
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg"
            >
              🎯 Try It Now - It's Free
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;