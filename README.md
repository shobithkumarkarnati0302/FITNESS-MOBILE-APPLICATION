# Fitness App

A full-stack **React Native** fitness application with user authentication, profile management and workout library.

---

## Project Structure

```
FITNESS_APP/
├── frontend/          # React Native mobile app (Android & iOS)
└── server/            # Node.js/Express REST API
```

---


## Setup Instructions

### Prerequisites

- Node.js >= 22.11.0
- Android Studio (for Android emulator)
- MongoDB instance (local or Atlas)
- Java 17+ (for Android builds)

---

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd FITNESS_APP
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/fitnessapp or MongoDB Atlas URL
JWT_SECRET=your_jwt_secret_here or any random string
```

Start the development server:

```bash
npm run dev
```


---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory and add the following:

```env
API_NINJAS_KEY=your_api_ninjas_key
BASE_URL=http://10.0.2.2:5000
```

Start Metro bundler: 


```bash
npm start
```

In a separate terminal, run the app on Android:

```bash
npx react-native run-android
```


# Instructions to run the app

1. Open Three terminals
2. In the first terminal, run `cd server` and `npm run dev`.
3. In the second terminal, run `cd Frontend` and `npm start`.
4. In a third terminal, run `cd frontend` and `npx react-native run-android`.


# Instructions to configure API Key

1. Go to https://api-ninjas.com/
2. Sign up and go to My Account -> API Key
3. Get Your API Key
4. Create a .env file in the frontend directory
5. Add the following line: API_NINJAS_KEY=your_api_ninjas_key
