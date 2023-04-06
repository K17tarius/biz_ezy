import React, { useState } from 'react';
import "./vendorlogin.css";

function VendorLoginPage() {
  const [vendorLogin, setVendorLogin] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(vendorLogin); // Replace with logic to submit the login data to a server
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVendorLogin((prevVendorLogin) => ({ ...prevVendorLogin, [name]: value }));
  };

  return (
    <div className="container">
      <h2>Vendor Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={vendorLogin.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={vendorLogin.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default VendorLoginPage;