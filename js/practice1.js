/* 
지용이는 본인이 작성한 <ul id="to-do-list"></ul> 태그 안에 li 태그로 오늘 할 일들을 추가하고 싶어합니다.

어려워하는 지용이를 위해서 아래 내용을 만족하는addNewTodo함수를 완성해 주세요.

li 태그이름을 가진 요소 노드를 만든다.
그 요소 노드에 파라미터로 전달받은 오늘 할 일(text)을 담는다.
<ul id="to-do-list"></ul>태그의 마지막 자식 요소 노드로 추가한다. */

const toDoList = document.querySelector("#to-do-list");

function addNewTodo(text) {
  // 여기에 코드를 작성하세요
  const listText = document.createElement("li");
  listText.textContent = text;
  toDoList.append(listText);
}

// 테스트 코드
addNewTodo("자바스크립트 공부하기");
addNewTodo("고양이 화장실 청소하기");
addNewTodo("고양이 장난감 쇼핑하기");
