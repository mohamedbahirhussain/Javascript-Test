
function outerFunction(){
    let OFun = 'Hi';
    console.log(OFun);


    function innerFunction(){
        let IFun='bahir';
        console.log(OFun,IFun);
    }
    innerFunction(  );
}

outerFunction();