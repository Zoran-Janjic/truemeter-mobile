# TrueMeter Mobile - APK Build Instructions

## Project Info
- **App Name**: TrueMeter Mobile (Analiza Kilometraže)
- **Type**: React Native Expo App
- **Purpose**: AI-powered odometer fraud detection
- **Backend API**: https://truemeter-api.onrender.com

## Build APK with EAS

### Prerequisites
1. Expo account (logged in as: janjiczoran23@gmail.com)
2. EAS CLI installed: `npm install -g eas-cli`

### Steps to Build APK

1. **Login to EAS** (if not already logged in):
   ```bash
   cd /Users/glnaviit/Desktop/Zoran-gl-mac/vs-code-project/truemeter-mobile
   eas login
   ```

2. **Build APK for Android**:
   ```bash
   eas build -p android --profile preview
   ```
   
   This will:
   - Upload your project to EAS servers
   - Build an APK file
   - Provide a download link when complete (usually takes 5-15 minutes)

3. **Download and Share**:
   - After build completes, EAS will give you a download URL
   - Download the APK file
   - Send it to your brother via email, WhatsApp, or any file sharing method
   - He can install it on his Android phone

### Alternative: Share via Expo Go (Quick Testing)

If you just want your brother to test quickly without building APK:

1. **Start Expo with tunnel**:
   ```bash
   npx expo start --tunnel
   ```

2. **Share the QR code** with your brother:
   - He needs to install "Expo Go" app from Play Store
   - He scans the QR code from the terminal
   - App will load on his phone (works from anywhere, not just same WiFi)

## Troubleshooting

### If EAS build fails with permission error:
- Give Terminal/VS Code full disk access in Mac System Settings
- Clear EAS cache: `eas build -p android --profile preview --clear-cache`

### If you need to check build status:
```bash
eas build:list
```

## Project Structure
```
truemeter-mobile/
├── App.tsx                    # Main app with navigation
├── components/
│   ├── CarCheckForm.tsx       # Input form for vehicle data
│   ├── ResultsDisplay.tsx     # Shows fraud analysis results
│   ├── AboutScreen.tsx        # Technical documentation
│   └── HomeScreen.tsx         # Manages form/results state
├── services/
│   └── api.ts                 # Backend API communication
├── app.json                   # Expo configuration
└── eas.json                   # EAS Build configuration

```

## Key Features Implemented
- ✅ Dark theme matching webapp (slate backgrounds)
- ✅ Professional technical headers
- ✅ Dropdown selectors for fuel type, gearbox, offer type
- ✅ All fields match frontend: make, model, year, reported_km, horsepower, price, fuelType, gearbox, offerType
- ✅ API endpoint: /api/check (not /api/check-fraud)
- ✅ Bosnian language throughout
- ✅ Bottom tab navigation (Početna / O aplikaciji)
- ✅ Technical terminology (odometar instead of brojač)

## Current Build Configuration (eas.json)
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

## Notes
- The APK build happens on Expo's cloud servers
- You don't need Android Studio or SDK installed
- Build time: typically 5-15 minutes
- The APK will be installable on any Android device (no Play Store needed)
