// console.log(process.cwd());
// console.log(__dirname);


console.log(process.argv);


let ans = process.argv.slice(2);
console.log(ans);

for(let item of ans){
    console.log(item)
}