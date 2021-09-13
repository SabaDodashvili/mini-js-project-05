const item = document.querySelector('.placeholder__item');
const placeHolders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeHolder of placeHolders) {
  placeHolder.addEventListener('dragover', dragover);
  placeHolder.addEventListener('dragenter', dragenter);
  placeHolder.addEventListener('dragleave', dragleave);
  placeHolder.addEventListener('drop', dragdrop);
}

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragEnd(e) {
  e.target.className = 'placeholder__item';
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add('hovered');
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}
function dragdrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
}
