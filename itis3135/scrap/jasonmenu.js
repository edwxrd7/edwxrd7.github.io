// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch JSON data
    fetch("navlinks.json")
        .then(response => response.json())
        .then(data => {
            // Process JSON data
            const menuContainer = document.getElementById("menu-container");
            data.forEach(item => {
                // Create menu item link element
                const menuItem = document.createElement("a");
                menuItem.classList.add("menu-item");
                menuItem.textContent = item.name;
                menuItem.href = item.url; // Assuming each menu item has a 'url' property in JSON

                // Append menu item to the container
                menuContainer.appendChild(menuItem);
            });
        })
        .catch(error => console.error("Error fetching menu:", error));
});