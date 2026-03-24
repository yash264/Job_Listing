import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer text-center py-4">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} HireSathi</p>
        <small className="text-muted">Stay connected • yash.20222068@mnnit.ac.in</small>
      </div>
    </footer>
  );
};

export default Footer;
