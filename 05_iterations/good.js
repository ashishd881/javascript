const map= new Map()
map.set("IN","India")
map.set("USA","United states of America")
map.set("Fr","France")
console.log(map);

for(const key in map){
    console.log(key);
}