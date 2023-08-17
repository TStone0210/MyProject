package com.yang.miniproject.game;

import java.math.BigDecimal;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yang.miniproject.member.Member;

@Service
public class GameDAO {

	@Autowired
	private SqlSession ss;

	public void regScore(Game g, HttpServletRequest req) {
		try {
			int score = Integer.parseInt(req.getParameter("s_score"));
			BigDecimal scoreB = new BigDecimal(score);
			g.setS_score(scoreB);
			Member m = (Member) req.getSession().getAttribute("LoginMember");
			g.setS_who(m.getM_nickname());
			g.setS_photo(m.getM_photo());
			if (ss.getMapper(GameMapper.class).regScore(g) == 1) {
				req.setAttribute("srs", "점수를 등록했습니다");
			}
		} catch (Exception e) {
			e.printStackTrace();
			 req.setAttribute("srs", "점수 등록에 실패했습니다");
		}
	}
	
	public void seeScore(HttpServletRequest req) {
		List<Game> games = ss.getMapper(GameMapper.class).seeScore();
		req.getSession().setAttribute("gameScore", games);
	}
	
}
