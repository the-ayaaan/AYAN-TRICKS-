// Abhi ye sirf alert dega. Baad me har tool ka function add karenge
document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const toolName = card.querySelector('p').innerText;
    alert(toolName + " - Tool jald hi add hoga 😎");
  });
});

// Sidebar active
document.querySelectorAll('.sidebar li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelector('.sidebar li.active').classList.remove('active');
    li.classList.add('active');
  });
});
