let brands = ["애플", "구글", "메타", "아마존", "삼성전자"];

// console.log(brands[0]);
// console.log(brands[1]);
// console.log(brands[2]);
// console.log(brands[3]);
// console.log(brands[4]);

// 이과 같은 방식을 굳이 할 필요 없으니 반복문을 사용
// Java와 동일하다

// for (let i = 0; i < brands.length; i++) {
//   console.log("반목문으로 출력한 " + brands[i]);
// }

// let productList = [
//   {
//     name: "솔의눈",
//     price: 700,
//   },
//   {
//     name: "레쓰비",
//     price: 780,
//   },
//   {
//     name: "파워에이드",
//     price: 1200,
//   },
//   {
//     name: "오렌지주스",
//     price: 1400,
//   },
//   {
//     name: "제로콜라",
//     price: 800,
//   },
// ];

/*
  이상의 코드 라인에서 주목해야 할 부분은 첫 번째, 마지막 index에 해당하는 element 다음에도 `,`가 찍혀있는데도 불구하고 오류가 발생하지 않는다는 점.
  두 번째, Array의 element인 object의 마지막 property의 value 값 다음에도 ','가 있지만 오류가 발생하지 않는다는 점
  이다.
  
  추후에 property를 추가하거나 혹은 element를 추가하거나 할 때 편의성을 위해 ,를 찍어두는 것이 관행 . 이러한 이유로 오류가 발생하지 않음.
*/

// console.log(productList[4]); // 그럼 Array의 element는 object이다
// '제로콜라'라는 string 데이터만 뽑아내기 위해서는 어떤 추가 작업을 해야하는가?
// console.log(productList[4].name);
// console.log(productList[4]["name"]);
// som = productList[0].price + productList[2].price;

// // 솔의 눈과 파워에이드 음료수 합을 구하세요
// console.log(
//   productList[0].name +
//     "의 가격과 " +
//     productList[2].name +
//     "의 가격은 각 각" +
//     productList[0].price +
//     "원과 " +
//     productList[2].price +
//     "원으로, 그 합은" +
//     som +
//     "원 입니다."
// );

// let inputCoin = 900;
// let outputList = []; // 빈 배열을 하나 선언하고
// // inputCoin으로 살 수 있는 음료 목록들을 집어넣기

// for (let i = 0; i < productList.length; i++) {
//   if (inputCoin >= productList[i]["price"]) {
//     // outputList에 element로 추가
//     outputList.push(productList[i]);
//   }
//   console.log("살 수 있는 음료 목록 : " + outputList);
//   // 결과값 = object,object
// }
// for(let i = 0 ; i < outputList.length ; i++){
//   console.log(outputList[i]);
// }
// 이 코드 같은경우는 내부의 객체들을 하나씩 출력이 가능함

/*
  즉 이상의 내용을 정리해봤을 때 배열 내부에 객체가 element라면, 배열 자체를 console.log(배열명);으로 출력 했을 때 결과값이 [object,Object]...형식으로만 나오게 되고

  각 객체의 명확한 상태를 알기 위해서는 결국 배열의 각 element를 추출하는 반복문을 작성해야 한다는 점을 확인할 수 있다.
*/

// for ( let i = 0 ; i < outputList; i++) { 
//   for( let j = 0; j < outputList[i];j++){ 
//     console.log(outputList[i][j]);
//   }
// }  // 결과 실행 X 이유 - 논리적으로 말이 되지 않는다. 
/*
  outputList의 element의 자료형은 객체이고, 객체에는 index number가 존재하지 않으므로 이중 for문을 통해서 객체 내부의 각 property를 확인하는 것은 불가능하다.

  그럼 마찬가지로 일반 객체의 각 property를 추출해서 데이터를 가공하는 방식이 불가능함을 의미한다.
  
*/
// 2. for-in문
let person = {
  fName: '일',
  lName:'이',
  age: 20,
}
// Js에서 객체에 반복문을 돌리게 되면 key값을 return한다.
// 그래서 해당 key에 할당된 value를 추출하고 싶다면 121 번 라인과 같은 방식으로 코드를 작성해야 한다.
for(const key in person) { // 여기서 추출되는 key는 각각 fName / lName / age이다
  console.log(person.key); // 불가능함
  console.log(person[key]); 
  // 그러면 console.log(person.key);는 불가능한가? 
  // 이 시점에서 첫 번째 반복이라고 가정해보면. key - 'fName';이 저장되어 있다고 볼 수있다.

  // 즉 person.key는 person.fName이 아니라 person.'fName'(string 데이터)라는 점이 문제이다
  // 굳이 # 1, 2로 두가지 방식을 통해서 객체의 value를 조회 할 수 있음.
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8,  9];
// 일반 for문으로 추출하여 
// for( let i = 0 ; i < nums.length; i++) {
//   console.log(nums[i])
// }
// 객체의 properrty의 key를 추출할 수 있으니까, 마치 향상된 for문 처럼 여겨져서 
// 배열을 for-im문으로 추출 시도
// for ( let num in nums) {
//   console.log(num)
//   console.log(typeof num) // 결과값 : string
// } 

//3. for-of문
// for-in문의 경우 객체 한정으로 생각하는 편이 낫다
// 일반적인 Java에서의 enhanced for문에 해당하는 것은 for-of문이라고 생각하면 좋다

for(const num of nums) {
  console.log(num);
  console.log(typeof num);

}
