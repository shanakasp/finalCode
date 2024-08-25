document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const cardImage = document.getElementById("card-image");
  const contentContainer = document.getElementById("content-container");

  const scrollThreshold = 300; // Reduced scroll threshold for quicker effect

  if (scrollPosition < scrollThreshold) {
    const scaleValue = 1 - scrollPosition / scrollThreshold;
    const translateYValue = scrollPosition / 3; // Reduced translation for less movement
    const opacityValue = 1 - scrollPosition / scrollThreshold;

    cardImage.style.transform = `scale(${scaleValue}) translateY(-${translateYValue}px)`;
    cardImage.style.opacity = `${opacityValue}`;

    contentContainer.style.transform = `scale(${
      0.7 + scrollPosition / scrollThreshold / 2
    }) translateY(${translateYValue}px)`;
    contentContainer.style.opacity = `${scrollPosition / scrollThreshold}`;
  } else {
    cardImage.style.transform = "scale(0.7) translateY(0px)"; // Adjusted final scale
    cardImage.style.opacity = "0";

    contentContainer.style.transform = "scale(1) translateY(-30px)"; // Adjusted translation
    contentContainer.style.opacity = "1";
  }
});
