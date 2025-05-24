const characters = ['Thần Diệu Thánh Kỵ · Thương Khung Thiên Thiểm']; // Thay bằng danh sách thực tế

const menu = document.getElementById('character-menu');
const content = document.getElementById('content');
const toggleMenuBtn = document.getElementById('toggle-menu');
const toggleDarkBtn = document.getElementById('toggle-dark');

// Tạo danh sách nhân vật
characters.forEach(name => {
  const btn = document.createElement('button');
  btn.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  btn.addEventListener('click', () => loadCharacter(name));
  menu.appendChild(btn);
});

// Toggle menu
toggleMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Toggle dark mode
toggleDarkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Load nhân vật
function loadCharacter(name) {
  fetch(`characters/${name}.md`)
    .then(res => res.text())
    .then(md => {
      content.innerHTML = marked.parse(md);
      menu.classList.remove('show');
    });
}
