// Tombol dark/light mode
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  // Tambah / hapus class "light" pada body
  document.body.classList.toggle("light");

  // Mengubah teks tombol sesuai mode
  if (document.body.classList.contains("light")) {
    toggleBtn.textContent = "🌞 Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

/* 
  - Jika email diklik → munculkan alert
  - Jika Instagram diklik → munculkan alert
*/
document.getElementById("email").addEventListener("click", () => {
  alert("Buka aplikasi Email untuk menghubungi Olivia 📧");
});
document.getElementById("ig").addEventListener("click", () => {
  alert("Buka Instagram: @oliviagabriella03 📸");
});

// Animasi teks footer yang berubah setiap 4 detik
const quotes = [
  '"Semangat teman-teman..."',
  '"Belajar itu investasi terbaik."',
  '"Jangan takut gagal, coba lagi!"',
  '"Hari ini lebih baik dari kemarin."',
];
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % quotes.length;
  document.getElementById("footerText").textContent = quotes[idx];
}, 4000);
