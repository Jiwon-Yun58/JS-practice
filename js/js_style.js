// 스타일 다루기
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");

// elem.classList: add, remove, toggle
// classList : 클래스의 속성값을 유사배열로 다루는 프로퍼티.
// 클래스 속성을 하나씩 다룰 수 있을뿐만 아니라 클래스를 좀 더 편하게 다룰 수 있는 add, remove, toggle 메소드 활용도 가능
const item = tomorrow.children[1];
item.classList.add("done"); //클래스 추가 //여러개의 클래스 추가할때, item.classList.add("done", "other", "another");
item.classList.remove("done"); //클래스 제거 //item.classList.remove("done", "other", "another");
item.classList.toggle("done"); //클래스가 있으면 제거하고 없으면 추가
//토글의 두번째 파라미터는 boolean 기능을 가짐. item.classList.toggle("done", "true");인 경우-add의 기능만 함 / item.classList.toggle("done", "false");인 경우-remove 기능만 함

// elem.className
today.children[1].className = "done";

// style 프로퍼티
today.children[0].style.textDecoration = "line-through";
today.children[0].style.backgroundColor = "#DDDDDD";
today.children[2].style.textDecoration = "line-through";
today.children[2].style.backgroundColor = "#DDDDDD";

// *** 자바스크립트에서 sytle 프로퍼티를 이용하여 스타일을 다루기보다 자바스크립트에서 클래스 속성을 다뤄 css에서 스타일을 다루는 방식을 권장.
// *** 클래스 속성의 값을 통째로 바꿀때는 className, 클래스 속성의 값을 부분적으로 수정할 때는 classList를 활용함.
