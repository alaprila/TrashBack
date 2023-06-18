// Ambil elemen yang diperlukan
const biodataText = document.getElementById('biodata-text');
const biodataForm = document.getElementById('biodata-form');
const alamatText = document.getElementById('alamat-text');
const alamatForm = document.getElementById('alamat-form');
// Ambil elemen yang diperlukan
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');


// Tambahkan event listener untuk klik pada "Biodata Diri"
biodataText.addEventListener('click', function () {
  // Sembunyikan form alamat
  alamatForm.style.display = 'none';
  // Tampilkan form biodata diri
  biodataForm.style.display = 'block';
});

// Tambahkan event listener untuk klik pada "Alamat"
alamatText.addEventListener('click', function () {
  // Sembunyikan form biodata diri
  biodataForm.style.display = 'none';
  // Tampilkan form alamat
  alamatForm.style.display = 'block';
});

fetch('../data/provinces.json')
  .then(response => response.json())
  .then(data => {
    const provinceSelect = document.getElementById('province');
    data.provinces.forEach(province => {
      const option = document.createElement('option');
      option.value = province;
      option.textContent = province;
      provinceSelect.appendChild(option);
    });
  });
  // Tambahkan event listener untuk perubahan pada dropdown provinsi
provinceSelect.addEventListener('change', function () {
    const selectedProvince = provinceSelect.value;
    fetch('../data/cities.json')
      .then(response => response.json())
      .then(data => {
        const cities = data[selectedProvince];
        citySelect.innerHTML = ''; // Menghapus opsi kota sebelumnya
  
        cities.forEach(city => {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      });
  });