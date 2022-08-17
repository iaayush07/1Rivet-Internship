//---------get data 

const users =[
    {
        nane : "Ayush",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    },
    {
        nane : "Amresh",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    },
    {
        nane : "Bhargav",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    },
    {
        nane : "Nikunj",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    },
    {
        nane : "Ravi",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    },
    {
        nane : "Samkeet",
        division : "Front end",
        number : 8787878787,
        email : "iaayush1203@gmail.com"
    }
]

//--get data ---
getData(users);

function getData(data) {
    const tblBody = document.querySelector("#myTable");

    data.forEach((user) =>{
        const tblRow = document.createElement('tr');

        for(const item in user){
            const tblColumn = document.createElement('td');
            const value = user[item];
            
            tblColumn.textContent = value;
            tblRow.appendChild(tblColumn);
        }

        tblBody.appendChild(tblRow);
    });
}


//----Filtering-------

const searchFun =() =>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

       if(td){
        let textValue = td.textContent || td.innerHTML;
         
        if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
       }
    }
}

//--- Pop up -----
document.querySelector(".buton").addEventListener("click",function(){
    document.querySelector(".popup").style.display= "flex";
})

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".popup").style.display= "none";
})