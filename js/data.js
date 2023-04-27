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
      { answer: 'a. 글로벌', score: 0, score2: 0, score3: 0 },
      { answer: 'b. 한국', score: 0, score2: 0, score3: 1 },
      { answer: 'c. 미국', score: 0, score2: 0, score3: 2 },
      { answer: 'd. 중국', score: 0, score2: 0, score3: 3 },
      { answer: 'e. 유럽', score: 0, score2: 0, score3: 4 }
    ]
  },
  {
    q: '12. 추가적으로 투자하고 싶은 대체자산은?',
    a: [
      { answer: 'a. 금', score: 0, score2: 0, score4: 0 },
      { answer: 'b. 유가', score: 0, score2: 0, score4: 1 },
      { answer: 'c. 부동산', score: 0, score2: 0, score4: 2 },
      { answer: 'd. 비트코인', score: 0, score2: 0, score4: 3 }
    ]
  }
]

const infoList = [
  {
    from: 0,
    to: 10,
    mLeft: '20%',
    name: '거북이',
    desc: '당신은 안전지향적인 성향을 갖고 있으며 ' + '<br>' + '자산 배분'
  },
  {
    from: 11,
    to: 49,
    mLeft: '40%',
    name: '미어캣',
    desc: '당신은 안정을 추구하는 성향을 갖고 있으며 ' + '<br>' + '자산 배분'
  },
  {
    from: 50,
    to: 89,
    mLeft: '60%',
    name: '하이에나',
    desc: '당신은 적극적인 성향을 갖고 있으며 ' + '<br>' + '자산 배분'
  },
  {
    from: 90,
    to: 100,
    mLeft: '80%',
    name: '사자',
    desc: '당신은 공격적인 성향을 갖고 있으며 ' + '<br>' + '자산 배분'
  }
]

const infoList2 = [
  {
    from: 0,
    to: 0,
    name: '예금 투자형',
    desc: '채권: 예금처럼 안전한 초단기 국채 투자자!'
  },
  {
    from: 1,
    to: 1, 
    name: '단기 국채형',
    desc: '채권: 이자수익과 일부 자본이익 원하는 단기 국채 투자자!'
  },
  {
    from: 2,
    to: 2, 
    name: '중장기 국채형',
    desc: '채권: 이자수익과 자본이익 모두 중요한 중장기 국채 투자자!'
  },
  {
    from: 3,
    to: 3,
    name: '투자등급 회사채형',
    desc: '채권: 누구나 알만한 안전한 회사의 투자등급 회사채 투자자!'
  },
  {
    from: 4,
    to: 4,
    name: '하이일드 회사채형',
    desc: '채권: 신용위험은 높지만 금리가 높은 하이일드 채권 투자자!'
  }
]

const infoList3 = [
  {
    from: 0,
    to: 0,
    name: '글로벌 주식 투자자',
    desc: '주식: 어디든지 수익만 나면 되는 글로벌 주식 투자자!'
  },
  {
    from: 1,
    to: 1, 
    name: '한국 주식 투자자',
    desc: '주식: 익숙한게 최고, 한국 주식 투자자!'
  },
  {
    from: 2,
    to: 2,
    name: '미국 주식 투자자',
    desc: '주식: 금융 중심지는 결국 월가, 미국 주식 투자자!'
  },
  {
    from: 3,
    to: 3, 
    name: '중국 주식 투자자',
    desc: '주식: 성장률이 높은 신흥국이 최고, 중국 주식 투자자!'
  },
  {
    from: 4,
    to: 4,
    name: '유럽 주식 투자자',
    desc: '주식: 안정적인 선진국이 좋아, 유럽 주식 투자자!'
  }
]

const infoList4 = [
  {
    from: 0,
    to: 0,
    name: '당신은... 동물원의 ',
    desc: '동물원에서 규칙적인 생활을 하고 있습니다.'
  },
  {
    from: 1,
    to: 1, 
    name: '당신은... 애완 ',
    desc: '만나는 주인에 따라 삶이 바뀝니다.'
  },
  {
    from: 2,
    to: 2,
    name: '당신은... 뒷산의 ',
    desc: '때로는 풍족하게 먹이를 먹지만 때로는 굶어야 할 때도 있습니다.'
  },
  {
    from: 3,
    to: 3, 
    name: '당신은... 사바나의 ',
    desc: '왕으로 군림할 수도, 잡아먹힐 수도 있습니다.'
  }
]
