// vite 개발 서버의 동작을 구성하는 코드

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const SERVER_PORT = 3002; // 서버 포트 번호
const CLIENT_PORT = 4173; // 클라이언트 포트 번호

// https://vitejs.dev/config/
// 노출방지를 위해 .env 파일에 환경변수 등록후 사용
export default defineConfig({
  plugins: [react()],
  server: {
    port: CLIENT_PORT,  // 클라이언트 포트 설정
    proxy: {
      '/api': {
        target: `http://localhost:${SERVER_PORT}`, // 서버 포트 번호
        changeOrigin: true,
      },
    },
  },
}); 