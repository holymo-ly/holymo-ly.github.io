# holymo-ly.github.io

김호원 개인 포트폴리오와 기술 블로그입니다. Astro 정적 사이트로 Blog, Projects, Research, About 페이지를 제공하고, Sveltia CMS에서 Markdown 글과 소개·프로젝트 내용을 관리합니다.

## 로컬에서 실행

Node.js `22.23.4` 이상을 사용합니다.

```bash
npm ci
npm run dev
```

개발 서버는 `http://localhost:4321/`에서 확인합니다. Astro 개발 서버에서는 정적 관리자 화면을 `/admin/` 대신 `http://localhost:4321/admin/index.html`로 엽니다. 배포용 파일은 다음 명령으로 확인합니다.

```bash
npm run build
```

## 글과 프로젝트 관리

- 블로그 글: `src/content/blog/`
- 프로젝트: `src/content/projects/`
- 연구 주제: `src/content/research/`
- About 프로필: `src/content/pages/about.md`

Markdown frontmatter는 `src/content.config.ts`에서 검사합니다. 각 폴더의 Markdown/MDX 파일은 사이트와 RSS의 콘텐츠 소스입니다.

## Sveltia CMS 관리자

배포된 관리자: [https://holymo-ly.github.io/admin/](https://holymo-ly.github.io/admin/)

로그인은 관리자 화면의 **Sign In with Token**을 사용합니다. GitHub에서 **Settings → Developer settings → Personal access tokens → Fine-grained tokens**로 이동해 `holymo-ly`를 Resource owner로 고르고, `holymo-ly.github.io` 저장소만 선택한 뒤 `Contents: Read and write` 권한을 부여합니다. 토큰은 저장소 설정 파일에 넣지 않습니다. 본인이 관리자 화면에만 입력하고 채팅이나 코드에 공유하지 마세요. Sveltia CMS는 토큰을 브라우저의 localStorage에 저장하므로 공유 PC 사용을 피하고, 노출이 의심되면 GitHub에서 토큰을 폐기합니다.

관리자는 Simple Workflow로 `main`에 직접 커밋합니다. 글을 저장하면 GitHub Actions가 사이트를 빌드하고 Pages에 배포합니다. 관리자 페이지의 `noindex` 표시는 검색 노출 방지용일 뿐 로그인 제한이 아닙니다. `draft: true`도 사이트 목록과 RSS에서만 숨기며, 공개 저장소에 커밋된 원문까지 비공개로 만들지는 않습니다.

## 배포 확인

저장소의 GitHub Pages는 **Settings → Pages → Build and deployment → Source: GitHub Actions**로 설정되어 있습니다. `main`에 변경이 반영되면 `.github/workflows/deploy.yml`이 실행됩니다.

- 사이트: [https://holymo-ly.github.io/](https://holymo-ly.github.io/)
- Blog: `/blog/`
- Projects: `/projects/`
- Research: `/research/`
- About: `/about/`
- RSS: `/rss.xml`
- Sitemap: `/sitemap-index.xml`

Actions 탭에서 `Deploy GitHub Pages`가 성공한 뒤 공개 사이트를 확인합니다. Sveltia CMS가 저장한 변경사항도 이 배포 흐름을 사용합니다.
