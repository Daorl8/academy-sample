# STRUCTURE.md — 정상학원 샘플 사이트 구조

정적 다중 페이지 사이트 (HTML/CSS/JS, 빌드 과정 없음). Vercel 배포.

## 파일
- index.html — 홈 (히어로 / 통계 / 강좌 프리뷰 / 강사 프리뷰 / 합격 실적 / CTA)
- courses.html — 강좌 안내 (과목별 반 + 시간표)
- teachers.html — 강사 소개 (전체 강사 카드)
- notice.html — 공지사항 (아코디언)
- consult.html — 상담 신청 (폼 + 학원 정보 + 지도)
- common.css — 공통 스타일 (nav, footer, 버튼, 페이지 헤더, 강사 아바타, 색상 변수)
- common.js — 공통 스크립트 (모바일 메뉴 토글, nav active 표시)

## 공통 요소
- nav / footer 마크업은 각 HTML 파일에 개별 작성됨(JS 주입 아님) → 수정 시 5개 파일 모두 반영 필요
- 페이지별 스타일은 각 HTML <head>의 <style>에 인라인(hero, 카드, 폼, 지도 등)

## 색상 변수 (common.css :root)
--navy #1A3A6B / --red #E8503A / --gray #6B7280 / --light #F3F4F6 / --border #E5E7EB
강조(노랑) #FFD166 (히어로 강조어, 합격 실적)

## 외부 의존성
- Google Fonts: Noto Sans KR
- 지도: OpenStreetMap embed iframe + 네이버지도/카카오맵 링크 (consult.html)
- 폼: Formspree (consult.html) — action ID 미설정

## 납품 시 교체 대상 (placeholder)
- 강사 사진: 이니셜 모노그램 아바타 → 실제 강사 사진
- 주소 / 연락처 / 사업자번호: 모두 placeholder
- 지도 좌표 / 검색어: 대치동 임시값 → 실제 위치
- Formspree action ID: YOUR_FORM_ID → 실제 폼 ID
- 공지 / 합격 실적 / 수강료: 샘플 데이터
