# Movies Reviewing Website

The Movies Reviewing Website is a platform that allows users to search for and review movies. Developed using React for the frontend, Node.js for the backend, and MongoDB for the database, this application enables users to discover movies, read and write reviews, and interact with an extensive movie database. Below, you'll find an overview of the project, its features, file structure, installation instructions, and usage guidelines.

## Features

- Movie Search: Users can search for movies using the integrated Movies API to retrieve detailed information about each movie.
- Movie Reviews: Users can read and write reviews for movies. Each review is associated with reviewer details and timestamps for secure data management.
- Google Auth Integration: The app uses Google Auth service for user authentication, ensuring a secure and streamlined user experience.
- Custom Backend: A custom backend has been developed to manage the storage of reviews, reviewer details, and timestamps.
- Popular Movies: A section showcases popular movies to help users discover trending content.

## File Structure

```
- public
  - favicon.ico
  - index.html
  - logo192.png
  - logo512.png
  - manifest.json
  - robots.txt
- src
  - components
    - DisplayCards.js
    - Frontpage.js
    - MoviePage.js
    - Populars.js
  - App.css
  - App.js
  - App.test.js
  - index.css
  - index.js
  - logo.svg
  - reportWebVitals.js
  - setupTests.js
- .gitignore
- README.md
- package-lock.json
- package.json
```

## Installation

1. Clone the repository: `git clone https://github.com/your-username/movies-reviewing-website.git`
2. Navigate to the project directory: `cd movies-reviewing-website`
3. Install dependencies: `npm install`
4. Set up MongoDB: Ensure you have a MongoDB instance running and configure connection settings in the backend code.
5. Configure Google Auth: Update necessary configurations for Google Auth in the frontend code.
6. Start the development server: `npm start`

## Usage

1. Open the app in your web browser.
2. Log in using your Google account to access all features.
3. Use the search bar to find movies of interest.
4. Click on a movie to view its details and read existing reviews.
5. Write your own review by providing a rating and comments.
6. Explore the Popular Movies section to discover trending films.

## Contributing

Contributions are welcome! To contribute, fork the repository, make your changes, and submit a pull request.


---

For any questions or assistance, please contact us at anshchaturvadi2000@gmail.com. We hope you enjoy using the Movies Reviewing Website!
