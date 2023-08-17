package com.yang.miniproject.cheese;

import java.util.List;

public interface CheeseMapper {

	public abstract int insertCheese(Cheese c);
	public abstract List<Cheese> getCheese(CheeseSearch cs);
	public abstract List<Cheese> getCheeseWhere(CheeseSearch cs);
	public abstract List<Cheese> getCheeseHard(CheeseSearch cs);
	public abstract List<Cheese> getCheeseWhereHard(CheeseSearch cs);
	public abstract List<Cheese> getCheeseWhereEtc(CheeseSearch cs);
	public abstract List<Cheese> getCheeseHardEtc(CheeseSearch cs);
	public abstract List<Cheese> getCheeseWhereHardEtc(CheeseSearch cs);
	public abstract List<Cheese> getCheeseHardWhereEtc(CheeseSearch cs);
	public abstract List<Cheese> getCheeseWhereEtcHardEtc(CheeseSearch cs);
	
}
