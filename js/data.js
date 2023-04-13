const qnaList = [
  {
    q: '1. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 도지코인', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '2. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 미국 국채', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 테슬라', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '3. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 나스닥', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 비트코인', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '4. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 유가', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '5. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 삼성전자', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 나스닥', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '6. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 코스피', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 삼성전자', score: 10, score2: 0, score3: 0 }
    ]
  },
  {
    q: '7. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image001.jpg" alt="image001"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0 }
    ]
  },
  {
    q: '8. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image002.jpg" alt="image002"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0 }
    ]
  },
  {
    q: '9. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image003.jpg" alt="image003"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0 }
    ]
  },
  {
    q: '10. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image004.jpg" alt="image004"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0 }
    ]
  },
  {
    q: '11. 주식 자산 중 투자하고 싶은 지역은?',
    a: [
      { answer: 'a. 글로벌 한 번에', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 한국', score: 0, score2: 0, score3: 1 },
      { answer: 'c. 미국', score: 0, score2: 0, score3: 2 },
      { answer: 'd. 중국', score: 0, score2: 0, score3: 3 },
      { answer: 'e. 유럽', score: 0, score2: 0, score3: 4 }
    ]
  }
]

const infoList = [
  {
    from: 90,
    to: 100,
    mLeft: '90%',
    name: '주식형 펀드 선호',
    desc: '채권(20):주식(80) 포트폴리오'
  },
  {
    from: 55,
    to: 89,
    mLeft: '70%',
    name: '주식혼합형 펀드 선호',
    desc: '채권(40):주식(60) 포트폴리오'
  },
  {
    from: 11,
    to: 54,
    mLeft: '30%',
    name: '채권혼합형 펀드 선호',
    desc: '채권(60):주식(40) 포트폴리오'
  },
  {
    from: 0,
    to: 10,
    mLeft: '10%',
    name: '채권형 펀드 선호',
    desc: '채권(80):주식(20) 포트폴리오'
  }
]

const infoList2 = [
  {
    from: 0,
    to: 0,
    name: '예금 투자형',
    desc: '대표적인 ETF: SHV'
  },
  {
    from: 1,
    to: 1, 
    name: '단기 국채형',
    desc: '대표적인 ETF: SHY'
  },
  {
    from: 2,
    to: 2, 
    name: '중장기 국채형',
    desc: '대표적인 ETF: IEF'
  },
  {
    from: 3,
    to: 3,
    name: '투자등급 회사채형',
    desc: '대표적인 ETF: LQD'
  },
  {
    from: 4,
    to: 4,
    name: '하이일드 회사채형',
    desc: '대표적인 ETF: HYG'
  }
]

const infoList3 = [
  {
    from: 0,
    to: 0,
    name: '글로벌 주식 투자자',
    desc: '대표적인 ETF: ACWI'
  },
  {
    from: 1,
    to: 1, 
    name: '한국 주식 투자자',
    desc: '대표적인 ETF: EWY'
  },
  {
    from: 2,
    to: 2,
    name: '미국 주식 투자자',
    desc: '대표적인 ETF: SPY'
  },
  {
    from: 3,
    to: 3, 
    name: '중국 주식 투자자',
    desc: '대표적인 ETF: FXI'
  },
  {
    from: 4,
    to: 4,
    name: '유럽 주식 투자자',
    desc: '대표적인 ETF: FEZ'
  }
]
