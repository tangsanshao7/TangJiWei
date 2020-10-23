-- USE day07;

--  CREATE TABLE emp(
-- 	empno		INT, 			-- 员工号
-- 	ename		VARCHAR(50),    -- 员工姓名
-- 	job		VARCHAR(50),   	    -- 员工职位
-- 	mgr		INT,     			-- 管理者工号
-- 	hiredate	DATE,           -- 入职时间
-- 	sal		DECIMAL(7,2),		-- 薪水
-- 	comm		DECIMAL(7,2),   -- 奖金
-- 	deptno		INT				-- 部门编号
-- ) ;

-- CREATE TABLE dept(
-- 	deptno		INT,			-- 部门编号
-- 	dname		VARCHAR(14),    -- 部门名称
-- 	loc		VARCHAR(13)         -- 部门位置       
-- );


-- INSERT INTO emp VALUES(7369,'SMITH','CLERK',7902,'1980-12-17',800,NULL,20);
-- INSERT INTO emp VALUES(7499,'ALLEN','SALESMAN',7698,'1981-02-20',1600,300,30);
-- INSERT INTO emp VALUES(7521,'WARD','SALESMAN',7698,'1981-02-22',1250,500,30);
-- INSERT INTO emp VALUES(7566,'JONES','MANAGER',7839,'1981-04-02',2975,NULL,20);
-- INSERT INTO emp VALUES(7654,'MARTIN','SALESMAN',7698,'1981-09-28',1250,1400,30);
-- INSERT INTO emp VALUES(7698,'BLAKE','MANAGER',7839,'1981-05-01',2850,NULL,30);
-- INSERT INTO emp VALUES(7782,'CLARK','MANAGER',7839,'1981-06-09',2450,NULL,10);
-- INSERT INTO emp VALUES(7788,'SCOTT','ANALYST',7566,'1987-04-19',3000,NULL,20);
-- INSERT INTO emp VALUES(7839,'KING','PRESIDENT',NULL,'1981-11-17',5000,NULL,10);
-- INSERT INTO emp VALUES(7844,'TURNER','SALESMAN',7698,'1981-09-08',1500,0,30);
-- INSERT INTO emp VALUES(7876,'ADAMS','CLERK',7788,'1987-05-23',1100,NULL,20);
-- INSERT INTO emp VALUES(7900,'JAMES','CLERK',7698,'1981-12-03',950,NULL,30);
-- INSERT INTO emp VALUES(7902,'FORD','ANALYST',7566,'1981-12-03',3000,NULL,20);
-- INSERT INTO emp VALUES(7934,'MILLER','CLERK',7782,'1982-01-23',1300,NULL,10);

-- INSERT INTO dept VALUES(10, 'ACCOUNTING', 'NEW YORK');
-- INSERT INTO dept VALUES(20, 'RESEARCH', 'DALLAS');
-- INSERT INTO dept VALUES(30, 'SALES', 'CHICAGO');
-- INSERT INTO dept VALUES(40, 'OPERATIONS', 'BOSTON');


-- SELECT * FROM emp;
-- SELECT * FROM dept;

-- # 1按员工编号升序排列不在10号部门工作的员工信息
--  SELECT * FROM emp WHERE deptno != 10 ;
-- # 2查询姓名第二个字母不是”A”且薪水大于800元的员工信息，按年薪降序排列
--  SELECT * FROM emp WHERE ename NOT LIKE '_A' AND sal>800 ORDER BY sal DESC;
-- # 3求每个部门的平均薪水
--  SELECT deptno , AVG(sal) FROM emp GROUP BY deptno;
-- # 4求各个部门的最高薪水
--   SELECT deptno , MAX(sal) FROM emp GROUP BY deptno;
-- # 5求每个部门每个岗位的最高薪水
--    SELECT deptno,job , MAX(sal) FROM emp GROUP BY deptno,job;
-- # 6求平均薪水大于2000的部门编号
--  SELECT deptno, AVG(sal) FROM emp GROUP BY deptno HAVING AVG(sal)>2000;
-- # 7将员工薪水大于1200且部门平均薪水大于1500的部门编号列出来，按部门平均薪水降序排列
-- SELECT empno,AVG(sal) FROM emp WHERE sal>1200 AND deptno IN (SELECT deptno FROM emp GROUP BY deptno HAVING AVG(sal)>1500) GROUP BY deptno;
-- # 8求最高薪水的员工信息
--  SELECT * FROM emp WHERE sal=(SELECT  MAX(sal) FROM emp);
-- # 9求多于平均薪水的员工信息
--   SELECT * FROM emp WHERE sal>(SELECT  AVG(sal) FROM emp);
-- # 10求各个部门薪水最高的员工信息
-- SELECT * FROM emp WHERE sal IN( SELECT MAX(sal) FROM emp GROUP BY deptno );
-- # 11查询和Scott相同部门的员工姓名和雇用日期
--  SELECT ename , hiredate FROM emp WHERE deptno = ( SELECT deptno FROM emp WHERE ename='scott')AND ename NOT IN ('scott') 
-- # 12查询工资比公司平均工资高的员工的员工号，姓名和工资。
--   SELECT empno,ename , sal FROM emp WHERE sal > (SELECT AVG(sal) FROM emp);
-- # 13查询各部门中工资比本部门平均工资高的员工的员工号, 姓名和工资
-- SELECT e.empno, e.ename, e.sal,d.a  FROM emp e, (SELECT deptno,AVG(sal) AS a FROM emp GROUP BY deptno) AS d WHERE e.deptno=d.deptno AND sal>d.a;
-- # 14查询和姓名中包含字母u的员工在相同部门的员工的员工号和姓名
--   SELECT empno, ename FROM emp  WHERE deptno = (SELECT deptno FROM emp WHERE ename LIKE'%u%')
-- # 15查询在部门的loc为 DALLAS 的部门工作的员工的员工号
--    SELECT empno, ename FROM emp WHERE deptno = (SELECT deptno FROM dept WHERE loc='DALLAS')
-- # 16查询管理者是King的员工姓名和工资 
--     SELECT ename, sal FROM emp WHERE mgr = (SELECT empno FROM emp WHERE ename='king')
-- # 17查询所有部门的名字，loc，员工数量 和 工资平均值
--  SELECT dept.dname,dept.loc,COUNT(*),AVG(sal) FROM dept,emp WHERE emp.deptno= dept.deptno GROUP BY dept.dname;