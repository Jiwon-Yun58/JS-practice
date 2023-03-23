/* 자바스크립트로 새롭게 할 일을 추가하게 되면 이벤트 핸들러를 새롭게 등록해 주어야 한다는 문제를 발견했고, 이벤트 핸들러를 불필요하게 많이 등록하면 프로그램의 성능에도 부정적인 영향을 미친다는 사실도 알게 되었습니다.

이번에도 지용이는 이를 어떻게 해결할지 막막한데요.

지용이를 위해 아래 조건에 맞는 코드를 작성해 주세요.

1. 이벤트 위임을 활용할 수 있도록 이벤트 핸들러 updateToDo 함수를 완성해 주세요. updateToDo는 이벤트가 발생한 대상이 item이라는 클래스 속성 값을 가지고 있을 때 동작해야 합니다.
2. 이벤트 핸들러를 li 태그 각각에 등록하는 것이 아니라 하나의 태그에만 등록해 주세요.

코드를 잘 작성했다면, 아래 내용처럼 페이지가 동작해야 합니다.

1. 첫 번째 두 번째 할 일 뿐만아니라 자바스크립트로 추가한 네 번째 할 일을 클릭할 때도 'done'이라는 class 속성값이 toggle되면서 스타일 변해야 합니다.
2. 세 번째 할 일은 클릭을 해도 아무런 변화가 없어야 합니다. */

const toDoList = document.querySelector("#to-do-list");

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  //   console.log(event);
  if (event.target.classList.contains("item")) {
    event.target.classList.toggle("done");
  }
}

// 2. 각 li 태그가 아니라 하나의 태그에만 이벤트 핸들러를 등록해 주세요
toDoList.addEventListener("click", updateToDo);

// 테스트 코드
const newToDo = document.createElement("li");
newToDo.textContent = "가계부 정리하기";
newToDo.classList.add("item");
toDoList.append(newToDo);

toDoList.children[2].addEventListener("click", function (e) {
  e.stopPropagation();
});
