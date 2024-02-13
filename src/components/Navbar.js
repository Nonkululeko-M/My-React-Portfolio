import React from 'react';

const Navbar = () => {
  return (
    <nav id="navigation">
      <div className="wrapper">
        <a className="logo close" href="#home"> NM</a>

        <div className="menu">
          <ul>
            <li>
              <a id="aboutNav" className="close" href="#about">About</a>
            </li>
            <li>
              <a id="contactNav" className="close" href="#Skills">Skills</a>
            </li>
            <li>
              <a id="projectsNav" className="close" href="#projects">Poject</a>
            </li>
            <li>
              <a id="knowledgeNav" className="close" href="#teatimonials">Testimonials</a>
            </li>
            <li>
              <a id="contactNav" className="close" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/nonkululekonancy/" title="Instagram" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5721C7.96011 11.7214 8.09377 10.8715 8.48125 10.1247C8.86872 9.3779 9.48185 8.77232 10.2334 8.39414C10.985 8.01596 11.8365 7.88325 12.6672 8.01693C13.4978 8.15061 14.2652 8.5428 14.8602 9.13774C15.4551 9.73267 15.8473 10.5001 15.981 11.3308L15.9997 11.3701Z" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 6.5H17.51" stroke="#FFFAF1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
