console.log("AYAN TRICKS Loaded ✅")

// Cards pe click ka effect
document.querySelectorAll('.card').forEach(card => {
card.addEventListener('click', () => {
    let toolName = card.querySelector('p').innerText;
    document.body.innerHTML = `
    <div style="background:#000;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;">
        <img src="coming-soon.jpg" style="max-width:90%;border-radius:15px;">
        <h2 style="color:#ff4500;margin-top:20px;">${toolName}</h2>
        <button onclick="window.location.href='index.html'" style="background:#ff4500;color:#fff;border:none;padding:10px 20px;border-radius:8px;margin-top:15px;cursor:pointer;">Back to Home</button>
    </div>
    `;
})
})
