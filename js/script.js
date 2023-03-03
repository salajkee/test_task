window.addEventListener('DOMContentLoaded', () => {
  const primary = document.querySelector('.primary');
  const primaryBtn = document.querySelector('.primary__btn');
  const slider = document.querySelector('.slider');

  primaryBtn.addEventListener('click', (e) => {
    setTimeout(() => {
      primary.classList.add('hidden');
      slider.classList.remove('hidden');
    }, 5000);
  });

  const dataImg = [
    'images/preview/slider_1pre.webp',
    'images/preview/slider_2pre.webp',
    'images/preview/slider_3pre.webp',
    'images/preview/slider_4pre.webp',
  ];

  const dataText = [
    {
      text: 'Акция действует с 01.07.18',
      title: 'Этот текст добавлен для демонстрации на странице',
    },
    {
      text: 'Акция действует с 01.07.18',
      title: 'Этот текст добавлен для демонстрации на странице',
    },
    {
      text: 'Акция действует с 01.07.18',
      title: 'Этот текст добавлен для демонстрации на странице',
    },
    {
      text: 'Акция действует с 01.07.18',
      title: 'Этот текст добавлен для демонстрации на странице',
    },
  ];

  let swiper = new Swiper('.slider', {
    pagination: {
      el: '.slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<div class="${className}">
        <img class="custom__bullet-img" src="${dataImg[index]}"  alt="${
          index + 1
        }-slide" />
        <p class="custom__bullet-title">${dataText[index].text} <br> <span>${
          dataText[index].title
        }</span></p>
      </div>`;
      },
    },
    navigation: {
      nextEl: '.slider__btns-next',
      prevEl: '.slider__btns-prev',
    },
    breakpoints: {
      320: {
        pagination: {
          el: '.slider__pagination',
          clickable: true,
        },
      },
    },
  });
});
