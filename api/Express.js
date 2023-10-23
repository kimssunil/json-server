import express, { json } from "express";
import db from "../db.json";
const app = express();

// JSON 요청을 파싱하는 미들웨어
app.use(json());

// 샘플 사용자 데이터 (실제 인증 로직으로 교체해야 함)
const users = db;

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 사용자 이름과 비밀번호가 올바른지 확인 (실제 인증 로직으로 교체)
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "유효하지 않은 자격 증명" });
  }

  // 성공적인 로그인을 나타내는 토큰 또는 세션 생성 (적절한 인증 라이브러리를 사용해야 함)
  const token = "생성한-토큰";

  res.json({ token });
});

// 다른 라우트 및 서버 설정 코드

// 서버 시작
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다`);
});
