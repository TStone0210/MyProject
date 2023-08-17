package com.yang.miniproject.cheese;

public class Cheese {

	private int c_no;
	private String c_name;
	private String c_fname; 
	private String c_where;
	private String c_hard;
	private String c_fat;
	private String c_time;
	private String c_photo;
	
	
	public Cheese() {
		// TODO Auto-generated constructor stub
	}


	public Cheese(int c_no, String c_name, String c_fname, String c_where, String c_hard, String c_fat, String c_time,
			String c_photo) {
		super();
		this.c_no = c_no;
		this.c_name = c_name;
		this.c_fname = c_fname;
		this.c_where = c_where;
		this.c_hard = c_hard;
		this.c_fat = c_fat;
		this.c_time = c_time;
		this.c_photo = c_photo;
	}


	public int getC_no() {
		return c_no;
	}


	public void setC_no(int c_no) {
		this.c_no = c_no;
	}


	public String getC_name() {
		return c_name;
	}


	public void setC_name(String c_name) {
		this.c_name = c_name;
	}


	public String getC_fname() {
		return c_fname;
	}


	public void setC_fname(String c_fname) {
		this.c_fname = c_fname;
	}


	public String getC_where() {
		return c_where;
	}


	public void setC_where(String c_where) {
		this.c_where = c_where;
	}


	public String getC_hard() {
		return c_hard;
	}


	public void setC_hard(String c_hard) {
		this.c_hard = c_hard;
	}


	public String getC_fat() {
		return c_fat;
	}


	public void setC_fat(String c_fat) {
		this.c_fat = c_fat;
	}


	public String getC_time() {
		return c_time;
	}


	public void setC_time(String c_time) {
		this.c_time = c_time;
	}


	public String getC_photo() {
		return c_photo;
	}


	public void setC_photo(String c_photo) {
		this.c_photo = c_photo;
	}
	
	
}
