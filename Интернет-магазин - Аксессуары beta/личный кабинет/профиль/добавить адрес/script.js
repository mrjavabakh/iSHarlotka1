// Получаем элементы
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal');
const saveButton = document.querySelector('.modal-save-button');
const addressInput = document.getElementById('address-input');

// Показать модальное окно
function openModal() {
  modalOverlay.style.display = 'flex';
}

// Закрыть модальное окно
function closeModal() {
  modalOverlay.style.display = 'none';
  pageContent.classList.remove('blur');
}

// Сохранение адреса (пример)
saveButton.addEventListener('click', () => {
  const newAddress = addressInput.value.trim();
  if (newAddress) {
    alert(`Вы ввели адрес: ${newAddress}`);
    closeModal();
  } else {
    alert('Пожалуйста, введите адрес.');
  }
});

// Закрытие модального окна при нажатии на кнопку
closeModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике на фон
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
  pageContent.classList.remove('blur');
});

// Для тестирования
openModal(); // Уберите эту строку, если хотите показывать модалку только по событию
