package com.yang.miniproject.cheese;

public class CheeseSearch {

	private String cs_name;
	private String cs_where;
	private String cs_hard;
	
	public CheeseSearch() {
		// TODO Auto-generated constructor stub
	}

	public CheeseSearch(String cs_name, String cs_where, String cs_hard) {
		super();
		this.cs_name = cs_name;
		this.cs_where = cs_where;
		this.cs_hard = cs_hard;
	}

	public String getCs_name() {
		return cs_name;
	}

	public void setCs_name(String cs_name) {
		this.cs_name = cs_name;
	}

	public String getCs_where() {
		return cs_where;
	}

	public void setCs_where(String cs_where) {
		this.cs_where = cs_where;
	}

	public String getCs_hard() {
		return cs_hard;
	}

	public void setCs_hard(String cs_hard) {
		this.cs_hard = cs_hard;
	}
	
	
}
