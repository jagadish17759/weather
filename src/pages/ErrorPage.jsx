import React from 'react';


const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Oops! Something Went Wrong.</h1>
      <img
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" // Replace with a relevant image URL
        alt="Error"
        className="error-image"
      />
      <p className="error-message">We couldn't find the page you were looking for.</p>
      <div className="error-actions">
      </div>
    </div>
  );
};

export default ErrorPage;
