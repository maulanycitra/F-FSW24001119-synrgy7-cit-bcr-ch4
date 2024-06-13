// Fungsi untuk mengurutkan daftar mobil berdasarkan tahun secara Ascending
function sortCarByAscendingly(cars) {
  console.log(cars);

  // Clone Array
  const result = [...cars];

  // Code (data awal)
  console.log("Data awal:", result);

  // Code (sorting)
  result.sort((a, b) => b.year - a.year);

  //Code (data setelah sorting)
  console.log("Data setelah sorting:", result);

  return result;
}