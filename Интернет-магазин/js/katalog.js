
// Каталог

function showCategory(category) {
  // Показываем нужную категорию
  document.querySelectorAll('.card').forEach(card => {
    if (category === 'all') {
      card.classList.add('show');
    } else {
      if (card.classList.contains(category)) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }
}

// О Нас

function toggleAbout() {
  const aboutSection = document.getElementById('aboutSection');

  if (aboutSection.style.display === 'none') {
    aboutSection.style.display = 'block';  // Или 'flex', 'grid' ...
  } else {
    aboutSection.style.display = 'none';
  }
  
  // Контакты
  
function toggleContacts() {
    const contacts = document.getElementById('contactsList');
    if (contacts.style.display === 'none') {
        contacts.style.display = 'block';
    } else {
        contacts.style.display = 'none';
    }
}

// Поисковая строка

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

searchButton.addEventListener('click', performSearch);

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach(card => {
   
    const dataName = card.dataset.name ? card.dataset.name.toLowerCase() : ""; //Получаем значение data-name

    // Проверяем, содержит ли название, цена или data-name поисковый запрос
    if (title.includes(searchTerm) || price.includes(searchTerm) || dataName.includes(searchTerm)) {
      card.classList.remove('hidden'); // Показываем карточку
    } else {
      card.classList.add('hidden'); // Скрываем карточку
    }
  });
}

// Карзина

    let cart = [];

    function addToCart(name, price) {
      // Если такой товар есть, увеличить количество
      let item = cart.find(x=>x.name===name);
      if (item) {
        item.qty += 1;
      } else {
        cart.push({name, price, qty:1});
      }
      renderCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
      let out = '';
      if (cart.length === 0) {
        out = '<div class="empty">Корзина пуста 🙃</div>';
      } else {
        out = `<table>
          <tr><th>Товар</th><th>Кол-во</th><th>Цена</th><th></th></tr>`;
        let total = 0;
        cart.forEach((item,idx) => {
          let sum = item.price * item.qty;
          total += sum;
          out += `<tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>${sum} ₽</td>
            <td><button class="remove" onclick="removeFromCart(${idx})">✖</button></td>
          </tr>`;
        });
        out += `<tr class="total-row"><td colspan="2">Итого</td><td colspan="2">${total} ₽</td></tr>`;
        out += '</table>';
      }
      document.getElementById('cart').innerHTML = out;
    }

    // Сброс корзины при обновлении страницы:
    renderCart();