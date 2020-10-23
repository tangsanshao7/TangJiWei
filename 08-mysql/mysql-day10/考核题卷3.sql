-- # 1.请连接任意数据库
-- (命令行或客户端)

-- mysql -hlocalhost -P3306 -uroot -proot

-- # 2.请写出该连接下能显示的所有数据库
-- (显示数据库)

-- SHOW DATABASES;

-- # 3.请创建一个 db\_你的姓名的数据库
-- (例如\_XiaoEn)

-- CREATE DATABASE db_lx3
-- CHARSET utf8;

-- # 4.请选择使用该数据库

-- USE db_lx3;

-- # 5.在该数据库下导入如下表及数据

-- -- [已运行 product.sql]

-- -- product.sql

-- # 6.请问 db_XiaoEn 这个数据库下有几张表

-- SHOW TABLES; -- 2 张

-- # 7.请解释一下 product 表的字段及结构

-- -- `pid` varchar(50) NOT NULL DEFAULT '', 产品 id 字符类型最长 50 不能为空 默认为空字符
-- -- `pname` varchar(50) DEFAULT NULL, 产品名称 字符类型最长 50 默认为空
-- -- `price` double DEFAULT NULL, 产品价格 双浮点型 默认为空
-- -- `stock` int(11) DEFAULT NULL, 产品库存 整型最长 11 默认为空
-- -- PRIMARY KEY (`pid`) 设置产品 id 为主键

-- # 8.请说明一下表 product 的主键是哪个字段，以及对这个字段的约束有哪些

-- -- product 的主键是 pid 字段，该字段为字符类型 最长 50 不能为空 默认是空字符

-- # 9.请创建一张表,名为 customer,
-- 字段为:

-- `cid` VARCHAR
-- (50) NOT NULL DEFAULT '',
-- `cname` VARCHAR
-- (50) DEFAULT NULL,
-- `sex` VARCHAR
-- (2) DEFAULT NULL,
-- `age` INT
-- (11) DEFAULT NULL,

-- CREATE TABLE customer (
-- `cid` VARCHAR
-- ( 50 ) NOT NULL DEFAULT '',
-- `cname` VARCHAR
-- ( 50 ) DEFAULT NULL,
-- `sex` VARCHAR
-- ( 2 ) DEFAULT NULL,
-- `age` INT
-- ( 11 ) DEFAULT NULL
-- ) ENGINE = INNODB DEFAULT CHARSET = utf8;

-- # 10.请给创建好的表 customer 添加一个字段，email，数据类型为 varchar
-- (20)

-- ALTER TABLE customer ADD email VARCHAR(20);

-- # 11.请修改一下第 10 步创建好的字段 email,让 email 这个字段不能为空

-- ALTER TABLE customer MODIFY email VARCHAR
-- (20) NOT NULL;

-- # 12.把修改完的 email 这个字段从数据表中删除

-- ALTER TABLE customer DROP email;

-- # 13.将 customer 表的 cid 设置为主键

-- ALTER TABLE customer ADD PRIMARY KEY(cid);

-- # 14.往 customer 表中插入数据

-- cid cname sex age
-- 'c001' '刘二' '男' 43
-- 'c002' '张三' '男' 28
-- 'c003' '李四' '女' 30
-- 'c004' '王五' '男' 20
-- 'c005' '赵六' '男' 50
-- 'c006' '丽丽' '女' 50
-- INSERT INTO customer
-- VALUES('c001', '刘二', '男', 43);
-- INSERT INTO customer
-- VALUES('c002', '张三', '男', 28);
-- INSERT INTO customer
-- VALUES('c003', '李四', '女', 30);
-- INSERT INTO customer
-- VALUES('c004', '王五', '男', 20);
-- INSERT INTO customer
-- VALUES('c005', '赵六', '男', 50);
-- INSERT INTO customer
-- VALUES('c006', '丽丽', '女', 50);

-- # 15.将 customer 表中的姓名是"赵六"的年龄改成 80,性别改成"女"

-- UPDATE customer SET age=80,sex='女' WHERE cname='赵六';

-- # 16. 在 customer 表中再插入一条数据"c0007",'拉拉','女'，18

-- INSERT INTO customer
-- VALUES('c007', '拉拉', '女', 18);

-- # 17. 删除 customer 表中的姓名是"拉拉"的这条数据

-- DELETE FROM customer WHERE cname='拉拉';

-- # 18.查询顾客表中的顾客号,姓名,年龄

-- SELECT cid, cname, age
-- FROM customer;

-- # 19.查询顾客表中年龄在 30 到 50 的顾客的所有信息

-- SELECT *
-- FROM customer
-- WHERE age BETWEEN 30 AND 50;

-- # 20.查询顾客表中男,女各有多少人

-- SELECT sex, COUNT(*)
-- FROM customer
-- GROUP BY sex;

-- # 21.查询商品产品表中沙发的库存和商品号

-- SELECT stock, pid
-- FROM product
-- WHERE pname='沙发';

-- # 22.查询刘二购买沙发共花了多少钱以及购买的数量

-- SELECT (COUNT*price) AS '总计', COUNT
-- FROM customer c JOIN orderitem o JOIN product p ON c.cid=o.cid AND o.pid=p.pid 
-- WHERE cname='刘二' AND pname='沙发';

-- # 23.查询顾客表中姓"张"的顾客的所有信息

-- SELECT *
-- FROM customer
-- WHERE cname LIKE '张%';

-- # 24.查询"王五"买的商品的名字和商品号

-- SELECT pname, pid
-- FROM product
-- WHERE pid IN(SELECT pid
-- FROM orderitem o JOIN customer c ON o.cid=c.cid
-- WHERE cname='王五');

-- # 25.查询产品表中，库存最多的商品的信息

-- SELECT *
-- FROM product
-- ORDER BY stock DESC LIMIT 1;
-- SELECT * FROM product
-- WHERE stock=
-- (SELECT MAX(stock)
-- FROM product);

-- # 26.将顾客表按照年龄从大到小排序

-- SELECT *
-- FROM customer
-- ORDER BY age DESC;

-- # 27.查询顾客表中的所有顾客的平均年龄，以及最大年龄和最小年龄

-- SELECT AVG(age), MAX(age), MIN(age)
-- FROM customer;

-- # 28.查询产品表中所有信息，要求按照价格从小到大排序，库存按照从大到小排序

-- SELECT *
-- FROM product
-- ORDER BY price ASC,stock DESC;

-- # 29.查询张三订购了商品的商品号和商品名

-- SELECT p.pid, pname
-- FROM customer c JOIN orderitem o JOIN product p ON c.cid=o.cid AND o.pid=p.pid 
-- WHERE cname='张三';

-- # 30.查询商品号为 p001 的商品，顾客总共订购了多少件

-- SELECT SUM(COUNT)
-- FROM orderitem
-- WHERE pid='p001';

-- # 31.查询商品表中商品名包含"机"的商品的信息

-- SELECT *
-- FROM product
-- WHERE pname LIKE '%机%';

-- # 32.查询商品表中商品号为 p001 或者 p002 的商品的单价

-- SELECT pid, price
-- FROM product
-- WHERE pid IN('p001','p002');

-- # 33.查询顾客在 4 月份订购的商品的商品号，商品名以及单价

-- SELECT pid, pname, price
-- FROM product
-- WHERE pid IN(SELECT pid
-- FROM orderitem
-- WHERE MONTH(ordertime)=4);

-- # 34.查询顾客在 4 月份下的订单并且订购数量大于 2 的订单信息

-- SELECT *
-- FROM orderitem
-- WHERE MONTH(ordertime) = 4
--   AND `count` > 2;

-- # 35.查询性别是男并且年龄大于 30 的顾客的信息

-- SELECT *
-- FROM customer
-- WHERE sex='男' AND age>30;

-- # 36.查询年龄相同的顾客的信息

-- SELECT *
-- FROM customer AS c1, customer AS c2
-- WHERE c1.age=c2.age AND c1.cid<>c2.cid;

-- # 37.将姓名是"丽丽"的顾客的名字替换成"王丽丽"

-- UPDATE customer SET cname='王丽丽' WHERE cname='丽丽';

-- # 38.统计订购了商品的总人数

-- SELECT COUNT(DISTINCT cid)
-- FROM orderitem;

-- # 39.统计顾客号和所订购商品总数量

-- SELECT cid, SUM(COUNT)
-- FROM orderitem
-- GROUP BY cid;

-- # 40.查找没订购商品的顾客号和顾客名

-- SELECT cid, cname
-- FROM customer
-- WHERE cid NOT IN(SELECT DISTINCT cid
-- FROM orderitem);

-- # 41.查找订购商品号'p001'商品数量最多的顾客号和顾客名

-- SELECT cid, cname
-- FROM customer
-- WHERE cid IN(SELECT cid
-- FROM orderitem
-- WHERE pid='p001' AND COUNT=(SELECT MAX(COUNT)
--   FROM orderitem
--   WHERE pid='p001'));

-- # 42.统计至少订购 2 种商品的顾客 id 和顾客名

-- SELECT cid, cname
-- FROM customer
-- WHERE cid IN(SELECT cid
-- FROM orderitem
-- GROUP BY cid
-- HAVING COUNT(pid)>=2);

-- # 43.查找所有顾客号和顾客名以及他们购买的商品号

-- SELECT c.cid, cname, pid
-- FROM customer c JOIN orderitem o ON c.cid=o.cid;

-- # 44.查找订购了商品"p001"的顾客号和顾客名

-- SELECT cid, cname
-- FROM customer
-- WHERE cid IN(SELECT cid
-- FROM orderitem
-- WHERE pid='p001');

-- # 45.找订购了商品号为"p001"或者"p002"的顾客号和顾客名

-- SELECT cid, cname
-- FROM customer
-- WHERE cid IN(SELECT cid
-- FROM orderitem
-- WHERE pid IN('p001','p002'));

-- # 46.查找年龄在 30 至 40 岁的顾客所购买的商品名及商品单价

-- SELECT pname, price
-- FROM product
-- WHERE pid IN(SELECT pid
-- FROM orderitem
-- WHERE cid IN(SELECT cid
-- FROM customer
-- WHERE age BETWEEN 30 AND 40));

-- # 47.查找女顾客购买的商品号，商品名和价格

-- SELECT pid, pname, price
-- FROM product
-- WHERE pid IN(SELECT pid
-- FROM orderitem
-- WHERE cid IN(SELECT cid
-- FROM customer
-- WHERE sex='女'));

-- # 48.查询单价大于 2000 或者是库存大于 20 的商品的信息

-- SELECT *
-- FROM product
-- WHERE price>2000 OR stock>20;

-- # 49.查询是女顾客并且年龄段在 30 到 50 之间购买的商品信息

-- SELECT *
-- FROM product
-- WHERE pid IN(SELECT pid
-- FROM orderitem
-- WHERE cid IN(SELECT cid
-- FROM customer
-- WHERE sex='女' AND age BETWEEN 30 AND 50));

-- # 50.查询每个商品的平均订购的数量

-- SELECT pid, AVG(COUNT)
-- FROM orderitem
-- GROUP BY pid;

