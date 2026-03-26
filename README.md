# Task Manager ✅

A clean and simple task management app built with React + Vite.

Stay organized with priorities, categories, progress tracking, and smart filters. 🚀

## ✨ Features

- Add tasks with:
	- Title
	- Priority (Low, Medium, High)
	- Type (Personal, Health, Work, Shopping)
- Mark tasks as completed with one click
- Delete tasks instantly
- View quick stats: Total, Completed, Pending
- Filter by status: All, Completed, Pending
- Use advanced filters by priority and type
- Persistent storage with localStorage

## 🧱 Tech Stack

- React 19
- Vite 8
- Plain CSS (component-based styles)
- ESLint

## 📁 Project Structure

```
src/
	Components/
		Header/
		TaskManager/
			TaskManager.jsx
			TaskInput.jsx
			TaskList.jsx
			TaskItem.jsx
			TaskCounter.jsx
			FilterNav.jsx
			AdvancedFilters.jsx
```

## ⚙️ Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run in development mode:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 💡 Notes

- Tasks are saved in the browser (localStorage).
- Data is device/browser specific.

## 🛠️ Next Steps

- Edit existing tasks
- Sorting by date
- Eventually: backend integration with user authentication (GitHub / Google)

---

Made with React and focus on clean UX. 🎯
