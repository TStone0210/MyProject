package com.yang.miniproject.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yang.miniproject.HomeCount;

@Controller
public class MemberController {

	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private HomeCount hCount;
	
	@RequestMapping(value = "/member.login", method = RequestMethod.POST)
	public String memberLogin(Member m, HttpServletRequest req, HttpServletResponse res) {
		hCount.openCount(req);
		mDAO.login(m, req, res);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.id.check", method = RequestMethod.GET, produces="application/JSON; charset=UTF-8")
	public @ResponseBody Members memberIdCheck(Member m) {
		return mDAO.idCheck(m);
	}
	
	@RequestMapping(value = "/member.nickname.check", method = RequestMethod.GET, produces="application/JSON; charset=UTF-8")
	public @ResponseBody Members memberNicknameCheck(Member m) {
		return mDAO.nicknameCheck(m);
	}
	
	@RequestMapping(value = "/member.signup.go", method = RequestMethod.GET)
	public String memberSignupGo(Member m, HttpServletRequest req, HttpServletResponse res) {
		hCount.openCount(req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "member/signup.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.signup", method = RequestMethod.POST)
	public String memberSignup(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.signup(m, req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.logout", method = RequestMethod.GET)
	public String memberLogout(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.logout(req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.info.check", method = RequestMethod.GET)
	public String memberInfoCheck(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "member/infoCheck.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.info.go", method = RequestMethod.POST)
	public String memberInfo(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.loginCheck(req);
		if (mDAO.infoCheck(req)) {
			mDAO.infoAddr(req);
			mDAO.infoBirthday(req);
			req.setAttribute("ContentPage", "member/info.jsp");
		} else {
			req.setAttribute("ContentPage", "member/infoCheck.jsp");
		}
		return "index";
	}
	
	@RequestMapping(value = "/member.memberOut.go", method = RequestMethod.GET)
	public String memberOut(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.memberOut(req);
		mDAO.logout(req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "home.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.infoUpdate.go", method = RequestMethod.GET)
	public String memberInfoUpdateGo(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		mDAO.infoAddr(req);
		mDAO.infoBirthday(req);
		mDAO.loginCheck(req);
		req.setAttribute("ContentPage", "member/infoUpdate.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/member.infoUpdate", method = RequestMethod.POST)
	public String memberInfoUpdate(Member m, HttpServletRequest req) {
		hCount.openCount(req);
		if (mDAO.loginCheck(req)) {
			mDAO.infoUpdate(m, req);
			mDAO.infoAddr(req);
			mDAO.infoBirthday(req);
			mDAO.loginCheck(req);
			req.setAttribute("ContentPage", "member/info.jsp");
		} else {
			req.setAttribute("ContentPage", "home.jsp");
		}
		return "index";
	}
	
}
