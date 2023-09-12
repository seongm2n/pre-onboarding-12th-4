# 12차 프리온보딩 프론트엔드 인턴십 4주차 과제

> 주어진 데이터를 기반으로 시계열 차트 만들기

</br>

<td align="center"><a href="https://github.com/seongm2n"><img align="center" width="50" height="50" src="https://avatars.githubusercontent.com/u/62044613?v=4"/><br /><sub><h3>신성민</h3></sub></a><br /></td>
</br>

## 배포 링크

[4주차 과제 링크](https://pre-onboarding-12th-4-ten.vercel.app/)

</br>

## 개발 환경

- Environment  
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
- Development  
   ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/vite-9CC5FB?style=for-the-badge&logo=vite&logoColor=white)
  ![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-671CDF?style=for-the-badge&logo=axios&logoColor=white)
  ![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
  ![Recharts](https://img.shields.io/badge/recharts-4BC3CB?style=for-the-badge&logoColor=white)

</br>

## 프로젝트 구조

```
📦public
 ┣ 📂data
 ┃ ┗ 📜data.json
📦src
 ┣ 📂components
 ┃ ┣ 📂commons
 ┃ ┣ 📜ChartDisplay.jsx
 ┃ ┗ 📜ShowChartWithButtons.jsx
 ┣ 📂hooks
 ┃ ┗ 📜useChartData.jsx
 ┣ 📂lib
 ┃ ┗ 📜api.js
 ┣ 📂pages
 ┃ ┣ 📜Main.jsx
 ┃ ┗ 📜NotFound.jsx
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

</br>

## 프로젝트 설치 및 실행

프로젝트 패키지 설치

```
npm install
```

프로젝트 실행

```
npm run dev
```

</br>

## 주요 기능 목표 및 구현 설명

### 시계열 차트 만들기
Recharts 라이브러리를 활용하여 차트를 구현했습니다.     
- 다양한 차트 유형을 조합하여 사용할 수 있는 `ComposedChart`컴포넌트를 활용하였습니다.     
- 데이터를 시각화하기 위해 Bar와 Area 차트를 조합하여 사용했습니다.    
- dataKey 속성을 사용하여 차트의 X축과 Y축에 해당하는 데이터 항목을 지정하였습니다.

  </br>

### 호버 기능 구현
Recharts 라이브러리의 Tooltip 컴포넌트를 활용하여 사용자가 차트 위로 마우스를 이동할 때 해당 데이터 항목의 정보를 표시하도록 구현하였습니다. 
- 기본적으로 툴팁은 X축(시간)과 Y축(막대 및 영역 차트의 값)의 값을 보여주지만, 요구사항에 따라 시간 대신에 해당 데이터 항목의 지역 이름을 표시해야 했습니다. 
- 이를 해결하기 위해 호버했을 때 툴팁이 특정 시간과 X축 값을 가진 데이터 항목과 일치하면, 해당 데이터 항목의 지역 이름을 반환하도록 설정하였습니다.

  </br>

### 필터링 기능 구현

React 라우팅 라이브러리인 react-router-dom에서 제공하는 React 훅인 useSearchParams를 활용하여 현재 URL의 쿼리 매개변수를 읽고 수정하는 기능을 구현했습니다.    
쿼리 매개변수는 URL에 ? 뒤에 오는 키-값 쌍으로 데이터를 전달할 때 사용하는데, 이를 효과적으로 다룰 수 있게 해줍니다.

- 코드에서는 `useSearchParams` 훅을 사용하여 현재 URL의 쿼리 매개변수를 읽어오고, 그 중에서도 `district`라는 쿼리 매개변수의 값을 가져와서 `district`변수에 저장했습니다. 이렇게 하면 현재 선택된 지역을 파악할 수 있습니다.

- `useEffect` 훅을 활용하여 페이지가 처음 열릴 때 지역 전체를 선택한 상태로 보여지도록 설정했습니다.

- 버튼들은 `id` 배열을 매핑하여 지역 이름을 표시하며, 클릭할 때 `clickDistrict`함수를 호출하여 선택한 지역을 변경합니다. 버튼을 클릭하여 다양한 지역을 선택할 수 있습니다.

- 바 차트의 특정 데이터 구역을 클릭할 때도 `clickDistrict`함수가 호출되어 선택한 지역을 변경합니다. 바 차트를 활용하여 원하는 지역을 선택하고 그에 따른 데이터를 확인할 수 있습니다.

