// window.alert('이것은 alert창입니다')

// confirm();
// confirm('정말 삭제하시겠습니까?');

// prompt();
// prompt('삭제를 하신다면 delete를 입력하세요');

// open();
// open();

// setTimeout() / clearTimeout()
let myExec;

function myFunction() {
  myExec = setTimeout(function () {
    console.log("5초 후 실행");
  }, 5000);
}
function myStopFunction() {
  console.log("취소합니다.");
  clearTimeout(myExec);
}
//함수 호출
myFunction();

// 보통 onclick에 사용하는 편
