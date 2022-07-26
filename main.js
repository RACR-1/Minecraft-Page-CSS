const cardContainer = document.querySelector(".card-list");
const leftButton = document.querySelector(".button-card-left");
const rightButton = document.querySelector(".button-card-right");
const topFlowImages = document.querySelector(".img-topo");

scroll_Status.scrollPosition = 0;
scroll_Status.cardAtual = 0;
scroll_Status.scrollWidth = cardContainer.scrollWidth - 720;

scroll_Status.scrollPosition == 0
  ? (leftButton.style.display = "none")
  : (leftButton.style.display = "");
scroll_Status.scrollPosition == scroll_Status.scrollWidth
  ? (rightButton.style.display = "none")
  : (rightButton.style.display = "");

rightButton.addEventListener("click", () => {
  scroll_Status(1);
});

leftButton.addEventListener("click", () => {
  scroll_Status(0);
});

function scroll_Status(opc) {
  const muchR =
    -(scroll_Status.scrollPosition - scroll_Status.scrollWidth) / 240;

  const muchL = scroll_Status.scrollPosition / 240;

  if (opc == 1) {
    if (scroll_Status.scrollPosition + 240 <= scroll_Status.scrollWidth) {
      cardContainer.scrollTo((scroll_Status.scrollPosition += card_right()), 0);
    }
  } else if (opc == 0) {
    if (scroll_Status.scrollPosition - 240 >= 0) {
      cardContainer.scrollTo((scroll_Status.scrollPosition -= card_left()), 0);
    }
  }
  function card_right() {
    if (muchR > 0 && muchR >= 3) {
      return 3 * 240;
    } else if (muchR > 0 && muchR) {
      return muchR * 240;
    }
  }

  function card_left() {
    if (muchL > 0 && muchL >= 3) {
      return 3 * 240;
    } else if (muchL > 0) {
      return muchL * 240;
    }
  }
  scroll_Status.scrollPosition == 0
    ? (leftButton.style.display = "none")
    : (leftButton.style.display = "");
  scroll_Status.scrollPosition == scroll_Status.scrollWidth
    ? (rightButton.style.display = "none")
    : (rightButton.style.display = "");
}

const random_Scroll_Top_Images = async () => {
  const numberOfImages = Math.round(
    topFlowImages.scrollWidth / topFlowImages.children[0].clientWidth - 1
  );
  while (true) {
    await new Promise((r) => setTimeout(r, 5000));

    const choosed = Math.floor(Math.random() * numberOfImages);
    let sorted = choosed * topFlowImages.children[0].clientWidth;
    topFlowImages.scrollTo(sorted, 0);
  }
};

random_Scroll_Top_Images();
