# Scrum Zoo

Welcome to the Scrum Zoo project! This is a simplistic demonstration website designed to showcase various animal sub-sites, starting with "Panda World".

## Project Structure

The project is organized as follows:

```
scrum-zoo
├── public
│   ├── index.html          # Main HTML file for the website
│   └── panda-logo.svg      # Custom logo for the Panda World sub-site
├── src
│   ├── assets
│   │   └── panda.jpg       # Image of a panda
│   ├── components
│   │   ├── Header.tsx      # Header component with navigation
│   │   ├── Footer.tsx      # Footer component
│   │   └── SearchBox.tsx   # Search box component
│   ├── pages
│   │   ├── Home.tsx        # Home page linking to sub-sites
│   │   └── panda-world
│   │       ├── PandaHome.tsx      # Home page for Panda World
│   │       ├── About.tsx          # About page for pandas
│   │       ├── Contact.tsx        # Contact page
│   │       ├── Mating.tsx         # Mating habits of pandas
│   │       ├── DietaryInfo.tsx    # Dietary information about pandas
│   │       ├── ImageGallery.tsx   # Gallery of panda images
│   │       ├── AnatomyBio.tsx     # Anatomical and biological information
│   │       ├── Behavior.tsx       # Panda behavior
│   │       └── MiscFacts.tsx      # Miscellaneous facts about pandas
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for the React application
│   └── styles
│       └── global.css     # Global styles for the website
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Getting Started

To get started with the Scrum Zoo project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd scrum-zoo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the website.

## Features

- A home page that links to the "Panda World" sub-site with a picture of a panda.
- A uniform header and footer across all pages.
- A keyword search box for easy navigation.
- The "Panda World" sub-site includes various pages with basic information about pandas.

## Future Enhancements

This project is designed for ease of iteration on requirements. Future enhancements may include:

- Adding more sub-sites for different animals.
- Expanding the content of the "Panda World" sub-site.
- Implementing advanced search functionality.
- Improving the design and user experience.

Feel free to contribute and suggest improvements!