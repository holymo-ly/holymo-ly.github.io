# holymo-ly.github.io

Astro 기반 개인 블로그입니다.

## 로컬에서 실행

```bash
npm ci
npm run dev
```

개발 서버는 `http://localhost:4321/`에서 확인할 수 있습니다. 배포용 파일은 다음 명령으로 생성합니다.

```bash
npm run build
```

## 글 작성

`src/content/blog/`에 Markdown 파일을 추가합니다. 글의 앞부분에는 제목, 설명, 날짜를 적습니다.

```md
---
title: '글 제목'
description: '글을 한 문장으로 소개합니다.'
pubDate: '2026-11-22'
category: '학습'
tags: ['기록']
draft: true
---

여기에 글을 작성합니다.
```

`draft: true`인 글은 공개 목록에서 숨겨집니다. 검토 후 `false`로 바꾸면 공개됩니다.

## GitHub Pages 배포

저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 빌드와 배포를 진행합니다.
