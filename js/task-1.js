

const item = document.querySelectorAll(".item")

console.log(`Number of categories : ${item.length}`);

item.forEach((list) => {
        console.log(`Category: ${list.firstElementChild.textContent}`);
        console.log(`Elements: ${list.lastElementChild.childElementCount}`);
  })
