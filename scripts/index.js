// -------------- Main Doc Selection Section ----------------
const initialCards = [
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

//------------------ Edit Page --------------------------------------
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

//------------------- New Post Page ---------------------------------------
const newPostCloseButton = newPostPage.querySelector(".modal__close-button");
const newPostForm = newPostPage.querySelector(".modal__form");
const newPostCardImageInput = newPostPage.querySelector("#card-image-input");
const editCardCaptionInput = newPostPage.querySelector("#card-caption-input");

// --------------------Functions-----------------------------

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfilePage);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  openModal(newPostPage);
  console.log(newPostCardImageInput.value);
  console.log(editCardCaptionInput.value);
  evt.target.reset();
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// ---------------- Event Listners  --------------------------------------

editProfile.addEventListener("click", () => {
  openModal(editProfilePage);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfilePage);
});

addPost.addEventListener("click", () => {
  openModal(newPostPage);
});

newPostCloseButton.addEventListener("click", () => {
  closeModal(newPostPage);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);

// ------------------------------ New JS Project Section -------------------------------------------------------------------

initialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
