import React from "react";
import "./login.css";
import fbImg from '../../assets/fb.svg';
const Login = () => {
  return (
    <>
      <div className="main_container">
        <div className="top_section">
          <div className="left">
           <div className="left_total">
           <div className="left_img">
              <img
                className=""
                src={fbImg}
                alt="Facebook"
              />
            </div>
            <p className="left_text">
              Facebook helps you connect and share with the people in your life.
            </p>
           </div>
          </div>
          <div className="right">

            <p className="right_form">
              
                <input className="input_tag" type="text" placeholder="Email address or phone number"/><br/>
                <input className="input_tag" type="text" placeholder="Password"/><br/> 
                <button className="login_btn">Log in</button>
              
              <p className="forgot_pass" style={{color:"blue"}}>Forgotten password?</p>
              <hr className="horizontal-line"/>
              <button className="new_btn">Create new account</button>
            </p>
            <p className="right_text">
              <strong>Create a Page</strong> for a celebrity, brand or business.
            </p>

          </div>
          
        </div>
        <div className="bottom_section">
         <div>
          <div className="bottom_section_inner">
            <ul className="foot_upper_links">
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
            <hr/>
            <div className="">
            <ul className="foot_down_links">
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
            </div>
            <div className="copyright">
              <div >
                <span>Meta @ 2023</span>
              </div>
            </div>
          </div>
         </div>


        </div>
      </div>
    </>
  );
};

export default Login;
