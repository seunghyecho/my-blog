# React Blog App

## 앱 실행
```bash
npm run dev
```

## 프로덕션 배포

### 1. 환경변수 설정
```bash
# .env.production 파일 생성
cp env.production.example .env.production
# .env.production 파일을 편집하여 실제 프로덕션 값으로 설정
```

### 2. 배포 방법

#### 방법 1: npm 스크립트 사용
```bash
# 프로덕션 빌드 후 Vercel 배포
npm run deploy:prod

# 또는 Vercel 배포만
npm run vercel:prod
```

#### 방법 2: 수동 배포
```bash
# 프로덕션 빌드
npm run build:prod

# Vercel 배포
vercel --prod
```

### 3. 빌드 정리
```bash
# 빌드 파일만 정리
npm run clean

# 모든 캐시 및 의존성 정리
npm run clean:all
```

### 기술 스택

#### New
- HTML, CSS, React.js(Next), TypeScript
- MongoDB(Compass)

#### Old
- HTML, CSS, React.js(Next), TypeScript, Redux, React Query

### 작업 환경

#### New
- macOS 15.2, Node.js v22.12.0, Npm 10.9.0, VS Code

#### Old
- macOS 13.3.1, Node.js v19.5.0, VS Code
