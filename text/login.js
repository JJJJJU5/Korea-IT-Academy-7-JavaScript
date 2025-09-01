const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signInBtn = document.getElementById("sign-in");
const goSignupBtn = document.getElementById("go-signup");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signIn() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();
  const idIndex = users.findIndex((user) => user.id === inputId);
  if (idIndex !== -1) {
    if (users[idIndex].pw === inputPw) {
      alert("로그인 성공");
      window.location.href = "sss.html";
    } else {
      alert("비밀번호를 다시 입력해주세요");
      return;
    }
  } else {
    alert("아이디를 다시 입력해주세요.");
    return;
  }
}

signInBtn.addEventListener("click", signIn);

goSignupBtn.addEventListener("click", function () {
  window.location.href = "signup.html";
});

function saveUsers() {}
