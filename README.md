# 🌦️ Advanced Weather Intelligence Dashboard

## 📌 Project Overview

Advanced Weather Intelligence Dashboard is a full-stack web application developed as part of the **Cognifyz Technologies Full Stack Development Internship - Task 7**.

The project focuses on advanced API concepts by integrating a third-party external weather API with a secure backend architecture. It includes API key protection, rate limiting, error handling, and dynamic frontend data rendering.

---

## 🚀 Features

- 🌍 Search weather information by city name
- 🌡 Real-time temperature data
- 💧 Humidity information
- 💨 Wind speed details
- ☁ Weather condition updates
- 🔗 External API integration
- 🔐 Secure API key handling
- 🚦 API rate limiting
- ⚠️ Advanced error handling
- 📱 Responsive user interface

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

---

## Backend

- Node.js
- Express.js
- Axios
- dotenv
- CORS

---

## External Services

- OpenWeather API

---

## Security & Optimization

- Environment Variables
- Express Rate Limiting
- Error Handling Middleware
- API Configuration Management

---

# 📂 Project Structure

```bash
Task-7-Advanced-API-Integration


├── backend

│
│── config
│     └── apiConfig.js

│
│── controllers
│     └── weatherController.js

│
│── middleware
│     ├── rateLimiter.js
│     └── errorHandler.js

│
│── routes
│     └── weatherRoutes.js

│
│── server.js
│── package.json
│── .env


├── frontend

│
│── index.html

│
│── css
│     └── style.css

│
│── js
│     └── script.js

└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

Navigate:

```bash
cd Task-7-Advanced-API-Integration
```

---

# Backend Setup

Go to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

Create `.env` file:

```env
PORT=5000

WEATHER_API_KEY=your_openweather_api_key
```

---

Start server:

```bash
npm run dev
```

Output:

```bash
Server running on 5000
```

---

# 🌐 API Endpoint

## Get Weather Details

```http
GET /api/weather?city=Hyderabad
```

---

Example Response:

```json
{
    "success": true,
    "city": "Hyderabad",
    "temperature": 24.92,
    "humidity": 74,
    "wind": 10.38,
    "condition": "overcast clouds"
}
```

---

# 🔄 Application Flow

```text
User enters city

        ↓

Frontend Fetch API request

        ↓

Express Backend API

        ↓

Rate Limiting Check

        ↓

OpenWeather External API

        ↓

Weather Data Response

        ↓

Display Dashboard
```

---

# 🛡️ Advanced Concepts Implemented

### External API Integration

- Connected third-party weather API
- Managed API requests using Axios

---

### API Security

- API keys stored securely using dotenv
- Hidden credentials from frontend

---

### Rate Limiting

Implemented request limiting to prevent API abuse.

Example:

```javascript
windowMs: 15 * 60 * 1000

max: 100
```

---

### Error Handling

Handles:

- Invalid city names
- API failures
- Server errors
- Missing parameters


# 📚 Learning Outcomes

- REST API Architecture
- Third-party API Integration
- Backend API Security
- Middleware Implementation
- Rate Limiting
- Error Handling
- Frontend Backend Communication

---

# 👨‍💻 Developed By

**Bhaskar Kesaram**

Full Stack Developer

---

# ⭐ Acknowledgement

Developed as part of the **Cognifyz Technologies Full Stack Development Internship Program**.
