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
const modal = document.querySelector('[data-modal]');
const modalOverlay = document.querySelector('[data-modal-overlay]');
const preloader = document.querySelector('[data-preloader]');
const circle = document.querySelector('[data-circle]');

window.addEventListener('load', function() {
  preloader.classList.add('opacity-0', 'invisible');
  circle.classList.add('animate-none');
})

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

const Modal = function() {
  const open = function() {
    modal.classList.remove('invisible'),
    modal.classList.remove('opacity-0');
    modal.classList.remove('-translate-y-2/3');
    modal.classList.add('-translate-y-1/2');
    modalOverlay.classList.remove('scale-0');
    modalOverlay.classList.remove('opacity-0');
  }
  const close = function() {
    modal.classList.add('invisible'),
    modal.classList.add('opacity-0');
    modal.classList.add('-translate-y-2/3');
    modal.classList.remove('-translate-y-1/2');
    modalOverlay.classList.add('scale-0');
    modalOverlay.classList.add('opacity-0');
  }
  let closeBtn = document.querySelector('[data-close-btn]');
  closeBtn.addEventListener('click', function() {
    close();
  })
  return { open }
}

slider.addEventListener('click', function() {
  const modal = Modal();
  modal.open();
})

const scrollReveal =  ScrollReveal();
scrollReveal.reveal('.reveal-top', { origin: 'top', distance: '80px', duration: 1200, mobile: true });
scrollReveal.reveal('.reveal-left', { origin: 'left', distance: '80px', duration: 1000, delay: 300, mobile: true  });
scrollReveal.reveal('.reveal-right', { origin: 'right', distance: '80px', duration: 1000, delay: 300, mobile: true  });
scrollReveal.reveal('.reveal-bottom', { origin: 'bottom', distance: '80px', duration: 1000, delay: 600, mobile: true  });
scrollReveal.reveal('.reveal-deep', { scale: 0, distance: '0', duration: 600, delay: 1100 });