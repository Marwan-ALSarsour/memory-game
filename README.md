# 🎮 Pokemon Memory Game

A fun, interactive memory card game built with **React** and **Vite**. The goal of the game is to test your memory by clicking on unique Pokemon images. If you click the same character twice, the score resets!

## 🚀 Live Demo
Check out the live application here: **[]**

## ✨ Features
* **Real-time Data Fetching:** Pokemon data and sprites are fetched dynamically from the [PokeAPI](https://pokeapi.co/).
* **Score Tracking:** Keeps track of your **Current Score** and your **Best Score** during the session.
* **Smart Shuffling:** Cards are automatically shuffled after every click using a randomization algorithm.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
* **Modern UI:** Features a sleek dark theme with Glassmorphism effects and smooth animations.

## 🛠️ Tech Stack
* **React.js** (Functional Components, Hooks: `useState`, `useEffect`)
* **Vite** (Next-generation frontend tooling)
* **CSS3** (Advanced Grid & Flexbox layouts, Transitions)
* **PokeAPI** (External REST API integration)

## 🕹️ How to Play
1. The game starts by fetching 20 random Pokemon cards.
2. Click on a card to earn a point.
3. The cards will shuffle automatically after each click.
4. **The Challenge:** Do not click on the same Pokemon more than once!
5. If you click a card you've already selected, your score resets to zero.