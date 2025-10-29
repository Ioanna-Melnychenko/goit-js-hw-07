const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});