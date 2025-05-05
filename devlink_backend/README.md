# 🛠 DevLink Issue Tracker

A simple issue tracking web app built with React (frontend) and Django REST Framework (backend). Create, view, and manage issues in a clean, responsive interface.

---

## 📸 Demo

> _Add a screenshot or Loom video here if you have one._

---

## 🚀 Features

- 🔍 View list of reported issues
- 📝 View detailed issue information
- ➕ Add new issues via modal
- 🧭 Simple routing with React Router
- 🎨 Styled using Tailwind CSS
- 🔐 Fake login/logout simulation using localStorage

---

## 🧰 Tech Stack

**Frontend**:
- React + Vite
- Tailwind CSS
- Axios
- React Router

**Backend**:
- Django REST Framework (DRF)

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup (Django)

```bash
# 1. Go to backend directory
cd devlink_backend

# 2. Create virtual environment and activate
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run migrations
python manage.py migrate

# 5. Start backend server
python manage.py runserver
