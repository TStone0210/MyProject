package com.yang.miniproject.member;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@Service
public class MemberDAO {

	@Autowired
	private SqlSession ss;

	public boolean loginCheck(HttpServletRequest req) {
		Member m = (Member) req.getSession().getAttribute("LoginMember");
		if (m != null) {
			req.setAttribute("loginPage", "member/loginSuccess.jsp");
			return true;
		} else {
			req.setAttribute("loginPage", "member/login.jsp");
			return false;
		}
	}
	
	public Members idCheck(Member m) {
		return new Members(ss.getMapper(MemberMapper.class).getById(m));
	}
	
	public Members nicknameCheck(Member m) {
		return new Members(ss.getMapper(MemberMapper.class).getByNickname(m));
	}

	public void login(Member m, HttpServletRequest req, HttpServletResponse res) {
		try {

			List<Member> dbMs = ss.getMapper(MemberMapper.class).getById(m);
			if (dbMs.size() != 0) {
				Member dbM = dbMs.get(0);
				if (dbM.getM_password().equals(m.getM_password())) {
					req.getSession().setAttribute("LoginMember", dbM);
					req.getSession().setMaxInactiveInterval(3600);

					Cookie c = new Cookie("lastLoginId", dbM.getM_id());
					c.setMaxAge(60 * 60 * 24 * 3);
					res.addCookie(c);

					req.setAttribute("r", "로그인 성공! " + dbM.getM_nickname() + "님, 환영합니다!");
				} else {
					req.setAttribute("r", "로그인 실패, 잘못된 비밀번호 입니다.");
				}
			} else {
				req.setAttribute("r", "로그인 실패, 미가입 ID 입니다.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "로그인 실패, DB에 문제가 발생했습니다.");
		}
	}
	
	public void signup(Member m, HttpServletRequest req) {
		String path = null;
		MultipartRequest mr = null;
		try {
			path = req.getSession().getServletContext().getRealPath("resources/img");
			mr = new MultipartRequest(req, path, 30*1024*1024, "UTF-8", new DefaultFileRenamePolicy());
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "사진 용량은 최대 30mb 입니다.");
			return;
		}
		
		try {
			m.setM_id(mr.getParameter("m_id"));
			m.setM_password(mr.getParameter("m_password"));
			m.setM_name(mr.getParameter("m_name"));
			m.setM_nickname(mr.getParameter("m_nickname"));
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			String m_y = mr.getParameter("m_y");
			int m_m = Integer.parseInt(mr.getParameter("m_m"));
			int m_d = Integer.parseInt(mr.getParameter("m_d"));
			String birthday = String.format("%s%02d%02d", m_y, m_m, m_d);
			Date m_birthday = sdf.parse(birthday);
			m.setM_birthday(m_birthday);
			
			String addr1 = mr.getParameter("m_addr1");
			String addr2 = mr.getParameter("m_addr2");
			String addr3 = mr.getParameter("m_addr3");
			String addr = addr1 + "!" + addr2 + "!" + addr3;
			m.setM_addr(addr);
			
			String photo = mr.getFilesystemName("m_photo");
			photo = URLEncoder.encode(photo, "UTF-8").replace("+", " ");
			m.setM_photo(photo);
			
			if (ss.getMapper(MemberMapper.class).signup(m) == 1) {
				req.setAttribute("r", "회원가입을 성공하였습니다!");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "회원가입에 실패하였습니다..");
			
		}
	}
	
	public void logout(HttpServletRequest req) {
		req.getSession().setAttribute("LoginMember", null);
	}
	
	public void infoAddr(HttpServletRequest req) {
		Member m = (Member) req.getSession().getAttribute("LoginMember");
		String addr = m.getM_addr();
		String[] infoAddr = addr.split("!");
		req.setAttribute("addr", infoAddr);
	}
	
	public void infoBirthday(HttpServletRequest req) {
		Member m = (Member) req.getSession().getAttribute("LoginMember");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String birthday = sdf.format(m.getM_birthday());
		String[] infoBirthday = birthday.split("-");
		req.setAttribute("birthday", infoBirthday);
	}

	public boolean infoCheck(HttpServletRequest req) {
		
		String id = req.getParameter("infoID");
		String pw = req.getParameter("infoPW");
		Member m = (Member) req.getSession().getAttribute("LoginMember");
	
		if (pw.equals(m.getM_password()) && id.equals(m.getM_id())) {
			return true;
		} else {
			req.setAttribute("r", "정보가 올바르지 않습니다");
			return false;
		}
		
	}
	
	public void memberOut(HttpServletRequest req) {
		try {
			Member m = (Member) req.getSession().getAttribute("LoginMember");
			
			if (ss.getMapper(MemberMapper.class).memberOut(m) == 1) {
				req.setAttribute("r", "회원탈퇴를 성공했습니다");
				
				String photo_delete = m.getM_photo();
				photo_delete = URLDecoder.decode(photo_delete, "UTF-8");
				String path = req.getSession().getServletContext().getRealPath("resources/img");
				File f = new File(path + "/" + photo_delete);
				f.delete();
			} else {
				req.setAttribute("r", "회원탈퇴에 실패했습니다");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "회원탈퇴에 실패했습니다");
		}
	}
	
	public void infoUpdate(Member m, HttpServletRequest req) {
		String path = null;
		MultipartRequest mr = null;
		try {
			path = req.getSession().getServletContext().getRealPath("resources/img");
			mr = new MultipartRequest(req, path, 30*1024*1024, "UTF-8", new DefaultFileRenamePolicy());
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "사진 용량은 최대 30mb 입니다.");
			return;
		}
		
		String beforePhoto = ((Member) req.getSession().getAttribute("LoginMember")).getM_photo();
		String afterPhoto = mr.getFilesystemName("m_photo");
		
		try {
			m.setM_id(mr.getParameter("m_id"));
			m.setM_password(mr.getParameter("m_password"));
			m.setM_name(mr.getParameter("m_name"));
			m.setM_nickname(mr.getParameter("m_nickname"));
			
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			String m_y = mr.getParameter("m_y");
			int m_m = Integer.parseInt(mr.getParameter("m_m"));
			int m_d = Integer.parseInt(mr.getParameter("m_d"));
			String birthday = String.format("%s%02d%02d", m_y, m_m, m_d);
			Date m_birthday = sdf.parse(birthday);
			m.setM_birthday(m_birthday);
			
			String addr1 = mr.getParameter("m_addr1");
			String addr2 = mr.getParameter("m_addr2");
			String addr3 = mr.getParameter("m_addr3");
			String addr = addr1 + "!" + addr2 + "!" + addr3;
			m.setM_addr(addr);
			
			if (afterPhoto == null) {
				afterPhoto = beforePhoto;
			} else {
				afterPhoto = URLEncoder.encode(afterPhoto, "UTF-8").replace("+", " ");
			}
			
			m.setM_photo(afterPhoto);
			
			if (ss.getMapper(MemberMapper.class).infoUpdate(m) == 1) {
				req.setAttribute("r", "회원정보가 수정되었습니다");
				req.getSession().setAttribute("LoginMember", m);
				
				if (!beforePhoto.equals(afterPhoto)) {
					beforePhoto = URLDecoder.decode(beforePhoto, "UTF-8");
					File f = new File(path + "/" + beforePhoto);
					f.delete();
					
				}
			} else {
				req.setAttribute("r", "회원정보 수정을 실패했습니다");
				if (!beforePhoto.equals(afterPhoto)) {
					new File(path + "/" + URLDecoder.decode(afterPhoto, "UTF-8")).delete();
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			req.setAttribute("r", "회원정보 수정을 실패했습니다");
			if (!beforePhoto.equals(afterPhoto)) {
				try {
					new File(path + "/" + URLDecoder.decode(afterPhoto, "UTF-8")).delete();
				} catch (UnsupportedEncodingException e1) {
					e1.printStackTrace();
				}
				
			}
		}
		
	}
	
}
