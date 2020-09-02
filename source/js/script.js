const tourTabs = document.querySelectorAll('.tours-tabs__tab');
const tourTabButtons = document.querySelectorAll('.tours-tabs__button');
const tourCards = document.querySelectorAll('.tour-list__card');

const purchaseButtons = document.querySelectorAll('.js-purchase');
const popup = document.querySelector('.popup');
const popupSucces = document.querySelector('.popup--success');
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popupForm = popup.querySelector('.popup__form');
const popupSubmit = popup.querySelector('.popup__submit');
const questionForm = document.querySelector('.questions-form');

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
        if (tourTabButtons[i].getAttribute('data-country')===card.getAttribute('data-country')) {
          tourTabButtons[i].classList.add('tours-tabs__button--current');
        }
      };
    });
  })
};

const closePopup = function () {
  const popup = document.querySelector('.popup:not(.popup--hidden)');
  popup.classList.add('popup--hidden');
}

onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
    document.removeEventListener ('keydown', onPopupEscPress);
  }
}

const openPopup = function (popup) {
  popup.classList.remove('popup--hidden');
  document.addEventListener ('keydown', onPopupEscPress);
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

questionForm.addEventListener('submit', function (evt) {
  const inputPhone = questionForm.querySelector('.input__field--tel');
  if(!inputPhone.value) {
    evt.preventDefault();
    inputPhone.required = true;
  } else {
    evt.preventDefault();
    openPopup(popupSucces);
  }
});

popupForm.addEventListener('submit', function (evt) {
  const inputPhone = popupForm.querySelector('.input__field--tel');
  if(!inputPhone.value) {
    evt.preventDefault();
    inputPhone.required = true;
  } else {
    evt.preventDefault();
    openPopup(popupSucces);
  }
});

navButton.addEventListener('click', function () {
  nav.classList.toggle('main-nav--hidden');
});

switchCurrentTab();
goToCurrentTab();
