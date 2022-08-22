const users = [
    {
        item: "skippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Discarded",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "skippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Want",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "tkippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Waiting",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "rgippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Discarded",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "skippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Cancelled",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "kippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Discarded",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "ippy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Want",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
    {
        item: "ppy peanut Butter 160z",
        date: "07 Nov,8.35pm",
        type: "Want",
        eStCost: "$40.27",
        lost: "18 Aug",
        list: "Grocery",
        auto: "No",
        buynow: "amazon"
    },
]
// --get data ---


setTimeout(() => {
    getData(users);
    function getData(data) {
        const tblBody = document.querySelector("#myTable");
    
        data.forEach((user) => {
            const tblRow = document.createElement('tr');
    
            for (const item in user) {
                const tblColumn = document.createElement('td');
                const value = user[item];
    
                tblColumn.textContent = value;
                tblRow.appendChild(tblColumn);
            }
    
            tblBody.appendChild(tblRow);
        });
    }
},3000);

// ---filtering------
const searchFun = () => {  
    let filter = document.getElementById('search-icon').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    let rec = document.querySelector('.norecord');
    console.log(rec)

    let found = false;
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];

        if (td) {
            let textValue = td.textContent || td.innerHTML;

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
        if (found) {
            rec.classList.add("d-none");
        } else {
            rec.classList.remove("d-none");
        }

    }
}




