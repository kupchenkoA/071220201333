window.addEventListener("DOMContentLoaded", function () {
  const addMessage = document.querySelector(".comment__buttom");
  addMessage.addEventListener("click", addComment);

  document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13 && event.ctrlKey) {
      addComment()
    }
  });

  const arr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Майа', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',];


  function addComment() {
    const textMessage = document.getElementById("get_val").value,
      blockMessage = document.createElement("div"),
      newComment = document.querySelector(".new__comment");
    blockMessage.classList.add("comment__block");
    let date = new Date();
    let year = date.getFullYear()
    let num = date.getDate()
    let month = date.getMonth()
    if (textMessage != "") {
      blockMessage.innerHTML = `
      <div class="name__user ">
                User#
                <span class="date__user ">
                ${num} ${arr[month]} ${year}
                </span>
              </div>
              <p class="comments__user ">
              ${textMessage}
              </p>
      `;
      newComment.append(blockMessage);
      document.getElementById("get_val").value = ""
    }
  }

});
