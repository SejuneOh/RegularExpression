# 정규표현식

### 정규표현식이란?

_문자열을 검색하고 대체하는 데 사용하는 가능한 일종의 패턴언어이다._  
_사용 목적으로는 문자의 검색, 문자의 대체, 문자의 추출을 할 수 있다._

- 정규 표현식 테스트 사이트  
  [정규표현 테스트 사이트1](https://regex101.com/)  
  [정규표현 테스트 사이트2](https://regexr.com/)  
  [정규표현 테스트 사이트3](https://regexper.com/)

- 개발환경에 따라 조금씩 달라 질 수있으므로 환경을 잘 확인해야한다.

---

### 정규식 생성

```js
// 생성자
// new RegExp('표현', '옵션');
const regexp1 = new RegExp("^abc");
const regexp2 = new RegExp("^abc", "gi");

// 리터럴 방식
// /표현/옵션
const regexp1 = /^abc/;
const regexp2 = /^abc/gi;
```

---

### 플래그

- g : 표현을 찾아 모든 데이터를 리턴한다.(global)
- i : 대소문자 관련 없이 값을 찾겠다는 옵션 (ignore case)
- m : 여러 줄 일치(multi line)
- u : unicode

### Method

- 정규식.test(문자열): 정규식과 일치하는 특정한 문자가 있는지 true/false로 리턴한다.
- 문자열.match(정규식) : 인수로 정규식을 사용하여, 일치하는 문자열 배열 데이터로 리턴한다.
- 문자열.relpace(정규식, 대체문자) : 정규식으로 문자를 찾아 대체 문자로 바꾼다.

```js
const str = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque the, 
adipisci sit? Aut, harum ut molestias debitis voluptate the The fox
010-1111-1234
adfqwe@email.com
abbcccdddd
`;

// 정규식/옵션
const regexp = /fox/gi;

// Method
console.log(regexp.test(regexp)); // 특정 문자열이 있는 지 확인한다.
console.log(str.replace(regexp, "FOX")); // 원본데이터를  변경하지 않는다.
```

### \(Escape Charter)

_정규식에서 사용하는 문자중 .은 패턴의 시작을 의미하며, 의미를 없에고 문자로 판단하기 위해서 \(Escape Charter)를 사용해서 문자료 표현한다._

### 패턴

| 패턴       |                              설명                              |
| ---------- | :------------------------------------------------------------: |
| ^ab        |                 줄(line) 시작에 있는 ab와 일치                 |
| ab$        |                 줄 (line) 끝에 있는 ab와 일치                  |
| .          |              임의의 한 문자와 일치 띄어쓰기 포함               |
| a&verbar;b |                        a 또는 b와 일치                         |
| ab?        |                      b가 없거나 b와 일치                       |
| {3}        |                         3개 연속 일치                          |
| {3,}       |                       3개 이상 연속 일치                       |
| {3, 5}     |                3개 이상 5개 이하(3~5) 연속일치                 |
| [abc]      |                        a 또는 b 또는 c                         |
| [a-z]      |         a 부터 z 사이의 문자 구간에 일치(영어 소문자)          |
| [A-Z]      |         A 부터 Z 사이의 문자 구간에 일치(영어 대문자)          |
| [0-9]      |               0-9 사이의 문자 구간에 일치 (숫자)               |
| [가-힣]    |              가-힣 사이의 문자 구간에 일치(한글)               |
| \w         | 63개의 문자(Word, 대소문자 52개 + 숫자 10개 + underBar)에 일치 |
| \b         |         63개 문자에 일치하지 않느 문자 경계(Boundary)          |
| \d         |                       숫자(Digit)에 일치                       |
| \s         |                   공백(Space, Tab등) 에 일치                   |
| (?=)       |                           앞쪽 일치                            |
| (?<=)      |                           뒤쪽 일치                            |
