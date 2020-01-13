# react-board-express
react-board-express review 복습


---------------------------------------
수업02

### 작업 프로세스

1)back: localhost:4000 실행

2)front: localhost:3000 실행

3)프론트 localhost:3000/write 페이지 접속 해서 글쓰기(기본 데이터가 없으므로)

4)프론트 localhost:3000가 마운트 할때 DB정보 로딩


### 2.포스트맨 사용방법 좀 알려주세요. 
가르쳐 주셨던 방법이 포스트맨에서 데이터 입력하면 mysql에 등록되는게 맞는거죠?
그런데 하는 방법을 모르겠어요.

1)[post] localhost:4000/board 누르고 

2)포스트맨에서 body - raw - JSON 선택

3){
    "titile": "titile",
    "content": "content1"
   }
   RAW JSON 사용법

이렇게 입력하면 값이 mysql에 저장되는게 맞나요? 안되더라구요.



### 4.앞으로 바램

1)다른건 다 못하더라도

-.DB에서 값 받아와서 프론트에서 보여주고 프론트에서 입력한 값 DB로 보내주는 방법은 꼭 알고 싶어요.

-.AWS에 업로드하고 사용할 방법


2)문제해결되는 과정 같이 보는 것도 좋긴 한데, 전 아직 기본도 없는 상태예요.

처음부터 끝까지 그대로만 하면 되는 방법을 알려주시면 더 좋을것 같아요.

계속 바뀌니까 너무 헷갈려요. 


꼭 성공할 수 있게 도와주세요. 방법만 알려주시면 최대한 제 힘으로 해볼게요.




---------------------------------------
수업01

1. 절대경로로 지정할 방법 있나요?: const config = require('../config/config');
   // require(__dirname+'/config/config');
   // __dirname : 프로젝트 경로

2. require('./Board')(sequelize, Sequelize); //require까진 알겠는데 (sequelize, Sequelize) 이 부분 문법을 잘 모르겠어요.
   // /models/index.js 21번 라인
   (sequelize, Sequelize) 함수처럼 파라미터 같은 형태인가요?
   
3. /models/board.js 는 mysql에서 직접 테이블 생성하는걸 대신 해주는 기능이잖아요. boards로 자동생성 되던데 지금 이 프로그램에서는 데이터 입력 없이 생기기만 하는게 맞는거죠?
   
4. insert into boards(title, content) values('title1','content1'); 해봤는데, 
   ERROR 1364 (HY000): Field 'createdAt' doesn't have a default value 라고 나와요. 시간 때문(timestamps)인듯한데 자동으로 입력되는건 아닌가요?

6. MySQL에서 생성된 DB는 재실행해도 일부러 지우지 않는한 자료는 계속 저장되어 있는거죠? 포맷하면 지워지긴 하겠네요.
   
