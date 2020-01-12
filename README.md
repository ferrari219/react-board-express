# react-board-express
react-board-express review 복습



## 질문 모음



---------------------------------------
수업02

### 1.두번째 수업때 하셨던 방법 순서를 정확히 모르겠어요.

1)front: localhost:3000 실행

2)back: localhost:4000 실행

3)브라우져에서 localhost:3000/write 페이지 접속 해서 글쓰기

4)브라우져에서 localhost:3000에서 getRequest 버튼 눌렀을때 데이터가 로딩  

리스트에서 특정 글 선택시 Read는 따로 수업 안하신거 맞죠?


### 2.포스트맨 사용방법 좀 알려주세요. 
가르쳐 주셨던 방법이 포스트맨에서 데이터 입력하면 mysql에 등록되는게 맞는거죠?
그런데 하는 방법을 모르겠어요.

1)[post] localhost:4000/board 누르고 

2)포스트맨에서 body - raw - JSON 선택

3){title:'title', content:'content'}

이렇게 입력하면 값이 mysql에 저장되는게 맞나요? 안되더라구요.



### 3.해결방안

1)화면녹화: 

시간 나실때 화면녹화를 해주시면 제일 좋을텐데, 선생님이 녹화방법 아실런지 모르겠네요.

obs 프로그램 : https://www.youtube.com/watch?v=mL0o-MUz7es



2)전화설명:

화면 같이 보고 하는게 아니라 제가 이해 잘 못할수도 있어요.   



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
   
