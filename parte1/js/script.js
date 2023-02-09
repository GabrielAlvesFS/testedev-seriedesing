const menu = document.querySelector('.menu-hamburguer')
const allCategoriesList = document.querySelector('.all-categories-list')
const categoryItem = document.querySelectorAll('.wrapped-item')

menu.addEventListener( "click", () => {
  if (allCategoriesList.classList.contains('active')) {
    allCategoriesList.classList.remove('active')
  }
  else {
    allCategoriesList.classList.add('active')
  }
})

// Hide menu when an item was clicked
categoryItem.forEach( (item) => {
  item.addEventListener( "click", () => {
    if (allCategoriesList.classList.contains('active')) {
      allCategoriesList.classList.remove('active')
    }
    else {
      allCategoriesList.classList.add('active')
    }
  })
})

const swiper = new Swiper('.swiper', {
  cssMode: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});