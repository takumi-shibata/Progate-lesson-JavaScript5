// Animalクラスをインポートしてください
// 他のファイルで定義されているクラスを使用するにはインポートする必要がある。
// 使用するファイルの先頭で「import クラス名 from "./ファイル名";」と記述する。 ※ファイル名の拡張子の「.js」は省略することができる
import Animal from "./animal.js";

// chalkパッケージをインポートしてください
// パッケージ（作成された便利なプログラム(今回はchalk：文字色を変える))の導入にもimportを使う
// 「import 定数名 from "パッケージ名"；」
import chalk from "chalk";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    
    // console.logの中身をchalkを使って書き換えてください
    // 文字列を「()」で囲む
    console.log(chalk.yellow(`名前は${this.name}です`));
    
    // console.logの中身をchalkを使って書き換えてください
    console.log(chalk.bgCyan(`犬種は${this.breed}です`));
    
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// Dogクラスをエクスポートしてください
export default Dog;