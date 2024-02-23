// Function to open the menu
function openMenu() {
    const openBtns = document.querySelectorAll(".open");
    openBtns.forEach((e) => {
      e.addEventListener("click", () => {
        document.body.classList.add("menu-expanded");
      });
    });
  }
  
  // Function to close the menu
  function closeMenu() {
    const closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach((e) => {
      e.addEventListener("click", () => {
        document.body.classList.remove("menu-expanded");
      });
    });
  }
  
  // Call the openMenu and closeMenu functions
  openMenu();
  closeMenu();
  
  // ScrollReveal configuration
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
    #knowledge header,
    #knowledge .card,
    #contact,
    #contact header`
  );
  
  // Toggle for light mode
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
  });
  