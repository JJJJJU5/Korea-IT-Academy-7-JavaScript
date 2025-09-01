// DOM 요소 가져오기 위한 변수 선언 및 초기화
const todoInput = document.getElementById("todo-input"); // 메서드 결과값을 변수에 대입
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
// 처음 페이지에 들어갔을 때 localStorage를 참조해서 기존 todo 데이터가 있다면 가지고 와야겠네요.
let todos = JSON.parse(localStorage.getItem("todos")) || [];
// Todo 리스트를 불러오는 과정이 필요합니다.
// 6번 라인의 해석은 값이 localStorage.getItem('todos')에 데이터가 있으면 true 이기 떄문에 JSON으로 바꿔주고  아무런 데이터가 없으면 빈 배열을 저장
console.log(todos);
// 필요 -> 맨 처음에 localStorage를 뒤지면 빈 배열이 저장된다. 이후에 배열 내부의 element들에 객체를 추가했다.
function renderTodos() {
  todoList.innerHTML = ""; // 기존 todo list를 초기화 -> 추가했을 때 누적 안되게 , todoList =/= todos
  todos.forEach((todo, index) => { // todos 배열을 반복 돌려서 목록을 생성
    // todos의 반복을 돌면 내부 element가 있을텐데, 그때마다 li 태그를 생성한다는 의미
    // 웬만 하면 forEach() / map()가 요구된다고 알아두면 속편하다.
    // 보통은 첫 번째가 반복문 돌 때의 element의 이름을 선언한다.
    // 두 번째가 index 관련이라고 생각하면 된다.
    
    // 각 todo는 JS 객체에 해당하는 것, 이걸 페이지 상에서 보여주기 위해서는
    // ul 태그의 자식인 li 태그가 필요하다.
    const li = document.createElement("li"); // 반복문 내부에 있으니 지역변수에 해당함.
    // li 태그만 만들었지 클래스 이름을 정하지 않았으니
    li.className = "todo-item"; // Java의 객체에 field 값 대입하는 방법과 여전히 동일하다.
    if (todo.completed) { //localStorage의 'todos' key의 내부를 확인 했을 때 배열로 저장되어있고, 거기에 내부에 JS 객체가 있는데 그 객체가 현재 todo라고 이름 붙여져있다. 그 todo들은  text라는 key, completed라는 key를 가지고 있다.
    // 그 completed는 자료형이 boolean이였고 , 걔가 true / false인지에 따라서 22번 라인의 조건문의 실행여부가 결정된다.
    // .css 파일에서 completed 속성 부분을 적용해주기 위해서 쓴 코드라인이 된다. 
    // completed가 true라면 할 일이 완료되었음을 표시해주기 위해서 css 상 차이를 만들었는데, 그걸 적용하기 위한 것
      li.classList.add("completed");
    }
    // 19 번 라인부터 26번 라인까지의 해석은 js객체 상의 key가 completed인 애의 value가 true라면 li 태그에 completed라는 속성을 추가해주는데, 이게 추가 되면 .css에서 정의된 추가 스타일을 적용하기 위한 것. 취소선, 배경색 등).
    // li 태그의 자식 요소로 input checkbox / span / button로 구성되어 있기 때문에 각각을 또 요소를 만들 필요가 있다. #1, #2,#3 
    // 체크박스
    const checkbox = document.createElement("input");// #1
    // 위의 코드는 type가 text가 아니라 checkbox니까
    checkbox.type = "checkbox";
    // input의 type이 checkbox라면 checkbox하고 =""가 없는 애가 있었다. input type"checkbox" checked> 형태였다
    checkbox.checked = todo.completed; // todo.completed는 boolean 자료형이다. checked 자체는 true / false 상관없이 계속 체크가 된 상태로 유지가 된다.

    // 텍스트 내용 생성 - span 태그
    // div가 아니라 span인 이유 자체도 생각할 필요가 있다.
    // div - 컨텐츠가 있는 가로줄 전체가 영역 
    // spawn - 컨텐츠가 있는 길이만큼만 영역
    const span = document.createElement("span"); //  #2
    span.className = "todo-text"; // 마찬가지로 css 적용을 위해서 
    span.textContent = todo.text; // 내용이 있는거니까 배열내의 element인 JS 객체의 text라는 키의 value를 span 태그의 내부에 집어넣어서 페이지 상에 출력

    // 삭제 버튼 - button 태그
    const deleteBtn = document.createElement("button"); // #3
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&times"; // x기호

    // 요소들을 li 변수에 추가해야 한다. li 내부에 체크박스 / 스팬 / 버튼이 있기 때문
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    // 그리고 이 li를 <ul> 태그로 추가해야 한다.
    todoList.appendChild(li);

    // 이벤트리스너 추가
    // 체크박스 변경이벤트
    checkbox.addEventListener("change", () => {
      todos[index].completed = checkbox.checked; // checkbox가 type고 checked는 속성에 해당함
      // 완료 상태에 따라 CSS 클래스를 토글
      li.classList.toggle("completed", checkbox.checked);
      saveTodos();
    });
    // 삭제 버튼 클릭 이벤트
    deleteBtn.addEventListener("click", () => {
      // 삭제할 항목의 텍스트를 이용해서 배열 내에서 정확한 인덱스를 찾아낸다.
      // 보통은 index로 내용을 확인하지만 계속 삭제를 하면 index 넘버가 바뀐다.
      // 그래서 input에 입력했던 내용을 근거로 index를 역으로 찾아낼 예정
      const itemText = span.textContent; // 이 코드로 사용하는 이유는 .trim() 을 사용해서 공백을 날렸기 때문
      // 배열 내에서의 내용과 span 태그 내에서의 내용이 같은 index를 뽑아내서 itemIndex 변수에 저장
      const itemIndex = todos.findIndex((item) => item.text === itemText);
      if (itemIndex !== -1) {
        // 일치하는 인덱스가 없으면 - 1이다.
        todos.splice(itemIndex, 1); // itemIndex에 해당하는 거 element '하나'를 삭제
        // 주의 : splice() =/= slice() =/= : 다르다
        li.remove();
        saveTodos();
      }
    });
  });
}
function saveTodos() {
  // localStorage에 저장한다는 의미
  localStorage.setItem("todos", JSON.stringify(todos));
  // 1번 매개변수 - key이다.
  // 2번 매개변수 - 그 키에 들어가는 value이다.
  localStorage.setItem('temp', '안녕');
  // localStorage의 value가 배열이라고 오해할 까봐 추가한 코드 -> 여기 value는 String이다. 
}
function addTodo() { 
  const todoText = todoInput.value.trim(); // trim() 공백제거 method
  if (todoText === "") {
    alert("내용을 입력하세요"); // 메서드를 종료시키겠다는 의미 이 아래의 코드라인을 실행 X
    return;
  }
  // input 창에 내용이 있다면 내용이 들어갈 JS 객체 선언
  const newTodo = {
    text: todoText,
    completed: false, // 초기 생성시에 무조건 false로 고정
  };
  // todos에 todo를 추가
  todos.push(newTodo);
  // 추가한 이후에 input 태그 내의 내용을 비우는 역할 추가버튼을 누르면 입력한 내용이 초기화
  todoInput.value = "";
  renderTodos();  // 추가 버튼 누르고 나서 다시 (갱신된) 리스트를 가져와야 하니까 renderTodos() 함수 호출
  saveTodos();  // 그리고 localStorage에도 저장해줘야하니까 savaTodos()함수 호출

  // 의문이 생길 수 있는게 어차피 renderTodos()할떄 savaTodos()가 필수인 것 같은데 함께 묶어서 쓰면 안되는가 ?

  // method는 하나 당 기능 하나라고 생각해야 한다.
  // 모듈화  
}
// '추가' 버튼 클릭 이벤트
addBtn.addEventListener("click", addTodo); // button 태그의 onclick 속성 해당한다 2번째 argument로 addTodo 합수를 넣었는데. addTodo()가 아니라 addTodo를 라는 점을 주목해야 한다.

//엔터 키 입력 이벤트
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo(); // input태그에 Enter키 입력을 갑지하면 addTodo(); 함수를 호출할 것.
  }
});
// 새로고침했을 때 renderTodos()가 호출 되어야 함.
window.onload = renderTodos();
