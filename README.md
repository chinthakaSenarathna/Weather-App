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

Note: The test account provided in the assignment instructions (careers@fidenz.com) could not be created due to Auth0 limitations.
To proceed with testing, I created my own Auth0 account and registered few users and then diable Sign up.
Only those pre-registered users can access the application.

### 1. Configure Application URIs

![Image](https://github.com/user-attachments/assets/b81f47a3-4481-456c-91d9-ce7673eedb5d)

### 2. Multi-factor Authentication

![Image](https://github.com/user-attachments/assets/68b3edea-46d9-4212-b6ed-202a1f3fb0a0)

![Image](https://github.com/user-attachments/assets/1031c288-80d2-4c8a-8e37-22a3b52ce49c)

### 3. Restrict Signups

![Image](https://github.com/user-attachments/assets/f653c1b2-2874-4dc3-870e-594ae0871b3d)
