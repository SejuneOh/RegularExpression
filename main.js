const str = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque the, 
adipisci sit? tHe Aut, harum ut molestias debitis voluptate the The fox dog
010-1111-1234
adfqwe@email.com
abbcccdddd
https://www.sitde.com
http://www.sitde.com
동해물과 백두산이
`;


// 찾은 the를 모두 찾고 싶으면 g 플래그를 사용한다.
// 대소문자 관련없이 옵션은 i
// const regexp = new RegExp('the', 'gi');

// literal 방식
const regexp = /fox/gi;
console.log(str.match(regexp));


// Method
console.log(regexp.test(regexp));
console.log(str.replace(regexp, 'FOX'));

// Flag
// g : 일치한 모든내용
// i : 대소문자 구별하지 않는다.
// m : 하나의 문자데이터 시작과 끝 줄바꿈이 되어있는 줄마다 해석을 하겠다.

const reg = /\.$/gim // 정규식에서 .은 패턴이다.  .를 찾고싶으면 \기호를 사용해서 문자로 변환한다(escape charter).
console.log(str.match(reg)); // 배열로 리턴


// 패턴

// $ : 정규식 문자데이터 뒤에 작성되어야 하며 그 문자로 끝나는 기준점으로 문자가 있는지 찾는다.
// . : 문자데이터에서 모든 글자 데이터와 일치 할 수있다. 띄어쓰기 포함
// | : or의 혹은 먼저 찾아지는 것을 반환된다.
// ? : ?앞에 문자가 있을 수도 있고 없을수도 있는 경우를 찾는 패턴
// {num} : num 수만큼 일치하는 문자를 반환한다.
// {num, } : num 이상의 연속 일치되는 문자를 찾겠다.
// {num1, num2} : num1~ num2의 문자를 찾겠다
console.log(
  // str.match(/https?/g)
  //str.match(/\b\w{2,3}\b/g) //\w : 숫자 포함 알파벤 문자, \b: 숫자가 아닌 부분의 경계를 만든다.
);


console.log(
  // str.match(/[fox]/g) //모든 f,o,x를 찾는다.
  // str.match(/[0-9]{1,}/g)
  // str.match(/\bf\w{1,}\b/g)
  // str.match(/\d{1,}/g)  숫자만
);


const h = `      the hello world    !`;

// console.log(h.replace(/\s/g, ''));  공백문자 제거

console.log(
  // str.match(/.{1,}(?=@)/g) 앞쪽 일치
  // str.match(/(?<=@).{1,}/g) 뒤쪽 일치
);
