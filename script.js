const photos = [
  'https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png',
  'https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png',
  'https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png',
  'https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png'
];

const colors = {
  green: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png',
  yellow: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png',
  orange: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png',
  red: 'https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png'
};

function setMainPhoto(element) {
  let mainImage = document.getElementById('main-photo');
  mainImage.src = element.src;
  mainImage.alt = element.alt;
}

function setColor(color) {
  let mainImage = document.getElementById('main-photo');
  mainImage.src = colors[color];
  mainImage.alt = color + " apple";
}
