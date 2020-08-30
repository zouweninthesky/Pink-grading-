const tourTabs = document.querySelectorAll('.tours-tabs__tab');
const tourTabButtons = document.querySelectorAll('.tours-tabs__button');
const tourCards = document.querySelectorAll('.tour-list__card');

const purchaseButtons = document.querySelectorAll('#purchase');
const popup = document.querySelector('.popup');
const popupSucces = document.querySelector('.popup--success');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupform = popup.querySelector('.popup__form');
const popupSubmit = popup.querySelector('.popup__submit');

const nav = document.querySelector('.main-nav');
const navButton = nav.querySelector('.main-nav__toggle');

const removeCurrent = function () {
  let currentTab = document.querySelector('.tours-tabs__tab--current');
  if(currentTab) {
    currentTab.classList.remove('tours-tabs__tab--current');
  }
  let currentTabButton = document.querySelector('.tours-tabs__button--current');
  if(currentTabButton) {
    currentTabButton.classList.remove('tours-tabs__button--current');
  }
};

const changeTabAndButton = function (currentTarget) {
  removeCurrent();
  for (let i = 0; i < tourTabs.length; i++) {
    if (tourTabs[i].id===currentTarget.getAttribute('data-country')) {
      tourTabs[i].classList.add('tours-tabs__tab--current');
    }
  };

};

const switchCurrentTab = function () {
  tourTabButtons.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      changeTabAndButton(button);
      button.classList.add('tours-tabs__button--current');
    });
  });
};

const goToCurrentTab = function () {
  tourCards.forEach(function (card) {
    card.addEventListener('click', function (evt) {
      changeTabAndButton(card);
      for (let i = 0; i < tourTabs.length; i++) {
        if (tourTabButtons[i].getAttribute('data-country')===currentCard.getAttribute('data-country')) {
          tourTabButtons[i].classList.add('tours-tabs__button--current');
        }
      };
    });
  })
};

const openPopup = function (popup) {
  popup.classList.remove('popup--hidden');
}

const closePopup = function () {
  const popup = document.querySelector('.popup:not(.popup--hidden)');
  popup.classList.add('popup--hidden');
}

purchaseButtons.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(popup);
  });
});

popupCloseButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    closePopup();
  });
});

// popupForm.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   closePopup();
//   openPopup(popupSucces);
// });

popupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
  openPopup(popupSucces);
});

navButton.addEventListener('click', function () {
  nav.classList.toggle('main-nav--hidden');
});

switchCurrentTab();
goToCurrentTab();





