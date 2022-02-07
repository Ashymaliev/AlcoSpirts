/*Function for slider FILTER-IS-ACTIVE in 'SORT'
=============================================*/
function sortSection() {
    const sortItems = document.querySelectorAll('.filter__items');
    const sortItemsName = ['Все', 'Вино', 'Шампанское', 'Виски','Водка','Пиво','Вода и соки', 'Молоко', 'Чай'];
    sortItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        sortItems.forEach((everyElement) => {
          everyElement.classList.remove('filter__items--active');
        });
        item.classList.add('filter__items--active');
        if (item.textContent == sortItemsName[index]) {
          sortFilter(index);
        }
      });
    });
  }
  sortSection();
  function sortFilter(index) {
    const filterItems = document.querySelectorAll('.sort__item');
    const filterItemsName = [
      'data-all',
      'data-wine',
      'data-champ',
      'data-whiskey',
      'data-vodka',
      'data-beer',
      'data-water-juicy',
      'data-milk',
      'data-tea',
    ];
    filterItems.forEach((ayday) => {
      if (!ayday.hasAttribute(filterItemsName[index])) {
        ayday.style.display = 'none';
      } else {
        ayday.style.display = 'flex';
      }
    });
  }
  