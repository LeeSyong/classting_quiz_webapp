# 🔰 클래스팅 Quiz WebApp

- 프론트엔드 개발자 과제 [퀴즈]

<br>
<br>

# 📆 과제 수행 기간

- 2022..09.28.(수) ~ 2022.10.01.(토) => 총 4일간 진행

<br>
<br>

# 📚 사용 기술

- react
- styled-components
- storybook
- webpack
- jest
- eslint
- prettier
- git

<br>
<br>

# 🛹 배포 링크 및 세팅 방법

## 배포 링크

https://resilient-profiterole-070e6a.netlify.app

## 프로젝트 세팅 방법

```
$ git clone https://github.com/LeeSyong/classting_quiz_webapp.git
$ npm install
$ npm run dev
```

## 테스트 실행 방법

```
$ npm run test
```


<br>
<br>

# 📁 폴더 구조

```
src
 ┣ assets
 ┣ components
 ┃ ┣ atoms
 ┃ ┣ molecules
 ┃ ┣ organisms
 ┃ ┗ templates
 ┣ constants
 ┣ hook
 ┣ pages
 ┣ store
 ┃ ┣ index.js
 ┃ ┗ quizSlice.js
 ┣ styles
 ┣ App.jsx
 ┣ index.js
 ┣ setupTests.js
 ┗ test-utils.js
```

<br>
<br>

# 🔎 요구 사항 및 구현 방법

필수 구현 사항 및 추가 구현 사항 모두 구현을 완료했습니다.

<br>

## 필수 구현

### 1. 사용자는 "퀴즈 풀기" 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.

- `Main 페이지`에서 사용자는 퀴즈에 대한 설명과 함께 '퀴즈 풀기' 버튼을 볼 수 있습니다.
- '퀴즈 풀기' 버튼 클릭 시 dispatch를 통해 redux store에 액션 함수를 보내주었습니다.
- 공개 백엔드 API로부터 퀴즈 데이터를 받아와 저장하기 위해 redux-thunk를 사용했습니다.
- 후에 총 소요 시간을 구하기 위해 사용자가 '퀴즈 풀기' 버튼 클릭 시 현재 시간의 밀리초 단위 값을 로컬 스토리지에 저장해주었습니다.

### 2. 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.

- `Quiz 페이지`에서 사용자는 퀴즈의 문제(questions)와 보기(answers)를 볼 수 있습니다.
- 문제는 atoms/Text 컴포넌트로 나타내주었고, 보기는 molecules/Examples 컴포넌트를 만들어 나타내주었습니다.
- 보기를 눌렀을 때 실행될 이벤트 핸들러 함수를 작성해 prop으로 넘겨주었습니다.
이때 해당 이벤트 핸들러 함수 내에서 dispatch를 이용해 reducer 안에서 현재 선택한 값(answer)이 현재 문제(question)의 정답인지 아닌지를 확인한 후 그에 따라 상태를 업데이트해주었습니다.

### 3. 사용자는 답안을 선택하면 다음 문항을 볼 수 있다.

### 3-1. 답안 선택 후 다음 문항 버튼을 볼 수 있다.

- 4개의 보기 중 하나를 선택해야만 다음 퀴즈 페이지로 이동하는 버튼이 나타납니다. 해당 버튼을 클릭함으로써 페이지를 이동할 수 있습니다.

### 3-2. 답안이 맞았는지 틀렸는지 바로 알 수 있다.
  
- 기본 색은 초록색, 보기를 선택한 후 정답은 파란색, 사용자가 선택한 답안은 정답이 아닐 경우 파란색으로 변경해주었습니다.

### 3-3. 다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.

  - '다음 문제' 버튼을 클릭한 경우 react-router-dom의 useParams와 useNavigate를 이용하여 현재 페이지 url의 파라미터 값에 따라 페이지를 이동해주었습니다.


### 4. 모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.

### 4-1. 퀴즈를 마칠 때까지 소요된 시간

- 앞서 `Main 페이지`에서 Quiz 페이지로 이동 시에 현재 시간의 밀리초 단위 값을 로컬 스토리지에 저장했습니다.
- 퀴즈 풀이를 마친 후 결과를 보여주는 `Result 페이지`에서 총 소요 시간을 구하기 위해 useElapedTime custom hook을 직접 만들어 사용했습니다.
- useElapsed custom hook에서는 date-fns와 로컬 스토리지 저장 데이터를 이용해 총 경과 시간을 계산하도록 했습니다.

### 4-2. 정 오답 개수

- isCorrect 값이 true인지 false인지에 따라 각각 그 수를 세어주었습니다.

<br>

## 추가 구현

### 1. 정 오답에 대한 비율을 차트로 표기

  - chart.js를 이용해 정 오답에 대한 비율을 나타내기 위해 앞서 구한 수를 차트의 데이터로 넘겨주었습니다.


### 2. 다시 풀기

  - 사용자가 `Result 페이지`에서 '다시 풀기' 버튼을 누르면 `/quiz/1` ,즉 직전에 풀었던 첫 번째 `Quiz 페이지`로 이동하도록 했습니다.
  - 사용자가 '다시 풀기' 버튼을 클릭해 같은 퀴즈를 다시 푸는 경우 redux state 값(isCorrect와 selected_answer)을 초기화해주었습니다. 

### 3. 오답 노트

  - 사용자가 `Result 페이지`에서 '오답 노트' 버튼을 누르면 `/notes` ,즉 직전에 풀었던 퀴즈 데이터 리스트를 보여주는 `Notes 페이지`로 이동하도록 했습니다.
  - 해당 페이지는 atmos/Table 컴포넌트와 이로 이루어진 molecules/QuizTableList 컴포넌트를 생성해 테이블로 구현해주었습니다.
  - 사용자는 `Notes 페이지`에서 각 퀴즈에 속한 질문, 정답, 선택 답안 그리고 클릭 시 해당 퀴즈에 대한 오답 노트를 작성할 수 있는 '작성' 버튼을 볼 수 있습니다.
  - 테이블 너비를 일정하게 맞춰 내부 콘텐츠가 해당 너비 크기 이상인 경우 말줄임표가 적용되도록 했습니다.

<br>

## 그 외

- `Atomic Design`을 기반으로 개발을 진행하며 props drilling 문제를 개선하기 위해 전역 상태 관리가 필요했습니다.
- 한편, 프로젝트에 주어진 상태 관리 로직이 다소 복잡하다고 생각되어 최종적으로 상태 관리 라이브러리로 `Redux`를 선택하게 되었습니다.
- 더불어 백엔드 API로부터 데이터를 받아오는 비동기 작업을 다루기 위해 `redux-thunk middleware`를 추가로 사용했습니다.
