import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">About Disease Predictor</h1>
        <p className="text-center text-gray-600 mb-8">Learn about our AI-powered health prediction system</p>

        <div className="space-y-8">
          {/* Project Description */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Overview</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Disease Predictor is an AI-powered web application that helps users identify potential 
              diseases based on their symptoms. Using machine learning algorithms trained on medical 
              symptom data, the system provides instant predictions and educational information about 
              common health conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This tool is designed for educational purposes and to help users understand potential 
              health concerns before consulting healthcare professionals.
            </p>
          </section>

          {/* Dataset Information */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Dataset Information</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Features Collected:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Fever:</strong> Presence or absence of elevated body temperature</li>
                <li><strong>Cough:</strong> Dry or productive cough symptoms</li>
                <li><strong>Headache:</strong> Head pain or migraine symptoms</li>
                <li><strong>Sore Throat:</strong> Throat pain or irritation</li>
                <li><strong>Runny Nose:</strong> Nasal congestion or discharge</li>
                <li><strong>Nausea:</strong> Feeling of sickness with inclination to vomit</li>
                <li><strong>Body Pain:</strong> General muscle or body aches</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Common Diseases Predicted:</h3>
              <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Influenza (Flu)
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Common Cold
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Malaria
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Strep Throat
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  COVID-19
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Migraine
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Food Poisoning
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  Viral Fever
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Frontend</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    React 18 - UI Framework
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    React Router - Navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Axios - API Communication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    Tailwind CSS - Styling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    Vite - Build Tool
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Backend & ML</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Python Flask - Web Framework
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Scikit-learn - Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Random Forest - Classification
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    Pickle - Model Serialization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    Pandas - Data Processing
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ML Model Details */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Machine Learning Model</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our system uses a <strong>Random Forest Classifier</strong> trained on symptom-disease 
                mapping data. The model analyzes patterns in symptom combinations to predict the most 
                likely disease with a confidence score.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Multi-class classification for various diseases</li>
                <li>Probability scores for each possible disease</li>
                <li>Feature importance analysis</li>
                <li>Regular model retraining capability</li>
                <li>Real-time prediction with high accuracy</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Important Disclaimer</h2>
            <div className="space-y-3 text-red-700">
              <p className="leading-relaxed">
                <strong>⚠️ This application is for educational and informational purposes only.</strong>
              </p>
              <p className="leading-relaxed">
                The disease predictions provided by this tool are based on statistical patterns in 
                historical data and should not be considered as medical diagnosis or professional 
                medical advice.
              </p>
              <p className="leading-relaxed">
                <strong>Always consult qualified healthcare professionals</strong> for accurate 
                diagnosis and treatment of medical conditions. Do not disregard professional medical 
                advice or delay seeking it because of something you have read or learned from this 
                application.
              </p>
              <p className="leading-relaxed">
                In case of medical emergency, please contact your local emergency services immediately.
              </p>
            </div>
          </section>

          {/* Developer Info */}
          <section className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Development Team</h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              This application was developed as a demonstration of modern web development 
              and machine learning integration.
            </p>
            <p className="text-gray-600 text-sm">
              Built with ❤️ using React, Flask, and Scikit-learn
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;