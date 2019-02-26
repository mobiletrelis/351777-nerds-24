  var link = document.querySelector(".btn-contacts");
     var popup = document.querySelector(".modal-feedback");
     var close = document.querySelector(".modal-feedback-close");
     link.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.add("modal-feedback-show");
     });
     close.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.remove("modal-feedback-show");
});



