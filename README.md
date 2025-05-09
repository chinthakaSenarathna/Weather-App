# 🌦️ Weather App - Full Stack Assignment (Fidenz Technologies)

This is a full-stack weather application built with React.js and secured using Auth0. The app fetches and displays real-time weather data from the OpenWeatherMap API, and implements secure authentication and authorization, including multi-factor authentication (MFA).

---

## 📌 Features

- 🔐 Auth0 Authentication & Authorization (with MFA)
- 🌍 Fetch weather data using OpenWeatherMap API
- 🏙️ Cities read from a JSON file
- 🔄 Caching implemented with a 5-minute expiration
- 📱 Responsive UI for desktop and mobile
- 🧪 Test login (restricted to pre-registered users)

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Axios
- **Auth:** Auth0 (with MFA and restricted signups)
- **API:** OpenWeatherMap
- **Cache:** Local caching (5-minute expiration)
- **Deployment:** (Add if deployed, e.g., Vercel/Netlify)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

-> in bash
git clone https://github.com/yourusername/weather-app-auth0.git
cd weather-app-auth0

### 2. Install Dependencies

npm install

### 3. Create .env File

REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
REACT_APP_OPENWEATHERMAP_API_KEY=your-openweathermap-api-key

### 4. Run the Application

npm start

## ⚙️ Auth0 Configuration

