// Animalクラスをインポートしてください
// 他のファイルで定義されているクラスを使用するにはインポートする必要がある。
// 使用するファイルの先頭で「import クラス名 from "./ファイル名";」と記述する。
import Animal from "./animal.js";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    
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