<div align="center">
  <img src="public/logo-text-white.svg" alt="Medoza Logo" width="180" />
</div>

# Medoza - One Stop Medicine Solution

## 🌐 Live Link
[Visit Medoza Medicine Ecommerce](https://medoza-medicine-ecommerce.vercel.app)

## 🎯 Objective
Medoza is a modern, medicine E-commerce platform built with Next.js to make healthcare accessible, affordable, and convenient. It enables users to browse, search, and purchase authentic medicines online, with secure authentication and seamless delivery.

## 📁 Folder Structure
```
medoza-medicine-ecommerce/
├── public/                # Static assets (images, logos, favicon)
├── src/
│   ├── app/
│   │   ├── (components)/  # Reusable UI components
│   │   │   ├── (cards)/
│   │   │   ├── (forms)/
│   │   │   ├── (sections)/
│   │   │   ├── (shared)/
│   │   │   └── (ui)/
│   │   ├── (site)/        # Main site pages
│   │   ├── api/           # API routes (Next.js)
│   │   ├── dashboard/     # Admin dashboard
│   │   ├── login/         # Login page
│   │   └── globals.css    # Global styles
│   ├── lib/               # Database and server-side logic
│   │   └── actions/       # Auth and client actions
│   ├── auth.js            # Auth config
│   └── middleware.js      # Route protection
├── package.json           # Project metadata & dependencies
├── next.config.mjs        # Next.js config
├── postcss.config.mjs     # PostCSS config
├── eslint.config.mjs      # ESLint config
├── jsconfig.json          # JS config
└── README.md              # Project documentation
```

## 🗺️ Route Summary
| Route                | Description                                 |
|----------------------|---------------------------------------------|
| `/`                  | Home page (Banner, Popular Medicines, About)|
| `/medicines`         | List all medicines                          |
| `/medicines/[id]`    | Medicine details page                       |
| `/login`             | Login page (Google Auth)                    |
| `/dashboard`         | Admin dashboard (protected)                 |
| `/dashboard/add-products` | Add new medicines (protected)           |
| `/api/medicines`     | API endpoint for medicines (CRUD)           |
| `/api/auth`          | API endpoint for authentication             |

## ⚙️ Technical Details
- **Framework:** Next.js 15 (App Router)
- **Frontend:** React 19, Tailwind CSS
- **Backend:** Next.js API routes, MongoDB
- **Authentication:** NextAuth.js (Google OAuth)
- **State Management:** React Context, React Hook Form
- **Styling:** Tailwind CSS, custom gradients
- **Notifications:** react-hot-toast
- **Icons:** lucide-react, react-icons
- **Loading/Spinners:** react-spinners
- **Linting:** ESLint, eslint-config-next

## 📄 Pages & Features
- **Home:** Banner, Popular Medicines, About Us
- **Medicines:** Browse all medicines, view details
- **Medicine Details:** Full info (brand, generic, price, safety, usage, etc.)
- **Login:** Google OAuth login
- **Dashboard:** Protected admin area, add products
- **API:** RESTful endpoints for medicines & auth
- **Responsive Design:** Mobile-friendly UI
- **Route Protection:** Middleware for dashboard routes
- **Error Handling:** User-friendly messages

## 📦 Installed Packages
| Package            | Purpose/Usage                                 |
|--------------------|-----------------------------------------------|
| next               | React framework, routing, SSR                 |
| react              | UI library                                    |
| react-dom          | DOM rendering for React                       |
| next-auth          | Authentication (Google OAuth)                 |
| mongodb            | Database driver for MongoDB                   |
| lucide-react       | Icon library                                  |
| react-hook-form    | Form state management                         |
| react-hot-toast    | Toast notifications                           |
| react-icons        | Additional icon sets                          |
| react-spinners     | Loading spinners                              |
| tailwindcss        | Utility-first CSS framework                   |
| eslint             | Linting tool                                  |
| eslint-config-next | Next.js ESLint config                         |
| @tailwindcss/postcss | Tailwind/PostCSS integration                |
| @eslint/eslintrc   | ESLint config management                      |

## 🚀 How to Run Locally
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yhsunny176/medoza-medicine-ecommerce.git
   cd medoza-medicine-ecommerce
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your MongoDB URI and NextAuth secret:
     ```env
     MONGODB_URI=your_mongodb_uri
     NEXTAUTH_URL=http://localhost:3000
     AUTH_SECRET=your_auth_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)