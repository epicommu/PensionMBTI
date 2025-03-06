import { InvestSurveyContext } from '@/shared/context/survey';
import styles from './result.module.css';
import { InvestScores } from '@/shared/types/survey';
import { useContext, useEffect, useState } from 'react';
import { getMbtiLink } from './csvReader';

export const Result = () => {
  const scores = useContext(InvestSurveyContext);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // ✅ MBTI 결과 계산 함수
  const calcResult = (scores: InvestScores | null) => {
    if (!scores) return '';
    const { s1, s2, s3, s4, s5 } = scores;

    const ie = s1 < 50 ? 'I' : 'E';
    const sn = s3 % 2 ? 'N' : 'S';
    const tf = s2 < 3 ? 'T' : 'F';
    const jp = s4 < 2 ? 'J' : 'P';

    const mbti = `${ie}${sn}${tf}${jp}`;
    const s5Result = s5 < 4 ? 0 : 5;
    const s1Result = calcS1Result(s1) + s5Result;
    const s2Result = (s2 <= 1 ? 1 : s2) + s5Result;
    const s3Result = s3 + s5Result;
    const s4Result = s4 + 1 + s5Result;
    const code = `${s1Result}${s3Result}${s2Result}${s4Result}`;
    return `${mbti}_${code}`;
  };

  const calcS1Result = (score: number) => {
    if (score <= 10) return 1;
    else if (score <= 49) return 2;
    else if (score <= 89) return 3;
    else return 4;
  };

  const result = calcResult(scores);
  const link = getMbtiLink(result);

  // ✅ 1. 로그인 여부 확인
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await fetch("https://api.imweb.me/v2/user", {
          method: "GET",
          headers: { "Authorization": "Bearer YOUR_API_KEY" }, // 🔹 아임웹 REST API 키 입력 필요
        });

        const data = await response.json();
        setUserEmail(data.email || null);
      } catch (error) {
        console.error("로그인 상태 확인 실패:", error);
      }
    }

    checkLoginStatus();
  }, []);

  // ✅ 2. MBTI 결과 저장하기 버튼 동작
  async function saveMBTI() {
    if (!result) {
      alert("테스트 결과를 먼저 확인해주세요!");
      return;
    }

    if (!userEmail) {
      // 🔹 로그인 안 된 경우 → 회원가입 페이지로 이동
      alert("회원가입이 필요합니다! 가입 후 결과가 자동 저장됩니다.");
      window.location.href = `https://your-imweb-site.com/signup?mbti=${result}`;
    } else {
      // 🔹 로그인한 경우 → 즉시 저장
      await fetch("https://your-api.com/save-mbti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, mbti: result }),
      });

      alert("MBTI 결과가 저장되었습니다!");
    }
  }

  const handleClickLink = () => {
    window.open(link);
  };

  return (
    <section className={styles['result']}>
      <div className={styles['result-box']}>
        <hr className={styles['w-line']} />
        <div className={styles['title']}>
          당신의 투자 MBTI 결과와 추천 포트폴리오를 찾았습니다.
          <p className={styles['sub']}>▼ 아래 클릭 ▼</p>
        </div>

        {/* ✅ "저장하기" 버튼 추가 */}
        <button className={styles['result-button']} onClick={saveMBTI}>
          MBTI 결과 저장하기
        </button>

        {/* 기존 버튼 (결과 보러 가기) 유지 */}
        <button className={styles['result-button']} onClick={handleClickLink}>
          결과 보러 가기
        </button>

        <p className={styles['caution']}>
          {`위 성과 차트는 주식, 채권, 대체자산으로 구성된 포트폴리오의 성과입니다.\n본 결과가 본인의 투자성향을 완벽하게 알려주진 못할 수 있습니다.\n결과를 토대로 본인의 투자성향에 적합한 최적의 포트폴리오를 만들어 보세요.\n당신의 성공적인 투자를 기원합니다!\n`}
        </p>
        <span className={styles['p-tit']}>EPI, ETF Platform Innovator</span>
        <hr className={styles['w-line']} />
      </div>
    </section>
  );
};
