import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Temporary mock data for frontend demo
const MOCK_PREDICTIONS = {
  "Fever": { prediction: "Flu", confidence: 0.85 },
  "Fever,Cough": { prediction: "Flu", confidence: 0.92 },
  "Fever,Headache": { prediction: "Viral Fever", confidence: 0.78 },
  "Cough,Headache": { prediction: "Cold", confidence: 0.81 },
  "Fever,Nausea": { prediction: "Food Poisoning", confidence: 0.76 },
  "Headache": { prediction: "Migraine", confidence: 0.88 },
};

// export const predictDisease = async (symptoms) => {
//   // Simulate API delay
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   const symptomKey = symptoms.sort().join(',');
//   const result = MOCK_PREDICTIONS[symptomKey] || { 
//     prediction: "Common Cold", 
//     confidence: 0.65,
//     used_features: symptoms
//   };
  
//   return {
//     ...result,
//     used_features: symptoms,
//     probabilities: {
//       [result.prediction]: result.confidence,
//       "Other": 1 - result.confidence
//     }
//   };
// };

export const explainSymptoms = async (question) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const responses = {
    "fever": "Fever is a common symptom of many conditions including infections, inflammatory diseases, and other medical issues. It's your body's natural response to fighting infections.",
    "cough": "Cough can be caused by respiratory infections, allergies, asthma, or environmental factors. Persistent cough should be evaluated by a doctor.",
    "headache": "Headaches can range from tension headaches to migraines. Stay hydrated and rest in a quiet environment.",
    "fever and cough": "Fever with cough often indicates respiratory infections like flu, cold, or COVID-19. Rest and hydration are important.",
    "fever and nausea": "Fever with nausea could suggest gastrointestinal issues, food poisoning, or viral infections.",
    "headache and body pain": "Headache with body pain is common in flu and other viral infections. Rest and proper hydration are recommended."
  };
  
  const lowerQuestion = question.toLowerCase();
  const explanation = Object.entries(responses).find(([key]) => lowerQuestion.includes(key));
  
  return {
    explanation: explanation ? explanation[1] : "Based on common medical knowledge, these symptoms could indicate a health concern. However, this is not medical advice. Please consult a healthcare professional for proper diagnosis and treatment."
  };
};

export const getInsights = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
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
};
export const predictDisease = async (symptoms) => {
  console.log('🔧 USING MOCK DATA - No backend connection');
  console.log('Symptoms received:', symptoms);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const symptomKey = symptoms.sort().join(',');
  const result = MOCK_PREDICTIONS[symptomKey] || { 
    prediction: "Common Cold", 
    confidence: 0.65,
    used_features: symptoms
  };
  
  console.log('Mock prediction result:', result);
  return {
    ...result,
    used_features: symptoms,
    probabilities: {
      [result.prediction]: result.confidence,
      "Other": 1 - result.confidence
    }
  };
};
export default api;
