//Dom elements
const template = document.querySelector(".template");
const productContainer = document.querySelector(".products");
const searchInput = document.querySelector("#search");

let products = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  products.forEach((product) => {
    const isVisible =
      product.brand.toLowerCase().includes(value) ||
      product.title.toLowerCase().includes(value);
    product.element.classList.toggle("no-display", !isVisible);
  });
});

//Dom elements for below functions

const search = document.querySelector(".search");
const searchArea = document.querySelector(".search-area");
const searchIcon = document.querySelector(".searching .search-icon");

//"display" class adding searcharea when search clicked
search.addEventListener("click", () => {
  searchArea.classList.toggle("display");
});

searchIcon.addEventListener("click", () => {
  if (searchInput.value) {
    searchArea.classList.remove("display");
  } else {
  }
});

//Api call 
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {

    //const products=[]; above
    products = data.products.map((product) => {

      //below code creates elements from <template>'s first child
      //and they are all same as templates first child
      const card = template.content.cloneNode(true).children[0];

      const productName = card.querySelector(".product-name");
      const productImg = card.querySelector(".product-image");
      const productPrice = card.querySelector(".product-price");
      const productDesc = card.querySelector(".desc");

      productName.textContent = product.brand;
      productImg.src = product.images[0];
      productPrice.textContent = `$${product.price}`;
      productDesc.textContent = product.title;

      //new firstchild appends to the productcontainer
      productContainer.append(card);
      
      //returns these to the products array
      return {
        brand: product.brand,
        title: product.title,
        element: card,
      };
    });
  });


const filterArrow = document.querySelector(".filter-header .arrow");
const filterContainer = document.querySelector(".filter-container");

filterArrow.addEventListener("click", () => {
  if (filterContainer.classList.contains("display")) {
    filterContainer.classList.remove("display");
    filterContainer.classList.add("no-display");
    filterArrow.classList.remove("arrow-active");
  } else if (filterContainer.classList.contains("no-display")) {
    filterContainer.classList.add("display");
    filterContainer.classList.remove("no-display");
    filterArrow.classList.add("arrow-active");
  }
});

//
const genderArrow = document.querySelector(".gender-header .arrow");
const genderContainer = document.querySelector(".gender-container");

genderArrow.addEventListener("click", () => {
  if (genderContainer.classList.contains("display")) {
    genderContainer.classList.remove("display");
    genderContainer.classList.add("no-display");
    genderArrow.classList.remove("arrow-active");
  } else if (genderContainer.classList.contains("no-display")) {
    genderContainer.classList.add("display");
    genderContainer.classList.remove("no-display");
    genderArrow.classList.add("arrow-active");
  }
});

const brandArrow = document.querySelector(".brand-header .arrow");
const brandContainer = document.querySelector(".brand-container");

brandArrow.addEventListener("click", () => {
  if (brandContainer.classList.contains("display")) {
    brandContainer.classList.remove("display");
    brandContainer.classList.add("no-display");
    brandArrow.classList.remove("arrow-active");
  } else if (brandContainer.classList.contains("no-display")) {
    brandContainer.classList.add("display");
    brandContainer.classList.remove("no-display");
    brandArrow.classList.add("arrow-active");
  }
});

const priceArrow = document.querySelector(".price-header .arrow");
const priceContainer = document.querySelector(".price-container");

priceArrow.addEventListener("click", () => {
  if (priceContainer.classList.contains("display")) {
    priceContainer.classList.remove("display");
    priceContainer.classList.add("no-display");
    priceArrow.classList.remove("arrow-active");
  } else if (priceContainer.classList.contains("no-display")) {
    priceContainer.classList.add("display");
    priceContainer.classList.remove("no-display");
    priceArrow.classList.add("arrow-active");
  }
});

const genders = document.querySelectorAll(".gender");

genders.forEach((gender) => {
  gender.addEventListener("click", () => {
    if (gender.classList.contains("filter-active")) {
      gender.classList.remove("filter-active");
    } else {
      gender.classList.add("filter-active");
    }
  });
});

const brands = document.querySelectorAll(".brand");

brands.forEach((brand) => {
  brand.addEventListener("click", () => {
    if (brand.classList.contains("filter-active")) {
      brand.classList.remove("filter-active");
    } else {
      brand.classList.add("filter-active");
    }
  });
});

const radios = document.querySelectorAll(".radio");

radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    if (radio.classList.contains("radio-active")) {
      radio.classList.remove("radio-active");
    } else {
      radio.classList.add("radio-active");
    }
  });
});

const sortContainer = document.querySelector(".sort-container");
const sortArrow = document.querySelector(".sort-header .arrow");

sortArrow.addEventListener("click", () => {
  if (sortContainer.classList.contains("display")) {
    sortContainer.classList.remove("display");
    sortContainer.classList.add("no-display");
    sortArrow.classList.remove("arrow-active");
  } else if (sortContainer.classList.contains("no-display")) {
    sortContainer.classList.add("display");
    sortContainer.classList.remove("no-display");
    sortArrow.classList.add("arrow-active");
  }
});

const sortElements = document.querySelectorAll(".sort-element");

sortElements.forEach((sortElement) => {
  sortElement.addEventListener("click", () => {
    if (sortElement.classList.contains("filter-active")) {
      sortElement.classList.remove("filter-active");
    } else {
      sortElement.classList.add("filter-active");
    }
  });
});
// data sayısı kadar element oluşturma
// const btnIndex = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20
// ];
//   const btnContainer = document.querySelector(".btn-container")
//   const  template = document.querySelector(".template");

// btnIndex.forEach((index)=>{
//   const card =  template.content.cloneNode(true).children[0]
//   card.textContent = index
//       btnContainer.append(card)

// })

{
  /* <div class="btn-container">
</div>
 <template class="template">
     <button class="btn" type="button"></button>
 </template> */
}

const darkMode = document.querySelector(".moon");
const mobileNav = document.querySelector(".mobile-nav");
const hamburgerLines = document.querySelectorAll(".hamburger svg line");

darkMode.addEventListener("click", () => {
  hamburgerLines.forEach(function (line) {
    line.style.stroke = "#17cf97";
  });
  mobileNav.classList.add("dark-mode");
  document.body.classList.add("dark-mode");
});
