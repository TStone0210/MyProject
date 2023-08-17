package com.yang.miniproject.board;

import java.math.BigDecimal;
import java.util.Date;

public class BoardReply {

	private BigDecimal r_no;
	private BigDecimal r_b_no;
	private String r_writer;
	private Date r_when;
	private String r_text;
	private String m_photo;

	public BoardReply() {
		// TODO Auto-generated constructor stub
	}

	public BoardReply(BigDecimal r_no, BigDecimal r_b_no, String r_writer, Date r_when, String r_text, String m_photo) {
		super();
		this.r_no = r_no;
		this.r_b_no = r_b_no;
		this.r_writer = r_writer;
		this.r_when = r_when;
		this.r_text = r_text;
		this.m_photo = m_photo;
	}

	public BigDecimal getR_no() {
		return r_no;
	}

	public void setR_no(BigDecimal r_no) {
		this.r_no = r_no;
	}

	public BigDecimal getR_b_no() {
		return r_b_no;
	}

	public void setR_b_no(BigDecimal r_b_no) {
		this.r_b_no = r_b_no;
	}

	public String getR_writer() {
		return r_writer;
	}

	public void setR_writer(String r_writer) {
		this.r_writer = r_writer;
	}

	public Date getR_when() {
		return r_when;
	}

	public void setR_when(Date r_when) {
		this.r_when = r_when;
	}

	public String getR_text() {
		return r_text;
	}

	public void setR_text(String r_text) {
		this.r_text = r_text;
	}

	public String getM_photo() {
		return m_photo;
	}

	public void setM_photo(String m_photo) {
		this.m_photo = m_photo;
	}
	
	
}
