# 🚀 Personal Portfolio & Blog Website

This is a **full-stack portfolio and blog website** built with **Next.js 15 (App Router)**, **TypeScript**, **MongoDB**, and more. It allows users to showcase their projects, write blog posts, and manage content via a dashboard.

---

## 📌 Features

### 🔹 Public Pages (Accessible to All Users)
- ✅ **Home Page (`/`)** - Portfolio introduction, skills section, featured projects, and resume download.  
- ✅ **Projects Page (`/projects`)** - Displays all projects with details and links.  
- ✅ **Project Details (`/projects/[id]`)** - Shows in-depth details of a project.  
- ✅ **Blog Page (`/blog`)** - Displays a list of blog posts.  
- ✅ **Blog Details (`/blog/[id]`)** - Shows full content of a blog post.  
- ✅ **Contact Page (`/contact`)** - A contact form to send messages.  

### 🔹 Dashboard (Authenticated Users Only)
- ✅ **Login (`/dashboard`)** - Secure authentication using NextAuth (Google login).  
- ✅ **Manage Blogs (`/dashboard/blogs`)** - Create, edit, delete blog posts.  
- ✅ **Manage Projects (`/dashboard/projects`)** - CRUD operations for projects.  
- ✅ **Manage Messages (`/dashboard/messages`)** - View messages from the contact form.  

### 🔹 Other Features
- 🎨 **Dark Mode Toggle** (Light/Dark Theme using `next-themes`)  
- 🔄 **Framer Motion Animations** (Smooth transitions & effects)  
- 🖼️ **Dynamic Routing** (`/projects/[id]`, `/blog/[id]`)  
- 🔒 **Role-Based Authentication** (Dashboard access for authenticated users only)  
- 🚀 **Deployed on Vercel** (Fast & scalable)  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | Frontend & API routes |
| **TypeScript** | Strongly typed development |
| **MongoDB (Mongoose)** | Database for storing projects, blogs, and messages |
| **NextAuth.js** | Authentication (Google OAuth) |
| **Tailwind CSS** | Styling framework |
| **Framer Motion** | Animations & transitions |
| **Lucide Icons** | Modern icons for UI |
| **Vercel** | Deployment platform |

---

