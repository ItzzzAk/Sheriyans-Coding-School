// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Define the GSAP timeline
  const tl = gsap.timeline({ paused: true });

  // Add animations to the timeline
  tl.to("#three", { duration: 1, right: "0%", ease: "power2.out" })
    .from("#thresnd span", { opacity: 0, x: 100, stagger: 0.2, duration: 0.5, ease: "power2.out" }, "<") // Add animation for span elements
    .from("#close", { opacity: 0, scale: 0.5, duration: 0.5, ease: "power2.out" }, "<"); // Add animation for close button

  // Function to show the #three element
  function showMenu() {
    tl.play();
  }

  // Function to hide the #three element
  function hideMenu() {
    tl.reverse();
  }

  // Event listeners
  document.getElementById("hamburger").addEventListener("click", showMenu);
  document.getElementById("close").addEventListener("click", hideMenu);
});
