import React, { useState } from 'react';
import { predictDisease } from '../utils/api';
import { ALLOWED_SYMPTOMS, DISEASE_ADVICE } from '../utils/constants';
import LoadingSpinner from '../components/LoadingSpinner';

const Predict = () => {
  const [inputSymptom, setInputSymptom] = useState('');
  const [symptomsList, setSymptomsList] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addSymptom = () => {
    const symptom = inputSymptom.trim();
    if (symptom && !symptomsList.includes(symptom)) {
      if (ALLOWED_SYMPTOMS.includes(symptom)) {
        setSymptomsList([...symptomsList, symptom]);
        setInputSymptom('');
        setError('');
      } else {
        setError(`"${symptom}" is not in our symptom list. Please choose from: ${ALLOWED_SYMPTOMS.join(', ')}`);
      }
    }
  };

  const removeSymptom = (symptomToRemove) => {
    setSymptomsList(symptomsList.filter(symptom => symptom !== symptomToRemove));
  };

  const resetSymptoms = () => {
    setSymptomsList([]);
    setPrediction(null);
    setError('');
  };

  const handleSubmit = async () => {
    if (symptomsList.length === 0) {
      setError('Please add at least one symptom');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const result = await predictDisease(symptomsList);
      setPrediction(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addSymptom();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Disease Prediction</h1>
        <p className="text-center text-gray-600 mb-8">Enter your symptoms to get AI-powered diagnosis</p>
        
        {/* Symptom Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Enter Your Symptoms</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={inputSymptom}
              onChange={(e) => setInputSymptom(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a symptom (e.g., Fever)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              list="symptoms"
            />
            <datalist id="symptoms">
              {ALLOWED_SYMPTOMS.map(symptom => (
                <option key={symptom} value={symptom} />
              ))}
            </datalist>
            <button 
              onClick={addSymptom}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Add
            </button>
          </div>

          {/* Symptoms List */}
          {symptomsList.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Selected Symptoms:</h3>
              <div className="flex flex-wrap gap-2">
                {symptomsList.map(symptom => (
                  <div key={symptom} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
                    {symptom}
                    <button 
                      onClick={() => removeSymptom(symptom)}
                      className="text-blue-600 hover:text-blue-800 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={handleSubmit}
              disabled={loading || symptomsList.length === 0}
              className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center"
            >
              {loading ? 'Predicting...' : '🔍 Predict Disease'}
            </button>
            <button 
              onClick={resetSymptoms}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner text="Analyzing symptoms..." />}

        {/* Prediction Result */}
        {prediction && !loading && (
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Prediction Result</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Diagnosis</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {prediction.prediction}
                </div>
                <div className="text-gray-600">
                  Confidence: <span className="font-semibold">{(prediction.confidence * 100).toFixed(1)}%</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">Medical Advice</h3>
                <p className="text-gray-700">{DISEASE_ADVICE[prediction.prediction] || 'Consult a healthcare professional for proper diagnosis and treatment.'}</p>
              </div>
            </div>

            {/* Contributing Symptoms */}
            {prediction.used_features && (
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-700">Key Contributing Symptoms</h3>
                <div className="flex flex-wrap gap-2">
                  {prediction.used_features.map((feature, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mt-6">
          <p className="text-sm text-yellow-800">
            ⚠️ <strong>Disclaimer:</strong> This prediction is for informational purposes only. 
            Always consult a qualified healthcare professional for accurate diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Predict;