let count = 0;
function change(button) {
  if (button.classList.contains('follow')) {
    button.classList.remove('follow');
    button.classList.add('followings');
    button.textContent = 'Following';
    count++;
  } else {
    button.classList.remove('followings');
    button.classList.add('follow');
    button.textContent = 'Follow';
    count--;
  }
  displayCount();
}
function displayCount(){
  const display = document.querySelector('.following');
  if (display) {
    display.textContent = `${count}`;
  }
}
// Initial display
displayCount();