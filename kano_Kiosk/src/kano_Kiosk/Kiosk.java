package kano_Kiosk;

import java.util.ArrayList;
import java.util.Scanner;

public class Kiosk {
	MenuDrink procMenuDrink = new MenuDrink();
	MenuFood menuDessert = new MenuFood();
	
	public static ArrayList<Product> basket = new ArrayList<Product>();
	public static Scanner sc = new Scanner(System.in);
	public static String cmd;
	public static String cmd1;
	public static String cmd2;
	int a=0;
	//포장 주문 변수에 값을 저장하여 마지막에 값에따른 포장 매장 호출 
	void run() {
		System.out.println("1.포장(할인500원)/2.매장");
		cmd1 = sc.next();
		switch(cmd1) {
			case "1":
				a=1;
				System.out.println("포장이 선택되었습니다.");
				break;
			case "2":
				a=2;
				System.out.println("매장이 선택되었습니다.");
				break;
		}
		
		xx:while(true) {
			System.out.print("명령 입력[1.음료선택/2.디저트선택/e.프로그램종료]:");
			cmd = sc.next();
			switch(cmd) {
			case "1":
				procMenuDrink.run();
				break;
			case "2":
				menuDessert.run();
				break;
			case "e":
				System.out.println("프로그램종료");
				
				int count = basket.size();
				System.out.println("장바구니에 담긴 상품 갯수:"+count);
				
				int sum = 0;
				for(int i=0;i<basket.size();i=i+1) {
					sum = sum + basket.get(i).price;
				}
				if(a==1) {
					sum = sum-500;
					System.out.println("포장을 이용하여 500원 할인되셨습니다");
					System.out.println("계산하실 금액은 :"+sum+"원 입니다.");
				}
				if(a==2) {
					System.out.println("매장");
					System.out.println("계산하실 금액은 :"+sum+"원 입니다.");
				}
				break xx;
			}
		}
		aa:while(true) {
			System.out.println("결제방식을 선택해주세요:");
			System.out.println("1.신용카드/2.Pay/3.기프티콘:");
			cmd2 = sc.next();
			switch(cmd2) {
			case "1":
				System.out.println("신용카드가 선택되었습니다.");
				System.out.println("카드를 카드 투입구에 넣어주세요.");
				System.out.println("결제가 완료되었습니다. 감사합니다.");
				break;
			case "2":
				System.out.println("Pay가 선택되었습니다.");
				System.out.println("휴대폰을 카드투입구에 대주세요.");
				System.out.println("결제가 완료될때까지 휴대폰을 떼지말아주세요.");
				System.out.println("결제가 완료되었습니다. 감사합니다.");
				break;
			case "3":
				System.out.println("기프티콘이 선택되었습니다.");
				System.out.println("기프티콘 바코드 하단의 숫자를 입력해주세요.");
				cmd2 = sc.next();
				System.out.println("입력하신 번호는"+cmd2+"입니다.");
				System.out.println("결제가 완료되었습니다. 감사합니다.");
				break;
			}
			break aa;
		}
	}
}