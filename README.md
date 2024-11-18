Project Description: List of books

Objective:
  A single-page application (SPA) built with React for managing a list of books. The application allows users to view the book list, add new books, edit existing ones, and delete books.

Features:
  1. View Books:
       Displays a list of all books with their titles and authors.
       Includes a filter to search books by title.
  
  2. Add Books:
       A form to add a new book with the following fields:
         Book title.
         Author selection from a dropdown list.
  
  3. Edit Books:
       Allows updating the title or author of a book.
  
  4. Delete Books:
       Deletes a book from the list.
  
  5. Notifications:
       Displays a notification for successful addition, update, or deletion of a book. Notifications automatically disappear after 5 seconds.
  
  6. Auto-refresh:
       The book list updates automatically after adding, editing, or deleting a book.

Technologies:

  Frontend:
    React: Functional components and hooks for state management.
    Bootstrap: For basic styling and responsive design.
    SCSS: For custom styles using variables, nesting, and advanced features.
    JSON Server:
    A local server to store and handle book and author data.
    Default Port: http://localhost:5000/

How to Use:
  1. Install dependencies:
    npm install

  2. Start the JSON Server:
    npx json-server --watch db.json --port 5000

  3. Start the React application:
    npm start

  4. The application will be available at: http://localhost:3000/.
