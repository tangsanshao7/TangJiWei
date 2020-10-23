-- CREATE DATABASE day06;

-- USE day06;
-- #建学生信息表student
-- CREATE TABLE student
-- (
-- sno VARCHAR(20) NOT NULL PRIMARY KEY,
-- sname VARCHAR(20) NOT NULL,
-- ssex VARCHAR(20) NOT NULL,
-- sbirthday DATETIME,
-- class VARCHAR(20)

-- );
-- #建立教师表
-- CREATE TABLE teacher
-- (
-- tno VARCHAR(20) NOT NULL PRIMARY KEY,
-- tname VARCHAR(20) NOT NULL,
-- tsex VARCHAR(20) NOT NULL,
-- tbirthday DATETIME,
-- prof VARCHAR(20),
-- depart VARCHAR(20) NOT NULL

-- );
-- #建立课程表course
-- CREATE TABLE course
-- (
-- cno VARCHAR(20) NOT NULL PRIMARY KEY,
-- cname VARCHAR(20) NOT NULL,
-- tno VARCHAR(20) NOT NULL,
-- FOREIGN KEY(tno) REFERENCES teacher(tno)

-- );
-- #建立成绩表


-- CREATE TABLE score (
-- 	sno VARCHAR (20) NOT NULL ,
-- 	FOREIGN KEY (sno) REFERENCES student (sno),
-- 	cno VARCHAR (20) NOT NULL,
-- 	FOREIGN KEY (cno) REFERENCES course (cno),
-- 	degree DECIMAL
-- );

-- #添加学生信息
-- INSERT INTO student VALUES('108','曾华','男','1977-09-01','95033');
-- INSERT INTO student VALUES('105','匡明','男','1975-10-02','95031');
-- INSERT INTO student VALUES('107','王丽','女','1976-01-23','95033');
-- INSERT INTO student VALUES('101','李军','男','1976-02-20','95033');
-- INSERT INTO student VALUES('109','王芳','女','1975-02-10','95031');
-- INSERT INTO student VALUES('103','陆君','男','1974-06-03','95031');




-- #添加教师信息
-- INSERT INTO teacher VALUES('804','李诚','男','1958-12-02','副教授','计算机系');
-- INSERT INTO teacher VALUES('856','张旭','男','1969-03-12','讲师','电子工程系');
-- INSERT INTO teacher VALUES('825','王萍','女','1972-05-05','助教','计算机系');
-- INSERT INTO teacher VALUES('831','刘冰','女','1977-08-14','助教','电子工程系');

-- #添加课程信息
-- INSERT INTO course VALUES('3-105','计算机导论','825');
-- INSERT INTO course VALUES('3-245','操作系统','804');
-- INSERT INTO course VALUES('6-166','数字电路','856');
-- INSERT INTO course VALUES('9-888','高等数学','831');

-- #添加成绩信息
-- INSERT INTO score VALUES('103','3-245','86');
-- INSERT INTO score VALUES('105','3-245','75');
-- INSERT INTO score VALUES('109','3-245','68');
-- INSERT INTO score VALUES('103','3-105','92');
-- INSERT INTO score VALUES('105','3-105','88');
-- INSERT INTO score VALUES('109','3-105','76');
-- INSERT INTO score VALUES('103','3-105','64');
-- INSERT INTO score VALUES('105','3-105','91');
-- INSERT INTO score VALUES('109','3-105','78');
-- INSERT INTO score VALUES('103','6-166','85');
-- INSERT INTO score VALUES('105','6-166','79');
-- INSERT INTO score VALUES('109','6-166','81');

-- SELECT * FROM student;
-- SELECT * FROM teacher;
-- SELECT * FROM course;
-- SELECT * FROM score;


-- # 1.查询student表中的所有记录的sname、ssex和class列。
--  SELECT sname , ssex, class FROM student;
-- # 2、 查询教师所有的单位即不重复的depart列。
--  SELECT  DISTINCT depart FROM teacher;
-- # 3、 查询student表的所有记录
--  SELECT * FROM student;
-- # 4、 查询score表中成绩在60到80之间的所有记录。
--  SELECT * FROM score WHERE degree >= 60 AND degree <= 80 ; 
-- # 5、 查询score表中成绩为85，86或88的记录。
--  SELECT * FROM Score WHERE  degree IN(85,86,88);  
-- # 6、  查询存在有85分以上成绩的课程cno.
--    SELECT  cno FROM score WHERE degree > 85;
-- # 7、查询“计算 机系”与“电子工程系“不同职称的教师的tname和prof。
-- SELECT tname,prof FROM teacher WHERE depart IN('计算机系','电子工程系') 
-- # 8、 查询student表中“95031”班或性别为“女”的同学记录。
-- SELECT * FROM student WHERE class="95031" OR ssex='女';
-- # 9、 以class降序查询student表的所有记录
-- SELECT * FROM student ORDER BY class DESC
-- # 10、 以cno升序、degree降序查询score表的所有记录。
-- SELECT * FROM score ORDER BY cno,degree DESC;
-- # 11、 查询“95031”班的学生人数。
--  SELECT COUNT(*) FROM  student WHERE class='95031';
-- # 12、查询分数大于70，小于90的sno列。
--   SELECT sno FROM score WHERE degree >= 70 AND degree <= 90 ; 
-- # 13、查询score表中的最高分的学生学号和课程号。（如果还没有学过子查询,则用排序查）
--  SELECT sno,cno FROM score WHERE degree = (SELECT MAX(degree) FROM score) ;
-- # 14、查询每门课的平均成绩。
--  SELECT cno,AVG(degree) FROM score GROUP BY cno;
-- # 15、查询95033班和95031班全体学生的记录。
--  SELECT * FROM student WHERE class = 95033 OR class= 95031;
-- # 16、查询student表中不姓“王”的同学记录。
--  SELECT * FROM student WHERE sname NOT LIKE '王%'; 
-- # 17、查询student表中最大和最小的sbirthday日期值。
-- SELECT MAX(sbirthday),MIN(sbirthday) FROM student; 
-- # 18、以班号和年龄从大到小的顺序查询student表中的全部记录。
-- SELECT * FROM Student  ORDER BY  class DESC, Sbirthday
-- # 19、查询score表中至少有5个成绩记录的课程的平均分数。
-- SELECT cno, AVG(degree) FROM score GROUP BY cno HAVING COUNT(*)>=5;
-- # 20、查询所有学生的sname、cno和degree列(两表连接)。
-- SELECT sname,cno,degree FROM score,student WHERE score.sno=student.sno; 
-- # 21、查询“男”教师及其所上的课程。
--  SELECT tname,cname FROM course,teacher WHERE course.tno = teacher.tno AND tsex = "男"
-- # 22、查询所有学生的sno、cname和degree列。
-- SELECT Sno,Cname,Degree FROM Score , Course WHERE Score.Cno=Course.Cno
-- # 23、查询所有学生的sname、cname和degree列。
--  SELECT Sname,Cname,Degree FROM student,course,score WHERE student.Sno=score.Sno AND course.Cno=score.Cno
-- # 24、查询“95031”班学生的平均分。
-- SELECT AVG(degree) FROM score WHERE sno IN (SELECT sno FROM student WHERE class=95031);
-- # 25、查询最高分同学的sno、cno和degree列。
--   SELECT sno,cno,degree FROM score WHERE degree=(SELECT MAX(degree) FROM score);
-- # 26、查询和“李军”同性别的所有同学的sname.
-- SELECT  sname FROM student  WHERE  ssex=( SELECT ssex FROM  student  WHERE  sname='李军')
-- # 27、查询和“李军”同性别并同班的同学sname.
-- SELECT Sname FROM student WHERE Ssex=(SELECT Ssex FROM student WHERE Sname='李军') AND Sname NOT IN ('李军') AND Class=(SELECT Class FROM student WHERE Sname='李军')
-- # 28、查询所有选修“计算机导论”课程的“男”同学的成绩表。
-- SELECT Degree FROM Score WHERE Sno IN (SELECT Sno FROM student WHERE Ssex='男') AND Cno IN (SELECT Cno FROM Course WHERE Cname='计算机导论')

-- # 29 、查询student表中每个学生的姓名和年龄。
-- SELECT Sname,YEAR(NOW())-YEAR(Sbirthday) FROM student;
-- # 30、查询选修“3-105”课程的成绩高于“109”号同学成绩的所有同学的记录。
--   SELECT * FROM score WHERE Cno='3-105' AND degree>(SELECT MAX(degree ) FROM Score WHERE Sno='109' AND Cno='3-105' )
-- # 31、查询成绩高于学号为“109”、课程号为“3-105”的成绩的所有记录
-- SELECT * FROM student,Score WHERE student.Sno=Score.Sno AND Score.Degree>(SELECT MAX(Degree) FROM Score WHERE Cno='3-105' AND Sno='109')

-- # 32、查询和学号为108、101的同学同年出生的所有学生的sno、sname和sbirthday列。
-- SELECT Sno,Sname,Sbirthday FROM student WHERE YEAR(Sbirthday)=(SELECT YEAR(Sbirthday) FROM student WHERE Sno='101' )

-- # 33、查询“张旭“教师任课的学生成绩。
-- SELECT Sno,Cno,Degree FROM Score WHERE Cno IN (SELECT Cno FROM Course WHERE Tno IN (SELECT Tno FROM Teacher WHERE Tname='张旭'))

-- # 34、查询某课程的成绩记录多于5个的教师姓名。
-- SELECT Tname FROM Teacher WHERE Tno IN (SELECT Tno FROM Course WHERE Cno IN (SELECT Cno FROM Score GROUP BY Cno HAVING COUNT(*)>5) )

-- # 35、查询出“计算机系“教师所教课程的成绩表。
-- SELECT sno,Cno ,Degree FROM Score WHERE Cno IN (SELECT Cno FROM Course WHERE Tno IN (SELECT tno FROM Teacher WHERE Depart='计算机系'))

-- # 36、查询选修编号为“3-105“课程且成绩至少高于选修编号为“3-245”的同学的cno、sno和degree,并按degree从高到低次序排序
-- # 37、查询选修编号为“3-105”且成绩高于选修编号为“3-245”课程的同学的cno、sno和degree.

-- # 38、查询所有任课教师的tname和depart.
--  SELECT Tname,Depart FROM Teacher WHERE Tname IN (SELECT DISTINCT Tname FROM Teacher,Course,Score WHERE Teacher.Tno=Course.Tno AND Course.Cno=Score.Cno)

-- # 39、 查询所有未讲课的教师的tname和depart.
-- SELECT Tname,Depart FROM Teacher WHERE Tname NOT IN (SELECT DISTINCT Tname FROM Teacher,Course,Score WHERE Teacher.Tno=Course.Tno AND Course.Cno=Score.Cno)

-- # 40、查询至少有2名男生的班号。
-- SELECT Class FROM    student WHERE Ssex='男' GROUP BY Class HAVING COUNT(*)>1
