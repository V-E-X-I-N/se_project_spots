const editProfile = document.querySelector(".profile__edit-button");
const addPost = document.querySelector(".profile__add-button");
//
const editProfilePage = document.querySelector("#edit-profile-modal");
const newPostPage = document.querySelector("#new-post-modal");
//
const editProfileCloseButton = editProfilePage.querySelector(
  ".modal__close-button"
);
const newPostCloseButton = newPostPage.querySelector(".modal__close-button");

editProfile.addEventListener("click", function () {
  editProfilePage.classList.add("modal_is-opened");
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
