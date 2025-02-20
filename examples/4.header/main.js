import "/src/components/index.js";

document.addEventListener("DOMContentLoaded", async () => {
    const header = document.querySelector("custom-header");
    
    const menuItems = [
      { texto: "Inicio", link: "/" },
      { texto: "Contacta con nosotros", link: "/form" },
      { texto: "Conócelos", link: "/about-us" }
    ];
    
    header.items = menuItems;
  });