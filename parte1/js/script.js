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


// ---- Carousel ----
const carousel = document.querySelector(".carousel")
const arrows = document.querySelectorAll(".carousel-section svg")
const firstImg = carousel.querySelectorAll("img")[0]


// showing and hiding prev and next arrow
const showHideArrows = () => {
  let scrollwidth = carousel.scrollWidth - carousel.clientWidth
  arrows[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block'
  arrows[1].style.display = carousel.scrollLeft == scrollwidth ? 'none' : 'block'
}

arrows.forEach( currArrow => {
  currArrow.addEventListener( "click", () => {
    let firstImgWidth = firstImg.clientWidth
    carousel.scrollLeft += currArrow.id == "prev-btn" ? -firstImgWidth : firstImgWidth

    setTimeout( () => showHideArrows(), 60)
  })
})