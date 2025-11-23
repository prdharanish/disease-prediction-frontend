import axios from 'axios';

// Use environment variable for API URL with fallbacks
const API_BASE_URL = import.meta.env.VITE_API_URL || 
                     'https://disease-prediction-backend.onrender.com/api' || 
                     'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Enhanced API calls with better error handling
export const predictDisease = async (symptoms) => {
  try {
    const response = await api.post('/predict', { symptoms });
    return response.data;
  } catch (error) {
    console.error('Prediction error:', error);
    
    // Fallback to mock data if backend is unavailable
    if (error.code === 'NETWORK_ERROR' || error.response?.status >= 500) {
      console.log('🔄 Using fallback mock data');
      return await fallbackPredictDisease(symptoms);
    }
    
    throw new Error(error.response?.data?.error || 'Failed to predict disease');
  }
};

// Fallback mock data function
const fallbackPredictDisease = async (symptoms) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const MOCK_PREDICTIONS = {
    "Fever": { prediction: "Flu", confidence: 0.85 },
    "Fever,Cough": { prediction: "Flu", confidence: 0.92 },
    "Fever,Headache": { prediction: "Viral Fever", confidence: 0.78 },
    "Cough,Headache": { prediction: "Cold", confidence: 0.81 },
    "Fever,Nausea": { prediction: "Food Poisoning", confidence: 0.76 },
    "Headache": { prediction: "Migraine", confidence: 0.88 },
  };
  
  const symptomKey = symptoms.sort().join(',');
  const result = MOCK_PREDICTIONS[symptomKey] || { 
    prediction: "Common Cold", 
    confidence: 0.65,
  };
  
  return {
    ...result,
    used_features: symptoms,
    probabilities: {
      [result.prediction]: result.confidence,
      "Other": 1 - result.confidence
    }
  };
};

export const explainSymptoms = async (question) => {
  try {
    const response = await api.post('/explain', { question });
    return response.data;
  } catch (error) {
    console.error('Explanation error:', error);
    
    // Fallback response
    return {
      explanation: "I understand you're asking about symptoms. For accurate medical advice, please consult a healthcare professional. This is a demo application for educational purposes."
    };
  }
};

export const getInsights = async () => {
  try {
    const response = await api.get('/insights');
    return response.data;
  } catch (error) {
    console.error('Insights error:', error);
    
    // Fallback insights data
    return {
      accuracy: 0.92,
      total_samples: 150,
      disease_counts: {
        'Flu': 25, 'Cold': 30, 'Malaria': 15, 'Migraine': 20,
        'Food Poisoning': 10, 'Strep Throat': 18, 'COVID-19': 12, 'Allergies': 20
      },
      feature_importance: {
        'Fever': 0.25, 'Cough': 0.18, 'Headache': 0.15, 'SoreThroat': 0.12,
        'RunnyNose': 0.10, 'Nausea': 0.08, 'BodyPain': 0.12
      },
      symptom_frequency: {
        'Fever': 85, 'Cough': 78, 'Headache': 65, 'BodyPain': 45,
        'SoreThroat': 42, 'RunnyNose': 38, 'Nausea': 25
      },
      model_type: 'Random Forest',
      feature_count: 7,
      training_date: '2024-01-15'
    };
  }
};

// Health check to verify backend connection
export const healthCheck = async () => {
  try {
    const response = await api.get('/health');
    return { status: 'connected', data: response.data };
  } catch (error) {
    return { status: 'disconnected', error: error.message };
  }
};

export default api;
