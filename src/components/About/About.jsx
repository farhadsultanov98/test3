import React, { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";
import "./About.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState('');
  const [notificationClass, setNotificationClass] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotification('Mesajınız uğurla göndərildi!');
    setNotificationClass('show');


    setTimeout(() => {
      setNotificationClass('hide');
      setTimeout(() => {
        setNotification('');
        setNotificationClass(''); 
      }, 500); 
    }, 3000);


    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="AboutSectionContainer">
      <h1>About</h1>
      <hr className="about-separator" />
      <div className="about-container">
        <div className="about-card">
          <div className="about-content">
            <p>
              I’m an aspiring frontend developer born on June 15, 1998, in
              Agstafa, Azerbaijan. I hold a bachelor's and master's degree in
              from Azerbaijan Technical University. I’m passionate about
              creating user-friendly interfaces using HTML, CSS, JavaScript, and
              frameworks like React. I look forward to connecting and
              collaborating on projects!
            </p>
            <div className="about-tags">
              <span className="tag">#Innovative</span>
              <span className="tag">#Developer</span>
              <span className="tag">#Designer</span>
              <span className="tag">#Frontend</span>
              <span className="tag">#UI/UX</span>
              <span className="tag">#JavaScript</span>
              <span className="tag">#ReactJS</span>
              <span className="tag">#CSS</span>
              <span className="tag">#ResponsiveDesign</span>
            </div>
            <form className="ContactInputs" onSubmit={handleSubmit}>
              <label htmlFor="name">Ad:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="e-mail">E-mail:</label>
              <input
                type="email"
                name="email"
                id="e-mail"
                placeholder="E-mailiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="area-text">Mesaj:</label>
              <textarea
                name="message"
                id="area-text"
                placeholder="Mesajınızı yazın.."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" id="message-send">Göndər</button>
              <div className={`notification ${notificationClass}`}>
              {notification}
            </div>
            </form>
            
            <div className="contact-info-container">
              <h2>Contact</h2>
              <div className="CommonContact">
                <a>
                  <p>
                    <i>
                      <FaLocationArrow size="1.2em" />
                    </i>
                    Baku, N.Narimanov
                  </p>
                </a>
                <a href="tel:+994555254193">
                  <p>
                    <i>
                      <IoIosCall size="1.6em" />
                    </i>
                    +994 (55) 525 4193
                  </p>
                </a>
                <a href="mailto:sultanoworks@gmail.com?subject=Hi Farhad Sultan">
                  <p>
                    <i>
                      <IoIosMail size="1.6em" />
                    </i>
                    sultanoworks@gmail.com
                  </p>
                </a>
              </div>
              <div className="ContactLinks">
                <ul className="SocialIcons">
                  <a
                    href="https://www.facebook.com/ferhad.sultann"
                    target="blank"
                  >
                    <li className="icon facebook">
                      <span className="iconname">Facebook</span>
                      <FaFacebookF size="1.6em" />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/farhadsultan98/"
                    target="blank"
                  >
                    <li className="icon linkedin">
                      <span className="iconname">Linkedin</span>
                      <FaLinkedinIn size="1.6em" />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/ferhad.sultann"
                    target="blank"
                  >
                    <li className="icon instagram">
                      <span className="iconname">Instagram</span>
                      <FaInstagram size="1.6em" />
                    </li>
                  </a>
                  <a href="https://github.com/ferhadsultan98" target="blank">
                    <li className="icon github">
                      <span className="iconname">Github</span>
                      <FaGithub size="1.6em" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
