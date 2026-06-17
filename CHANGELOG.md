# CHANGELOG.md — 정상학원 샘플 사이트

## 2026-06-17
### Fixed
- index.html 스크롤 페이드(IntersectionObserver)를 데스크탑 전용으로 변경 — 모바일(≤860px)에선 콘텐츠가 정적으로 표시되어 스크롤이 부드럽고, 인앱 웹뷰(카톡/인스타)에서 IO가 불안정해도 콘텐츠가 항상 보임(흰화면/숨김 방지). 데스크탑 페이드는 유지.


## 2026-06-14
### Changed
- 연도 정리: 히어로 "2027 수능 대비", 합격 실적 "2026", 공지 수능/학년도 라벨 현행화(2026·2027), 푸터 (c) 2026 (전 페이지)
- 강사 사진(외국 모델 스톡) → 이니셜 모노그램 아바타(김·박·이·최, 과목별 색) — index, teachers
- 강좌 카드 이모지(book/abc/123) 제거 → index는 레드 액센트 바, courses는 제거
- 공지 제목 이모지 제거
- consult 지도: 구글맵 embed → OpenStreetMap iframe + 네이버지도/카카오맵 버튼
- 배지/태그 폰트 0.7 / 0.68rem → 0.78rem (가독성)

### Added
- common.css: .teacher-avatar (모노그램 아바타) 스타일 c1~c4
- consult: .map-links / .map-link (지도 외부 링크 버튼) 스타일

### TODO / 주의
- Formspree action ID 미설정(YOUR_FORM_ID) → 실제 폼 전송하려면 교체 필요
- 강사 아바타는 실제 사진으로 교체 권장(납품 시)
- 지도 좌표·검색어(대치동)는 실제 학원 위치로 교체
