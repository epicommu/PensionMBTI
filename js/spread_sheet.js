// API 키 및 클라이언트 ID 설정
  var apiKey = 'AIzaSyDjEbE4vsbThMNDp_Pb_42k8Tewi0QEShI';
  var clientId = '223843052834-okubm0hl7i4pie5cibq4u100oqkcu3o2.apps.googleusercontent.com';
  var spreadsheetId = '1oJGNEqw9pCR5IErrIu9PC3sf8AsFlUo_QDZCnbC1jyg';
  var sheetName = 'Investment_MBTI';

  // API 클라이언트 초기화 및 OAuth 인증 흐름 시작
  google.accounts.oauth2.initCodeClient({
    client_id: clientId,
    api_key: apiKey,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    ux_mode: 'popup'
  }).then(function () {
    // 클라이언트 초기화 성공 시 실행할 함수
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
      google.accounts.oauth2.getAuthResult().then(function(authResult) {
        var code = authResult.code;

        // 저장할 데이터
        var name = document.getElementById('name').value;
        var gender = document.querySelector('input[name=gender]:checked').value;
        var mbti = document.getElementById('mbti').value;
        var investment = document.querySelector('input[name=investment]:checked').value;

        // Google Sheets API 호출
        var range = sheetName + '!A1:D1';
        var valueRange = {
          values: [[name, gender, mbti, investment]]
        };
        var params = {
          spreadsheetId: spreadsheetId,
          range: range,
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS'
        };
        var batchUpdateValuesRequestBody = {
          valueInputOption: 'RAW',
          data: [{
            range: range,
            majorDimension: 'ROWS',
            values: valueRange.values,
            type: 'USER_ENTERED'
          }]
        };
        var request = gapi.client.sheets.spreadsheets.values.append(params, batchUpdateValuesRequestBody);
        request.then(function(response) {
          console.log(response.result);
        }, function(reason) {
          console.error('error: ' + reason.result.error.message);
        });
      }, function() {
        // OAuth 인증 실패 시 실행할 함수
        console.log('OAuth 인증 실패');
      });
    });
  }, function() {
    // API 클라이언트 초기화 실패 시 실행할 함수
    console.log('API 클라이언트 초기화 실패');
  });
