// async await
async function test() {
    console.log("1  inside");

    await setTimeout(() => { 
      test1();
      console.log(" 2  inside");
    }, 3000);
    console.log(" 3  inside");
}
setTimeout(() => {
    console.log("4 outside");
}, 4000);

test();
console.log("5  outside");

function test1() {
    console.log("6 nested");
}



