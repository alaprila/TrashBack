// Fungsi untuk mengarahkan tautan ke halaman yang diinginkan
function navigateTo(url) {
  window.location.href = url;
}

// Menambahkan event listener untuk tautan-tautan di navbar
var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default saat mengklik tautan
    var href = link.getAttribute("href");
    navigateTo(href);
  });
});
