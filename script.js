function calculator (ana, vori) {
    let output = 0;
    output = ana*vori;
    return output;
  }
  console.log(calculator(5,0.0625));

let shingara = 1*7;
let samusa = 2*10;
let jilapi =8*15;
console.log(samusa+shingara+jilapi)

const cities = [
    { name: 'City A', population: 1200000, coordinates: { lat: 34.0522, lon: -118.2437 } },
    { name: 'City B', population: 800000, coordinates: { lat: 40.7128, lon: -74.0060 } },
    { name: 'City C', population: 500000, coordinates: { lat: 41.8781, lon: -87.6298 } },
  
  ];
  const population = cities.map((cities) => cities.population);
  console.log(population);