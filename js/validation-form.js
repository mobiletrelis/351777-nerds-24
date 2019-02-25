var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");


 form.addEventListener("submit", function (evt) {
 if (!name.value || !email.value )|| !text.value {
 evt.preventDefault();
 console.log("Все поля обязательные для заполнения");
 }
