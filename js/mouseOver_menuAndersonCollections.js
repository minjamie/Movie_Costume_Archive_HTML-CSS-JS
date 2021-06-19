var clickImages = document.querySelectorAll(".collectionsImage");

for (var i=0; i<clickImages.length; i++) {
  var clickImage = clickImages[i];
  console.log(innerHTML.clickImage[i])
};


for (var clickImage of clickImages) {
  clickImage.addEventListener('mouseout', function(event) {
    clickImage.classList.remove('upScale')
  });
};