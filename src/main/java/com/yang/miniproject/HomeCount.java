package com.yang.miniproject;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

@Service
public class HomeCount {

	int count = 0;
	
	private static final HomeCount HOMEC = new HomeCount();
	
	private HomeCount() {
		// TODO Auto-generated constructor stub
	}
	
	public static HomeCount getHomeCount() {
		return HOMEC;
	}
	
	public void openCount(HttpServletRequest req) {
		count++;
		req.setAttribute("opNum", count);
	}
	
	public void lightOff(HttpServletRequest req) {
		count = 0;
		req.setAttribute("opNum", count);
	}
	
	
}
