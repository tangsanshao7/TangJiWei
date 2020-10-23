-- # 建表语句
-- # 学生表 student
-- CREATE TABLE student(
--   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   NAME VARCHAR(20) NOT NULL,
--   sex VARCHAR(4),
--   birth YEAR,
--   department VARCHAR(20) NOT NULL,
--   address VARCHAR(50)
--   )DEFAULT CHARSET=utf8;

-- # 成绩表 score
-- CREATE TABLE score(
--   id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   stu_id INT(10) NOT NULL,
--   c_name VARCHAR(20),
--   grade INT(10)
--   )DEFAULT CHARSET=utf8;



-- # 添加数据
--  INSERT INTO student VALUES(901,'张老大','男',1990,'计算机系','北京市海淀区');
--   INSERT INTO student (NAME,sex,birth,department,address) VALUES
--   ('张老二','男',1991,'中文系','北京市昌平区'),
--   ('张三','女',1995,'中文系','湖南省永州市'),
--   ('李四','男',1995,'英语系','辽宁省阜新市'),
--   ('王五','女',1996,'英语系','福建省厦门市'),
--   ('王六','男',1993,'计算机系','湖南省衡阳市');


-- INSERT INTO score VALUES(NULL,901,'计算机',98);
--   INSERT INTO score (stu_id,c_name,grade) VALUES
--   (901,'英语',80),
--   (902,'计算机',65),
--   (902,'中文',88),
--   (903,'中文',95),
--   (904,'计算机',70),
--   (904,'英语',92),
--   (905,'英语',94),
--   (906,'计算机',90),
--   (906,'英语',85);


-- # 1.	查询student表的所有记录:
--     SELECT * FROM student;

-- # 2.	从student表查询所有学生的学号、姓名和院系信息:
--     SELECT id 学号, NAME 姓名 , department 院系信息 FROM student;
    
    
-- # 3.	从student表中查询计算机系和英语系的学生的信息:
--     SELECT * FROM student WHERE department = '计算机系' OR department = '英语系';


-- # 4.	从student表中查询年龄18~22岁的学生信息:
--  SELECT * FROM student WHERE YEAR(NOW())- birth BETWEEN  18 AND 22;
 
 
-- # 5.	查询student表中查询男、女各有多少人:
--     SELECT sex 性别, COUNT(sex) 人数 FROM student GROUP BY sex;

-- # 6.	查询student表中查询男、女各有多少人，并按照降序排列:
--     SELECT sex 性别, COUNT(sex) 人数 FROM student GROUP BY sex ORDER BY COUNT(sex) DESC;
    
    
-- # 7.	从student表中查询某系别总人数大于1的系名和数量:
--     SELECT department 系别 , COUNT(department) 数量 FROM student GROUP BY department HAVING COUNT(department) > 1;
    
    
-- # 8.	从score表中查询每个科目的最高分:
--     SELECT c_name 科目 , MAX(grade) 最高分 FROM score GROUP BY c_name;
    
    
-- # 9.	计算每个学生的总成绩:
--     SELECT score.stu_id 学生学号 , student.name 学生姓名 , COUNT(score.c_name) 学生科目数量, SUM(score.grade) 学生总分 FROM student , score
--     WHERE student.id = score.stu_id GROUP BY stu_id;
    
    
-- # 10.	计算每个考试科目的平均成绩:
--     SELECT c_name 科目 , AVG(grade) 平均成绩 FROM score GROUP BY c_name;
    
    
-- # 11.	将计算机考试成绩按从高到低排序:
--     SELECT stu_id 学生学号 , grade 考试成绩 FROM score WHERE c_name = '计算机' GROUP BY  stu_id,grade ORDER BY grade DESC;
    
-- # 12.	查询score表中stu_id不是902、904、906,且成绩大于80的信息:
--     SELECT * FROM score WHERE stu_id NOT IN(902,904,906) AND grade > 80 GROUP BY stu_id;
    
-- # 13.	从student表中查询姓”王”，并且性别是男同学所在的系:
--     SELECT NAME 姓名 ,sex 性别 , department 院系信息 FROM student WHERE NAME LIKE '王%' AND sex = '男' GROUP BY NAME;
    
    
-- # 14.	从student表中查询姓”张”，并且是单名的同学的信息:
--     SELECT * FROM student WHERE NAME LIKE '张_';
    
-- # 15.	要求将student表中的数据格式化输出，格式为：xx的家庭住址是xx (使用字符串的函数):
--     SELECT CONCAT(NAME,'的家庭住址是',address) 住址 FROM student;

-- # 16.	将student表中名字有“王”的替换为“小王”(使用字符串的函数):
--     SELECT REPLACE(NAME,'王','小王') 姓名 FROM student;

-- # 17.	要求查看student表中的姓名的字节数(使用字符串的函数):
--     SELECT LENGTH(NAME)  名字所占字节数, NAME 姓名 FROM student;

-- # 18.	查询score表中的查询前3条的数据:
--     SELECT * FROM score LIMIT 0,3;

-- # 19.	查询score表中查询第4条到第6条的数据:
--     SELECT * FROM score LIMIT 3,3;

-- # 20.	计算student表中学生的年龄:
--     SELECT NAME 姓名 , YEAR(NOW())-birth 年龄 FROM student;