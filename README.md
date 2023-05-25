
# 10-things-test
"나를 알아보는 10가지 질문" 심리테스트 웹앱

---
## 설명
- HTML5 + CSS3 + Vanilla JS로 만든 이미지 테스트 반응형 웹페이지입니다.  
- [개발일지 보기](https://dev-dain.tistory.com/22?category=816329)   
![실행예시](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FEwF2m%2FbtqDGIAgKyB%2FGK4kXuHrFzJL2Q9p4GKIYk%2Fimg.gif)

페이지 개발자 : [김다인](https://dev-dain.tistory.com)  
그림 작가 : [껴리](https://instagram.com/gyeoly27)  

---
## 수정 사용법
1. index.html, main.js, data.js 이 3가지 파일이 주요 내용. 
   css 파일은 화면 사이즈에 따라 크기가 달라지는 동적 효과 등 시각적인 디자인 관련 내용 포함됨.
   
2. main.js는 큰 뼈대. 글 내용 수정 필요할 때 확인해보면 됨.

3. data.js는 퀴즈 질문, 답변에 따른 MBTI 리스트들을 갖고 있는 파일.
- qnaList: 질문 리스트, infoList: I/E 답변 리스트, infoList2: T/F 답변 리스트, infoList3: S/N 관련된 리스트, infoList4: J/P 답변 리스트, infoList5: S/N 답변 리스트
- I/E: Q1~10 10개의 질문, 각 답변별로 0/10점 부여 -> I : sum(score)<50 / E : sum(score)>=50
- S/N: Q1~6 6개의 질문, 각 답변별로 0/1점 부여 -> S: sum(score5)<=3 / N : sum(score5)>3
- T/F: Q11~14 4개의 질문, 각 답변별로 0/1점 부여 -> T : sum(score2)<=2 / F : sum(score2)>2
- J/P: Q17 1개의 질문, 답변으로 0/1점 부여 -> J : score4=0 / P : score4=1
	
	
	![image](https://user-images.githubusercontent.com/43867665/126623637-19d87e7c-d36f-4eb3-896e-714dd44dcca4.png)
	이 부분을 본인의 질문과 답변에 맞게 수정하면 된다.
	
4. main.js는 전반적으로 주요한 코드들이 모두 들어있는 파일.
	3-1. mLeft 값은 결과 페이지의 점수 바에서 핀 위치에서의 margin left 값이므로 조절이 필요할 때 수정하면 된다.
	
4. **(중요)** js/data.js 안의 qnaList와 infoList는 js/main.js에서 각각의 속성이 아주 중요하게 쓰이므로 함부로 삭제하거나 수정했을 경우 원하는대로 결과가 나오지 않을 수 있다. 유연하게 수정할 수 있으나, main.js의 어떤 부분과 연관되는지 잘 살피고 수정하기를 권한다.  
---
## 주의 사항
- 이 저장소의 에셋은 가급적 *fork해서 수정해주세요.* 
- 수정 시 README.md 파일에 출처(이 repo 주소와 원 개발자-Dain Kim-의 이름)를 적어주세요.
- 페이지의 결과 부분에 출처(이 repo 주소와 원 개발자-Dain Kim-의 이름)를 적어주세요.
- star는 제게 힘이 됩니다. ^^

---
## 라이센스
- 이 코드는 MIT 라이선스를 준수하여 사용 가능합니다.  
