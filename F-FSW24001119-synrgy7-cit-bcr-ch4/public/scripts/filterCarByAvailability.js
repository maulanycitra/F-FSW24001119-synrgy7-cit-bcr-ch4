// Fungsi untuk menyaring mobil yang available
function filterCarByAvailability(cars) {
  console.log("Input cars:", cars);

  // Tempat penampungan hasil
  const result = [];

  // Code
  for (let car of cars) {
    console.log("Checking car:", car);

    if (car.available === true) {
      console.log("Car is available. Adding to result.");
      result.push(car);
    } else {
      console.log("Car is not available. Skipping.");
    }
  }

  console.log("Filtered result:", result);

  return result;
}