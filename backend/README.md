# express-review
first express review 
수업01

1. 절대경로로 지정할 방법 있나요?: const config = require('../config/config');
   // /models/index.js 2번 라인

2. require('./Board')(sequelize, Sequelize); //require까진 알겠는데 (sequelize, Sequelize) 이 부분 문법을 잘 모르겠어요.
   // /models/index.js 21번 라인
   
3. /models/board.js 는 mysql에서 직접 테이블 생성하는걸 대신 해주는 기능이잖아요. boards로 자동생성 되던데 지금 이 프로그램에서는 데이터 입력 없이 생기기만 하는게 맞는거죠?
   
4. insert into boards(title, content) values('title1','content1'); 해봤는데, 
   ERROR 1364 (HY000): Field 'createdAt' doesn't have a default value 라고 나와요. 시간 때문(timestamps)인듯한데 자동으로 입력되는건 아닌가요?

5. postman에서도 데이터 입력하셨던것 같은데, 사용방법을 잘 모르겠어요.
   {
    "titile": "titile",
    "content": "content1"
   }
   RAW JSON 사용법

6. MySQL에서 생성된 DB는 재실행해도 일부러 지우지 않는한 자료는 계속 저장되어 있는거죠? 포맷하면 지워지긴 하겠네요.
   
