# Picsum Image Gallery

A dynamic image gallery application built with React.js and Tailwind CSS that fetches and displays high-quality images from the Picsum API with pagination support.

## Preview

![Gallery Preview](gallery-preview.png)

## Features

- **API Integration**: Fetches images from Picsum Photos API using Axios
- **Pagination**: Navigate through multiple pages (100 images per page)
- **Smart Navigation**: 
  - Previous button automatically disabled on page 1
  - Visual feedback with reduced opacity when disabled
- **Loading State**: Displays loading message while fetching data
- **Image Cards**: Each image shows:
  - High-quality photo preview
  - Photographer/author name
  - Clickable link to original source
- **Responsive Grid**: Flexbox-based layout that adapts to screen size
- **Active Button Feedback**: Scale animation on click for better UX

## Technologies Used

- **React.js** - Frontend framework
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Picsum Photos API** - Free image service
- **React Hooks** - useState and useEffect for state and side effects

## Installation

1. Clone the repository:
   git clone https://github.com/shivamcodelog/picsum-gallery.git
   cd picsum-gallery

2. Install dependencies: npm install

3. Start the development server: npm start

4. Open http://localhost:3000 in your browser.

## Usage

1. The gallery loads automatically with 100 images from page 1
2. Browse through images in the grid layout
3. Click on any image card to visit the photographer's page
4. Use **Next** button to load the next page of images
5. Use **Previous** button to go back (disabled on page 1)
6. Current page number is displayed between navigation buttons

## Code Structure

### State Management
- `userData` - Stores array of image objects from API
- `index` - Tracks current page number for pagination

### Core Functions
- `getData()` - Async function that fetches images from Picsum API
- `useEffect()` - Triggers API call whenever page index changes

### Key Features Implementation
- **Conditional Rendering**: Shows loading state until data arrives
- **Dynamic URLs**: Page number changes API endpoint
- **Button Disable Logic**: Previous button opacity reduced and click blocked when `index === 1`
- **State Reset**: Clears `userData` on navigation to show fresh loading state

## API Endpoint

https://picsum.photos/v2/list?page=${pageNumber}&limit=100


## Dependencies

{
"axios": "^1.6.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"tailwindcss": "^3.4.0"
}


## Future Enhancements

- Add image lightbox/modal view
- Implement infinite scroll instead of pagination
- Add search functionality by author
- Include download feature
- Add favorites/bookmark system
- Implement lazy loading for better performance
- Add filter options (grayscale, blur effects)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by Shivam – Mechanical Engineering Student at DTU

---

**API Credit**: Images provided by [Picsum Photos](https://picsum.photos/) - Free stock photos service.
