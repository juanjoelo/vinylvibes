const fs = require("fs");

// Contenido del JSON
const stickers = [
  { id: 1, name: "Sticker 1", image: "/images/sticker1.jpg", price: 500 },
  { id: 2, name: "Sticker 2", image: "/images/sticker2.jpg", price: 500 },
  { id: 3, name: "Sticker 3", image: "/images/sticker3.jpg", price: 500 },
  { id: 4, name: "Sticker 4", image: "/images/sticker4.jpg", price: 500 },
];

// Convertir el objeto a JSON
const jsonData = JSON.stringify(stickers, null, 2);

// Escribir el JSON en un archivo
fs.writeFileSync("stickers.json", jsonData);

console.log("JSON file generated successfully.");
