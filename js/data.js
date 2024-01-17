const qnaList = [
  {
    q: '1. 연금저축 계좌가 있나요?',
    a: [
      { answer: 'a. 있다', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 없다', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '2. IRP 계좌가 있나요?',
    a: [
      { answer: 'a. 있다', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 없다', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '3. ISA 계좌가 있나요?',
    a: [
      { answer: 'a. 있음', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 없음', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 }
    ]
  },  
  {
    q: '4. 나이를 알려주세요',
    a: [
      { answer: 'a. 19세 이상', score: 1, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 19세 미만', score: 0, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  },
  {
    q: '5. 연 근로소득을 알려주세요',
    a: [
      { answer: 'a. 없음', score: 0, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 1,400만원 이하', score: 10, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 1,400만원 초과 ~ 5,000만원 이하', score: 20, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 5,000만원 초과 ~ 5,500만원 이하', score: 30, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 5,500만원 초과 ~ 1.2억원 이하', score: 40, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 1.2억원 초과', score: 50, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  },
  {
    q: '6. 연간 금융소득이 2천만원 초과(금융종합소득과세자)에 해당하나요?',
    a: [
      { answer: 'a. 네', score: 100, score2: 0, score3: 0, score4: 0, score5: 0 },
      { answer: 'b. 아니오', score: 0, score2: 0, score3: 0, score4: 0, score5: 0 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 0,
    mLeft: '20%',
    name: '당신이 가입 가능한 계좌는…연금저축계좌',
    name2: '최적 납입단계는 연금저축(600만원)→연금저축(1200만원)',
    name3: '1',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.' + '<br>' + '(자산배분: 주식 20%, 채권 80%로 보수적인 포트폴리오)',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
  {
    from: 1,
    to: 1,
    mLeft: '40%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA계좌',
    name2: '최적 납입단계는 연금저축(600만원)→ISA(2000만원)→연금저축(1100만원)',
    name3: '2',
    desc2: '주식 40%, 채권 60% 비중에 대체자산 투자',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.<br>(자산배분: 주식 40%, 채권 60%로 안정적인 포트폴리오)',
    desc_1: ' 42%',
    desc_2: ' 28%',
    desc_3: ' 30%'
  },
  {
    from: 11,
    to: 11,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→ISA(2000만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 21,
    to: 21,
    mLeft: '80%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→ISA(2000만원)→연금저축(900만원)',
    name3: '4',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 80%, 채권 20%로 공격적인 포트폴리오)',
    desc2: '주식 80%, 채권 20% 비중에 대체자산 투자',
    desc_1: ' 14%',
    desc_2: ' 56%',
    desc_3: ' 30%'
  },
  {
    from: 31,
    to: 31,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→ISA(2000만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 41,
    to: 41,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→ISA(2000만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 51,
    to: 51,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, ISA, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→ISA(2000만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 100,
    to: 100,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축계좌',
    name2: '최적 납입단계는 연금저축(600만원)→연금저축(1200만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 101,
    to: 101,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축계좌',
    name2: '최적 납입단계는 연금저축(600만원)→연금저축(1200만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 111,
    to: 111,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 121,
    to: 121,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 131,
    to: 131,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 141,
    to: 141,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    from: 151,
    to: 151,
    mLeft: '60%',
    name: '당신이 가입 가능한 계좌는…연금저축, IRP계좌',
    name2: '최적 납입단계는 연금저축(600만원)→IRP(300만원)→연금저축(900만원)',
    name3: '3',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  }
]

const infoList2 = [
  {
    from: 0,
    to: 0,
    name: 'T',
    name2: 'T',
    name3: '0', 
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.' + '<br>' + '(채권자산: 예금처럼 안전한 초단기 국채 투자자)',
    desc2: '초단기 국채(SHV ETF)',
    link: 'https://youtu.be/0a2yaZhzBuI'
  },
  {
    from: 1,
    to: 1, 
    name: 'T',
    name2: 'T',
    name3: '1',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.',
    desc2: '단기 국채(SHY ETF)',
    link: 'https://youtu.be/buPqw1wsPwg'
  },
  {
    from: 2,
    to: 2, 
    name: 'T',
    name2: 'T',
    name3: '2',
    desc: '- T: 국채 투자형으로 안전한 채권을 선호합니다.',
    desc2: '중장기 국채(IEF ETF)',
    link: 'https://youtu.be/JCKxyiOTdeg'
  },
  {
    from: 3,
    to: 3,
    name: 'F',
    name2: 'F',
    name3: '3',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.',
    desc2: '투자등급 회사채(LQD ETF)',
    link: 'https://youtu.be/r4kUtX4Gwxk'
  },
  {
    from: 4,
    to: 4,
    name: 'F',
    name2: 'F',
    name3: '4',
    desc: '- F: 회사채 투자형으로 위험하더라도 고금리의 채권을 선호합니다.',
    desc2: '하이일드 회사채(HYG ETF)',
    link: 'https://youtu.be/zL9OABgFzPM'
  }
]

const infoList3 = [
  {
    from: 0,
    to: 0,
    name: 'N',
    name2: 'N',
    name3: '0',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '글로벌주식지수(ACWI ETF)',
    link: 'https://youtu.be/iwN1zhK4-Oo'
  },
  {
    from: 1,
    to: 1, 
    name: 'S',
    name2: 'S',
    name3: '1',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '한국주식지수(EWY ETF)',
    link: 'https://youtu.be/NsfvHf8o1W8'
  },
  {
    from: 2,
    to: 2,
    name: 'N',
    name2: 'N',
    name3: '2',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '미국주식지수(SPY ETF)',
    link: 'https://youtu.be/ppFSYmtDj94'
  },
  {
    from: 3,
    to: 3, 
    name: 'S',
    name2: 'S',
    name3: '3',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '중국주식지수(FXI ETF)',
    link: 'https://youtu.be/UDO6E1oUSn4'
  },
  {
    from: 4,
    to: 4,
    name: 'S',
    name2: 'S',
    name3: '4',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '유럽주식지수(FEZ ETF)',
    link: 'https://youtu.be/AyB-whOxFjE'
  }
]

const infoList4 = [
  {
    from: 0,
    to: 0,
    name: 'J',
    name2: 'J',
    name3: '0',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.',
    desc2: '금(GLD ETF)',
    link: 'https://youtu.be/xPDJp3Whgdk'
  },
  {
    from: 1,
    to: 1, 
    name: 'J',
    name2: 'J',
    name3: '1',
    desc: '- J: 저변동성의 안전한 대체자산을 선호합니다.',
    desc2: '미국 부동산 리츠지수(VNQ ETF)',
    link: 'https://youtu.be/4EbDM47AJIo'
  },
  {
    from: 2,
    to: 2,
    name: 'P',
    name2: 'P',
    name3: '2',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.',
    desc2: '원유(USO ETF)',
    link: 'https://youtu.be/svaHyCpJL10'
  },
  {
    from: 3,
    to: 3, 
    name: 'P',
    name2: 'P',
    name3: '3',
    desc: '- P: 변동성이 높지만 기대 성과가 높은 대체자산을 선호합니다.',
    desc2: '비트코인(BITO ETF)',
    link: 'https://youtu.be/92m94Fmg3gs'
  }
]

const infoList5 = [
  {
    from: 0,
    to: 0,
    name: 'S',
    desc: '- S: 가치주 투자자로 저평가된 주식을 선호합니다.',
    desc2: '',
    link: ''
  },
  {
    from: 1,
    to: 1, 
    name: 'N',
    desc: '- N: 성장주 투자자로 성장성이 높은 주식을 선호합니다.',
    desc2: '',
    link: ''
  }
]

