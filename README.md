# AI-Powered Fitness Tracking App Inspired by Google Fit

A modern, cross-platform fitness tracking application built with React Native and Express.js. Features AI-powered workout recommendations, real-time activity tracking, health integrations, and a gamified user experience similar to Google Fit.

## 🎯 Features

### Core Tracking
- ✅ Step counter with daily goals
- ✅ Calorie tracking and prediction
- ✅ Distance and pace analytics
- ✅ Active minutes monitoring
- ✅ Heart points/activity score
- ✅ Water intake tracker
- ✅ Sleep tracking overview
- ✅ Real-time GPS route mapping

### Health Integrations
- 📱 Apple HealthKit support
- 🟢 Google Fit API integration
- ⌚ Smartwatch synchronization
- 💓 Heart rate monitoring
- 🔄 Fitbit API integration

### AI Features
- 🤖 Personalized workout recommendations
- 📊 AI-powered fitness plans
- 🎯 Smart goal suggestions
- 🔔 Intelligent reminders
- 📈 Weekly insights and analytics

### Social & Gamification
- 👥 Friend connections and activity sharing
- 🏆 Challenges and leaderboards
- 🎖️ Achievement badges
- ⭐ XP system and daily streaks
- 📢 Community feed

### Authentication
- 📧 Email/password login
- 🔵 Google Sign-In
- 🍎 Apple Sign-In
- 👤 Guest mode
- 🔐 JWT-based security

## 🏗️ Project Structure

```
ai-fitness-app/
├── frontend/                    # React Native mobile app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── ActivityTracker/
│   │   │   ├── Analytics/
│   │   │   ├── Social/
│   │   │   └── Auth/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── redux/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   ├── App.tsx
│   └── package.json
│
├── backend/                     # Express.js API server
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── ai/
│   │   ├── integrations/
│   │   └── config/
│   ├── server.ts
│   └── package.json
│
├── database/                    # Database schemas
│   ├── migrations/
│   └── seeds/
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React Native** with TypeScript
- **Redux Toolkit** for state management
- **React Navigation** for routing
- **Axios** for API calls
- **React Native Maps** for GPS tracking
- **Reanimated 2** for smooth animations
- **MobX** for reactive state

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **PostgreSQL** with Sequelize ORM
- **GraphQL** for flexible API queries
- **JWT** for authentication
- **Firebase Cloud Messaging** for notifications

### Infrastructure
- **Docker** for containerization
- **Docker Compose** for multi-container setup
- **PostgreSQL** database
- **Redis** for caching
- **GitHub Actions** for CI/CD

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Docker & Docker Compose
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/jangidgovind109-design/ai-fitness-app.git
cd ai-fitness-app
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm run start:dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run start
```

4. **Docker Setup**
```bash
docker-compose up -d
```

## 📱 Screens

- **Splash Screen** - App initialization and brand display
- **Onboarding** - User goals and profile setup
- **Login/Signup** - Multi-provider authentication
- **Dashboard** - Daily activity overview
- **Activity Tracker** - Real-time tracking interface
- **Workout Details** - Detailed activity analytics
- **Analytics Page** - Weekly/monthly reports and trends
- **Social/Community** - Friend activities and challenges
- **Profile/Settings** - User preferences and account management

## 🔑 Key Features Implementation

### Authentication System
```typescript
// JWT-based authentication with refresh tokens
// Google & Apple Sign-In integration
// Session management
// Profile setup with health metrics
```

### Dashboard
- Real-time activity summary
- Circular progress rings for goals
- Daily step count with visualization
- Calories burned vs. consumed
- Active minutes tracker
- Health cards layout

### AI Integration
- ML-based calorie prediction
- Personalized workout plans
- Smart goal suggestions
- Anomaly detection for health alerts

### Health Integrations
- Apple HealthKit for iOS
- Google Fit API for Android
- Real-time data synchronization
- Background data fetching

### Social Features
- Friend request system
- Activity sharing
- Challenges with leaderboards
- Achievement system
- Community feed

## 📊 Database Schema

**Key Tables:**
- `users` - User profiles and authentication
- `activities` - Workout and activity logs
- `daily_stats` - Aggregated daily statistics
- `goals` - User fitness goals
- `social_connections` - Friend relationships
- `achievements` - User badges and milestones
- `challenges` - Community challenges
- `health_integrations` - Connected health apps

## 🔐 Security

- JWT token-based authentication
- Password hashing with bcrypt
- HTTPS/SSL encryption
- Rate limiting on API endpoints
- SQL injection prevention with ORM
- CORS configuration
- Input validation and sanitization

## 📈 Analytics & Reporting

- Weekly/monthly activity reports
- BMI and health metrics tracking
- Progress trends visualization
- Habit analytics and insights
- PDF export functionality
- Goal achievement tracking

## 🎮 Gamification

- **XP System** - Points for activities
- **Streaks** - Daily activity tracking
- **Achievements** - Unlock badges
- **Levels** - Fitness progression levels
- **Leaderboards** - Compete with friends

## 🌙 UI/UX

- Material Design 3 compliance
- Dark/Light mode support
- Smooth animations with Reanimated
- Responsive layouts for all devices
- Accessibility support (WCAG 2.1)
- Circular progress indicators
- Minimalist Google Fit aesthetic

## 🚀 Deployment

### Docker Deployment
```bash
docker-compose up -d
```

### Cloud Deployment
- **Frontend:** Firebase Hosting / Vercel
- **Backend:** AWS EC2 / Heroku / DigitalOcean
- **Database:** AWS RDS / Managed PostgreSQL

### CI/CD Pipeline
- GitHub Actions for automated testing
- Automated deployment on push
- Pre-release testing environment

## 📚 API Documentation

See [API_DOCS.md](./docs/API_DOCS.md) for detailed API endpoints and schemas.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Govind Jangid**
- GitHub: [@jangidgovind109-design](https://github.com/jangidgovind109-design)

## 🙏 Acknowledgments

- Inspired by Google Fit
- Material Design 3 guidelines
- React Native community
- Open source contributors

## 📞 Support

For support, email support@ai-fitness-app.com or open an issue on GitHub.

---

**Status:** 🚧 Under Active Development

**Last Updated:** May 2026
