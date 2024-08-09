# Disney+Hotstar

## Overview

Welcome to the Disney+Hotstar app! 🎬✨ This React application lets you dive into the world of movies with ease. Explore trending films, discover new genres, and enjoy interactive showcases of various production houses with captivating video previews.

## Features

- **Trending Movies Slider**: A scrollable list of trending movies fetched from The Movie Database (TMDb).
- **Genre-Based Movie Lists**: Displays movies categorized by genre with the ability to view different genres.
- **Production House Showcase**: Displays logos of different production houses with video previews on hover.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Axios**: Promise-based HTTP client for making API requests.
- **The Movie Database (TMDb) API**: Provides movie data for the application.

## Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. **Install Dependencies**

```bash
npm install
```

3. **Start the Development Server**

```bash
npm run dev
```

## Directory Structure

- **`src/components/`**: Contains all React components for the app.
- **`src/constant/`**: Contains constant data such as genre lists.
- **`src/services/`**: Contains API service functions.
- **`src/assets/`**: Contains images and videos used in the app.

## API Endpoints

- **Trending Movies:** `GET https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY`
- **Movies by Genre:** `GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=GENRE_ID`

### Thank you for checking out Disney+Hotstar! If you have any questions or feedback, feel free to reach out.

<b>{{https://www.linkedin.com/in/ashwini-paraye/}}</b>

Happy Coding 🚀
