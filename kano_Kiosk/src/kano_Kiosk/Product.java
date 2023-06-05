package kano_Kiosk;

public class Product {
	//1.변수들
	String name;
	int price;
	
	Product(String xx, int yy){
		name = xx;
		price = yy;
	}
	public static Product d1 = new Product("아이스 아메리카노",4000);
	public static Product d2 = new Product("아메리카노",4500);
	public static Product d3 = new Product("카페 라떼",5000);
	public static Product d4 = new Product("자몽 허니 블랙 티",5700);
	public static Product d5 = new Product("라이트 키위 라임 블랜디드",6300);
	public static Product f1 = new Product("베이컨 치즈 토스트",4900);
	public static Product f2 = new Product("생크림 카스텔라",4500);
	public static Product f3 = new Product("너티 크루아상",4900);
	public static Product f4 = new Product("클래식 스콘",3300);
	public static Product f5 = new Product("블루베리 베이글",3000);
	
	//2.함수들 (메인 말고)
	void info() {
		System.out.println("상품명:"+name+" 가격:"+price);
	}
}
