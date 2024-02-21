// 현재 날짜를 가져옵니다.
const today = new Date();

// 19세와 15세가 되는 연도, 월, 일을 계산합니다.
const yearFor19 = today.getFullYear() - 19;
const monthFor19 = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
const dayFor19 = today.getDate();

const yearFor15 = today.getFullYear() - 15;
const monthFor15 = today.getMonth() + 1;
const dayFor15 = today.getDate();

// 월과 일을 두 자리 숫자로 포맷합니다.
const formattedMonthFor19 = monthFor19.toString().padStart(2, '0');
const formattedDayFor19 = dayFor19.toString().padStart(2, '0');
const formattedMonthFor15 = monthFor15.toString().padStart(2, '0');
const formattedDayFor15 = dayFor15.toString().padStart(2, '0');


const qnaList = [
  {
    q: '1. 저축의 목적은 얼마인가요?',
    a: [
      { answer: 'a. 1,000만원', score: 1000, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'b. 5,000만원', score: 5000, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'c. 1억', score: 10000, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'd. 5억', score: 50000, score5: 0, score2: 0, score3: 0, score4: 0 },
      { answer: 'e. 10억', score: 100000, score5: 0, score2: 0, score3: 0, score4: 0 }
    ]
  },
  {
    q: '2. 저축 계획 기간은 얼마인가요?',
    a: [
      { answer: 'a. 3년', score: 0, score5: 0, score2: 3, score3: 0, score4: 0 },
      { answer: 'b. 5년', score: 0, score5: 0, score2: 5, score3: 0, score4: 0 },
      { answer: 'c. 10년', score: 0, score5: 0, score2: 10, score3: 0, score4: 0 },
      { answer: 'd. 20년', score: 0, score5: 0, score2: 20, score3: 0, score4: 0 },
      { answer: 'b. 30년', score: 0, score5: 0, score2: 30, score3: 0, score4: 0 }
    ]
  },
  {
    q: '3. 납입 계획 금액은 연간 얼마인가요?',
    a: [
      { answer: 'a. 연 240만원(월 20만원)', score: 0, score5: 0, score2: 0, score3: 20, score4: 0 },
      { answer: 'b. 연 600만원(월 50만원)', score: 0, score5: 0, score2: 0, score3: 50, score4: 0 },
      { answer: 'c. 연 1,200만원(월 100만원', score: 0, score5: 0, score2: 0, score3: 100, score4: 0 },
      { answer: 'd. 연 3,600만원(월 300만원)', score: 0, score5: 0, score2: 0, score3: 300, score4: 0 },
      { answer: 'e. 연 6,000만원(월 500만원)', score: 0, score5: 0, score2: 0, score3: 0, score4: 0 }
    ]
  },  
  {
    q: '4. 다음 중 어떤 자산에 투자하실건가요?',
    a: [
      { answer: 'a. 미국 주식', score: 0, score2: 0, score3: 0, score4: 17.9, score5: 0 },
      { answer: 'a. 기술주', score: 0, score2: 0, score3: 0, score4: 17.89, score5: 0 },
      { answer: 'b. 코스피 200', score: 0, score2: 0, score3: 0, score4: 7.04, score5: 0 }
    ]
  }
]

const infoList = [
  {
    scores: [125, 115],
    mLeft: '20%',
    name: '추천 절세 계좌는 … 일반형ISA, IRP, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→IRP(300만원)<br><br>→일반형ISA(4,000만원)<br><br>→연금저축(900만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1901" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.' + '<br>' + '(자산배분: 주식 20%, 채권 80%로 보수적인 포트폴리오)',
    desc2: '주식 20%, 채권 80% 비중에 대체자산 투자',
    desc_1: ' 56%',
    desc_2: ' 14%',
    desc_3: ' 30%'
  },
  {
    scores: [231, 221, 131, 121],
    mLeft: '40%',
    name: '추천 절세 계좌는 … 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→연금저축(1,200만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1903" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc2: '주식 40%, 채권 60% 비중에 대체자산 투자',
    desc: '- I: 방어적 투자형으로 안전자산 선호도가 높습니다.<br>(자산배분: 주식 40%, 채권 60%로 안정적인 포트폴리오)',
    desc_1: ' 42%',
    desc_2: ' 28%',
    desc_3: ' 30%'
  },
  {
    scores: [111],
    mLeft: '60%',
    name: '추천 절세 계좌는 … 서민형ISA, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→서민형ISA(4,000만원)<br><br>→연금저축(1,200만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1899" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    scores: [123, 122, 113, 112],
    mLeft: '80%',
    name: '추천 절세 계좌는 … 서민형ISA, IRP, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→IRP(300만원)<br><br>→서민형ISA(4,000만원)<br><br>→연금저축(900만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1900" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 80%, 채권 20%로 공격적인 포트폴리오)',
    desc2: '주식 80%, 채권 20% 비중에 대체자산 투자',
    desc_1: ' 14%',
    desc_2: ' 56%',
    desc_3: ' 30%'
  },
  {
    scores: [124, 114],
    mLeft: '60%',
    name: '추천 절세 계좌는 … 농어민형ISA, IRP, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→IRP(300만원)<br><br>→농어민형ISA(4,000만원)<br><br>→연금저축(900만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1898" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    scores: [211],
    mLeft: '60%',
    name: '추천 절세 계좌는 … 국내투자형ISA, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→국내투자형ISA(4,000만원)<br><br>→연금저축(1200만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1896" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    scores: [225, 224, 223, 222, 215,214, 213, 212],
    mLeft: '60%',
    name: '추천 절세 계좌는 … 국내투자형ISA, IRP, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→IRP(300만원)<br><br>→국내투자형ISA(4,000만원)<br><br>→연금저축(900만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1897" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
    desc: '- E: 공격적 투자형으로 위험자산 선호도가 높습니다.' + '<br>' +  '(자산배분: 주식 60%, 채권 40%로 기본적인 포트폴리오)',
    desc2: '주식 60%, 채권 40% 비중에 대체자산 투자',
    desc_1: ' 28%',
    desc_2: ' 42%',
    desc_3: ' 30%'
  },
  {
    scores: [235, 234, 233, 135, 134, 133, 132],
    mLeft: '60%',
    name: '추천 절세 계좌는 … IRP, 연금저축',
    name2: '최적 납입단계는 연금저축(600만원)<br><br>→IRP(300만원)<br><br>→연금저축(900만원)',
    name3: '<a href="https://etfdiy.imweb.me/47/?idx=1902" target="_blank">더 자세한 팁과 설명은 <span style="color: red;">여기를</span> 클릭하세요</a>',
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

