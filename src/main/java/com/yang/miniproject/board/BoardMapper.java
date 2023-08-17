package com.yang.miniproject.board;

import java.util.List;

public interface BoardMapper {

	public abstract int countAllBoardMsg();
	public abstract int countSearchMsgNickname(Search s);
	public abstract int countSearchMsgTitle(Search s);
	public abstract int countSearchMsgText(Search s);
	public abstract List<Board> getMsg(Search s);
	public abstract List<Board> getMsgNickname(Search s);
	public abstract List<Board> getMsgTitle(Search s);
	public abstract List<Board> getMsgText(Search s);
	public abstract int boardWrite(Board b);
	public abstract List<Board> boardRead(BoardRead br);
	public abstract int replyWrite(BoardReply r);
	public abstract List<BoardReply> boardReply(BoardRead br);
	public abstract int boardDelete(BoardRead br);
	public abstract int boardUpdate(Board b);
	public abstract int replyDelete(BoardReply br);
	
}
