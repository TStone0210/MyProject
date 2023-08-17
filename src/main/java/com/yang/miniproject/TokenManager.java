package com.yang.miniproject;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

public class TokenManager {

	public static void makeToken(HttpServletRequest req) {
		Date now = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("hh:mm:ss:SS");
		req.setAttribute("generatedToken", sdf.format(now));
	}
	
}
