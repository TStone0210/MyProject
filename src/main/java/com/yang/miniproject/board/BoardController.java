package com.yang.miniproject.board;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.yang.miniproject.HomeCount;
import com.yang.miniproject.TokenManager;
import com.yang.miniproject.member.MemberDAO;

@Controller
public class BoardController {

	@Autowired
	private MemberDAO mDAO;
	
	@Autowired
	private BoardDAO bDAO;
	
	@Autowired
	private HomeCount hCount;
	
	@RequestMapping(value = "/board.go", method = RequestMethod.GET)
	public String board(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		TokenManager.makeToken(req);
		bDAO.countAllBoardMsg();
		bDAO.firstSearchMsg(req);
		bDAO.defaultMsg(1, req);
		req.setAttribute("ContentPage", "board/board.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.search", method = RequestMethod.POST)
	public String boardSearch(HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.searchMsg(req);
		bDAO.getMsg(1, req);
		req.setAttribute("ContentPage", "board/board.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.write.go", method = RequestMethod.GET)
	public String boardWriteGo(Board b, HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		TokenManager.makeToken(req);
		req.setAttribute("ContentPage", "board/boardWrite.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.write", method = RequestMethod.POST)
	public String boardWrite(Board b, HttpServletRequest req) {
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.writeMsg(b, req);
		bDAO.defaultMsg(1, req);
		TokenManager.makeToken(req);
		req.setAttribute("ContentPage", "board/board.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.read", method = RequestMethod.GET)
	public String boardRead(Board b, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.boardRead(br, req);
		TokenManager.makeToken(req);
		req.setAttribute("ContentPage", "board/boardRead.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.page", method = RequestMethod.GET)
	public String boardPage(Board b, HttpServletRequest req) {
		int p = Integer.parseInt(req.getParameter("p"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.searchMsg(req);
		bDAO.getMsg(p, req);
		req.setAttribute("ContentPage", "board/board.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.reply", method = RequestMethod.POST)
	public String replyWrite(BoardReply r, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.writeReply(br, r, req);
		bDAO.defaultMsg(1, req);
		TokenManager.makeToken(req);
		bDAO.boardRead(br, req);
		req.setAttribute("ContentPage", "board/boardRead.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.delete", method = RequestMethod.POST)
	public String boardDelete(BoardReply r, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.boardDelete(br, req);
		bDAO.defaultMsg(1, req);
		TokenManager.makeToken(req);
		req.setAttribute("ContentPage", "board/board.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.update.go", method = RequestMethod.POST)
	public String boardUpdateGo(BoardReply r, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.boardUpdateText(br, req);
		TokenManager.makeToken(req);
		req.setAttribute("ContentPage", "board/boardUpdate.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/board.update", method = RequestMethod.POST)
	public String boardUpdate(Board b, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.boardUpdate(br, req);
		TokenManager.makeToken(req);
		bDAO.boardRead(br, req);
		req.setAttribute("ContentPage", "board/boardRead.jsp");
		return "index";
	}
	
	@RequestMapping(value = "/reply.delete", method = RequestMethod.POST)
	public String replyDelete(BoardReply r, HttpServletRequest req) {
		int br = Integer.parseInt(req.getParameter("b_no"));
		mDAO.loginCheck(req);
		hCount.openCount(req);
		bDAO.replyDelete(r, req);
		bDAO.defaultMsg(1, req);
		TokenManager.makeToken(req);
		bDAO.boardRead(br, req);
		req.setAttribute("ContentPage", "board/boardRead.jsp");
		return "index";
	}
	
}
