<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/logo_team17.png" alt="Logo" /><br>
---
> 식단에 대한 칼로리 및 3대 영양소를 계산해주고,<br> 자신의 식단을 등록해 전문가의 솔루션을 받을 수 있는 서비스입니다. 

### 목차
1. [기획 의도 / 목적](#🥕-기획-의도--목적)
2. [프로젝트만의 차별점](#🥕-프로젝트만의-차별점)
3. [구현 기능](#🥕-구현-기능)
4. [유저 시나리오](#🥕-유저-시나리오)
5. [사용 스택](#🥕-사용-스택)
6. [프로젝트 자료](#🥕-프로젝트-자료)
7. [팀원 소개](#🥕-팀원-소개)

<br>

## 🥕 기획 의도 / 목적

- 누군가 만들어놓은 다이어트 식단 포맷을 따라가는 서비스들이 많습니다.
- 현재 내가 먹고있는 식단이 대략 몇 칼로리인지, 영양정보는 어떤지는 손수 찾아야 했습니다.
- 누구나 한번쯤 계획했다가 실패하는 다이어트를 칼로리라는 직관적 지표를 통해 도와주는 서비스입니다.
- 다이어트를 계획중인 유저라면 사용 가능하며, 인터넷 서핑이 귀찮은 사람이라도 손쉽게 식단 관리를 할 수 있습니다.
- 남녀노소 사용할 수 있는 간단한 서비스를 만들고자 하였습니다.

<br>

## 🥕 프로젝트만의 차별점

- 나만의 맞춤 식단을 그램 단위로 계산 가능합니다.
- 식단 총 칼로리와 영양정보, 식단 내 아침 점심 저녁 식사별 칼로리와 영양정보, 음식 낱개의 영양정보를 제공합니다.
- 영양학적 솔루션은 전문가들의 도움을 받아 식단을 더욱 개선해 나만의 맞춤 건강식단을 제공합니다.
- 목표 고객층이 특정되어 있지 않습니다.

<br>

## 🥕 구현 기능

  |음식 검색 및 영양소 계산|
  | ---------------------------------  |
  |- 음식 검색<br><img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8ba3520-7315-4171-862b-1bcc72a9c7ff%2F%25E1%2584%2589%25E1%2585%25B5%25E1%2586%25A8%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AB_%25E1%2584%2580%25E1%2585%25A8%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB.gif?table=block&id=0d2b67e5-11fe-4895-96d5-4856442f7cf3&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2" ><br>- 영양소 계산<br><img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c373b82-21ea-46f4-85f0-1d7280625db5%2F%25E1%2584%258F%25E1%2585%25A1%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A9%25E1%2584%2585%25E1%2585%25B5_%25E1%2584%2580%25E1%2585%25A8%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB.gif?table=block&id=8ba5483d-0d71-4c4a-83d6-f883855f136d&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2" >|

  |구글 / 카카오 OAuth 로그인 기능|
  | ---------------------------------  |
  |<img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1ff5a346-00fc-4b53-a0dc-44f94fdc4eb6%2F%25E1%2584%2589%25E1%2585%25B5%25E1%2586%25A8%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AB_%25E1%2584%258C%25E1%2585%25A5%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25A8_%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%258C%25E1%2585%25A6.gif?table=block&id=e5896e65-7add-4174-bdce-d2cb6316006a&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2">|

  |로그인 시 나의 식단 저장, 검색, 삭제 기능|
  | ---------------------------------  |
  |<img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1ff5a346-00fc-4b53-a0dc-44f94fdc4eb6%2F%25E1%2584%2589%25E1%2585%25B5%25E1%2586%25A8%25E1%2584%2583%25E1%2585%25A1%25E1%2586%25AB_%25E1%2584%258C%25E1%2585%25A5%25E1%2584%258C%25E1%2585%25A1%25E1%2586%25BC_%25E1%2584%2580%25E1%2585%25A5%25E1%2586%25B7%25E1%2584%2589%25E1%2585%25A2%25E1%2586%25A8_%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25A8%25E1%2584%258C%25E1%2585%25A6.gif?table=block&id=e5896e65-7add-4174-bdce-d2cb6316006a&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2">|

  |사용자 상세 정보 입력 시 BMI / RDI 자동 계산 기능|
  | ---------------------------------  |
  |<img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3922ff4a-14fa-45d1-b338-6604e5708a0e%2F%25E1%2584%2592%25E1%2585%25AC%25E1%2584%258B%25E1%2585%25AF%25E1%2586%25AB%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC%25E1%2584%2587%25E1%2585%25A9_%25E1%2584%2589%25E1%2585%25AE%25E1%2584%258C%25E1%2585%25A5%25E1%2586%25BC_rdi_bmi_%25E1%2584%258C%25E1%2585%25A1%25E1%2584%2583%25E1%2585%25A9%25E1%2586%25BC%25E1%2584%2580%25E1%2585%25A8%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB.gif?table=block&id=e93eb4a5-a240-4450-a56e-450d9b95a10b&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2">|

  |전문가 자격증 이미지 등록 기능|
  | ---------------------------------  |
  |<img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda29cd1a-5af5-42df-a501-a5732bcb97c4%2F%25E1%2584%258C%25E1%2585%25A1%25E1%2584%2580%25E1%2585%25A7%25E1%2586%25A8%25E1%2584%258C%25E1%2585%25B3%25E1%2586%25BC_%25E1%2584%2583%25E1%2585%25B3%25E1%2586%25BC%25E1%2584%2585%25E1%2585%25A9%25E1%2586%25A8.gif?table=block&id=cdd2a0d2-97cd-4946-8edc-c0f6541cc7a0&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2">|

  |전문가 코멘트 추가, 수정, 삭제 기능|
  | ---------------------------------  |
  |<img src="https://elice.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c9e1310-65e5-47f0-9cf4-a01eda2eaaf5%2F%25E1%2584%258F%25E1%2585%25A9%25E1%2584%2586%25E1%2585%25A6%25E1%2586%25AB%25E1%2584%2590%25E1%2585%25B3_%25E1%2584%258E%25E1%2585%25AE%25E1%2584%2580%25E1%2585%25A1.gif?table=block&id=da9d5413-8c3d-4005-9796-46f8dcff0bd9&spaceId=530d1033-cf9f-41a2-b140-62d3e90887dd&userId=&cache=v2">|

<br>

## 🥕 유저 시나리오

<img src="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/flowchart.png" alt="Flow Chart" /><br>

## 🥕 사용 스택

  - 프론트엔드
    - React
    - Styled component
    - Redux-toolkit
  - 백엔드
    - Express, Node
    - Mongoose, multer, AWS S3
    - Babel
  - 인프라
    - Google Cloud Platform, Docker
  - 컨벤션
    - eslint(Airbnb), prettier


<br>

## 🥕 프로젝트 자료
- [데일리 스크럼](https://working-lunge-260.notion.site/8435015d087f421b9941b525fa102dd9)
- [기술 문서](https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project_2/team17/hea17h-service/-/wikis/17%ED%8C%80-hea17h-service-%EA%B8%B0%EC%88%A0%EB%AC%B8%EC%84%9C)
- [최종 발표 PPT](https://www.dropbox.com/s/9nt4b4mfvz9r9uw/%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9CPPT_hea17h_%EB%B0%B1%EC%97%85.pdf?dl=0)

<br>

## 🥕 팀원 소개

| 이름   | 역할       | 구현 기능                                                                             |
| ------  | --------  | ----------------------------------------------------------------------------------- |
| 주지호 | 백엔드(팀장)| 유저(일반, 전문가) API, 코멘트 & 식단 API, 네이버 / 카카오 OAuth 적용, 전반적인 팀 프로젝트 일정 진행 |
| 신재이 | 백엔드      | 음식 & 카테고리 API, 칼로리 검색 외부 API 연동, AWS S3 이미지 업로드, GCP VM 설정 및 Docker 배포  |
| 김단헌 | 프론트엔드   | 유저 식단 목록 페이지, 유저 코멘트 페이지, 전문가 인증 페이지, UI 서포트   |
| 조영환 | 프론트엔드   | 식단 계산 페이지, 음식 검색 페이지, 칼로리 및 영양소 확인 페이지, 서비스 디자인 및 기획 |
| 조희승 | 프론트엔드   | 회원가입, 로그인, 로그아웃, 정보수정, 회원탈퇴 페이지, Nav바 컴포넌트 구현  |
| 조희정 | 프론트엔드   | 메인 홈 페이지, 전문가 코칭페이지 - 코멘트 추가, 수정, 삭제 기능, 공통 컴포넌트 구현  |
