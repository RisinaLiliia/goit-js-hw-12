# goit-js-hw-12

# Image Search App

This project is a simple image search application built using the Pixabay API.
It allows users to search for images by keyword and view them in a gallery with
additional details such as likes, views, comments, and downloads.

## Features

- **Image Search**: Users can search for images by entering a keyword in the
  search form.
- **Loading Indicator**: A CSS-based loader appears while fetching images from
  the API.
- **Error and Success Notifications**: The app uses `iziToast` for user-friendly
  notifications.
- **Image Gallery**: Displays search results in a grid layout.
- **Lightbox Modal**: Users can click on images to view them in a larger format
  using `SimpleLightbox`.
- **Pagination Ready**: Supports fetching results for multiple pages.

## Technologies Used

- HTML5, CSS3
- JavaScript (ES6+)
- Axios: For handling API requests
- [Pixabay API](https://pixabay.com/api/docs/)
- [iziToast](https://izitoast.marcelodolce.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [Animate.css](https://animate.style/) (for animations)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/image-search-app.git
   cd image-search-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser to view the app.

## Usage

1. Enter a search term in the input field.
2. Click the "Search" button.
3. View the image results in the gallery.
4. Click on an image to open it in a lightbox modal.

## File Structure

```plaintext
image-search-app/
├── css/
│   ├── styles.css          # Custom styles
├── js/
│   ├── pixabay-api.js      # API fetching logic
│   ├── render-functions.js # Functions for rendering the gallery and loader
├── index.html              # Main HTML file
├── main.js                 # Entry point for the app
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
```

## Dependencies

The project uses the following npm packages:

- **Animate.css**: Provides pre-built animations for elements.

  ```bash
  npm install animate.css
  ```

  Example usage:

  ```html
  <div class="animate__animated animate__bounce">Hello!</div>
  ```

- **iziToast**: For elegant notifications.

  ```bash
  npm install izitoast
  ```

- **SimpleLightbox**: For a lightbox modal experience.
  ```bash
  npm install simplelightbox
  ```

## API Configuration

To use the Pixabay API, ensure you have an API key. Replace `YOUR_API_KEY` in
`pixabay-api.js` with your key:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

## Contributions

## License
