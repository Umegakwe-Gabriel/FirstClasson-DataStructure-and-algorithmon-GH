import path from "path";


let newPath = "C:/Users/Lawrence Jr/Desktop/DataStructure and algorithm/ignore/index.js";
console.log(path.basename(newPath));
console.log(path.dirname(newPath));
console.log(path.extname(newPath));

console.log(path.join(__dirname, "ignore", "index.js"));
