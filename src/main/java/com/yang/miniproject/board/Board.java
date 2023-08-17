package com.yang.miniproject.board;

import java.math.BigDecimal;
import java.util.Date;

public class Board {

	private BigDecimal b_no;
	private String b_title;
	private String b_text;
	private Date b_when;
	
	private String b_writer;
	private String m_photo;
	
	public Board() {
		// TODO Auto-generated constructor stub
	}

	public Board(BigDecimal b_no, String b_title, String b_text, Date b_when, String b_writer, String m_photo) {
		super();
		this.b_no = b_no;
		this.b_title = b_title;
		this.b_text = b_text;
		this.b_when = b_when;
		this.b_writer = b_writer;
		this.m_photo = m_photo;
	}

	public BigDecimal getB_no() {
		return b_no;
	}

	public void setB_no(BigDecimal b_no) {
		this.b_no = b_no;
	}

	public String getB_title() {
		return b_title;
	}

	public void setB_title(String b_title) {
		this.b_title = b_title;
	}

	public String getB_text() {
		return b_text;
	}

	public void setB_text(String b_text) {
		this.b_text = b_text;
	}

	public Date getB_when() {
		return b_when;
	}

	public void setB_when(Date b_when) {
		this.b_when = b_when;
	}

	public String getb_writer() {
		return b_writer;
	}

	public void setb_writer(String b_writer) {
		this.b_writer = b_writer;
	}

	public String getM_photo() {
		return m_photo;
	}

	public void setM_photo(String m_photo) {
		this.m_photo = m_photo;
	}
	
	
	
}
