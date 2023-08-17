package com.yang.miniproject.game;

import java.util.List;

public interface GameMapper {
	
	public abstract int regScore(Game g);
	public abstract List<Game> seeScore();
	
}
