# 🎬 YouTube Clone (React + Django) Main project documentation for ytclone

A fully functional YouTube-like video sharing web app built with **React** for the frontend and **Django (Django Rest Framework)** for the backend. Users can upload, watch, like, and save videos for later — just like YouTube.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout)
- 📤 Video Upload with title, description, thumbnail
- 🎞️ Video Player page
- 🏠 Home page to browse all videos
- 👤 Dashboard to manage user uploads
- 👍 Like / 🕒 Watch Later / 🔗 Share
- 🔎 Live Search functionality
- 🌓 Dark Mode toggle
- 💬 Comment System
- 📂 Video Categories & Tags
- 🔥 Trending & Recommendations
- 📱 Fully Responsive UI

---

## 🧱 Project Structure
```
ytclone/
├── backend/
│ ├── api/ # Django app for API logic
│ │ ├── models.py # User, Video, Comment, Subscription
│ │ ├── serializers.py # DRF Serializers
│ │ ├── views.py # API Views with DRF ViewSets
│ │ ├── urls.py # API URL routes
│ ├── backend/ # Django project settings
│ │ ├── settings.py
│ │ ├── urls.py
│ ├── media/ # Uploaded media (videos, thumbnails)
│ ├── db.sqlite3 # SQLite (or PostgreSQL if configured)
│ └── manage.py
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ # All React Components
│ │ │ ├── Navbar.js
│ │ │ ├── Sidebar.js
│ │ │ ├── Home.js
│ │ │ ├── Upload.js
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ ├── VideoPlayer.js
│ │ │ ├── Dashboard.js
│ │ │ └── WatchLater.js
│ │ ├── App.js # App routes and layout
│ │ └── axiosConfig.js # Axios base config
│
└── README.md # You are here 👋
```

## ⚙️ Setup Instructions

### ✅ Backend (Django)
#cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

#### Required Packages:
djangorestframework
corsheaders
Pillow (for image upload)
moviepy (optional: thumbnail from video)
djangorestframework-simplejwt (for JWT)

### ✅ Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start

#### Required Packages:
axios
react-router-dom
bootstrap
react-player
lodash (for debounce search)

### 🔐 Authentication
JWT token-based login

##### Token stored in localStorage
Access protected endpoints (like upload/dashboard) with token

#### 🎬 Core Pages
 - Page	Route	Description
- Home	/	Lists all videos
- Video Player	/video/:id	Watch and interact with a video
- Upload	/upload	Upload video (auth required)
- Dashboard	/dashboard	View/manage your uploads
- Login	/login	Login form
- Register	/register	Signup form
- Watch Later	/watchlater	View saved videos

### 🔄 API Endpoints
Endpoint	Method	Description
- /api/register/	POST	Register user
- /api/login/	POST	Login (returns JWT token)
- /api/videos/	GET	List all videos
- /api/videos/	POST	Upload a video
- /api/videos/:id/	GET	Get video details
- /api/videos/:id/like/	POST	Like a video
- /api/videos/:id/watchlater/	POST	Add to watch later
- /api/comments/	POST	Add comment to a video

🧠 Credits
Frontend: React, Bootstrap, Axios
Backend: Django, DRF, JWT
Media Processing: Pillow, MoviePy

📄 License
MIT License – Feel free to fork and modify.

Would you like me to:
- Include example screenshots or placeholders?
- Help Dockerize the app and add a `Dockerfile` + `docker-compose.yml`?
- Add a `.env` example and `.gitignore`?

Let me know how you'd like to continue polishing this project!
