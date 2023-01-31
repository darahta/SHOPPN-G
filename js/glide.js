const productsContainer = document.getElementById("product-list");

export function product1() {
   const config = {
      perView: 4,
      gap: 7,
      bound: true,
      autoplay: 2000,
      breakpoints: {
         992: {
            perView: 3,
         },
         768: {
            perView: 2,
         },
         576: {
            perView: 1,
         },
      },
   };

   productsContainer && new Glide(".glide", config).mount();
}

const config2 = {
   type: "carousel",
   perView: 4,
   gap: 7,
   autoplay: 2000,
   breakpoints: {
      992: {
         perView: 3,
      },
      768: {
         perView: 2,
      },
      576: {
         perView: 1,
      },
   },
};

productsContainer && new Glide(".glide2", config2).mount();
