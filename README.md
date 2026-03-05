# 🔐 Supabase Covert Recording System

> A browser-based covert video recording system that silently captures and uploads 5-second clips to Supabase storage, built to demonstrate social engineering and MediaRecorder API concepts for an Information Security course.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 📌 About

This project was developed as **IS Assignment 02** for the Information Security course at **COMSATS University — BSCS-6E**.

It demonstrates how a seemingly innocent webpage can be used to perform covert surveillance using standard browser APIs. The frontend is disguised as a café menu website. When the user clicks a button, the system silently requests camera and microphone access, records in 5-second chunks, and uploads each clip directly to a private Supabase storage bucket in a continuous loop.

> ⚠️ **Educational Purpose Only.** This project was built strictly for academic demonstration of social engineering techniques and browser security concepts.

---

## 🌐 Live Demo

🔗 [https://naveed-is.netlify.app/](https://naveed-is.netlify.app/)

---

## ⚙️ How It Works

1. User visits the site — it looks like a normal café menu
2. User clicks **"Start Human Verification"** button
3. Browser requests camera & microphone permission
4. On permission grant — recording begins silently in the background
5. Every **5 seconds**, the clip is uploaded to a private Supabase storage bucket
6. A new recording starts immediately after — creating a continuous loop
7. The menu "unlocks" (opacity changes) to not raise suspicion

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 / CSS3 | Frontend UI & disguised café menu layout |
| JavaScript | MediaRecorder API, getUserMedia(), async logic |
| Supabase | Backend storage bucket with Row Level Security |
| Netlify | Live deployment & hosting |

---

## 📁 Project Structure

```
📦 Supabase-Covert-Recording-System
 ┣ 📄 index.html      # Main frontend — disguised café menu
 ┣ 📄 style.css       # Styling for the menu UI
 ┗ 📄 javas.js        # Core recording & upload logic
```

---

## 🔑 Key Concepts Demonstrated

- **Social Engineering UI** — disguising malicious functionality behind a normal-looking interface
- **MediaRecorder API** — capturing video and audio directly from the browser
- **getUserMedia()** — accessing device camera and microphone
- **Recursive Recording Loop** — continuous 5-second clip capture with no gaps
- **Supabase Storage** — private bucket setup with Row Level Security (RLS) policies
- **Async/Await Uploads** — non-blocking blob uploads on every recording stop event

---

## 🗄️ Supabase Setup

| Setting | Value |
|---|---|
| Project ID | `kfhrsudsdmbmewijypsh` |
| Storage Bucket | `recordings` |
| Bucket Access | Private (not publicly browsable) |
| RLS Policy | Allow Public Uploads (INSERT for anon role) |
| Policy Filter | `bucket_id = 'recordings'` |

---

## 👨‍💻 Authors

| Name | Roll No |
|---|---|
| Taha Saleem | 23F-0517 |
| Naveed Hassan | 23F-0599 |

**Class:** BSCS-6E — Information Security
**Institution:** COMSATS University Islamabad

---

## 📄 License

This project is for **educational purposes only**. Do not use for any unauthorized or malicious activity.
