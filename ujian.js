document.getElementById('tampil').onclick = function () {
	var nama = document.getElementById('nama').value;
	if (nama == "") {
		nama = "(nama kosong)";
	}
	var kelas = document.getElementById('kelas').value;
	if (kelas == "") {
		kelas = "(kelas kosong)";
	}
	var ekskul = "";
	var e = document.getElementsByName('ekskul');
	for (var i = 0; i < e.length; i++) {
		if (e[i].checked) {
			ekskul = ekskul + e[i].value + ", ";
		}
	}
	if (ekskul == "") {
		ekskul = "(belum pilih ekskul)";
	}
	var jadwal = "";
	var j = document.getElementsByName('jadwal');
	for (var i = 0; i < j.length; i++) {
		if (j[i].checked) {
			jadwal = j[i].value;
		}
	}
	if (jadwal == "") {
		jadwal = "(belum pilih jadwal)";
	}
	var setuju = document.getElementById('persetujuan').checked;
	setuju = setuju ? "Ya" : "Tidak";
	var hasil =
		"Pendaftaran berhasil\n" +
		"Nama: " + nama + "\n" +
		"Kelas: " + kelas + "\n" +
		"Ekskul: " + ekskul + "\n" +
		"Jadwal: " + jadwal + "\n" +
		"Persetujuan: " + setuju;
	document.getElementById('show').innerText = hasil;
}