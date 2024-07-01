import './style.scss'

document.addEventListener('DOMContentLoaded', function() {
  const findoutmoreButton = document.querySelector('.findoutmore');

  if (findoutmoreButton) {
    findoutmoreButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action (e.g., navigating to href)

      // Add your button click functionality here
      console.log('Find out more clicked!');
      // Example: Redirect to another page
      // window.location.href = 'https://example.com';
    });
  }
});