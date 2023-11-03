## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Components and Features](#components-and-features)
- [Services](#services)
- [Setup](#setup)

## General Info

This project, named "goit-react-hw-04-image-finder", is a React-based application designed to find and display images. It allows users to search for images using a `Searchbar` component, display results in an `ImageGallery`, and view individual images in a `Modal`.

**Live Demo**: [https://evgeniy558.github.io/goit-react-hw-04-image-finder/](https://evgeniy558.github.io/goit-react-hw-04-image-finder/)

## Technologies

The project utilizes the following technologies:

- **React**: The core framework for building the user interface.
- **axios**: For making HTTP requests to fetch images from an API.
- **notiflix**: Used for displaying notifications to the user.
- **react-loader-spinner**: Provides visual feedback during data fetching.
- **web-vitals**: For measuring web performance metrics.

## Components and Features

### Button

A reusable button component, possibly used across various parts of the application.

### ImageGallery

A component that renders a collection of images as a gallery.

### ImageGalleryItem

Represents a single image in the gallery, likely with some additional features or information.

### Loader

Displays a spinner or loading indicator while data is being fetched or processed.

### Modal

A component that shows a larger view of a selected image from the gallery in a modal dialog.

### Searchbar

Enables users to input search terms and submit a request to search for images.

## Services

### index.js

A barrel file for easier importing of service functions.

### requestToApi.js

Contains the logic for API requests, utilizing `axios` to fetch data based on user input.

## Setup

To set up the project locally:

1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the development server with `npm start`.
5. The application should now be running on `http://localhost:3000`.

For production, you can create a build using `npm run build` and deploy it using `npm run deploy`, which will push the build to GitHub Pages.
