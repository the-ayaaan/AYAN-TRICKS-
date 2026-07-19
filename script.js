// Tool open karne ka function
function openTool(page){
  window.location.href = page;
}

// Sidebar me active class change karna
document.querySelectorAll('.sidebar li').forEach(item=>{
  item.addEventListener('click',()=>{
    // purane active ko hatao
    let active = document.querySelector('.sidebar li.active');
    if(active) active.classList.remove('active');
    
    // naye pe active lagao
    item.classList.add('active');
  })
})

// Page load hone pe choti animation
window.addEventListener('load', () => {
  document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "0.4s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 80)
  })
})
