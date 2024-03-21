const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('Please Enter something!');
  } else {
    const li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}
listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    if (confirm('Do you want remove the task') === true) {
      e.target.parentElement.remove();
      saveData();
    }
  }
});

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}
function showTasks() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTasks();
