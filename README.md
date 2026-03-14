# CodeBarter 
**A Futuristic Skill-Swap Network for Developers**

CodeBarter is a professional web application designed to empower developers to assist one another and exchange technical skills. The platform features an advanced UI and a seamless developer-centric experience.

##  Key Features
- **Professional Dashboard:** Track developer requests and community activity in real-time.
- **Dual Theme Support:** High-quality **Dark Mode** and a clean, enterprise-grade **Light Mode** inspired by SCADA systems.
- **Futuristic AI Assistant:** An interactive AI bubble and chat window providing on-platform guidance.
- **Monaco Editor Integration:** Built-in professional code editor (the same one used in VS Code) for posting snippets and debugging requests.
- **Responsive Navigation:** Fully optimized for both desktop and mobile users with a dedicated sidebar drawer.
- **Gamification System:** Includes a Leaderboard to recognize and reward top community contributors.

## Tech Stack
- **Core Library:** React.js (Powered by Vite)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Styling:** Custom CSS with Modern Variables & Glassmorphism
- **Notifications:** React-Toastify for real-time alerts
- **Code Editor:** Monaco Editor for React

##  Project Structure
```text
code-barter-app/
├── public/              # Static assets (logos, icons)
├── src/
│   ├── components/      # Reusable UI elements (RequestCard)
│   ├── pages/           # Main views (Landing, Dashboard, Auth, Profile)
│   ├── App.css          # Global and component-specific CSS
│   ├── App.jsx          # Main application logic and routing, Navbar, sidebar
│   └── main.jsx         # Application entry point
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation

## Getting Started
To run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mursleenmohd/code-barter-react.git](https://github.com/mursleenmohd/code-barter-react.git)