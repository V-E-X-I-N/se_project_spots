// -------------- Main Doc Selection Section ----------------

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

// ---------------- Event Listners  --------------------------------------

editProfile.addEventListener("click", function () {
  editProfilePage.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileCloseButton.addEventListener("click", function () {
  editProfilePage.classList.remove("modal_is-opened");
});

addPost.addEventListener("click", function () {
  newPostPage.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostPage.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);

// --------------------Functions-----------------------------

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfilePage.classList.remove("modal_is-opened");
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  newPostPage.classList.remove("modal_is-opened");
  console.log(newPostCardImageInput.value);
  console.log(editCardCaptionInput.value);
  evt.target.reset();
}
