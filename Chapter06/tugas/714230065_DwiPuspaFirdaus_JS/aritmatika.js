function tambah() {
  // Mendapatkan nilai dari input angka1 dan angka2
  var angka1 = document.getElementById("angka1").value;
  var angka2 = document.getElementById("angka2").value;

  // Mengecek apakah nilai dari kedua input adalah angka
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Mohon masukkan angka saja.");
    return;
  }

  // Mengkonversi nilai dari input menjadi angka
  angka1 = parseFloat(angka1);
  angka2 = parseFloat(angka2);

  // Menghitung hasil penjumlahan
  var hasil = angka1 + angka2;

  // Menampilkan hasil ke input dengan id hasil
  document.getElementById("hasil").value = hasil;
}
