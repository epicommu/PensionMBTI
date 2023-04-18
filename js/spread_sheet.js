// 구글 API 클라이언트 라이브러리 로드
gapi.load('client', function() {
  // 구글 API 클라이언트 초기화
  gapi.client.init({
    apiKey: 'AIzaSyDjEbE4vsbThMNDp_Pb_42k8Tewi0QEShI',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    clientId: '223843052834-okubm0hl7i4pie5cibq4u100oqkcu3o2.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
    // 클라이언트 초기화 성공 시 실행할 함수
    saveDataToSheet();
  }, function(error) {
    // 클라이언트 초기화 실패 시 실행할 함수
    console.log(error);
  });
});

// 데이터 저장 함수
function saveDataToSheet() {
  // 저장할 데이터
  var name = $('#name-input input').val();
  var gender = $('input[name=gender]:checked', '#gender-input').val();
  var age = $('#age-input select').val();
  var answerIdx = select[qIdx]; // 선택한 답변의 인덱스
  var answerOptions = document.querySelectorAll('.answer button'); // 모든 답변 버튼
  var answer = answerOptions[answerIdx].textContent; // 선택한 답변의 텍스트

  // 구글 스프레드시트 정보
  var spreadsheetId = '1oJGNEqw9pCR5IErrIu9PC3sf8AsFlUo_QDZCnbC1jyg';
  var sheetName = 'Investment_MBTI';
  var range = 'A2:E2';

  // 저장할 데이터 배열
  var data = [[name, gender, age, qIdx+1, answer]];

  // 구글 API를 사용하여 데이터 저장
  var valueRange = {
    'values': data
  };
  var request = gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId: spreadsheetId,
    range: sheetName + '!' + range,
    valueInputOption: 'USER_ENTERED',
    resource: valueRange
  });
  request.execute(function(response) {
    console.log(response);
  });
}
