const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 5;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

const calcScore = () => {
  let point = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point += qnaList[i].a[select[i]].score;
  }
  return point;
}

const calcScore2 = () => {
  let point2 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point2 += qnaList[i].a[select[i]].score2;
  }
  return point2;
}

const calcScore3 = () => {
  let point3 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point3 += qnaList[i].a[select[i]].score3;
  }
  return point3;
}

const calcScore4 = () => {
  let point4 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point4 += qnaList[i].a[select[i]].score4;
  }
  return point4;
}

const calcScore5 = () => {
  let point5 = 0;
  for (let i = 0; i < ENDPOINT; i++) {
    point5 += qnaList[i].a[select[i]].score5;
  }
  return point5;
}

const sortResult = (point) => {
  let num = 0;
  if (point <= 10) {
    num = 0;
  } else if (point <= 54) {
    num = 1;
  } else if (point <= 89) {
    num = 2;
  } else {
    num = 3;
  }
  return num;
}

const sortResult2 = (point2) => {
  let num2 = 1;
  if (point2 == 0) {
    num2 = 1;
  } else if (point2 == 1) {
    num2 = 2;
  } else if (point2 == 2) {
    num2 = 3;
  } else if (point2 == 3) {
    num2 = 4;
  } else {
    num2 = 5;
  }
  return num2;
}

const sortResult3 = (point3) => {
  let num3 = 1;
  if (point3 == 0) {
    num3 = 1;
  } else if (point3 == 1) {
    num3 = 2;
  } else if (point3 == 2) {
    num3 = 3;
  } else if (point3 == 3) {
    num3 = 4;
  } else {
    num3 = 5;
  }
  return num3;
}

const sortResult4 = (point4) => {
  let num4 = 1;
  if (point4 == 0) {
    num4 = 1;
  } else if (point4 == 1) {
    num4 = 2;
  } else if (point4 == 2) {
    num4 = 3;
  } else {
    num4 = 4;
  }
  return num4;
}

const sortResult5 = (point5) => {
  let num5 = 1;
  if (point5 <= 3) {
    num5 = 1;
  } else {
    num5 = 2;
  }
  return num5;
}

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  const point = calcScore();
  const point2 = calcScore2();
  const point3 = calcScore3();
  const point4 = calcScore4();
  const point5 = calcScore5();
  const grade = sortResult(point);
  const grade2 = sortResult2(point2);
  const grade3 = sortResult3(point3);
  const grade1 = 5 - (grade + 1);
  const grade4 = sortResult4(point4);
  const grade5 = sortResult5(point5);
  const grade2_2 = grade2 - 1;
  const grade3_2 = grade3 - 1;
  const grade4_2 = grade4 - 1;
  const grade5_2 = grade5 - 1;
  const pTitle = document.querySelector('.p');
  const res_point = document.querySelector('.point');
  const pin = document.querySelector('.pin');
  const img_url = 'img/' + grade3 + '-' + grade2 + '-' + grade4 + '-' + grade1 + '.png';
  const img2_url = 'img/MBTI.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');
  const hyungu = document.querySelector('.hyungu');
  const desc2 = document.querySelector('.res');
  const desc_1 = document.querySelector('.res');
  const desc_2 = document.querySelector('.res');
  const desc_3 = document.querySelector('.res');
  const res_img2 = document.createElement('img');
  const res_img2_div = document.querySelector('.art2');

  
  pTitle.innerHTML = '당신의 자산 비중 분석';
  res_point.innerHTML = '예금 비중: ' + (point / 2) + '% / 투자 비중: ' + (100 - point / 2) + '% ';
  pin.style.marginLeft = point/2 + '%'; 
  
  res_img.src = img_url;
  res_img.alt = infoList[grade].name + infoList3[grade3_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img.title = infoList[grade].name + infoList3[grade3_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML = infoList[grade].name + infoList3[grade3_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;  
  hyungu.innerHTML = infoList[grade].name2 + infoList3[grade3_2].name2 + infoList2[grade2_2].name2 + infoList4[grade4_2].name2 + infoList[grade].name3 + infoList3[grade3_2].name3 + infoList2[grade2_2].name3 + infoList4[grade4_2].name3; 
  desc.innerHTML = infoList[grade].desc + "<br>" + "<br>" + infoList5[grade5_2].desc + "<br>" + "<br>" + infoList2[grade2_2].desc + "<br>" + "<br>" + infoList4[grade4_2].desc + "<br>" + "<br>" + "<br>" + "<span style='color:red;'><strong>구성자산</strong><br><br>※ 아래 자산을 클릭하면 관련 정보를 자세히 알 수 있습니다.</span>" + "<br>" + "<br>" + "<a href='" + infoList3[grade3_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList3[grade3_2].desc2 + "<span style='color:red'>&lt;-</span></a>" + infoList[grade].desc_1 + "<br>" + "<a href='" + infoList2[grade2_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList2[grade2_2].desc2 + "<span style='color:red'>&lt;-</span></a>"+ infoList[grade].desc_2 + "<br>" + "<a href='" + infoList4[grade4_2].link + "' target='_blank' ><span style='color:red'>-&gt;</span>" + infoList4[grade4_2].desc2 + "<span style='color:red'>&lt;-</span></a>" + infoList[grade].desc_3 + "<br>" + "<br>" + "아직 수정 중인 베타 버전입니다.<br>이용 후기 및 개선사항을 알려주시면,<br>추첨을 통해 선물을 드릴 예정입니다." + "<br>" + "<br>" + "<a href='https://docs.google.com/forms/d/e/1FAIpQLSf0W1tIlUFk0-IngEx629bqrS6HeYbhccwSCq1fnnnl6hlV9w/viewform?usp=sf_link'" + "' target='_blank' ><span style='color:red'>-&gt;</span>" + "<이벤트 참여하기>" + "를 클릭해주세요." + "<span style='color:red'>&lt;-</span></a>";
  res_img2.src = img2_url;
  res_img2.alt = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img2.title = infoList[grade].name + infoList5[grade5_2].name + infoList2[grade2_2].name + infoList4[grade4_2].name;
  res_img2_div.appendChild(res_img2);

var shopLink1 = "a";
var shopLink2 = "b";
var shopLink3 = "c";
var shopLink4 = "d";
var shopLink5 = "e";

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/1961";
}  
if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3140"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/2363";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4443"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1560";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4442"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1559";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4441"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1558";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4440"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1557";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4433"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1556";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4432"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1555";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4431"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1554";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4430"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1553";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4423"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1552";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4422"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1551";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4421"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1550";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4420"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1549";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4413"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1548";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4412"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1547";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4411"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1546";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4410"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1545";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4403"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1544";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4402"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1543";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4401"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1542";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4400"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1541";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4343"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1540";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4342"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1539";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4341"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1538";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4340"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1537";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4333"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1536";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4332"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1535";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4331"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1534";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4330"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1533";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4323"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1532";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4322"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1531";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4321"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1530";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4320"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1529";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4313"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1528";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4312"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1527";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4311"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1526";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4310"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1525";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4303"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1524";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4302"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1523";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4301"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1522";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4300"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1521";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4143"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1520";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4142"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1519";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4141"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1518";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4140"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1517";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4133"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1516";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4132"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1515";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4131"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1514";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4130"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1513";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4123"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1512";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4122"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1511";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4121"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1510";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4120"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1509";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4113"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1508";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4112"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1507";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4111"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1506";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4110"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1505";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4103"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1504";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4102"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1503";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4101"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1502";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4100"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1501";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4243"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1500";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4242"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1499";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4241"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1498";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4240"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1497";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4233"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1496";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4232"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1495";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4231"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1494";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4230"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1493";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4223"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1492";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4222"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1491";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4221"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1490";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4220"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1489";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4213"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1488";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4212"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1487";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4211"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1486";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4210"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1485";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4203"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1484";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4202"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1483";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4201"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1482";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4200"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1481";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4043"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1480";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4042"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1479";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4041"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1478";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4040"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1477";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4033"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1476";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4032"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1475";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4031"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1474";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4030"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1473";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4023"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1472";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4022"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1471";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4021"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1470";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4020"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1469";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4013"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1468";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4012"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1467";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4011"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1466";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4010"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1465";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4003"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1464";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4002"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1463";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4001"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1462";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4000"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1461";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3443"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1460";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3442"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1459";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3441"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1458";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3440"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1457";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3433"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1456";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3432"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1455";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3431"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1454";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3430"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1453";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3423"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1452";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3422"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1451";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3421"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1450";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3420"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1449";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3413"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1448";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3412"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1447";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3411"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1446";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3410"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1445";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3403"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1444";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3402"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3401"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3400"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3343"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3342"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1439";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3341"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1438";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3340"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1437";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3333"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1436";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3332"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1435";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3331"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1434";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3330"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3323"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3322"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3321"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3320"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1429";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3313"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1428";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3312"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1427";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3311"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1426";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3310"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1425";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3303"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1424";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3302"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3301"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3300"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3143"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3142"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1419";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3141"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1418";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3133"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1416";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3132"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1415";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3131"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1414";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3130"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3123"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3122"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3121"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3120"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1409";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3113"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1408";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3112"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1407";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3111"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1406";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3110"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1405";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3103"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1404";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3102"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3101"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3100"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3243"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3242"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1399";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3241"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1398";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3240"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1397";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3233"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1396";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3232"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1395";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3231"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1394";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3230"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1393";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3223"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1392";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3222"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1391";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3221"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1390";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3220"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1389";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3213"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1388";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3212"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1387";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3211"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1386";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3210"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1385";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3203"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1384";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3202"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1383";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3201"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1382";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3200"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1381";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3043"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1380";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3042"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1379";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3041"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1378";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3040"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1377";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3033"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1376";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3032"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1375";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3031"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1374";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3030"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1373";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3023"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1372";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3022"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1371";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3021"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1370";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3020"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1369";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3013"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1368";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3012"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1367";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3011"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1366";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3010"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1365";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3003"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1364";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3002"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1363";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3001"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1362";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3000"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1361";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2443"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1360";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2442"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1359";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2441"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1358";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2440"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1357";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2433"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1356";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2432"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1355";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2431"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1354";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2430"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1353";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2423"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1352";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2422"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1351";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2421"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1350";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2420"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1349";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2413"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1348";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2412"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1347";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2411"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1346";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2410"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1345";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2403"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1344";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2402"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2401"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2400"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2343"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2342"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1339";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2341"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1338";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2340"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1337";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2333"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1336";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2332"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1335";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2331"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1334";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2330"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2323"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2322"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2321"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2320"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1329";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2313"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1328";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2312"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1327";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2311"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1326";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2310"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1325";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2303"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1324";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2302"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2301"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2300"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2143"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2142"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1319";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2141"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1318";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2140"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1317";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2133"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1316";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2132"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1315";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2131"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1314";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2130"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2123"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2122"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2121"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2120"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1309";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2113"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1308";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2112"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1307";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2111"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1306";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2110"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1305";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2103"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1304";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2102"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2101"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2100"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2243"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2242"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1299";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2241"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1298";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2240"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1297";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2233"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1296";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2232"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1295";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2231"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1294";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2230"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1293";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2223"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1292";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2222"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1291";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2221"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1290";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2220"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1289";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2213"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1288";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2212"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1287";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2211"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1286";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2210"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1285";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2203"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1284";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2202"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1283";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2201"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1282";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2200"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1281";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2043"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1280";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2042"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1279";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2041"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1278";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2040"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1277";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1276";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1275";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2031"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1274";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2030"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1273";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2023"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1272";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2022"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1271";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2021"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1270";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2020"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1269";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2013"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1268";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2012"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1267";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2011"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1266";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2010"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1265";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2003"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1264";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2002"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1263";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2001"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1262";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2000"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1261";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1443"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1260";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1442"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1259";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1441"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1258";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1440"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1257";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1433"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1256";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1432"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1255";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1431"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1254";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1430"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1253";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1423"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1252";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1422"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1251";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1421"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1250";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1420"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1249";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1413"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1248";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1412"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1247";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1411"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1246";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1410"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1245";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1403"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1244";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1402"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1401"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1400"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1343"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1342"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1239";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1341"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1238";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1340"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1237";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1333"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1236";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1332"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1235";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1331"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1234";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1330"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1323"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1322"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1321"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1320"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1229";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1313"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1228";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1312"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1227";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1311"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1226";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1310"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1225";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1303"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1224";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1302"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1301"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1300"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1143"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1142"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1219";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1141"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1218";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1140"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1217";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1133"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1216";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1132"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1215";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1131"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1214";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1130"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1123"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1122"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1121"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1120"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1209";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1113"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1208";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1112"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1207";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1111"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1206";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1110"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1205";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1103"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1204";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1102"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1101"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1100"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1243"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1242"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1199";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1241"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1198";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1240"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1197";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1233"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1196";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1232"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1195";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1231"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1194";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1230"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1193";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1223"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1192";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1222"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1191";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1221"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1190";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1220"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1189";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1213"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1188";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1212"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1187";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1211"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1186";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1210"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1185";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1203"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1184";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1202"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1183";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1201"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1182";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1200"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1181";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1043"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1180";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1042"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1179";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1041"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1178";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1040"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1177";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1176";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1175";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1031"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1174";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1030"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1173";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1023"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1172";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1022"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1171";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1021"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1170";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1020"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1169";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1013"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1168";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1012"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1167";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1011"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1166";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1010"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1165";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1003"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1164";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1002"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1163";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1001"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1162";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink3 = "https://etfpi.cafe24.com/surl/O/1161";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3140"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/2364";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4443"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1160";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4442"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1159";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4441"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1158";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4440"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1157";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4433"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1156";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4432"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1155";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4431"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1154";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4430"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1153";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4423"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1152";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4422"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1151";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4421"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1150";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4420"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1149";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4413"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1148";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4412"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1147";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4411"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1146";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4410"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1145";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4403"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1144";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4402"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4401"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4400"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4343"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4342"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1139";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4341"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1138";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4340"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1137";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4333"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1136";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4332"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1135";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4331"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1134";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4330"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4323"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4322"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4321"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4320"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1129";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4313"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1128";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4312"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1127";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4311"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1126";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4310"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1125";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4303"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1124";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4302"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4301"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4300"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4143"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4142"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1119";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4141"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1118";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4140"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1117";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4133"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1116";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4132"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1115";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4131"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1114";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4130"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4123"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4122"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4121"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4120"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1109";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4113"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1108";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4112"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1107";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4111"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1106";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4110"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1105";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4103"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1104";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4102"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4101"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4100"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4243"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4242"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1099";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4241"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1098";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4240"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1097";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4233"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1096";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4232"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1095";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4231"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1094";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4230"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1093";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4223"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1092";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4222"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1091";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4221"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1090";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4220"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1089";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4213"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1088";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4212"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1087";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4211"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1086";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4210"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1085";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4203"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1084";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4202"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1083";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4201"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1082";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4200"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1081";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4043"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1080";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4042"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1079";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4041"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1078";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4040"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1077";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4033"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1076";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4032"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1075";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4031"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1074";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4030"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1073";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4023"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1072";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4022"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1071";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4021"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1070";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4020"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1069";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4013"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1068";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4012"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1067";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4011"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1066";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4010"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1065";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4003"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1064";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4002"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1063";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4001"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1062";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4000"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1061";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3443"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1060";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3442"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1059";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3441"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1058";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3440"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1057";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3433"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1056";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3432"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1055";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3431"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1054";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3430"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1053";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3423"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1052";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3422"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1051";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3421"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1050";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3420"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1049";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3413"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1048";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3412"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1047";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3411"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1046";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3410"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1045";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3403"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1044";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3402"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3401"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3400"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3343"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3342"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1039";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3341"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1038";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3340"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1037";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3333"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1036";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3332"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1035";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3331"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1034";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3330"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3323"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3322"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3321"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3320"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1029";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3313"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1028";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3312"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1027";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3311"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1026";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3310"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1025";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3303"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1024";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3302"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3301"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3300"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3143"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3142"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1019";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3141"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1018";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3133"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1016";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3132"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1015";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3131"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1014";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3130"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3123"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3122"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3121"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3120"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1009";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3113"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1008";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3112"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1007";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3111"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1006";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3110"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1005";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3103"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1004";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3102"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3101"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3100"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3243"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/1000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3242"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/999";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3241"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/998";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3240"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/997";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3233"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/996";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3232"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/995";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3231"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/994";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3230"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/993";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3223"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/992";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3222"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/991";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3221"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/990";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3220"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/989";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3213"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/988";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3212"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/987";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3211"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/986";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3210"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/985";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3203"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/984";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3202"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/983";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3201"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/982";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3200"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/981";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3043"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/980";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3042"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/979";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3041"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/978";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3040"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/977";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3033"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/976";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3032"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/975";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3031"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/974";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3030"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/973";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3023"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/972";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3022"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/971";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3021"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/970";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3020"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/969";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3013"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/968";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3012"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/967";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3011"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/966";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3010"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/965";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3003"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/964";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3002"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/963";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3001"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/962";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3000"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/961";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2443"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/960";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2442"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/959";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2441"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/958";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2440"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/957";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2433"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/956";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2432"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/955";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2431"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/954";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2430"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/953";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2423"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/952";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2422"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/951";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2421"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/950";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2420"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/949";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2413"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/948";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2412"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/947";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2411"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/946";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2410"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/945";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2403"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/944";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2402"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/943";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2401"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/942";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2400"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/941";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2343"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/940";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2342"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/939";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2341"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/938";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2340"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/937";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2333"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/936";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2332"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/935";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2331"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/934";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2330"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/933";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2323"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/932";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2322"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/931";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2321"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/930";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2320"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/929";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2313"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/928";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2312"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/927";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2311"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/926";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2310"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/925";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2303"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/924";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2302"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/923";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2301"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/922";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2300"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/921";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2143"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/920";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2142"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/919";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2141"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/918";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2140"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/917";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2133"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/916";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2132"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/915";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2131"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/914";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2130"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/913";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2123"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/912";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2122"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/911";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2121"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/910";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2120"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/909";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2113"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/908";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2112"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/907";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2111"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/906";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2110"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/905";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2103"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/904";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2102"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/903";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2101"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/902";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2100"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/901";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2243"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/900";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2242"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/899";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2241"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/898";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2240"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/897";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2233"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/896";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2232"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/895";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2231"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/894";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2230"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/893";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2223"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/892";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2222"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/891";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2221"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/890";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2220"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/889";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2213"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/888";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2212"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/887";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2211"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/886";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2210"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/885";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2203"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/884";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2202"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/883";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2201"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/882";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2200"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/881";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2043"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/880";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2042"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/879";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2041"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/878";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2040"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/877";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/876";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/875";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2031"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/874";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2030"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/873";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2023"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/872";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2022"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/871";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2021"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/870";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2020"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/869";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2013"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/868";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2012"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/867";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2011"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/866";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2010"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/865";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2003"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/864";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2002"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/863";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2001"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/862";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2000"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/861";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1443"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/860";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1442"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/859";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1441"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/858";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1440"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/857";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1433"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/856";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1432"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/855";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1431"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/854";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1430"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/853";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1423"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/852";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1422"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/851";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1421"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/850";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1420"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/849";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1413"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/848";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1412"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/847";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1411"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/846";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1410"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/845";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1403"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/844";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1402"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/843";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1401"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/842";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1400"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/841";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1343"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/840";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1342"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/839";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1341"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/838";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1340"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/837";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1333"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/836";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1332"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/835";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1331"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/834";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1330"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/833";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1323"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/832";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1322"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/831";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1321"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/830";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1320"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/829";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1313"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/828";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1312"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/827";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1311"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/826";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1310"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/825";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1303"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/824";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1302"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/823";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1301"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/822";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1300"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/821";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1143"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/820";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1142"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/819";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1141"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/818";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1140"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/817";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1133"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/816";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1132"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/815";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1131"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/814";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1130"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/813";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1123"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/812";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1122"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/811";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1121"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/810";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1120"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/809";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1113"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/808";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1112"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/807";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1111"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/806";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1110"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/805";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1103"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/804";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1102"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/803";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1101"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/802";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1100"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/801";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1243"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/800";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1242"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/799";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1241"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/798";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1240"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/797";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1233"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/796";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1232"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/795";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1231"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/794";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1230"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/793";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1223"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/792";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1222"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/791";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1221"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/790";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1220"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/789";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1213"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/788";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1212"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/787";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1211"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/786";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1210"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/785";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1203"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/784";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1202"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/783";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1201"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/782";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1200"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/781";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1043"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/780";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1042"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/779";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1041"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/778";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1040"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/777";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/776";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1032"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/775";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1031"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/774";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1030"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/773";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1023"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/772";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1022"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/771";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1021"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/770";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1020"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/769";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1013"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/768";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1012"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/767";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1011"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/766";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1010"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/765";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1003"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/764";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1002"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/763";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1001"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/762";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink2 = "https://etfpi.cafe24.com/surl/O/761";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3140"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/2365";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4443"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/760";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4442"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/759";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4441"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/758";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4440"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/757";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4433"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/756";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4432"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/755";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4431"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/754";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4430"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/753";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4423"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/752";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4422"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/751";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4421"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/750";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4420"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/749";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4413"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/748";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4412"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/747";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4411"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/746";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4410"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/745";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4403"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/744";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4402"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/743";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4401"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/742";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4400"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/741";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4343"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/740";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4342"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/739";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4341"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/738";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4340"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/737";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4333"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/736";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4332"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/735";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4331"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/734";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4330"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/733";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4323"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/732";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4322"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/731";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4321"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/730";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4320"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/729";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4313"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/728";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4312"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/727";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4311"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/726";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4310"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/725";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4303"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/724";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4302"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/723";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4301"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/722";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4300"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/721";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4143"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/720";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4142"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/719";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4141"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/718";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4140"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/717";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4133"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/716";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4132"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/715";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4131"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/714";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4130"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/713";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4123"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/712";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4122"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/711";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4121"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/710";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4120"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/709";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4113"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/708";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4112"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/707";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4111"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/706";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4110"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/705";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4103"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/704";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4102"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/703";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4101"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/702";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4100"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/701";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4243"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/700";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4242"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/699";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4241"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/698";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4240"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/697";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4233"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/696";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4232"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/695";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4231"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/694";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4230"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/693";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4223"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/692";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4222"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/691";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4221"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/690";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4220"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/689";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4213"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/688";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4212"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/687";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4211"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/686";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4210"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/685";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4203"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/684";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4202"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/683";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4201"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/682";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4200"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/681";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4043"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/680";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4042"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/679";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4041"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/678";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4040"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/677";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4033"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/676";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4032"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/675";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4031"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/674";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4030"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/673";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4023"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/672";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4022"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/671";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4021"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/670";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4020"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/669";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4013"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/668";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4012"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/667";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4011"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/666";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4010"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/665";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4003"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/664";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4002"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/663";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4001"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/662";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4000"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/661";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3443"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/660";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3442"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/659";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3441"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/658";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3440"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/657";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3433"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/656";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3432"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/655";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3431"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/654";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3430"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/653";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3423"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/652";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3422"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/651";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3421"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/650";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3420"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/649";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3413"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/648";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3412"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/647";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3411"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/646";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3410"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/645";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3403"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/644";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3402"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/643";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3401"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/642";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3400"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/641";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3343"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/640";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3342"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/639";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3341"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/638";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3340"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/637";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3333"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/636";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3332"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/635";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3331"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/634";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3330"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/633";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3323"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/632";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3322"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/631";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3321"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/630";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3320"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/629";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3313"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/628";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3312"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/627";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3311"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/626";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3310"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/625";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3303"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/624";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3302"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/623";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3301"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/622";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3300"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/621";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3143"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/620";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3142"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/619";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3141"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/618";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3133"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/616";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3132"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/615";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3131"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/614";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3130"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/613";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3123"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/612";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3122"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/611";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3121"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/610";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3120"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/609";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3113"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/608";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3112"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/607";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3111"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/606";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3110"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/605";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3103"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/604";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3102"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/603";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3101"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/602";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3100"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/601";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3243"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/600";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3242"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/599";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3241"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/598";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3240"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/597";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3233"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/596";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3232"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/595";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3231"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/594";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3230"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/593";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3223"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/592";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3222"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/591";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3221"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/590";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3220"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/589";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3213"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/588";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3212"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/587";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3211"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/586";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3210"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/585";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3203"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/584";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3202"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/583";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3201"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/582";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3200"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/581";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3043"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/580";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3042"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/579";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3041"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/578";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3040"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/577";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3033"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/576";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3032"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/575";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3031"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/574";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3030"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/573";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3023"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/572";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3022"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/571";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3021"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/570";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3020"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/569";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3013"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/568";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3012"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/567";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3011"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/566";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3010"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/565";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3003"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/564";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3002"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/563";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3001"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/562";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3000"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/561";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2443"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/560";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2442"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/559";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2441"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/558";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2440"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/557";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2433"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/556";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2432"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/555";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2431"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/554";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2430"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/553";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2423"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/552";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2422"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/551";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2421"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/550";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2420"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/549";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2413"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/548";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2412"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/547";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2411"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/546";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2410"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/545";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2403"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/544";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2402"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/543";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2401"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/542";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2400"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/541";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2343"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/540";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2342"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/539";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2341"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/538";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2340"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/537";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2333"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/536";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2332"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/535";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2331"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/534";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2330"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/533";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2323"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/532";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2322"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/531";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2321"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/530";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2320"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/529";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2313"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/528";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2312"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/527";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2311"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/526";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2310"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/525";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2303"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/524";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2302"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/523";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2301"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/522";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2300"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/521";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2143"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/520";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2142"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/519";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2141"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/518";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2140"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/517";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2133"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/516";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2132"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/515";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2131"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/514";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2130"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/513";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2123"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/512";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2122"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/511";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2121"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/510";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2120"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/509";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2113"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/508";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2112"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/507";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2111"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/506";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2110"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/505";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2103"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/504";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2102"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/503";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2101"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/502";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2100"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/501";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2243"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/500";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2242"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/499";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2241"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/498";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2240"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/497";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2233"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/496";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2232"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/495";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2231"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/494";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2230"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/493";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2223"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/492";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2222"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/491";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2221"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/490";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2220"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/489";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2213"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/488";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2212"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/487";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2211"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/486";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2210"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/485";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2203"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/484";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2202"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/483";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2201"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/482";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2200"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/481";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2043"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/480";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2042"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/479";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2041"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/478";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2040"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/477";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/476";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/475";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2031"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/474";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2030"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/473";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2023"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/472";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2022"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/471";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2021"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/470";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2020"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/469";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2013"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/468";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2012"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/467";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2011"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/466";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2010"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/465";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2003"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/464";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2002"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/463";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2001"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/462";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2000"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/461";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1443"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/460";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1442"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/459";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1441"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/458";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1440"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/457";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1433"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/456";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1432"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/455";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1431"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/454";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1430"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/453";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1423"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/452";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1422"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/451";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1421"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/450";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1420"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/449";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1413"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/448";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1412"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/447";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1411"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/446";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1410"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/445";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1403"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/444";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1402"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/443";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1401"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/442";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1400"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/441";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1343"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/440";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1342"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/439";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1341"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/438";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1340"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/437";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1333"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/436";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1332"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/435";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1331"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/434";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1330"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/433";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1323"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/432";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1322"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/431";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1321"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/430";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1320"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/429";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1313"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/428";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1312"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/427";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1311"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/426";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1310"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/425";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1303"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/424";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1302"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/423";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1301"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/422";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1300"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/421";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1143"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/420";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1142"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/419";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1141"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/418";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1140"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/417";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1133"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/416";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1132"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/415";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1131"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/414";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1130"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/413";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1123"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/412";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1122"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/411";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1121"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/410";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1120"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/409";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1113"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/408";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1112"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/407";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1111"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/406";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1110"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/405";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1103"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/404";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1102"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/403";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1101"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/402";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1100"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/401";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1243"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/400";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1242"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/399";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1241"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/398";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1240"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/397";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1233"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/396";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1232"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/395";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1231"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/394";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1230"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/393";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1223"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/392";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1222"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/391";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1221"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/390";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1220"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/389";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1213"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/388";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1212"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/387";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1211"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/386";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1210"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/385";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1203"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/384";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1202"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/383";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1201"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/382";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1200"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/381";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1043"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/380";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1042"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/379";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1041"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/378";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1040"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/377";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1033"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/376";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1032"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/375";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1031"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/374";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1030"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/373";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1023"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/372";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1022"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/371";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1021"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/370";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1020"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/369";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1013"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/368";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1012"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/367";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1011"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/366";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1010"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/365";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1003"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/364";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1002"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/363";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1001"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/362";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink1 = "https://etfpi.cafe24.com/surl/O/361";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3140"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2361";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4443"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2360";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4442"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2359";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4441"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2358";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4440"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2357";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4433"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2356";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4432"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2355";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4431"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2354";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4430"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2353";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4423"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2352";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4422"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2351";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4421"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2350";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4420"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2349";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4413"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2348";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4412"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2347";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4411"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2346";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4410"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2345";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4403"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2344";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4402"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2343";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4401"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2342";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4400"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2341";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4343"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2340";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4342"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2339";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4341"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2338";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4340"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2337";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4333"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2336";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4332"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2335";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4331"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2334";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4330"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2333";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4323"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2332";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4322"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2331";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4321"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2330";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4320"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2329";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4313"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2328";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4312"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2327";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4311"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2326";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4310"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2325";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4303"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2324";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4302"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2323";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4301"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2322";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4300"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2321";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4143"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2320";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4142"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2319";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4141"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2318";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4140"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2317";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4133"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2316";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4132"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2315";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4131"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2314";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4130"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2313";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4123"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2312";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4122"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2311";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4121"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2310";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4120"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2309";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4113"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2308";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4112"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2307";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4111"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2306";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4110"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2305";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4103"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2304";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4102"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2303";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4101"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2302";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4100"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2301";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4243"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2300";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4242"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2299";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4241"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2298";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4240"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2297";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4233"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2296";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4232"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2295";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4231"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2294";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4230"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2293";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4223"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2292";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4222"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2291";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4221"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2290";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4220"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2289";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4213"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2288";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4212"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2287";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4211"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2286";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4210"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2285";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4203"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2284";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4202"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2283";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4201"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2282";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4200"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2281";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4043"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2280";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4042"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2279";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4041"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2278";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4040"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2277";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4033"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2276";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4032"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2275";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4031"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2274";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4030"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2273";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4023"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2272";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4022"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2271";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4021"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2270";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4020"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2269";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4013"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2268";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4012"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2267";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4011"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2266";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4010"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2265";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4003"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2264";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4002"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2263";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4001"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2262";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4000"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2261";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3443"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2260";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3442"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2259";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3441"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2258";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3440"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2257";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3433"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2256";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3432"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2255";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3431"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2254";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3430"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2253";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3423"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2252";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3422"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2251";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3421"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2250";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3420"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2249";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3413"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2248";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3412"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2247";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3411"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2246";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3410"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2245";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3403"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2244";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3402"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2243";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3401"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2242";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3400"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2241";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3343"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2240";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3342"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2239";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3341"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2238";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3340"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2237";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3333"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2236";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3332"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2235";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3331"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2234";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3330"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2233";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3323"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2232";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3322"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2231";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3321"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2230";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3320"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2229";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3313"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2228";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3312"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2227";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3311"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2226";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3310"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2225";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3303"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2224";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3302"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2223";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3301"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2222";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3300"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2221";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3143"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2220";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3142"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2219";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3141"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2218";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3133"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2216";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3132"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2215";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3131"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2214";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3130"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2213";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3123"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2212";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3122"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2211";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3121"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2210";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3120"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2209";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3113"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2208";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3112"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2207";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3111"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2206";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3110"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2205";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3103"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2204";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3102"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2203";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3101"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2202";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3100"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2201";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3243"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2200";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3242"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2199";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3241"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2198";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3240"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2197";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3233"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2196";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3232"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2195";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3231"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2194";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3230"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2193";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3223"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2192";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3222"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2191";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3221"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2190";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3220"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2189";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3213"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2188";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3212"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2187";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3211"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2186";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3210"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2185";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3203"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2184";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3202"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2183";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3201"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2182";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3200"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2181";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3043"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2180";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3042"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2179";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3041"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2178";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3040"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2177";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3033"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2176";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3032"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2175";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3031"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2174";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3030"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2173";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3023"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2172";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3022"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2171";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3021"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2170";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3020"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2169";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3013"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2168";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3012"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2167";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3011"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2166";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3010"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2165";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3003"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2164";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3002"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2163";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3001"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2162";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3000"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2161";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2443"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2160";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2442"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2159";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2441"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2158";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2440"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2157";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2433"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2156";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2432"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2155";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2431"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2154";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2430"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2153";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2423"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2152";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2422"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2151";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2421"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2150";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2420"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2149";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2413"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2148";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2412"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2147";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2411"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2146";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2410"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2145";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2403"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2144";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2402"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2143";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2401"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2142";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2400"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2141";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2343"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2140";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2342"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2139";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2341"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2138";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2340"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2137";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2333"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2136";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2332"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2135";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2331"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2134";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2330"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2133";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2323"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2132";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2322"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2131";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2321"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2130";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2320"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2129";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2313"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2128";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2312"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2127";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2311"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2126";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2310"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2125";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2303"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2124";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2302"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2123";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2301"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2122";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2300"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2121";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2143"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2120";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2142"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2119";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2141"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2118";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2140"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2117";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2133"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2116";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2132"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2115";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2131"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2114";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2130"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2113";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2123"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2112";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2122"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2111";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2121"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2110";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2120"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2109";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2113"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2108";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2112"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2107";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2111"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2106";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2110"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2105";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2103"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2104";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2102"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2103";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2101"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2102";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2100"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2101";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2243"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2100";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2242"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2099";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2241"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2098";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2240"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2097";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2233"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2096";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2232"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2095";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2231"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2094";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2230"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2093";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2223"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2092";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2222"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2091";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2221"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2090";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2220"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2089";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2213"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2088";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2212"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2087";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2211"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2086";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2210"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2085";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2203"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2084";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2202"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2083";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2201"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2082";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2200"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2081";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2043"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2080";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2042"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2079";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2041"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2078";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2040"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2077";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2076";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2075";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2031"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2074";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2030"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2073";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2023"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2072";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2022"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2071";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2021"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2070";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2020"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2069";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2013"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2068";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2012"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2067";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2011"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2066";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2010"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2065";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2003"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2064";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2002"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2063";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2001"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2062";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2000"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2061";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1443"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2060";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1442"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2059";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1441"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2058";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1440"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2057";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1433"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2056";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1432"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2055";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1431"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2054";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1430"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2053";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1423"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2052";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1422"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2051";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1421"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2050";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1420"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2049";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1413"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2048";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1412"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2047";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1411"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2046";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1410"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2045";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1403"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2044";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1402"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2043";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1401"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2042";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1400"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2041";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1343"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2040";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1342"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2039";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1341"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2038";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1340"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2037";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1333"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2036";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1332"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2035";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1331"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2034";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1330"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2033";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1323"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2032";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1322"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2031";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1321"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2030";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1320"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2029";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1313"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2028";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1312"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2027";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1311"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2026";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1310"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2025";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1303"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2024";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1302"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2023";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1301"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2022";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1300"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2021";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1143"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2020";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1142"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2019";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1141"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2018";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1140"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2017";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1133"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2016";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1132"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2015";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1131"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2014";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1130"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2013";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1123"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2012";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1122"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2011";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1121"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2010";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1120"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2009";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1113"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2008";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1112"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2007";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1111"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2006";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1110"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2005";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1103"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2004";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1102"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2003";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1101"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2002";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1100"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2001";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1243"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/2000";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1242"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1999";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1241"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1998";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1240"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1997";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1233"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1996";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1232"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1995";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1231"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1994";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1230"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1993";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1223"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1992";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1222"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1991";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1221"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1990";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1220"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1989";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1213"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1988";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1212"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1987";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1211"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1986";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1210"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1985";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1203"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1984";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1202"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1983";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1201"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1982";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1200"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1981";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1043"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1980";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1042"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1979";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1041"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1978";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1040"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1977";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1976";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1975";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1031"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1974";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1030"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1973";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1023"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1972";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1022"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1971";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1021"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1970";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1020"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1969";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1013"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1968";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1012"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1967";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1011"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1966";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1010"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1965";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1003"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1964";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1002"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1963";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1001"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1962";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink5 = "https://etfpi.cafe24.com/surl/O/1961";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3140"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/2362";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4443"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1960";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4442"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1959";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4441"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1958";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4440"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1957";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4433"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1956";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4432"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1955";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4431"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1954";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4430"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1953";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4423"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1952";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4422"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1951";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4421"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1950";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4420"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1949";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4413"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1948";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4412"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1947";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4411"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1946";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4410"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1945";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4403"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1944";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4402"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1943";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4401"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1942";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4400"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1941";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4343"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1940";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4342"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1939";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4341"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1938";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4340"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1937";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4333"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1936";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4332"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1935";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4331"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1934";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4330"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1933";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4323"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1932";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4322"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1931";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4321"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1930";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4320"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1929";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4313"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1928";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4312"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1927";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4311"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1926";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4310"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1925";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4303"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1924";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4302"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1923";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4301"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1922";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4300"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1921";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4143"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1920";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4142"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1919";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4141"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1918";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4140"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1917";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4133"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1916";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP4132"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1915";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4131"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1914";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ4130"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1913";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4123"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1912";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4122"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1911";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4121"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1910";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4120"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1909";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4113"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1908";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4112"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1907";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4111"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1906";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4110"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1905";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4103"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1904";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP4102"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1903";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4101"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1902";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ4100"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1901";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4243"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1900";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4242"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1899";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4241"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1898";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4240"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1897";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4233"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1896";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4232"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1895";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4231"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1894";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4230"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1893";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4223"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1892";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4222"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1891";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4221"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1890";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4220"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1889";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4213"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1888";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4212"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1887";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4211"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1886";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4210"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1885";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4203"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1884";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4202"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1883";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4201"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1882";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4200"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1881";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4043"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1880";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4042"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1879";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4041"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1878";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4040"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1877";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4033"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1876";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP4032"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1875";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4031"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1874";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ4030"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1873";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4023"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1872";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4022"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1871";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4021"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1870";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4020"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1869";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4013"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1868";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4012"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1867";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4011"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1866";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4010"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1865";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4003"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1864";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP4002"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1863";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4001"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1862";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ4000"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1861";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3443"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1860";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3442"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1859";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3441"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1858";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3440"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1857";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3433"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1856";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3432"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1855";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3431"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1854";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3430"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1853";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3423"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1852";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3422"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1851";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3421"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1850";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3420"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1849";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3413"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1848";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3412"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1847";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3411"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1846";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3410"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1845";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3403"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1844";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3402"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1843";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3401"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1842";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3400"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1841";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3343"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1840";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3342"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1839";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3341"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1838";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3340"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1837";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3333"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1836";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3332"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1835";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3331"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1834";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3330"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1833";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3323"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1832";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3322"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1831";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3321"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1830";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3320"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1829";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3313"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1828";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3312"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1827";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3311"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1826";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3310"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1825";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3303"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1824";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3302"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1823";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3301"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1822";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3300"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1821";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3143"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1820";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3142"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1819";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3141"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1818";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3133"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1816";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFP3132"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1815";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3131"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1814";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESFJ3130"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1813";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3123"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1812";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3122"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1811";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3121"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1810";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3120"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1809";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3113"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1808";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3112"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1807";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3111"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1806";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3110"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1805";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3103"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1804";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTP3102"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1803";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3101"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1802";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ESTJ3100"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1801";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3243"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1800";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3242"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1799";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3241"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1798";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3240"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1797";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3233"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1796";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3232"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1795";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3231"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1794";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3230"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1793";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3223"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1792";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3222"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1791";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3221"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1790";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3220"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1789";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3213"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1788";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3212"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1787";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3211"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1786";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3210"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1785";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3203"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1784";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3202"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1783";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3201"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1782";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3200"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1781";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3043"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1780";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3042"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1779";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3041"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1778";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3040"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1777";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3033"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1776";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFP3032"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1775";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3031"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1774";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENFJ3030"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1773";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3023"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1772";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3022"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1771";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3021"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1770";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3020"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1769";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3013"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1768";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3012"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1767";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3011"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1766";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3010"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1765";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3003"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1764";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTP3002"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1763";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3001"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1762";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ENTJ3000"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1761";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2443"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1760";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2442"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1759";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2441"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1758";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2440"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1757";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2433"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1756";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2432"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1755";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2431"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1754";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2430"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1753";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2423"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1752";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2422"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1751";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2421"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1750";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2420"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1749";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2413"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1748";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2412"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1747";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2411"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1746";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2410"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1745";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2403"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1744";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2402"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1743";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2401"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1742";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2400"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1741";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2343"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1740";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2342"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1739";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2341"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1738";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2340"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1737";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2333"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1736";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2332"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1735";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2331"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1734";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2330"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1733";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2323"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1732";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2322"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1731";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2321"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1730";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2320"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1729";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2313"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1728";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2312"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1727";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2311"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1726";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2310"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1725";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2303"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1724";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2302"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1723";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2301"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1722";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2300"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1721";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2143"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1720";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2142"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1719";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2141"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1718";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2140"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1717";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2133"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1716";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP2132"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1715";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2131"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1714";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ2130"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1713";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2123"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1712";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2122"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1711";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2121"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1710";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2120"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1709";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2113"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1708";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2112"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1707";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2111"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1706";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2110"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1705";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2103"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1704";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP2102"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1703";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2101"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1702";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ2100"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1701";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2243"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1700";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2242"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1699";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2241"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1698";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2240"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1697";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2233"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1696";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2232"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1695";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2231"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1694";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2230"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1693";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2223"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1692";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2222"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1691";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2221"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1690";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2220"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1689";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2213"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1688";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2212"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1687";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2211"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1686";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2210"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1685";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2203"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1684";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2202"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1683";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2201"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1682";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2200"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1681";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2043"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1680";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2042"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1679";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2041"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1678";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2040"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1677";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2033"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1676";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP2032"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1675";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2031"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1674";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ2030"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1673";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2023"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1672";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2022"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1671";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2021"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1670";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2020"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1669";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2013"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1668";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2012"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1667";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2011"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1666";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2010"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1665";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2003"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1664";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP2002"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1663";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2001"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1662";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ2000"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1661";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1443"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1660";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1442"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1659";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1441"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1658";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1440"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1657";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1433"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1656";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1432"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1655";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1431"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1654";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1430"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1653";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1423"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1652";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1422"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1651";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1421"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1650";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1420"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1649";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1413"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1648";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1412"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1647";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1411"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1646";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1410"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1645";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1403"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1644";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1402"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1643";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1401"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1642";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1400"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1641";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1343"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1640";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1342"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1639";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1341"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1638";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1340"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1637";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1333"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1636";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1332"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1635";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1331"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1634";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1330"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1633";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1323"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1632";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1322"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1631";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1321"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1630";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1320"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1629";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1313"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1628";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1312"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1627";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1311"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1626";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1310"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1625";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1303"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1624";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1302"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1623";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1301"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1622";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1300"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1621";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1143"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1620";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1142"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1619";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1141"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1618";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1140"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1617";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1133"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1616";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFP1132"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1615";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1131"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1614";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISFJ1130"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1613";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1123"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1612";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1122"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1611";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1121"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1610";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1120"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1609";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1113"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1608";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1112"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1607";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1111"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1606";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1110"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1605";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1103"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1604";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTP1102"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1603";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1101"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1602";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... ISTJ1100"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1601";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1243"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1600";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1242"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1599";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1241"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1598";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1240"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1597";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1233"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1596";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1232"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1595";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1231"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1594";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1230"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1593";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1223"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1592";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1222"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1591";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1221"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1590";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1220"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1589";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1213"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1588";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1212"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1587";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1211"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1586";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1210"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1585";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1203"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1584";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1202"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1583";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1201"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1582";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1200"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1581";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1043"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1580";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1042"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1579";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1041"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1578";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1040"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1577";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1033"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1576";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFP1032"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1575";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1031"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1574";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INFJ1030"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1573";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1023"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1572";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1022"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1571";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1021"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1570";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1020"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1569";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1013"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1568";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1012"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1567";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1011"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1566";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1010"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1565";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1003"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1564";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTP1002"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1563";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1001"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1562";
}

if(hyungu.innerHTML == "당신의 고유 MBTI는... INTJ1000"){
  shopLink4 = "https://etfpi.cafe24.com/surl/O/1561";
}



const hyungyuLink1 = document.querySelector(".hyungyuLink1");
hyungyuLink1.setAttribute("href",shopLink1);
const hyungyuLink2 = document.querySelector(".hyungyuLink2");
hyungyuLink2.setAttribute("href",shopLink2);
const hyungyuLink3 = document.querySelector(".hyungyuLink3");
hyungyuLink3.setAttribute("href",shopLink3);
const hyungyuLink4 = document.querySelector(".hyungyuLink4");
hyungyuLink4.setAttribute("href",shopLink4);
const hyungyuLink5 = document.querySelector(".hyungyuLink5");
hyungyuLink5.setAttribute("href",shopLink5);
  
 
  setTimeout(() => {
    header.style.display = 'block';
    footer.style.display = 'block';
    result.style.display = 'block';
    header.style.animation =
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === qnaList.length - 1) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (100/ENDPOINT * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    header.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const msg = document.querySelector('.check-name');
  const start_btn = document.querySelector('.start');

  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });

  start_btn.addEventListener('click', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
      start_btn.disabled = true;
      begin();
    } catch (err) {
      msg.innerHTML = err;
    }
  });

}

window.onload = load();
