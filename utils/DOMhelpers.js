
// Select Elements
const element = document.querySelector('.my-class'); // First matching element
const elements = document.querySelectorAll('.my-class'); // All matching elements
const byId = document.getElementById('my-id'); // By ID
const byClass = document.getElementsByClassName('my-class'); // By class
const byTag = document.getElementsByTagName('div'); // By tag name

// Create Elements
const newElement = document.createElement('div'); // Create a new div
newElement.textContent = 'Hello, World!'; // Set text content
newElement.classList.add('my-class'); // Add a class
document.body.appendChild(newElement); // Append to the body

// Modify Element Content
const myDiv = document.querySelector('.my-div');
myDiv.innerHTML = '<strong>Bold text</strong>'; // Set HTML content
myDiv.textContent = 'Plain text'; // Set plain text

// Add and Remove Classes
myDiv.classList.add('new-class'); // Add a class
myDiv.classList.remove('old-class'); // Remove a class
myDiv.classList.toggle('active'); // Toggle a class
const hasClass = myDiv.classList.contains('active'); // Check if it has a class

// Set and Get Attributes
myDiv.setAttribute('data-custom', 'value'); // Add/Update a custom attribute
const customAttr = myDiv.getAttribute('data-custom'); // Get an attribute value
myDiv.removeAttribute('data-custom'); // Remove an attribute

// Event Listeners
myDiv.addEventListener('click', () => alert('Div clicked!')); // Add a click event
myDiv.removeEventListener('click', myFunction); // Remove an event listener

// CSS Manipulation
myDiv.style.backgroundColor = 'blue'; // Inline styles
myDiv.style.display = 'none'; // Hide element
myDiv.style.display = 'block'; // Show element

// Traversing DOM
const parent = myDiv.parentElement; // Parent element
const children = myDiv.children; // Child elements
const firstChild = myDiv.firstElementChild; // First child
const lastChild = myDiv.lastElementChild; // Last child
const nextSibling = myDiv.nextElementSibling; // Next sibling
const prevSibling = myDiv.previousElementSibling; // Previous sibling

// Remove Element
myDiv.remove(); // Removes the element from the DOM

// Clone Element
const clonedDiv = myDiv.cloneNode(true); // Clone with children (deep clone)
document.body.appendChild(clonedDiv); // Append cloned element

// Add Elements Dynamically
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'List Item';
ul.appendChild(li);
document.body.appendChild(ul); // Adds <ul><li>List Item</li></ul> to the body

// Handle Forms
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent default submission
  const inputValue = form.querySelector('input[name="name"]').value; // Get input value
  console.log(inputValue);
});

// Handle Input Events
const input = document.querySelector('input');
input.addEventListener('input', e => console.log(e.target.value)); // Log value on input
input.addEventListener('change', e => console.log('Input changed:', e.target.value));

// Local Storage
localStorage.setItem('key', 'value'); // Set an item
const storedValue = localStorage.getItem('key'); // Get an item
localStorage.removeItem('key'); // Remove an item
localStorage.clear(); // Clear all items

// Session Storage
sessionStorage.setItem('key', 'value'); // Similar to localStorage, but cleared after session

// Scroll Events
window.addEventListener('scroll', () => {
  console.log(window.scrollY); // Vertical scroll position
});

// Debouncing Events (e.g., resizing or scrolling)
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
window.addEventListener(
  'resize',
  debounce(() => console.log('Window resized'), 300)
);

// Intersection Observer (Detect when element is visible in viewport)
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is in viewport!');
        observer.unobserve(entry.target); // Stop observing if needed
      }
    });
  },
  { threshold: 0.5 } // 50% of the element must be visible
);
observer.observe(document.querySelector('.observe-me'));
