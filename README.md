# TrueMeter Mobile

React Native mobile app for detecting car odometer fraud using AI/ML.

## 🚀 Features

- **AI-Powered Fraud Detection**: Uses machine learning to analyze vehicle data
- **Beautiful UI**: Built with NativeWind (Tailwind CSS for React Native)
- **Cross-Platform**: Works on both iOS and Android
- **Real-time Analysis**: Connects to TrueMeter backend API
- **About Screen**: Learn how the technology works

## 📱 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **NativeWind** (Tailwind CSS) for styling
- **React Navigation** for tab navigation
- **Expo Constants** for configuration management

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

## 🏃‍♂️ Running the App

After running `npx expo start`, you have several options:

### Option 1: iOS Simulator (Mac only)
- Press `i` in the terminal
- Or scan the QR code with the Camera app on your iPhone

### Option 2: Android Emulator
- Press `a` in the terminal
- Or scan the QR code with the Expo Go app on your Android device

### Option 3: Physical Device
1. Install **Expo Go** app from App Store (iOS) or Google Play (Android)
2. Scan the QR code shown in the terminal
3. The app will open in Expo Go

### Option 4: Web Browser
- Press `w` in the terminal to open in web browser

## 📦 Project Structure

```
truemeter-mobile/
├── App.tsx                 # Main app with navigation
├── components/
│   ├── HomeScreen.tsx      # Home screen with car check
│   ├── CarCheckForm.tsx    # Form for entering car details
│   ├── ResultsDisplay.tsx  # Display fraud analysis results
│   └── AboutScreen.tsx     # About the app
├── services/
│   └── api.ts              # API service for backend calls
├── app.json                # Expo configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── babel.config.js         # Babel configuration
```

## 🔧 Configuration

The app is configured to use the production API:
- **API URL**: `https://truemeter-api.onrender.com`

To change the API URL, update the `extra.apiUrl` field in `app.json`:

```json
{
  "expo": {
    "extra": {
      "apiUrl": "https://your-api-url.com"
    }
  }
}
```

## 📝 How to Use

1. **Enter Vehicle Details**: Fill in the car information (make, model, year, kilometers)
2. **Submit**: Tap "Check Car Fraud" button
3. **View Results**: See the fraud score, expected kilometers, and analysis factors
4. **Check Another**: Tap to check another vehicle

## 🎨 Styling

The app uses NativeWind for styling, which allows you to use Tailwind CSS classes directly in React Native components:

```tsx
<View className="bg-white rounded-xl shadow-sm p-6">
  <Text className="text-xl font-bold text-gray-900">Hello</Text>
</View>
```

## 🔗 Backend API

This app connects to the TrueMeter backend API:
- Repository: truemeter-frontend (backend)
- Endpoint: `/api/check-fraud`

## 👨‍💻 Developer

Made by [Zoran Janjić](https://www.linkedin.com/in/janjiczoran/)

## 📄 License

This project is part of the TrueMeter suite for odometer fraud detection.
# truemeter-mobile
