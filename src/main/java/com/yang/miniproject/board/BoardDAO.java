package com.yang.miniproject.board;

import java.math.BigDecimal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yang.miniproject.member.Member;

@Service
public class BoardDAO {

	private int allBoardMsgCount;
	
	@Autowired
	private SqlSession ss;
	
	public void countAllBoardMsg() {
		allBoardMsgCount = ss.getMapper(BoardMapper.class).countAllBoardMsg();
	}
	
	public void defaultMsg(int pageNo, HttpServletRequest req) {
		String search = "";
		int boardPerPage = 5;
	
		int boardCount = allBoardMsgCount;
		int pageCount = (int) Math.ceil(boardCount / (double) boardPerPage);
		req.setAttribute("pageCount", pageCount);
		req.setAttribute("pageNo", pageNo);
		
		Search s1 = new Search(search, 1, 5);
		List <Board> boards = ss.getMapper(BoardMapper.class).getMsg(s1);
		
		req.setAttribute("boards", boards);
	}
	
	public void firstSearchMsg(HttpServletRequest req) {
		req.getSession().setAttribute("search", null);
		req.getSession().setAttribute("searchW", null);
		req.getSession().setAttribute("boardPerPage", 5);
	}
	
	public void searchMsg(HttpServletRequest req) {
		int boardPerPage = Integer.parseInt(req.getParameter("bPP"));
		String search = req.getParameter("search");
		String searchW = req.getParameter("searchW");
		req.getSession().setAttribute("search", search);
		req.getSession().setAttribute("searchW", searchW);
		req.getSession().setAttribute("boardPerPage", boardPerPage);
	}
	
	public void getMsg(int pageNo, HttpServletRequest req) {
		int boardPerPage = (Integer) req.getSession().getAttribute("boardPerPage");
		String search = (String) req.getSession().getAttribute("search");
		String searchW = (String) req.getSession().getAttribute("searchW");
		
		int boardCount = allBoardMsgCount;
		if (search == null) {
			search = "";
		} else if (searchW.equals("닉네임")) {
			Search s = new Search(search, 0, 0);
			boardCount = ss.getMapper(BoardMapper.class).countSearchMsgNickname(s);
		} else if (searchW.equals("제목")) {
			Search s = new Search(search, 0, 0);
			boardCount = ss.getMapper(BoardMapper.class).countSearchMsgTitle(s);
		} else if (searchW.equals("내용")) {
			Search s = new Search(search, 0, 0);
			boardCount = ss.getMapper(BoardMapper.class).countSearchMsgText(s);
		}
		
		int pageCount = (int) Math.ceil(boardCount / (double) boardPerPage);
		req.setAttribute("pageCount", pageCount);
		req.setAttribute("pageNo", pageNo);
		
		int start = boardPerPage * (pageNo - 1) + 1;
		int end = (pageNo == pageCount) ? boardCount : (start + boardPerPage -1);
		
		List<Board> boards = null;
		if (searchW.equals("닉네임")) {
			Search s = new Search(search, start, end);
			boards = ss.getMapper(BoardMapper.class).getMsgNickname(s);
		} else if (searchW.equals("제목")) {
			Search s = new Search(search, start, end);
			boards = ss.getMapper(BoardMapper.class).getMsgTitle(s);
		} else if (searchW.equals("내용")) {
			Search s = new Search(search, start, end);
			boards = ss.getMapper(BoardMapper.class).getMsgText(s);
		}
		
		req.setAttribute("boards", boards);
		
		if (boardCount == 0) {
			req.setAttribute("r", "검색결과가 없습니다");
		}
		
	}
	
	
	
	public void writeMsg(Board b, HttpServletRequest req) {
		try {
			Member m = (Member) req.getSession().getAttribute("LoginMember");
			b.setb_writer(m.getM_nickname());
			String txt = b.getB_text().replace("\r\n", "<br>");
			b.setB_text(txt);
			
			String formerToken = (String) req.getSession().getAttribute("formerToken");
			String token = req.getParameter("token");
			
			if (!token.equals(formerToken)) {
				if (ss.getMapper(BoardMapper.class).boardWrite(b) == 1) {
					req.setAttribute("r", "게시글 작성을 성공하였습니다");
					req.getSession().setAttribute("formerToken", token);
					allBoardMsgCount++;
				} else {
					req.setAttribute("r", "게시글 작성에 실패했습니다");
				}
			} else {
				req.setAttribute("r", "새로고침으로 인해 실패했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "게시글 작성에 실패했습니다");
		}
		
	}
	
	public void boardRead(int br, HttpServletRequest req) {
		try {
			BigDecimal brr = new BigDecimal(br);
			BoardRead b = new BoardRead(brr);
			List<Board> boards = ss.getMapper(BoardMapper.class).boardRead(b);
			Board board = boards.get(0);
			req.getSession().setAttribute("Read", board);
			
			List<BoardReply> replys = ss.getMapper(BoardMapper.class).boardReply(b);
			req.setAttribute("Reply", replys);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void writeReply(int b, BoardReply r, HttpServletRequest req) {
		try {
			BigDecimal br = new BigDecimal(b);
			Member m = (Member) req.getSession().getAttribute("LoginMember");
			r.setR_writer(m.getM_nickname());
			r.setR_text(req.getParameter("r_text").replace("\r\n", "<br>"));
			r.setR_b_no(br);
			
			String formerToken = (String) req.getSession().getAttribute("formerToken");
			String token = req.getParameter("token");
			
			if (!token.equals(formerToken)) {
				if (ss.getMapper(BoardMapper.class).replyWrite(r) == 1) {
					req.setAttribute("r", "댓글 작성을 성공하였습니다");
					req.getSession().setAttribute("formerToken", token);
				} else {
					req.setAttribute("r", "댓글 작성에 실패했습니다");
				}
			} else {
				req.setAttribute("r", "새로고침으로 인해 실패했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "댓글 작성에 실패했습니다");
		}
		
	}
	
	public void boardDelete(int br, HttpServletRequest req) {
		BigDecimal brr = new BigDecimal(br);
		BoardRead b = new BoardRead(brr);
		try {
			if (ss.getMapper(BoardMapper.class).boardDelete(b) == 1) {
				allBoardMsgCount--;
				req.setAttribute("r", "게시글이 삭제되었습니다");
			} else {
				req.setAttribute("r", "게시글 삭제에 실패했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "게시글 삭제에 실패했습니다");
		}
		
	}
	
	public void boardUpdateText(int br, HttpServletRequest req) {
		BigDecimal brr = new BigDecimal(br);
		BoardRead b = new BoardRead(brr);
		List<Board> boards = ss.getMapper(BoardMapper.class).boardRead(b);
		Board board = boards.get(0);
		board.setB_text(board.getB_text().replace("<br>", "\r\n"));
		req.getSession().setAttribute("Read", board);
	}
	
	public void boardUpdate(int br, HttpServletRequest req) {
		try {
			BigDecimal brr = new BigDecimal(br);
			BoardRead b = new BoardRead(brr);
			List<Board> boards = ss.getMapper(BoardMapper.class).boardRead(b);
			Board board = boards.get(0);
			board.setB_text(req.getParameter("b_text").replace("\r\n", "<br>"));
			if (ss.getMapper(BoardMapper.class).boardUpdate(board) == 1) {
				req.setAttribute("r", "게시글이 수정되었습니다");
			} else {
				req.setAttribute("r", "게시글 수정을 실패했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "게시글 수정을 실패했습니다");
		}
	}
	
	public void replyDelete(BoardReply br, HttpServletRequest req) {
		try {
			if (ss.getMapper(BoardMapper.class).replyDelete(br) == 1) {
				req.setAttribute("r", "답글을 삭제했습니다");
			} else {
				req.setAttribute("r", "답글 삭제를 실패했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "답글 삭제를 실패했습니다");
		}
	}
	
}
