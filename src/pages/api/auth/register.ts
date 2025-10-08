import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password, passwordConfirm } = req.body;

    // 입력값 검증
    if (!username || !password) {
      return res.status(400).json({ message: '아이디와 비밀번호를 모두 입력해주세요.' });
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 기존 서버로 회원가입 요청 전달
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ message: data.message || '회원가입에 실패했습니다.' });
    }
  } catch (error) {
    console.error('Register API error:', error);
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
}