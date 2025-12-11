import Constants from 'expo-constants';

export interface CarData {
  make: string;
  model: string;
  year: number;
  reported_km: number;
  fuelType: string;
  gearbox: string;
  horsepower: number;
  price: number;
  offerType: string;
}

export interface FraudCheckResponse {
  fraud_score: number;
  is_suspicious: boolean;
  expected_km: number;
  reasons: string[];
}

// Get API URL from app configuration
const API_URL = Constants.expoConfig?.extra?.apiUrl || 'https://truemeter-api.onrender.com';

export async function checkCarFraud(carData: CarData): Promise<FraudCheckResponse> {
  try {
    const response = await fetch(`${API_URL}/api/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to check car fraud: ${error.message}`);
    }
    throw new Error('Failed to check car fraud: Unknown error');
  }
}

export async function checkAPIHealth() {
  try {
    const response = await fetch(`${API_URL}/health`);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`API health check failed: ${error.message}`);
    }
    throw new Error('API health check failed: Unknown error');
  }
}

export { API_URL };

