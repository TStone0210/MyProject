package com.yang.miniproject.member;

import java.util.Date;

public class Member {

	private String m_id;
	private String m_password;
	private String m_name;
	private String m_nickname;
	private Date m_birthday;
	private String m_addr;
	private String m_photo;
	
	public Member() {
		// TODO Auto-generated constructor stub
	}

	public Member(String m_id, String m_password, String m_name, String m_nickname, Date m_birthday, String m_addr,
			String m_photo) {
		super();
		this.m_id = m_id;
		this.m_password = m_password;
		this.m_name = m_name;
		this.m_nickname = m_nickname;
		this.m_birthday = m_birthday;
		this.m_addr = m_addr;
		this.m_photo = m_photo;
	}

	public String getM_id() {
		return m_id;
	}

	public void setM_id(String m_id) {
		this.m_id = m_id;
	}

	public String getM_password() {
		return m_password;
	}

	public void setM_password(String m_password) {
		this.m_password = m_password;
	}

	public String getM_name() {
		return m_name;
	}

	public void setM_name(String m_name) {
		this.m_name = m_name;
	}

	public String getM_nickname() {
		return m_nickname;
	}

	public void setM_nickname(String m_nickname) {
		this.m_nickname = m_nickname;
	}

	public Date getM_birthday() {
		return m_birthday;
	}

	public void setM_birthday(Date m_birthday) {
		this.m_birthday = m_birthday;
	}

	public String getM_addr() {
		return m_addr;
	}

	public void setM_addr(String m_addr) {
		this.m_addr = m_addr;
	}

	public String getM_photo() {
		return m_photo;
	}

	public void setM_photo(String m_photo) {
		this.m_photo = m_photo;
	}
	
	
}
