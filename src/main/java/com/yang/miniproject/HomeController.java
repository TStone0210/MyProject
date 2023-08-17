package com.yang.miniproject;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yang.miniproject.member.MemberDAO;

@Controller
public class HomeController {
	
	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private HomeCount hCount;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/index.go", method = RequestMethod.GET)
	public String redirect(HttpServletRequest req) {
		return home(req);
	}
	
	
	@RequestMapping(value = "/lightOff.go", method = RequestMethod.GET)
	public String lightOff(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.lightOff(req);
		hCount.openCount(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
}
