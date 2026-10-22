Create a dynamic list.
Requirements:
•	Add items dynamically 
•	Remove items on click 
•	Use only ONE event listener on parent element 
// Dynamic List Implementation
document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addBtn = document.getElementById('addBtn');
    const itemList = document.getElementById('itemList');

    // Add item functionality
    addBtn.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText) {
            addItem(itemText);
            itemInput.value = '';
            itemInput.focus();
        }
    });

    // Allow adding items with Enter key
    itemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    // Single event listener on parent element for removing items
    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            removeItem(e.target);
        }
    });

    function addItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        itemList.appendChild(li);
    }

    function removeItem(item) {
        itemList.removeChild(item);
    }
});         