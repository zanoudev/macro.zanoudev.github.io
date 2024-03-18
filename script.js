document.addEventListener("DOMContentLoaded", function () {
  // Get references to menu items and the main content area
  const menuItems = document.querySelectorAll(".menu-item");
  const mainContent = document.querySelector(".main");

  console.log("hello from script");

  // Function to show the selected content
  function showSelectedContent(contentClass) {
    const contentSections = mainContent.querySelectorAll(".content"); // Select all content sections within main

    contentSections.forEach((section) => {
      section.style.display = section.classList.contains(contentClass)
        ? "block"
        : "none";
    });
  }

  // Add click event listeners to menu items
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      const contentClass =
        menuItem.textContent.trim().toLowerCase() + "-content";
      showSelectedContent(contentClass);
    });
  });

  // Show "home-content" by default
  showSelectedContent("home-content");
});
