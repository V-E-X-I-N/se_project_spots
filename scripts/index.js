// Main Doc Selection
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfile = document.querySelector(".profile__edit-button");
const addPost = document.querySelector(".profile__add-button");
const editProfilePage = document.querySelector("#edit-profile-modal");
const newPostPage = document.querySelector("#new-post-modal");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const formSubmitButton = newPostPage.querySelector(".modal__submit-button");
const previewModal = document.querySelector("#preview-modal");
const previewCloseButton = previewModal.querySelector(".modal__close-button");
const previewImgEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

// Edit Form
const editProfileCloseButton = editProfilePage.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfilePage.querySelector(".modal__form");
const editProfileNameInput = editProfilePage.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfilePage.querySelector(
  "#profile-description-input"
);

// New Post Form
const newPostCloseButton = newPostPage.querySelector(".modal__close-button");
const newPostForm = newPostPage.querySelector(".modal__form");
const newPostCardImageInput = newPostPage.querySelector("#card-image-input");
const editCardCaptionInput = newPostPage.querySelector("#card-caption-input");

// Functions

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfilePage);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  closeModal(newPostPage);

  const inputValues = {
    name: editCardCaptionInput.value,
    link: newPostCardImageInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  evt.target.reset();
  disableButton(formSubmitButton, settings);
}
// Escape Button Exit

function EscapeCloseBtn(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    if (openModal) {
      closeModal(openModal);
    }
  }
}

// Open + Close Functions

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", EscapeCloseBtn);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", EscapeCloseBtn);
}

// Overlay Click Exit

const modalOverlayClose = document.querySelectorAll(".modal");
modalOverlayClose.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
});

editProfile.addEventListener("click", () => {
  openModal(editProfilePage);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(editProfileForm, [
    editProfileNameInput,
    editProfileDescriptionInput,
  ]);
});

// Open + Close Buttons

editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfilePage);
});

addPost.addEventListener("click", () => {
  openModal(newPostPage);
});

newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostPage);
});

previewCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);

const cardsList = document.querySelector(".cards__list");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImgEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImgEl.addEventListener("click", () => {
    previewImgEl.src = data.link;
    previewImgEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
