const navbarTogglers = document.querySelectorAll("[data-sidebar-toggler]");
const sidebar = document.querySelector("[data-sidebar]");
const overlay = document.querySelector("[data-sidebar-overlay]");
const cartTogglers = document.querySelectorAll("[data-cart-toggler]");
const cart = document.querySelector("[data-cart]");
const actionBtn = document.querySelectorAll("[data-action-btn]");
const quantity = document.querySelector("[data-quantity]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const addToCartBtn = document.querySelector("[data-add-to-cart-btn]");
const cartOverlay = document.querySelector("[data-cart-overlay]");
const slider = document.querySelector('[data-slider]');

navbarTogglers.forEach((ele) => {
  ele.addEventListener("click", function () {
    sidebar.classList.toggle("translate-x-0");
    overlay.classList.toggle("hidden");
  });
});

cartTogglers.forEach((ele) => {
  ele.addEventListener("click", function () {
    cart.classList.toggle("scale-0");
    cartOverlay.classList.toggle("scale-0");
  });
});

actionBtn.forEach((ele) => {
  ele.addEventListener("click", function () {
    if (this.dataset.actionBtn === "true") {
      let counter = Number(quantity.textContent);
      counter++;
      quantity.textContent = counter;
    } else {
      if (Number(quantity.textContent) <= 0) {
        quantity.textContent = 0;
      } else {
        let counter = Number(quantity.textContent);
        counter--;
        quantity.textContent = counter;
      }
    }
  });
});

addToCartBtn.addEventListener("click", function () {
  Number(quantity.textContent) > 0
    ? cartQuantity.classList.remove("scale-0")
    : cartQuantity.classList.add("scale-0");
  cartQuantity.textContent = quantity.textContent;
  isCartEmpty();
});

const isCartEmpty = function () {
  if (cartQuantity.textContent === "0") {
    cart.innerHTML = `
      <h5 class="px-6 font-semibold py-4 border-b-[1px] border-Gray-30 text-Very-dark-blue">Cart</h5>
      <h5 class="w-full grow flex items-center justify-center font-semibold text-Dark-grayish-blue">Your cart is empty</h5>
    `;
  } else {
    let productNumber = cartQuantity.textContent;
    cart.innerHTML = `
      <h5 class="px-6 font-semibold py-4 border-b-[1px] border-Gray-30 text-Very-dark-blue">Cart</h5>
      <div class="flex flex-col gap-6 px-6 py-4">
        <div class="flex items-center justify-between gap-3">
          <img class="w-16 h-16 rounded-md" src="src/assets/images/image-product-1-thumbnail.jpg" alt="product">
          <div>
            <p class="text-Dark-grayish-blue text-[14px]">Fall Limited Edition Sneakers</p>
            <span class="text-Dark-grayish-blue text-[14px]">$125.00 x ${productNumber} <span class="text-Very-dark-blue font-semibold">$${(125.0 * productNumber).toFixed(2)}</span></span>
          </div>
          <button class="w-8 h-8 grid place-items-center">
            <img src="src/assets/images/icon-delete.svg" alt="delete" data-delete-btn>
          </button>
        </div>
        <button class="h-[56px] rounded-lg bg-primary flex items-center justify-center gap-3 w-full" data-add-to-cart-btn>
          <span class="font-bold">Checkout</span>
        </button>
      </div>
    `;
    const deleteBtn = cart.querySelector("[data-delete-btn]");
    deleteBtn.addEventListener("click", function () {
      cart.innerHTML = `
        <h5 class="px-6 font-semibold py-4 border-b-[1px] border-Gray-30 text-Very-dark-blue">Cart</h5>
        <h5 class="w-full grow flex items-center justify-center font-semibold text-Dark-grayish-blue">Your cart is empty</h5>
      `;
      cartQuantity.classList.add("scale-0");
      quantity.textContent = 0;
    });
  }
};
isCartEmpty();

let swiper2 = new Swiper(".secondary", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});

let swiper = new Swiper(".main", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper2,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let swiperSubModal = new Swiper(".modal-secondary", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});

let swiperModal = new Swiper(".modal-main", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperSubModal,
  },
});

slider.onclick = function() {
  console.log("done");
}