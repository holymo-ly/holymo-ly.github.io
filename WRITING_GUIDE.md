# 블로그 작성·발행 가이드

이 문서는 `holymo-ly.github.io`에 글을 작성하고 공개하는 방법을 안내합니다. 이 사이트는 Astro와 Markdown/MDX를 사용하며, 글은 GitHub 저장소의 `src/content/blog/`에서 관리합니다.

## 글 작성부터 발행까지

1. `src/content/blog/` 아래에 영문 소문자와 하이픈을 사용한 파일명을 만듭니다. 예: `ctf-os-test-notes.md`.
2. 아래 형식으로 글의 메타데이터를 작성하고, 처음에는 `draft: true`로 저장합니다.
3. 로컬에서 미리보기와 빌드를 확인하고, 공개해도 되는 내용인지 검토합니다.
4. 검토가 끝나면 `draft: false`로 바꿉니다.
5. Sveltia CMS에서 저장하거나, 로컬 Markdown 변경사항을 Pull Request로 `main`에 반영합니다.
6. GitHub Actions가 사이트를 빌드하고 GitHub Pages에 배포합니다.
7. Actions 실행이 성공하면 [공개 사이트](https://holymo-ly.github.io/)와 글 주소를 확인합니다.

```md
---
title: '글 제목'
description: '글의 핵심을 한 문장으로 소개합니다.'
pubDate: '2026-11-23'
category: 'Learning Notes'
tags: ['기록', '실습']
draft: true
---

여기에 글을 작성합니다.
```

### 메타데이터

| 필드 | 설명 |
| --- | --- |
| `title` | 글 제목 |
| `description` | 글 목록과 검색 미리보기에 표시할 요약 |
| `pubDate` | 최초 공개 날짜 (`YYYY-MM-DD`) |
| `updatedDate` | 글을 크게 수정한 경우의 수정 날짜. 선택 항목 |
| `category` | 글 분류. 생략하면 `Thoughts` |
| `tags` | 글의 주제를 나타내는 태그 목록 |
| `relatedRepo` | 관련 저장소의 전체 URL. 선택 항목 |
| `draft` | `true`면 사이트 글 목록과 개별 글, RSS에서 숨김 |

현재 사이트에서 사용할 수 있는 글 분류 예시:

- `Project Retrospective`: 프로젝트의 선택과 결과 회고
- `Security Research`: 보안 분석과 검증 기록
- `Learning Notes`: 학습 내용과 실습
- `Troubleshooting`: 문제 원인과 해결 과정
- `Thoughts`: 생각과 판단의 변화

`src/content.config.ts`가 메타데이터의 형식과 필수값을 검사합니다. 필드를 추가하거나 형식을 바꿀 때는 이 설정과 글 목록·RSS 표시도 함께 확인합니다.

## 글에 담을 내용

프로젝트나 실습 글은 다음 흐름으로 정리하면 읽기 쉽습니다.

1. 어떤 문제나 질문에서 시작했는가
2. 목표와 범위는 무엇이었는가
3. 내가 맡은 역할과 팀이 맡은 부분은 무엇인가
4. 어떤 방법을 선택했고, 그 이유는 무엇인가
5. 무엇을 확인했으며 근거는 어디에 있는가
6. 결과의 한계와 아직 확인하지 못한 점은 무엇인가
7. 다음에 무엇을 할 계획인가

성과를 쓸 때는 팀의 결과와 개인 기여를 구분하고, 저장소·문서·실험 로그 등으로 확인할 수 있는 내용만 사실처럼 씁니다. 테스트에 참여한 경험과 특정 환경에서 성능을 입증한 결과도 구별합니다.

### 프로젝트 공개 범위와 표현

- **CTF-OS:** WhateverTakes 팀원으로서 팀장과 함께 개발을 도운 역할, AI 도구의 동작과 성능 테스트·검증 과정 참여를 설명합니다. 팀장 또는 메인 개발자로 소개하거나, 테스트 참여를 실전 대회 성과의 입증으로 확대하지 않습니다.
- **멀티 MCP 캡스톤:** 진행 중인 주제와 전반적인 진행 흐름만 공개합니다. 구체적인 위험 경로, 구현 세부사항, 미검토 결과와 비공개 자료는 팀의 공개 결정 전까지 게시하지 않습니다. PM 역할과 직접 개발 참여를 구분해 씁니다.
- **팀 활동:** 팀 성과를 개인 단독 성과처럼 쓰지 않습니다. 다른 사람의 이력·수상·기여를 본인 정보로 옮기지 않습니다.
- 관심 분야나 개인 이력처럼 아직 정하지 않은 정보는 임의로 채우지 않습니다.

## 공개 전 확인

- `draft` 값이 공개 의도와 맞는가?
- 제목, 날짜, 요약, 링크가 정확한가?
- 개인 기여와 팀 기여를 구분했는가?
- 기술적 주장에 재현 방법이나 확인 가능한 근거가 있는가?
- 결과의 범위와 한계를 함께 적었는가?
- 팀에서 공개하지 않기로 한 내용이나 타인의 개인정보가 없는가?
- 이미지, 코드, 인용 자료의 라이선스와 출처를 확인했는가?
- 토큰, 비밀번호, 키, 내부 URL, 비공개 로그가 포함되지 않았는가?

저장소가 공개되어 있으므로 `draft: true`여도 커밋된 원문은 GitHub에서 볼 수 있습니다. 초안은 웹사이트 노출만 막으며 비공개 보관 기능이 아닙니다. 비밀 정보나 공개 전 자료를 저장소에 커밋하지 마세요.

## Sveltia CMS에서 작성하기

1. [관리자 화면](https://holymo-ly.github.io/admin/)을 엽니다.
2. **Sign In with Token**을 선택하고 본인의 GitHub fine-grained token으로 로그인합니다.
3. 블로그, 프로젝트, 연구 주제 또는 About 내용을 편집하고 저장합니다.
4. 저장 후 GitHub 저장소의 `main`에 커밋되었는지 확인하고, Actions 배포가 끝나면 공개 사이트를 확인합니다.

토큰은 GitHub의 **Settings → Developer settings → Personal access tokens → Fine-grained tokens**에서 만듭니다. Resource owner는 `holymo-ly`, 저장소는 `holymo-ly.github.io`만 선택하고 `Contents: Read and write` 권한을 부여합니다. 토큰을 소스코드나 채팅에 붙이지 말고 관리자 화면에만 입력하세요. Sveltia CMS는 토큰을 사용 중인 브라우저의 localStorage에 보관합니다. 공유 PC에서는 사용하지 말고, 분실·노출이 의심되면 GitHub에서 토큰을 폐기하세요. 관리자 URL의 `noindex`는 검색엔진 안내일 뿐 접근 제어가 아닙니다. 저장소 쓰기 권한이 없으면 글을 저장할 수 없습니다.

## 로컬에서 미리보기

저장소 루트에서 Node.js 버전을 확인합니다. 현재 프로젝트는 Node.js `22.23.4` 이상이 필요합니다.

```bash
node --version
npm ci
npm run dev
```

브라우저에서 `http://localhost:4321/`을 열어 확인합니다. 개발 서버는 터미널에서 `Ctrl+C`로 종료합니다. 배포 전에 정적 빌드도 확인합니다.

```bash
npm run build
```

## GitHub에 반영하고 배포 확인하기

검토를 위해 작업 브랜치와 Pull Request를 사용하는 것을 권장합니다. Pull Request를 `main`에 병합하면 `.github/workflows/deploy.yml`이 실행됩니다. 저장소의 Pages 배포 방식은 GitHub Actions입니다.

```bash
git status
git switch main
git pull
git switch -c blog/글-슬러그
git add src/content/blog/글-슬러그.md
git commit -m "Add blog post: 글 제목"
git push -u origin blog/글-슬러그
```

GitHub에서 Pull Request를 열어 빌드 결과와 글 내용을 확인한 뒤 `main`에 반영합니다. Actions 탭에서 `Deploy GitHub Pages`가 성공했는지 확인한 다음 아래 주소를 확인합니다.

- 블로그: `https://holymo-ly.github.io/blog/`
- RSS: `https://holymo-ly.github.io/rss.xml`
- Sitemap: `https://holymo-ly.github.io/sitemap-index.xml`

Sveltia CMS는 Simple Workflow로 `main`에 직접 커밋합니다. 이 저장소의 `main`에는 보호 규칙이 없으므로 CMS 저장 전에 글의 공개 범위와 내용을 확인하세요. 수동 편집은 작업 브랜치와 Pull Request를 사용하는 것을 권장합니다. 관리자 정적 파일은 `public/admin/`에 있으며, 로컬 개발 서버에서는 `http://localhost:4321/admin/index.html`로 엽니다.

---

작성 참고: [WhateverTakes 팀장님의 글쓰기 가이드](https://github.com/choijiwng/choijiwng.github.io/blob/main/WRITING_GUIDE.md). 이 문서는 해당 가이드의 문장을 복사하지 않고, `holymo-ly.github.io`의 현재 구조와 작성자의 공개 범위에 맞춰 새로 정리했습니다.
