class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// 「export default クラス名;」とすることで、他のファイルへ渡すことができる。(デフォルトエクスポートは1ファイル1つの値のみ)
// Animalクラスをエクスポートしてください
export default Animal;