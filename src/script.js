// 定数dog1,2をインポートしてください
// 複数の値をインポートする場合は「{}」で囲む「import {クラス名,クラス名} from "./ファイル名"」と記述する。
// 相対パス(./同じ階層) dataフォルダーのdogDataファイルに移動する
import {dog1,dog2} from "./data/dogData";

// 定数dog1とdog2を出力してください
console.log("---------");
dog1.info();
console.log("---------");
dog2.info();