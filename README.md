# Team Directory

A React application built with Vite that renders a dynamic grid of team member profile cards. This project focuses on core React fundamentals — component composition, props (all data types), the `children` prop, and prop drilling — without using state.

## Live Demo

🔗 [View live app](https://team-directory-jade.vercel.app/)

## 🎥 Project Demo

🔗 [Watch the project demo here](https://youtu.be/your-video-link)


## Preview

The app displays team members grouped under a section, each shown in a styled card with their role, name, age, location, admin status, and skill badges.

## Features

- **Dynamic rendering** — profile cards generated from a static data array
- **Conditional rendering** — an Admin badge appears only for members marked as admin
- **Reusable components** — badges, cards, and sections are all independent, reusable pieces
- **Prop drilling** — a `Follow` callback is defined once in the root component and passed down through multiple layers
- **children prop** — `Card` and `Section` components wrap and render nested content passed to them
- **Fully responsive grid** — cards reflow automatically across screen sizes

## Tech Stack

- **React** — UI library
- **Vite** — build tool and dev server
- **CSS** — custom styling with CSS variables for theming (light/dark mode support)

## Component Tree

```
App
 └── Section (title, children)
      └── Card (title, children)
           └── TeamMember (name, role, age, isAdmin, skills, address, onFollow)
                └── SkillBadge (skill)
```

## Props Reference

| Component    | Prop        | Type     |
|--------------|-------------|----------|
| Section      | title       | string   |
| Section      | children    | node     |
| Card         | title       | string   |
| Card         | children    | node     |
| TeamMember   | name        | string   |
| TeamMember   | age         | number   |
| TeamMember   | isAdmin     | boolean  |
| TeamMember   | skills      | array    |
| TeamMember   | address     | object   |
| TeamMember   | onFollow    | function |
| SkillBadge   | skill       | string   |

## Project Structure

```
team-directory/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── data/
    │   └── team.js
    └── components/
        ├── Card/
        │   ├── Card.jsx
        │   └── Card.css
        ├── Section/
        │   ├── Section.jsx
        │   └── Section.css
        ├── TeamMember/
        │   ├── TeamMember.jsx
        │   └── TeamMember.css
        └── SkillBadge/
            ├── SkillBadge.jsx
            └── SkillBadge.css
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Amn0805/Team-Directory.git
cd Team-Directory
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
```

## What's Next

This project will be extended in a follow-up phase to include:

- A live search bar to filter team members by name or skill
- A stateful Follow toggle per card
- A controlled form to add new team members dynamically


---

