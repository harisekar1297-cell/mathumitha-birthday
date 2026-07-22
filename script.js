const photos = [
  "photos/IMG-20260207-WA0007.jpg",
  "photos/IMG_20260207_123724.jpg",
  "photos/IMG_20260213_190031.jpg",
  "photos/IMG_20260220_184207.jpg",
  "photos/IMG_20260221_123836.jpg",
  "photos/IMG_20260225_115957.jpg",
  "photos/IMG_20260303_131351.jpg",
  "photos/IMG_20260618_122345.jpg",
  "photos/IMG_20260701_124617.jpg"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % photos.length;
  document.getElementById("slideshow").src = photos[i];
}, 2500);

function showMessage() {
  alert("Happy Birthday Mathumitha ❤️🎉\nWishing you a life filled with happiness, love, and endless smiles!");
}