/* 지용이는 지난 시간에 이어서 이번엔 완료한 일을 체크하는 UI를 만들기 위해서 클릭했을 때 스타일이 변하는 기능을 만들어 보려고 합니다. 아래 코드가 지용이가 처음 작성한 코드예요.

const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

items[0].addEventListener('click', function() {
  items[0].classList.toggle('done');
});

items[1].addEventListener('click', function() {
  items[1].classList.toggle('done');
});

items[2].addEventListener('click', function() {
  items[2].classList.toggle('done');
});

코드를 실행해 보니 클릭했을 때 스타일도 변하고 나름대로 잘 작성한 것 같지만, 반복되는 부분들이 너무 많아 만약 할 일들이 점점 더 늘어난다면 이런 비슷한 코드를 훨씬 더 많이 작성해야 할 것 같습니다.

그리고 방금 지용이가 작성한 코드처럼 addEventListner를 호출할 때 바로 작성한 이벤트 핸들러는 removeEventListener로 제거할 수도 없는데요. 지용이는 이를 어떻게 해결해야 할지 막막합니다.
*/

// 1. 이벤트 객체를 활용한 이벤트 핸들러, updateToDo 함수를 작성한다. 이 함수는 이벤트가 발생한 대상에 'done'이라는 class 속성값을 toggle하는 함수여야 합니다.
// 2. 반복되는 부분들이 좀 더 간단하게 정리되도록 이벤트 핸들러를 등록하는 반복문을 작성해 주세요.
// 코드를 잘 작성했다면, 첫 번째 두 번째 할 일은 클릭했을 때 'done'이라는 class 속성값이 toggle되면서 스타일이 변하고, 세 번째 할 일은 클릭을 해도 아무런 변화가 없어야 합니다.

const toDoList = document.querySelector("#to-do-list");
const items = toDoList.children;

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  event.target.classList.toggle("done");
}

// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", updateToDo);
}

// 테스트 코드
items[2].removeEventListener("click", updateToDo);
