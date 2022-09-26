
const mypromise = new Promise((resolve, reject) => {
    let a = 8; let b = 5;
    if (a === b) console.log("Resolved");
    else console.log("Reject");
});

const promise = async () => {
    try {
        let z = await mypromise;
        console.log(z);
    } catch (error) {
        console.log("Error " + error);
    }
}
promise();