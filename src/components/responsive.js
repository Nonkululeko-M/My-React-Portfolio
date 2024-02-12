/*import React from 'react';
import project from './project';

const responsive = () => {
  useEffect(() => {
    const projectsSection = document.querySelector("#projects .wrapper");
    const navigation = document.querySelector("#navigation");
    const backToTopButton = document.querySelector("#backToTopButton");
    const toggle = document.querySelector("#sw-checkbox");
    const notebook_1 = document.querySelector("#notebook-1");
    const notebook_2 = document.querySelector("#notebook-2");
    const notebook_2_white = document.querySelector("#notebook-2-white");
    const vidro = document.querySelector("#vidro");
    
    window.addEventListener("load", function begin() {
      // Assuming projetos and desafios functions are imported from respective files
      project(projects);
      const desafioBtn = document.querySelector("#desafio");
    
      desafioBtn.addEventListener("click", () => {
        (projects);
        document
          .querySelector("#backToProjectsBtn")
          .addEventListener("click", begin);
      });
    });
    
    window.addEventListener("scroll", onScroll);
    onScroll();
    
    window.onload = setTimeout(() => {
      notebook_1.style.opacity = 0;
      notebook_1.style.animation = "none";
      notebook_2.style.animation = "none";
      notebook_2_white.style.animation = "none";
      vidro.style.animation = "none";
    }, 4000);
    
    function onScroll() {
      showNavOnScroll();
      showBackToTopButtonOnScroll();
    
      // Assuming about, projects, knowledge, and contact variables are defined
      activateMenuAtCurrentSection(Home);
      activateMenuAtCurrentSection(about);
      activateMenuAtCurrentSection(Skills);
      activateMenuAtCurrentSection(projects);
      activateMenuAtCurrentSection(testimonials);
      activateMenuAtCurrentSection(contact);
    }
    
    function activateMenuAtCurrentSection(section) {
      const targetLine = window.scrollY + window.innerHeight / 2;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
    
      const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
      const sectionEndsAt = sectionTop + sectionHeight;
      const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    
      const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
    
      const sectionId = section.getAttribute("id");
      const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
      menuElement.classList.remove("active");
    
      if (sectionBoundaries) {
        menuElement.classList.add("active");
      }
    }
    
    function showNavOnScroll() {
      if (window.scrollY > 0) {
        navigation.classList.add("scroll");
      } else {
        navigation.classList.remove("scroll");
      }
    }
    
    function showBackToTopButtonOnScroll() {
      if (window.scrollY > 550) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    }
    
    function openMenu() {
      const openBtns = document.querySelectorAll(".open");
      openBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.add("menu-expanded");
        });
      });
    }
    
    function closeMenu() {
      const closeBtns = document.querySelectorAll(".close");
      closeBtns.forEach((e) => {
        e.addEventListener("click", () => {
          document.body.classList.remove("menu-expanded");
        });
      });
    }
    
    ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
    }).reveal(
      `#home, 
      #home img, 
      #about, 
      #about header, 
      #about p,
      #about img,
      #projects,
      #projects header,
      #projects .card,
      #knowledge,
      #knowledg header,
      #knowledg .card,
      #contact,
      #contact header`
    );
    
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      {/* Placeholder for your React component *//*}
    /*</div>
  );
}

export default responsive;*/
