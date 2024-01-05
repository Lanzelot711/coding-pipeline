import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Todo App</p>
      </footer>
    </div>
  );
};

export default Layout;