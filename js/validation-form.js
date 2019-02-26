var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=textarea]");


 form.addEventListener("submit", function (evt) {
   if (!name.value || !email.value ||!textarea.value) {
   evt.preventDefault();
  }
 }
});
