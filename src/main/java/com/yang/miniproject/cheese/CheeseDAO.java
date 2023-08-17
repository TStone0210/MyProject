package com.yang.miniproject.cheese;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheeseDAO {

	@Autowired
	private SqlSession ss;
	
	public void firstCheese(HttpServletRequest req) {
		CheeseSearch cs = new CheeseSearch("", "전체", "전체");
		List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheese(cs);
		req.getSession().setAttribute("cheeseSearch", cs);
		req.getSession().setAttribute("cheeses", cheese);
	}
	
	public void getCheese(HttpServletRequest req) {
		
		String cs_name = req.getParameter("cs_name");
		String cs_where = req.getParameter("cs_where");
		String cs_hard = req.getParameter("cs_hard");
		
		CheeseSearch cs = new CheeseSearch(cs_name, cs_where, cs_hard);
		req.getSession().setAttribute("cheeseSearch", cs);
		
		if (cs.getCs_where().equals("전체") && cs.getCs_hard().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheese(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (!cs.getCs_where().equals("전체") && !cs.getCs_where().equals("기타") && cs.getCs_hard().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseWhere(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_where().equals("전체") && !cs.getCs_hard().equals("기타") && !cs.getCs_hard().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseHard(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (!cs.getCs_where().equals("전체") && !cs.getCs_where().equals("기타") && !cs.getCs_hard().equals("전체") && !cs.getCs_hard().equals("기타")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseWhereHard(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_where().equals("기타") && cs.getCs_hard().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseWhereEtc(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_where().equals("전체") && cs.getCs_hard().equals("기타")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseHardEtc(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_where().equals("기타") && !cs.getCs_hard().equals("기타") && !cs.getCs_hard().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseHardWhereEtc(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_hard().equals("기타") && !cs.getCs_where().equals("기타") && !cs.getCs_where().equals("전체")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseWhereHardEtc(cs);
			req.getSession().setAttribute("cheeses", cheese);
		} else if (cs.getCs_hard().equals("기타") && cs.getCs_where().equals("기타")) {
			List<Cheese> cheese = ss.getMapper(CheeseMapper.class).getCheeseWhereEtcHardEtc(cs);
			req.getSession().setAttribute("cheeses", cheese);
		}
	}
	
}
