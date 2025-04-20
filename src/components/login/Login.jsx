import React,{useState} from "react";
import falogin from "../../assets/fblogo.svg";
import "./login.css";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  const handleLogin = async(e) => { 
    e.preventDefault();
    // Handle login logic here
    // console.log("Login details:", loginDetails);
    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });
  
      if (response.ok) {
       
        if (response.status === 201) {
          toast.success('User registered successfully!');
        }
      } else {
        console.error("Failed to save login details:", response.statusText);
        if (response.status === 400) {
          toast.warning('Email and password are required');
        } else if (response.status === 409) {
          toast.error('User already exists');
        } else {
          toast.error('Something went wrong');
        }
      }
    } catch (error) {
      console.error("Error occurred while saving login details:", error);
    }
  };
  const handleInputChange = (e) => { setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value }) }; 
  return (
    <div className="main-container">
      <div className="top-section">
        <div className="left-content">
          <div className="logo-container">
            <img 
              src={falogin}
              alt="Facebook"
              className="facebook-logo"
            />
          </div>
          <h2 className="tagline">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>

        <div className="right-content">
          <div className="login-form">
            <input
              className="input-field"
              type="text"
              name="email"
              placeholder="Email address or phone number"
              onChange={(e)=>handleInputChange(e)}
            />
            <input
              className="input-field"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e)=>handleInputChange(e)}
            />
            <button className="login-button" onClick={handleLogin} >Log in</button>
            {/* <a href="#" className="forgot-password">
              Forgotten password?
            </a> */}
            <button className="forgot-password">Forgotten password?</button>
            <div className="divider" />
            <button className="create-account-button">Create new account</button>
          </div>
          <p className="create-page-text">
            {/* <a href="#" className="create-page-link">Create a Page</a> */}
            <button className="create-page-link">Create a Page</button>
             for a celebrity, brand or business.
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <ul className="language-links">
            <li>English (UK)</li>
            <li>हिन्दी</li>
            <li>اردو</li>
            <li>ਪੰਜਾਬੀ</li>
            <li>বাংলা</li>
            <li>ગુજરાતી</li>
            <li>मराठी</li>
            <li>தமிழ்</li>
            <li>తెలుగు</li>
            <li>മലയാളം</li>
            <li>ಕನ್ನಡ</li>
            <li>+</li>
          </ul>
          
          <div className="divider" />
          
          <ul className="footer-links">
            <li>Sign Up</li>
            <li>Log in</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Places</li>
            <li>Games</li>
            <li>Marketplace</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Instagram</li>
            <li>Threads</li>
            <li>Fundraisers</li>
            <li>Services</li>
            <li>Voting Information Centre</li>
            <li>Privacy Policy</li>
            <li>Privacy Centre</li>
            <li>Groups</li>
            <li>About</li>
            <li>Create ad</li>
            <li>Create Page</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Cookies</li>
            <li>AdChoices</li>
            <li>Terms</li>
            <li>Help</li>
            <li>Contact uploading and non-users</li>
            <li>Settings</li>
            <li>Activity log</li>
          </ul>
          
          <div className="copyright">
            <span>Meta © 2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;