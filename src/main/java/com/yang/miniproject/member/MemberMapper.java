package com.yang.miniproject.member;

import java.util.List;

public interface MemberMapper {

	public abstract List<Member> getById(Member m);
	public abstract List<Member> getByNickname(Member m);
	public abstract int signup(Member m);
	public abstract int memberOut(Member m);
	public abstract int infoUpdate(Member m);
}
