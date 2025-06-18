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
      document.querySelectorAll('.tentang-box').forEach((box, index) => {
        setTimeout(() => {
          box.classList.add('visible');
        }, index * 300);
      });
    }, 600); // beri waktu scroll smooth
  });
});




document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const allContents = document.querySelectorAll('.accordion-content');
    const allButtons = document.querySelectorAll('.accordion-button');

    allContents.forEach(other => {
      if (other !== content) other.style.maxHeight = null;
    });
    allButtons.forEach(btn => {
      if (btn !== button) btn.classList.remove('active');
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.classList.add('active');
    }
  });
});


  function toggleMateri(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      button.innerText = "Pelajari ➜";
    } else {
      content.style.display = "block";
      button.innerText = "Tutup ✖";
    }
  }

document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault(); // mencegah reload halaman

    // Simulasi pengiriman
    alert("Pesan kamu sudah dikirim. Terima kasih!");

    // Reset input
    document.getElementById('nama').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pesan').value = '';

    // (Opsional) Ubah teks tombol jadi 'Terkirim'
    const tombol = document.getElementById('kirimBtn');
    tombol.textContent = "Terkirim";
    setTimeout(() => {
      tombol.textContent = "Kirim";
    }, 3000);
  });

function toggleMenu() {
    const nav = document.getElementById("navRight");
    nav.classList.toggle("show");
  }

function toggleMenu() {
    const navRight = document.getElementById("navRight");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    navRight.classList.toggle("show");
    
    if (navRight.classList.contains("show")) {
      openBtn.style.display = "none";
      closeBtn.style.display = "block";
    } else {
      openBtn.style.display = "block";
      closeBtn.style.display = "none";
    }
  }

  function logout() {
    alert("Anda telah logout");
    // tambahkan fungsi logout sesuai kebutuhan
  }

function toggleMenu() {
    const navRight = document.getElementById('navRight');
    const hamburger = document.getElementById('hamburger');
    
    navRight.classList.toggle('show');

    // Ganti ikon ☰ jadi × dan sebaliknya
    if (hamburger.innerHTML === '☰') {
      hamburger.innerHTML = '✖';
    } else {
      hamburger.innerHTML = '☰';
    }
  }
