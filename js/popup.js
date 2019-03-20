var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-feedback-");
var close = document.querySelector(".modal-feedback-close");
var form = popup.querySelector("modal-feedback-show");
/* var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
*/
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";
try
{
  storage = localStorage.getItem("fullname");
}
catch (err)
{
  isStorageSupport = false;
}
link.addEventListener("click", function (evt)
{
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  if (storage)
  {
    fullname.value = storage;
    email.focus();
  }
  else
  {
    fullname.focus();
  }
});
close.addEventListener("click", function (evt)
{
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt)
{
  if (!name.value || !email.value)
  {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else
  {
    if (isStorageSupport)
    {
      localStorage.setItem("fullname", fullname.value);
    }
  }
});
window.addEventListener("keydown", function (evt)
{
  if (evt.keyCode === 27)
  {
    if (popup.classList.contains("modal-feedback-show"))
    {
      evt.preventDefault();
      popup.classList.remove("modal-feedback-show");
      popup.classList.remove("modal-error");
    }
  }
});
