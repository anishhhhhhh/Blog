const likes = document.querySelectorAll(".fa-heart");
const counts = document.querySelectorAll(".count");
const likeCounts = document.querySelectorAll(".likeCount");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("red");
    likeCounter(like);
  });
});

const likeCounter = (like) => {
  if (like.classList.contains("red")) {
    like.parentElement.children[0].innerText++;
  } else {
    like.parentElement.children[0].innerText--;
  }
};
