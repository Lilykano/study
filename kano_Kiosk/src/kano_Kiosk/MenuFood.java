package kano_Kiosk;

public class MenuFood {

	public void run() {
		yy:while(true) {
			//메뉴출력
//			public static Product f1 = new Product("베이컨 치즈 토스트",4900);
//			public static Product f2 = new Product("생크림 카스텔라",4500);
//			public static Product f3 = new Product("너티 크루아상",4900);
//			public static Product f4 = new Product("클래식 스콘",3300);
//			public static Product f5 = new Product("블루베리 베이글",3000);
			Product.f1.info();
			Product.f2.info();
			Product.f3.info();
			Product.f4.info();
			Product.f5.info();
			
			System.out.println("[1.베이컨 치즈 토스트/2.생크림 카스텔라/3.너티 크루아상/4.클래식 스콘/5.블루베리 베이글/x.이전메뉴로]");
			System.out.println("");
			Kiosk.cmd = Kiosk.sc.next();
			switch(Kiosk.cmd) {
			case "1":
				System.out.println("베이컨 치즈 토스트 선택됨");			
				Product x = new Product("베이컨 치즈 토스트",4900);
				Kiosk.basket.add(x);
				break;
			case "2":
				System.out.println("생크림 카스텔라 선택됨");			
				Product x1 = new Product("생크림 카스텔라",4500);
				Kiosk.basket.add(x1);
				break;
			case "3":
				System.out.println("너티 크루아상 선택됨");			
				Product x2 = new Product("너티 크루아상",4900);
				Kiosk.basket.add(x2);
				break;
			case "4":
				System.out.println("클래식 스콘 선택됨");			
				Product x3 = new Product("클래식 스콘",3300);
				Kiosk.basket.add(x3);
				break;
			case "5":
				System.out.println("블루베리 베이글 선택됨");			
				Product x4 = new Product("블루베리 베이글",3000);
				Kiosk.basket.add(x4);
				break;
			case "x":
				System.out.println("이전 메뉴 이동");
				break yy;
			}
		}
	}
}