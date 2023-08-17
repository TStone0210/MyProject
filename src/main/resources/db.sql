
create table project_member (
	m_id varchar2(8 char) primary key,
	m_password varchar2(20 char) not null,
	m_name varchar2(8 char) not null,
	m_nickname varchar2(8 char) unique not null,
	m_birthday date not null,
	m_addr varchar2(200 char) not null,
	m_photo varchar2(200 char) not null
)

insert into project_member values ('ㅁㅁ', 'ㅁㅁ', 'ㅁㅁ', '기록없음', to_date('19950210', 'YYYY-MM-DD'), '부산', 'emptyScore.png');

select * from project_member

truncate table project_member

drop table project_member cascade constraint purge;


--------------------------------------------------------

create table project_board (
	b_no number(5) primary key,
	b_title varchar2(20 char) not null,
	b_writer varchar2(8 char) not null,
	b_when date not null,
	b_text varchar2(512 char) not null,
	constraint fk_pj_board foreign key(b_writer)
		references project_member(m_nickname)
		on delete cascade
)

select *
			from (
				select rownum as rn, b_no, b_title, b_writer, b_when, b_text, m_photo
					from (
						select *
							from project_board, project_member
								where b_writer = m_nickname 
								order by b_no desc
					)
			)
			where rn >= 1 and rn <= 24;

select * from PROJECT_BOARD
			
create sequence project_board_seq;

truncate table project_board;

drop table project_board cascade constraint purge;

drop sequence project_board_seq;

----------------------------------------------------

create table project_reply (
	r_no number(5) primary key,
	r_b_no number(5) not null,
	r_writer varchar2(8 char) not null,
	r_when date not null,
	r_text varchar2(256 char) not null,
	constraint fk_pj_reply foreign key(r_b_no)
		references project_board(b_no)
		on delete cascade
);

select * from PROJECT_REPLY
 
create sequence project_reply_seq;

select * from PROJECT_REPLY

truncate table project_reply;

drop table project_reply cascade constraint purge;

drop sequence project_reply_seq;


---------------------------------------------------

create table project_cheese (
	c_no number(5) primary key,
	c_name varchar2(20 char) not null,
	c_fname varchar2(30 char)not null,
	c_where varchar2(10 char) not null,
	c_hard varchar2(10 char) not null,
	c_fat varchar2(10 char) not null,
	c_time varchar2(20 char) not null,
	c_photo varchar2(200 char) not null
)

select * from PROJECT_CHEESE

update project_cheese set c_photo = 'appenzeller.jpg' where c_photo = 'appenzeller9.jpg' 


create sequence project_cheese_seq

truncate table project_cheese;

drop table project_cheese cascade constraint purge;

drop sequence project_cheese_seq;


----------------------------------------------

create table project_score (
	s_no number(5) primary key,
	s_who varchar2(8 char) not null,
	s_photo varchar2(300 char) not null,
	s_score number(30) not null,
	s_when date not null,
	constraint fk_pj_score foreign key(s_who)
		references project_member(m_nickname)
		on delete cascade
)

create sequence project_score_seq;

select * from project_score

drop table project_score cascade constraint purge;

drop sequence project_score_seq;

insert into project_score values (project_score_seq.nextval, '기록없음', 'emptyScore.png', 0, to_date('20230101000000', 'YYYYMMDDHH24MISS'));