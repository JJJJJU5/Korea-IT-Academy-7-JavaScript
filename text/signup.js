const idInput = document.getElementById("user-id");
const pwInput = document.getElementById("user-pw");
const signBtn = document.getElementById("sign-up");
const signInBtn = document.getElementById("sign-in");
const goLoginBtn = document.getElementById("go-login");
let users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
  const inputId = idInput.value.trim();
  const inputPw = pwInput.value.trim();

  if (inputId == "") {
    alert("아이디를 입력하세요");
    return;
  }
  if (inputPw == "") {
    alert("비밀번호를 입력하세요");
    return;
  }

  const user = { id: inputId , pw: inputPw }

  idInput.value = "";
  pwInput.value = "";

  users.push(user);
  alert("회원가입이 완료되었습니다.");
  localStorage.setItem("users", JSON.stringify(users));
}
signBtn.addEventListener("click", signUp);
function saveUsers() {}

goLoginBtn.addEventListener("click", function() {
  window.location.href = "login.html"
})