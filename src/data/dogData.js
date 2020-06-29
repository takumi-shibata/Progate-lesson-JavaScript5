// 相対パス(ひとつ上の階層に戻る)
import Dog from "../class/dog";
const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

// 定数dog1, dog2をエクスポートしてください(文字列や数値や関数など、どんな値でもエクスポートが可能!)
// 複数の値をエクスポートする場合は、「default」を書かずに、値を{}で囲んでエクスポートする。
export {dog1,dog2};