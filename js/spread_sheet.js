// 1. 구글 API 클라이언트 로드
gapi.load('client:auth2', initClient);

// 2. API 클라이언트 초기화
function initClient() {
gapi.client.init({
apiKey: 'AIzaSyDjEbE4vsbThMNDp_Pb_42k8Tewi0QEShI',
discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
clientId: '223843052834-okubm0hl7i4pie5cibq4u100oqkcu3o2.apps.googleusercontent.com',
scope: 'https://www.googleapis.com/auth/spreadsheets'
}).then(function () {
// 클라이언트 초기화 성공 시 실행할 함수
saveDataToSheet();
}, function (error) {
// 클라이언트 초기화 실패 시 실행할 함수
console.log(error);
});
}

// 데이터 저장 함수
function saveDataToSheet() {
  // 저장할 데이터
  var name = $('#name-input input').val();
  var gender = $('input[name=gender]:checked', '#gender-input').val();
  var age = $('#age-input select').val();

  // 구글 스프레드시트 정보
  var spreadsheetId = '1oJGNEqw9pCR5IErrIu9PC3sf8AsFlUo_QDZCnbC1jyg';
  var sheetName = 'Investment_MBTI';

  // 저장할 데이터 배열
  var data = [[name, gender, age]];

  // 마지막 행의 인덱스를 가져온 다음 데이터를 추가
  getLastRow().then(function(lastRow) {
    var range = sheetName + '!A' + (lastRow + 1); // 다음 행에 추가하도록 range 값 수정

    // 구글 API를 사용하여 데이터 저장
    var params = {
      spreadsheetId: spreadsheetId,
      range: range, // 수정된 range 값 사용
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS', // 새로운 행에 추가
      resource: {
        values: data
      }
    };

    gapi.client.sheets.spreadsheets.values.append(params).then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    });
  });
}

// 마지막 행의 인덱스를 반환하는 함수
function getLastRow() {
  // 구글 스프레드시트 정보
  var spreadsheetId = '1oJGNEqw9pCR5IErrIu9PC3sf8AsFlUo_QDZCnbC1jyg';
  var sheetName = 'Investment_MBTI';
  var range = sheetName + '!A:A';

  // 구글 API를 사용하여 데이터 가져오기
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: range
  }).then(function(response) {
    var numRows = response.result.values ? response.result.values.length : 0;
    return numRows;
  }, function(error) {
    console.log(error);
  });
}
