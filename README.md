# React Counter App

A simple counter app built with React and Vite, styled with Tailwind CSS.

## Features

- Increment and decrement a counter with a click
- Clean, responsive UI with smooth hover and active-state transitions
- Built on top of the Vite + React starter template

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)


## Project Structure

```
├── src/
│   ├── App.jsx        # Main counter component
│   ├── App.css         # Component-specific styles
│   ├── index.css       # Tailwind entry point
│   └── main.jsx         # App entry point
├── index.html
├── package.json
└── README.md
```

## How It Works

The app uses React's `useState` hook to track the counter value:

- Clicking **INCREASE** increments the counter by 1
- Clicking **DECREASE** decrements the counter by 1

## License

This project is open source and available under the [MIT License](LICENSE).
