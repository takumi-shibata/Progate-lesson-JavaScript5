// 相対パス(../ひとつ上の階層に戻る)
import Dog from "../class/dog";

// パッケージreadline-syncをインポートしてください
// パッケージ（作成された便利なプログラム(今回はreadlineSync))の導入にもimportを使う
// 「import 定数名 from "プログラム名"；」
import readlineSync from "readline-sync";

const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog(name, age, breed);

// readlineSync.question(文字の場合)を使って書き換えてください
const name = readlineSync.question("名前を入力してください: ");

// readlineSync.questionInt(数字の場合)を使って書き換えてください
const age = readlineSync.questionInt("年齢を入力してください: ");

// readlineSync.questionを使って書き換えてください
const breed = readlineSync.question("犬種を入力してください: ");

// 定数dog1, dog2をエクスポートしてください(文字列や数値や関数など、どんな値でもエクスポートが可能!)
// 複数の値をエクスポートする場合は、「default」を書かずに、値を{}で囲んでエクスポートする。
export {dog1,dog2};