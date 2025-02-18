let newname = "Mohamed";
newname = "Bahir";

console.log(newname)

var midname = "hussain";

var midname = "MBH";

console.log(midname);

const setname = "Dell";

function varScoping(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

varScoping();

function letScoping(){
    let c = 1;
    if(true){
        let c = 2;
        console.log(c);
    }
    console.log(c);
}

letScoping();


function nestedScoping(){
   
    if(true){
        //outer
        var functionVar = 1;
        let blockVar = 2;
        const stname = "MBHM";
        console.log(functionVar);
        console.log(blockVar);
        console.log(stname);
        if(true){
            console.log(functionVar);
            console.log(blockVar);
            console.log(stname);
        }
    }
    console.log(functionVar);
            //console.log(blockVar);
            //console.log(stname);
}

nestedScoping();

//using map()
let arr1 = [1, 2, 3];
let mapArray = arr1.map((e) => e*2);
console.log(mapArray);

//using foreach()
let arr2 = [1, 2, 3];
arr2.forEach((e) => {
    console.log(e*2);
});


bankname = "ISD bank";
let bankname = "ISDB Bank";

console.log(bankname);

