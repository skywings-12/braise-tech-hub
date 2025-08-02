document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Optional: Add dark theme styles
const darkStyle = document.createElement('style');
darkStyle.innerHTML = `
  body.dark { background-color: #1a1a1a; color: #eee; }
  .product-card { background-color: #2a2a2a; border-color: #444; }
`;
document.head.appendChild(darkStyle);
