#vue_app_000 脚手架
#vue_server_000 服务器
#         db.sql 数据库指定

#功能一:创建用户登录表并且添加数据
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS TRAVEL;
#创建数据库，设置编码
CREATE DATABASE APP2 CHARSET=UTF8;
#进入创建的数据库
#1:进入xz库
USE APP2;
#2:创建表 xz_login
#3:添加几列
CREATE TABLE app2_login(
   id INT PRIMARY KEY AUTO_INCREMENT,
   uname VARCHAR(50),
   -- 可以放50个数
   upwd  VARCHAR(32)
);
INSERT INTO app2_login VALUES(null,'tom',md5('123'));
INSERT INTO app2_login VALUES(null,'jerry',md5('123'));

INSERT INTO app2_sy VALUES('1','冰淇淋七天速成','$58','11.png');
INSERT INTO app2_sy VALUES('2','曲奇饼七天速成','$68','22.png');
INSERT INTO app2_sy VALUES('3','甜点七天速成','$48','33.png');

ALTER TABLE app2_sy ADD img VARCHAR(255);
UPDATE app2_sy SET img="11.png" WHERE id=1;
UPDATE app2_sy SET img="22.png" WHERE id=2;
UPDATE app2_sy SET img="11.png" WHERE id=3;
--
CREATE TABLE app2_detail_pic(
   id INT PRIMARY KEY AUTO_INCREMENT,
   img  VARCHAR(50),
   -- 可以放50个数
   xtitle  VARCHAR(32),

);
INSERT INTO app2_detail_pic VALUES('1','1.zhishi.jpg','芝士蛋糕','/zhishi');
INSERT INTO app2_detail_pic VALUES('2','2.tusi.jpg','吐司','/tusi');
INSERT INTO app2_detail_pic VALUES('3','3.quqi.jpg','曲奇');
INSERT INTO app2_detail_pic VALUES('4','4.pisa.jpg','披萨');
INSERT INTO app2_detail_pic VALUES('5','5.guzao.jpg','古早蛋糕');
INSERT INTO app2_detail_pic VALUES('6','6.qifeng.jpg','戚风蛋糕');
INSERT INTO app2_detail_pic VALUES('7','7.danta.jpg','蛋挞');
INSERT INTO app2_detail_pic VALUES('8','8.birthday.jpg','生日蛋糕');
INSERT INTO app2_detail_pic VALUES('9','9.xdangao.jpg','小蛋糕');
INSERT INTO app2_detail_pic VALUES('10','10.danhuasu.jpg','蛋黄酥');
INSERT INTO app2_detail_pic VALUES('11','11.rongdou.jpg','溶豆');
INSERT INTO app2_detail_pic VALUES('12','12.manyuemei.jpg','蔓越莓饼干');
INSERT INTO app2_detail_pic VALUES('13','13.niuzhatang.jpg','牛扎糖');
INSERT INTO app2_detail_pic VALUES('14','14.xuemeiniang.jpg','雪媚娘')

UPDATE app2_detail_pic SET url='/quqi' WHERE id='3';
UPDATE app2_detail_pic SET url='/pisa' WHERE id='4';
UPDATE app2_detail_pic SET url='/guzao' WHERE id='5';
UPDATE app2_detail_pic SET url='/qifeng' WHERE id='6';
UPDATE app2_detail_pic SET url='/danta' WHERE id='7';
UPDATE app2_detail_pic SET url='/birthday' WHERE id='8';
UPDATE app2_detail_pic SET url='/xdangao' WHERE id='9';
UPDATE app2_detail_pic SET url='/danhuasu' WHERE id='10';
UPDATE app2_detail_pic SET url='/rongdou' WHERE id='11';
UPDATE app2_detail_pic SET url='/manyuemei' WHERE id='12';
UPDATE app2_detail_pic SET url='/niuzhatang' WHERE id='13';
UPDATE app2_detail_pic SET url='/xuemeiniang' WHERE id='14';


CREATE TABLE app2_zhishi_pic(
   id INT PRIMARY KEY AUTO_INCREMENT,
   img  VARCHAR(50),
   -- 可以放50个数
  b_title  VARCHAR(32),
  study VARCHAR(32),
   sal VARCHAR(32),
    zi VARCHAR(32)
);
INSERT INTO app2_zhishi_pic VALUES('1','v-zhishi1.jpg','6款招牌芝士蛋糕(原味/柠檬/榴莲/焦糖/抹茶、布朗尼)','871人学过','视频学习更简单','不再显示');
INSERT INTO app2_zhishi_pic VALUES('2','v-zhishi2.jpg','细腻绵软[芝士蛋糕]','1000+学过','视频学习更简单','不再显示');
INSERT INTO app2_zhishi_pic VALUES('3','v-zhishi3.jpg','玫瑰双层芝士(含日式海绵蛋糕制作)','773+学过','视频学习更简单','不再显示');
INSERT INTO app2_zhishi_pic VALUES('3','v-p-zhishi1.jpg','玫瑰双层芝士(含日式海绵蛋糕制作)','773+学过','视频学习更简单','不再显示');
INSERT INTO app2_zhishi_pic VALUES('3','v-p-zhishi2.jpg','玫瑰双层芝士(含日式海绵蛋糕制作)','773+学过','视频学习更简单','不再显示');
