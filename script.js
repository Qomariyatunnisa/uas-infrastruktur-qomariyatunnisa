document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan Anda berhasil dikirim!");
});


// Fungsi animasi masuk bergiliran
function animateTentangBoxes() {
  const boxes = document.querySelectorAll('.tentang-box');
  boxes.forEach((box, index) => {
    box.classList.remove('visible'); // reset animasi dulu
    setTimeout(() => {
      box.classList.add('visible');
    }, index * 300); // delay antar box 300ms
  });
}

// Saat klik link navigasi #tentang
document.querySelectorAll('a[href="#tentang"]').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      animateTentangBoxes();
    }, 700); // kasih waktu scroll smooth dulu
  });
});
