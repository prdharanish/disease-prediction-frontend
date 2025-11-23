import React, { useState, useEffect } from 'react';
import { getInsights } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';

const Insights = () => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        // Simulate API call - replace with actual API later
        setTimeout(() => {
          setInsights({
            accuracy: 0.92,
            total_samples: 150,
            disease_counts: {
              'Flu': 25,
              'Cold': 30,
              'Malaria': 15,
              'Migraine': 20,
              'Food Poisoning': 10,
              'Strep Throat': 18,
              'COVID-19': 12,
              'Allergies': 20
            },
            feature_importance: {
              'Fever': 0.25,
              'Cough': 0.18,
              'Headache': 0.15,
              'SoreThroat': 0.12,
              'RunnyNose': 0.10,
              'Nausea': 0.08,
              'BodyPain': 0.12
            },
            symptom_frequency: {
              'Fever': 85,
              'Cough': 78,
              'Headache': 65,
              'BodyPain': 45,
              'SoreThroat': 42,
              'RunnyNose': 38,
              'Nausea': 25
            },
            model_type: 'Random Forest',
            feature_count: 7,
            training_date: '2024-01-15'
          });
          setLoading(false);
        }, 1000);
        
        // Actual API call (commented for now)
        // const data = await getInsights();
        // setInsights(data);
        // setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <LoadingSpinner text="Loading insights..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-l-4 border-red-500">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Error Loading Insights</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Model Insights & Analytics</h1>
        <p className="text-center text-gray-600 mb-8">Explore dataset statistics and model performance</p>

        {/* Model Metrics */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Model Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Accuracy</h3>
              <div className="text-3xl font-bold text-green-600">
                {insights?.accuracy ? `${(insights.accuracy * 100).toFixed(1)}%` : 'N/A'}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Total Samples</h3>
              <div className="text-3xl font-bold text-blue-600">
                {insights?.total_samples || 'N/A'}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Diseases</h3>
              <div className="text-3xl font-bold text-purple-600">
                {insights?.disease_counts ? Object.keys(insights.disease_counts).length : 'N/A'}
              </div>
            </div>
          </div>
        </section>

        {/* Disease Distribution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Disease Distribution</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {insights?.disease_counts ? (
              <div className="space-y-4">
                {Object.entries(insights.disease_counts).map(([disease, count]) => (
                  <div key={disease} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{disease}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-48 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ 
                            width: `${(count / Math.max(...Object.values(insights.disease_counts))) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-gray-600 min-w-12 text-right font-semibold">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">No disease distribution data available</p>
            )}
          </div>
        </section>

        {/* Feature Importance */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Symptom Importance</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {insights?.feature_importance ? (
              <div className="space-y-4">
                {Object.entries(insights.feature_importance)
                  .sort(([,a], [,b]) => b - a)
                  .map(([feature, importance]) => (
                    <div key={feature} className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{feature}</span>
                      <div className="flex items-center gap-4">
                        <div className="w-48 bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-green-500 h-3 rounded-full"
                            style={{ width: `${importance * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-600 min-w-12 text-right font-semibold">
                          {(importance * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">No feature importance data available</p>
            )}
          </div>
        </section>

        {/* Symptom Frequency */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Symptom Frequency</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {insights?.symptom_frequency ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(insights.symptom_frequency)
                  .sort(([,a], [,b]) => b - a)
                  .map(([symptom, frequency]) => (
                    <div key={symptom} className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{frequency}</div>
                      <div className="text-sm text-blue-800 font-semibold">{symptom}</div>
                    </div>
                  ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-8">No symptom frequency data available</p>
            )}
          </div>
        </section>

        {/* Model Info */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Model Information</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Training Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Algorithm:</strong> {insights?.model_type || 'Random Forest'}</li>
                  <li><strong>Features:</strong> {insights?.feature_count || 7}</li>
                  <li><strong>Training Date:</strong> {insights?.training_date || 'N/A'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Dataset Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Total Records:</strong> {insights?.total_samples || 'N/A'}</li>
                  <li><strong>Disease Classes:</strong> {insights?.disease_counts ? Object.keys(insights.disease_counts).length : 'N/A'}</li>
                  <li><strong>Data Source:</strong> Synthetic Medical Dataset</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Insights;