# 🏋️ AI-Powered Fitness App

A full-stack, production-ready fitness tracking application with AI-powered coaching, health integration, and real-time analytics. Built with React Native (Expo), Firebase, and OpenAI API.

## 🌟 Features

### Core Features
- **User Authentication**: Google Sign-In & Email/Password login
- **Health Tracking**: Steps, calories, distance, workouts, sleep, water intake
- **AI Coach**: Personalized fitness recommendations and motivation
- **Analytics Dashboard**: Real-time fitness metrics with animated charts
- **Goal Management**: Smart goal suggestions and weekly reports
- **BMI Calculator**: Health metrics tracking
- **Dark/Light Mode**: Beautiful theme support
- **Health Integration**: Google Fit & Health Connect API sync

### Advanced Features
- AI-powered personalized workout plans
- Diet recommendations based on fitness goals
- Weekly fitness reports with insights
- Daily motivational messages
- Real-time progress tracking
- Cloud synchronization
- Offline support with local caching

## 🛠 Tech Stack

### Frontend
- **React Native** (Expo) - Cross-platform mobile development
- **Redux** - State management
- **React Navigation** - Navigation library
- **Reanimated 2** - Smooth animations
- **Victory Native** - Native charts and graphs

### Backend & Database
- **Firebase** - Backend services
- **Firestore** - Real-time database
- **Firebase Authentication** - User auth
- **Firebase Storage** - File storage
- **Cloud Functions** - Serverless backend

### AI & APIs
- **OpenAI API** - GPT-4 for fitness coaching
- **Google Fit API** - Health data integration
- **Health Connect API** - Android health data

## 📱 Quick Start

### Prerequisites
- Node.js 16+
- Expo CLI: `npm install -g expo-cli`
- Firebase CLI: `npm install -g firebase-tools`

### Installation

```bash
# Clone repository
git clone https://github.com/jangidgovind109-design/ai-fitness-app.git
cd ai-fitness-app

# Install root dependencies
npm install

# Setup frontend
cd frontend
npm install
cp .env.example .env.local
# Add your API keys

# Setup backend
cd ../backend/functions
npm install
cp .env.example .env
# Add your Firebase and OpenAI credentials
```

### Start Development

**Terminal 1 - Frontend:**
```bash
cd frontend
npm start
# Press 'i' for iOS or 'a' for Android
```

**Terminal 2 - Backend (Firebase Emulator):**
```bash
cd backend
firebase emulators:start
```

## 🔑 Environment Variables

### Frontend (.env.local)
```env
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
EXPO_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
EXPO_PUBLIC_OPENAI_API_KEY=sk_your_openai_key
EXPO_PUBLIC_GOOGLE_FIT_CLIENT_ID=your_google_fit_client_id
```

### Backend (.env)
```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
OPENAI_API_KEY=sk_your_openai_key
NODE_ENV=development
```

## 📁 Project Structure

```
ai-fitness-app/
├── frontend/                 # React Native Expo App
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── screens/         # Full-page screens
│   │   ├── services/        # API services
│   │   ├── store/           # Redux store
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utilities
│   │   ├── types/           # TypeScript types
│   │   └── App.tsx
│   ├── app.json             # Expo config
│   └── package.json
├── backend/                 # Firebase Backend
│   ├── functions/
│   │   ├── src/
│   │   │   ├── services/    # Business logic
│   │   │   ├── routes/      # API endpoints
│   │   │   ├── middleware/  # Express middleware
│   │   │   └── index.ts
│   │   └── package.json
│   ├── firestore.rules      # Security rules
│   └── firebase.json
├── SETUP.md                 # Detailed setup guide
└── README.md
```

## 🚀 Features Overview

### 1. Authentication
- Google Sign-In integration
- Email/Password authentication
- Profile setup wizard
- Secure token management

### 2. Dashboard
- Animated progress rings
- Daily stats (steps, calories, distance)
- Quick action buttons
- Today's summary

### 3. Fitness Tracking
- Step counter
- Workout logger
- Sleep tracker
- Water intake monitor
- BMI calculator
- Heart rate tracking

### 4. AI Coach
- Chat interface with AI
- Personalized workout plans
- Diet recommendations
- Daily motivation
- Weekly fitness reports
- Smart goal suggestions

### 5. Analytics
- Weekly charts
- Monthly statistics
- Goal progress tracking
- Personal records
- Trend analysis

### 6. Profile Management
- User settings
- Theme toggle (light/dark)
- Notification settings
- Data sync options
- Privacy settings

## 📊 Key Technologies

| Technology | Purpose |
|-----------|---------|
| React Native | Cross-platform mobile |
| Expo | Development platform |
| Redux | State management |
| Firebase | Backend services |
| Firestore | Real-time database |
| OpenAI API | AI coaching |
| Google Fit API | Health data sync |
| Reanimated | Smooth animations |
| Victory | Charts & graphs |

## 🔐 Security

- Firebase Authentication for secure user management
- Firestore Security Rules for data access control
- Environment variables for sensitive data
- HTTPS for all API calls
- OAuth 2.0 for Google Sign-In
- Data encryption in transit
- CORS configuration

## 📚 Documentation

- [Detailed Setup Guide](./SETUP.md) - Complete installation instructions
- [API Documentation](./backend/README.md) - Backend API reference
- [Component Guide](./frontend/COMPONENTS.md) - Component documentation
- [Architecture Guide](./ARCHITECTURE.md) - System architecture

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

## 🚢 Deployment

### Frontend (Expo)
```bash
cd frontend
eas build --platform ios
eas build --platform android
```

### Backend (Firebase)
```bash
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 📞 Support

- 📧 Email: support@ai-fitness-app.com
- 🐛 Issues: [GitHub Issues](https://github.com/jangidgovind109-design/ai-fitness-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/jangidgovind109-design/ai-fitness-app/discussions)

## 🗓️ Roadmap

- [ ] Wearable device integration (Apple Watch, Wear OS)
- [ ] Push notifications
- [ ] Social features (friends, challenges)
- [ ] Video tutorials
- [ ] Meal planning
- [ ] Advanced health metrics
- [ ] More AI features

---

**Made with ❤️ by the AI Fitness App Team**

[Documentation](./SETUP.md) • [Issues](https://github.com/jangidgovind109-design/ai-fitness-app/issues) • [Discussions](https://github.com/jangidgovind109-design/ai-fitness-app/discussions)
