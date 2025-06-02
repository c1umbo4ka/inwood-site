// Данные по товарам
const productData = {
  1: {
    name: 'Обеденный стол "LARGO OAK"',
    price: '42 000 ₽',
    description: 'Обеденный стол из массива дуба, покрытие – натуральное масло-воск. Минималистичный дизайн и надежная конструкция делают его идеальным выбором для современных интерьеров.',
    image: 'assets/img/largo_oak.jpg'
  },
  2: {
    name: 'Кресло "SOFTLINE"',
    price: '18 500 ₽',
    description: 'Уютное кресло с мягкой обивкой из велюра. Идеально подходит для уголка отдыха или чтения.',
    image: 'assets/img/softline.jpg'
  }
};

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function renderProduct() {
  const container = document.getElementById('product-container');
  const id = getQueryParam('id');
  const product = productData[id];

  if (product) {
    container.innerHTML = `
      <h2>${product.name}</h2>
      <img src="\${product.image}" alt="\${product.name}">
      <p class="price">\${product.price}</p>
      <p>\${product.description}</p>
    `;
  } else {
    container.innerHTML = '<p>Товар не найден.</p>';
  }
}

if (window.location.pathname.includes('product.html')) {
  document.addEventListener('DOMContentLoaded', renderProduct);
}
