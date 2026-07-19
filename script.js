console.log("AYAN TRICKS Loaded ✅")

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    let toolName = card.querySelector('p').innerText.toLowerCase();

    // Agar IP INFORMATION hai to real page pe bhejo
    if(toolName.includes("ip")){
      window.location.href = 'ip.html';
    } 
    // Baqi sab ke liye Coming Soon
    else {
      document.body.innerHTML = `
        <div style="background:#000;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;text-align:center;padding:20px;">
          <img src="https://i.ibb.co/7J1W8bW/coming-soon.jpg" style="max-width:90%;border-radius:15px;box-shadow:0 0 20px #ff4500;">
          <h2 style="color:#ff4500;margin-top:20px;">${card.querySelector('p').innerHTML}</h2>
          <p style="color:#aaa;font-size:12px;">Ye tool jald aa raha hai 🚀</p>
          <button onclick="window.location.href='index.html'" style="background:#ff4500;color:#fff;border:none;padding:10px 20px;border-radius:8px;margin-top:15px;cursor:pointer;font-weight:600;">Back to Home</button>
        </div>
      `;
    }
  })
})
