package kano_Kiosk;

public class MenuDrink {
	
	public void run() {
		yy:while(true) {
			//메뉴출력
//			public static Product d1 = new Product("아이스 아메리카노",4000);
//			public static Product d2 = new Product("아메리카노",4500);
//			public static Product d3 = new Product("카페 라떼",5000);
//			public static Product d4 = new Product("자몽 허니 블랙 티",5700);
//			public static Product d5 = new Product("라이트 키위 라임 블랜디드",6300);
			Product.d1.info();
			Product.d2.info();
			Product.d3.info();
			Product.d4.info();
			Product.d5.info();
			
			System.out.println("[1.아이스 아메리카노/2.아메리카노/3.카페 라떼/4.자몽 허니 블랙 티/5.라이트 키위 라임 블렌디드/x.이전메뉴로]");
			System.out.println("");
			Kiosk.cmd = Kiosk.sc.next();
			switch(Kiosk.cmd) {
			case "1":
				System.out.println("아이스 아메리카노 선택됨");				
				Product x = new Product("아이스 아메리카노",4000);
				Kiosk.basket.add(x);				
				break;
			case "2":
				System.out.println("아메리카노 선택됨");				
				Product x1 = new Product("아메리카노",4500);
				Kiosk.basket.add(x1);
				break;
			case "3":
				System.out.println("카페 라떼 선택됨");
				Product x2 = new Product("아메리카노",4500);
				Kiosk.basket.add(x2);
				break;
			case "4":
				System.out.println("자몽 허니 블랙 티 선택됨");
				Product x3 = new Product("자몽 허니 블랙 티",4500);
				Kiosk.basket.add(x3);
				break;
			case "5":
				System.out.println("라이트 키위 라임 블렌디드 선택됨");
				Product x4 = new Product("라이트 키위 라임 블렌디드",4500);
				Kiosk.basket.add(x4);
				break;
			case "x":
				System.out.println("이전 메뉴 이동");
				break yy;
			}
		}
	}
}
