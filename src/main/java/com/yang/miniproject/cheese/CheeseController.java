package com.yang.miniproject.cheese;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yang.miniproject.HomeCount;
import com.yang.miniproject.member.MemberDAO;

@Controller
public class CheeseController {

	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private HomeCount hCount;
	
	@Autowired
	private CheeseDAO cDAO;
	
	@RequestMapping(value = "/cheese.go", method = RequestMethod.GET)
	public String cheese(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		cDAO.firstCheese(req);
		req.setAttribute("ContentPage", "cheese/cheese.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/cheese.search", method = RequestMethod.POST)
	public String cheeseSearch(CheeseSearch cs, HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		cDAO.getCheese(req);
		req.setAttribute("ContentPage", "cheese/cheese.jsp");
		return "index";
	}
	
}
