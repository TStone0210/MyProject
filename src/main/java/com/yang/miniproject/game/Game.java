package com.yang.miniproject.game;

import java.math.BigDecimal;
import java.util.Date;

public class Game {

	private BigDecimal s_no;
	private String s_who;
	private String s_photo;
	private BigDecimal s_score;
	private Date s_when;
	
	public Game() {
		// TODO Auto-generated constructor stub
	}

	public Game(BigDecimal s_no, String s_who, String s_photo, BigDecimal s_score, Date s_when) {
		super();
		this.s_no = s_no;
		this.s_who = s_who;
		this.s_photo = s_photo;
		this.s_score = s_score;
		this.s_when = s_when;
	}

	public BigDecimal getS_no() {
		return s_no;
	}

	public void setS_no(BigDecimal s_no) {
		this.s_no = s_no;
	}

	public String getS_who() {
		return s_who;
	}

	public void setS_who(String s_who) {
		this.s_who = s_who;
	}

	public String getS_photo() {
		return s_photo;
	}

	public void setS_photo(String s_photo) {
		this.s_photo = s_photo;
	}

	public BigDecimal getS_score() {
		return s_score;
	}

	public void setS_score(BigDecimal s_score) {
		this.s_score = s_score;
	}

	public Date getS_when() {
		return s_when;
	}

	public void setS_when(Date s_when) {
		this.s_when = s_when;
	}

	
	
}
