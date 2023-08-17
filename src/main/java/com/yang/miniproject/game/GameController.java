package com.yang.miniproject.game;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yang.miniproject.HomeCount;
import com.yang.miniproject.member.MemberDAO;

@Controller
public class GameController {

	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private HomeCount hCount;
	
	@Autowired
	private GameDAO gDAO;
	
	@RequestMapping(value = "/game.go", method = RequestMethod.GET)
	public String game(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		gDAO.seeScore(req);
		req.setAttribute("ContentPage", "game/game.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/game.reg", method = RequestMethod.POST)
	public String gameReg(Game g, HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		gDAO.regScore(g, req);
		req.setAttribute("ContentPage", "game/game.jsp");
		return "index";
	}
	
}
