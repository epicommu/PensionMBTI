const qnaList = [
  {
    q: '1. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 도지코인', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '2. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 미국 국채', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 테슬라', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '3. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 나스닥', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 비트코인', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '4. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 유가', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '5. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 삼성전자', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 나스닥', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '6. 둘 중 하나만 투자한다면?',
    a: [
      { answer: 'a. 코스피', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 삼성전자', score: 10, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '7. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image001.jpg" alt="image001"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0, score4: 0 }
    ]
  },
  {
    q: '8. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image002.jpg" alt="image002"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0, score4: 0 }
    ]
  },
  {
    q: '9. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image003.jpg" alt="image003"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0, score4: 0 }
    ]
  },
  {
    q: '10. 채권 투자시 둘 중 하나를 고른다면?<br><br><img src="img/image004.jpg" alt="image004"><br>',
    a: [
      { answer: 'A', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'B', score: 10, score2: 1, score3: 0, score4: 0 }
    ]
  },
  {
    q: '11. 주식 자산 중 투자하고 싶은 지역은?',
    a: [
      { answer: 'a. 글로벌', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 한국', score: 0, score2: 0, score3: 1, score4: 0 },
      { answer: 'c. 미국', score: 0, score2: 0, score3: 2, score4: 0 },
      { answer: 'd. 중국', score: 0, score2: 0, score3: 3, score4: 0 },
      { answer: 'e. 유럽', score: 0, score2: 0, score3: 4, score4: 0 }
    ]
  },
  {
    q: '12. 추가적으로 투자하고 싶은 대체자산은?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 부동산', score: 0, score2: 0, score3: 0, score4: 1 },
      { answer: 'c. 원유', score: 0, score2: 0, score3: 0, score4: 2 },
      { answer: 'd. 비트코인', score: 0, score2: 0, score3: 0, score4: 3 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 10,
    mLeft: '20%',
    name: '당신의 MBTI는... I',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.' + '<br>' + '(자산배분: 주식 20%, 채권 80%로 보수적인 포트폴리오)',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자'
  },
  {
    from: 11,
    to: 49,
    mLeft: '40%',
    name: '당신의 MBTI는... I',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 40%, 채권 60%로 안정적인 포트폴리오)',
    desc2: '주식 40%, 채권 60% 비중에 대체자산 투자'
  },
  {
    from: 50,
    to: 89,
    mLeft: '60%',
    name: '당신의 MBTI는... E',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자'
  },
  {
    from: 90,
    to: 100,
    mLeft: '80%',
    name: '당신의 MBTI는... E',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 80%, 채권 20%로 공격적인 포트폴리오)',
    desc2: '주식 80%, 채권 20% 비중에 대체자산 투자'
  }
]

const infoList2 = [
  {
    from: 0,
    to: 0,
    name: 'T',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.' + '<br>' + '(채권자산: 예금처럼 안전한 초단기 국채 투자자)',
    desc2: '초단기 국채(SHV ETF)',
    link: 'https://youtu.be/0a2yaZhzBuI'
  },
  {
    from: 1,
    to: 1, 
    name: 'T',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.' + '<br>' + '(채권자산: 이자수익과 일부 자본이익 원하는 단기 국채 투자자)',
    desc2: '단기 국채(SHY ETF)',
    link: 'https://youtu.be/buPqw1wsPwg'
  },
  {
    from: 2,
    to: 2, 
    name: 'T',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.' + '<br>' + '(채권자산: 이자수익과 자본이익 모두 중요한 중장기 국채 투자자)',
    desc2: '중장기 국채(IEF ETF)',
    link: 'https://youtu.be/JCKxyiOTdeg'
  },
  {
    from: 3,
    to: 3,
    name: 'F',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.' + '<br>' + '(채권자산: 누구나 알만한 안전한 회사의 투자등급 회사채 투자자)',
    desc2: '투자등급 회사채(LQD ETF)',
    link: 'https://youtu.be/r4kUtX4Gwxk'
  },
  {
    from: 4,
    to: 4,
    name: 'F',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.' + '<br>' + '(채권자산: 신용위험은 높지만 금리가 높은 하이일드 채권 투자자)',
    desc2: '하이일드 회사채(HYG ETF)',
    link: 'https://youtu.be/zL9OABgFzPM'
  }
]

const infoList3 = [
  {
    from: 0,
    to: 0,
    name: 'N',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.' + '<br>' + '(주식자산: 글로벌 주식)',
    desc2: '글로벌주식지수(ACWI ETF)',
    link: 'https://youtu.be/iwN1zhK4-Oo'
  },
  {
    from: 1,
    to: 1, 
    name: 'S',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.' + '<br>' + '(주식자산: 한국 주식)',
    desc2: '한국주식지수(EWY ETF)',
    link: 'https://youtu.be/NsfvHf8o1W8'
  },
  {
    from: 2,
    to: 2,
    name: 'N',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.' + '<br>' + '(주식자산: 미국 주식)',
    desc2: '미국주식지수(SPY ETF)',
    link: 'https://youtu.be/ppFSYmtDj94'
  },
  {
    from: 3,
    to: 3, 
    name: 'S',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.' + '<br>' + '(주식자산: 중국 주식)',
    desc2: '중국주식지수(FXI ETF)',
    link: 'https://youtu.be/UDO6E1oUSn4'
  },
  {
    from: 4,
    to: 4,
    name: 'N',
    desc: '- N: 가치주 투자자로 저평가된 주식을 선호합니다.' + '<br>' + '(주식자산: 유럽 주식)',
    desc2: '유럽주식지수(FEZ ETF)',
    link: 'https://youtu.be/AyB-whOxFjE'
  }
]

const infoList4 = [
  {
    from: 0,
    to: 0,
    name: 'J',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.' + '<br>' + '(대체자산: 금 투자자)',
    desc2: '금(GLD ETF)',
    link: 'https://youtu.be/xPDJp3Whgdk'
  },
  {
    from: 1,
    to: 1, 
    name: 'J',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.' + '<br>' + '(대체자산: 부동산 리츠 투자자)',
    desc2: '미국 부동산 리츠지수(VNQ ETF)',
    link: 'https://youtu.be/4EbDM47AJIo'
  },
  {
    from: 2,
    to: 2,
    name: 'P',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.' + '<br>' + '(대체자산: 원유 투자자)',
    desc2: '원유(USO ETF)',
    link: 'https://youtu.be/svaHyCpJL10'
  },
  {
    from: 3,
    to: 3, 
    name: 'P',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.' + '<br>' + '(대체자산: 비트코인 투자자)',
    desc2: '비트코인(BITO ETF)',
    link: 'https://youtu.be/92m94Fmg3gs'
  }
]

const infoList5 = [
  {
    from: 0,
    to: 2,
    name: 'S',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '',
    link: ''
  },
  {
    from: 3,
    to: 5, 
    name: 'N',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '',
    link: ''
  }
]

