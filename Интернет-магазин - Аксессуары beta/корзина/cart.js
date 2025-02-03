let cart = [];

// Функция для отображения корзины
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
    ${item.name} 
    <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;"> 
      ${item.name} 
    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
    <input 
      type="number" 
      class="quantity-input" 
      data-id="${item.id}" 
      value="${item.quantity}" 
      min="1" 
      max="100"
    />
    <button class="quantity-btn increase" data-id="${item.id}">+</button>
    x ${item.price} ₽ 
    <button class="remove" data-id="${item.id}">Удалить</button>
    `;
    cartItems.appendChild(li);
  });

  calculateTotal();
}

// Добавление товара в корзину
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const img = button.dataset.img;  // Получаем URL изображения

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1, img });  // Добавляем изображение в объект товара
    }

    renderCart();
    saveCart();
  });
});

// Изменение количества товара
document.getElementById('cart-items').addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains('increase')) {
    changeQuantity(id, 1);
  } else if (e.target.classList.contains('decrease')) {
    changeQuantity(id, -1);
  } else if (e.target.classList.contains('remove')) {
    removeFromCart(id);
  }
});

// Функция изменения количества
function changeQuantity(id, change) {
  const item = cart.find(item => item.id === id);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      renderCart();
      saveCart();
    }
  }
}

// Удаление товара из корзины
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
  saveCart();
}

// Пересчет общей суммы
function calculateTotal() {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Сохранение данных в localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Загрузка данных из localStorage
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
}

ipt>
        document.querySelectorAll('.container').forEach(container => {
            const radio = container.querySelector('input[type="radio"]');

            radio.addEventListener('change', function() {
                document.querySelectorAll('.container').forEach(c => {
                    c.style.background = ""; 
                    c.style.color = "";    
                    c.querySelector('input').style.accentColor = ""; 
                });

                container.style.background = "#011A6C";
                container.style.color = "white";
                radio.style.accentColor = "white"; 
            });
        });