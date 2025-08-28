package kadai_018;

public abstract class Kato_Chapter18 {
    public String familyName = "加藤"; // 姓
    public String givenName;         // 名
    public String address = "東京都中野区〇×"; // 住所（例）

    // 共通の紹介
    public void commonIntroduce() {
        System.out.println("私の名前は" + familyName + givenName + "です。");
        System.out.println("住所は" + address + "です。");
    }

    // 個別の紹介（抽象メソッド）
    public abstract void eachIntroduce();

    // 紹介を実行する
    public void execIntroduce() {
        commonIntroduce();
        eachIntroduce();
        System.out.println(); // 改行
    }
}
