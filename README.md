# Far Away Travel App

Far Away Travel App is a modern web application designed to help users plan and manage their travel packing lists efficiently. Built with React and Vite, it offers a fast and interactive user experience.

## Features

- **Add Items**: Easily add items to your packing list.
- **Mark as Packed**: Mark items as packed to keep track of your progress.
- **Remove Items**: Remove unnecessary items from the list.
- **Statistics**: View statistics about your packing progress.

## Project Structure

The project follows a modular structure for better maintainability:

```
src/
├── App.jsx          # Main application component
├── index.css        # Global styles
├── main.jsx         # Entry point of the application
├── assets/          # Static assets like images
├── components/      # Reusable React components
│   ├── Form.jsx         # Component for adding items
│   ├── Item.jsx         # Component representing a single item
│   ├── Logo.jsx         # Application logo component
│   ├── PackingList.jsx  # Component for displaying the packing list
│   └── Stats.jsx        # Component for showing packing statistics
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd Far-Away-Travel-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build

To create a production build:

```bash
npm run build
```

### Preview

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for fast development and production builds.
- **ESLint**: Linting tool for maintaining code quality.

## License

This project is licensed under the MIT License.
