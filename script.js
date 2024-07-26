
var i = 0


function getsubjects(i) {
    var subjects = document.getElementById("subjects")
    subjects = subjects.value
    if (subjects > 15) {
        alert("upto 15 subjects only")
    }
    else if (subjects <= 0) {
        alert("Please input the no.of Subjects")
    }
    else {


        var table = document.getElementById("table")
        document.getElementById("form").style.display = "block"
        document.getElementById("table").innerHTML = ""
        var row = document.createElement("tr")
        var thslnum = document.createElement("th")
        var thcname = document.createElement("th")
        var thcredit = document.createElement("th")
        var thgrade = document.createElement("th")
        thslnum.innerText = "sl.no"
        thcname.innerText = "Course name"
        thcredit.innerText = "Credits"
        thgrade.innerText = "Grade points"
        table.insertAdjacentElement("beforeend", row)
        row.insertAdjacentElement("beforeend", thslnum)
        row.insertAdjacentElement("beforeend", thcname)
        row.insertAdjacentElement("beforeend", thcredit)
        row.insertAdjacentElement("beforeend", thgrade)
        for (i = 1; i <= subjects; i++) {
            var row = document.createElement("tr")
            var slnum = document.createElement("td")
            var cname = document.createElement("td")
            var credit = document.createElement("td")
            var grade = document.createElement("td")
            cname.innerHTML = "<input  placeholder='enter Subjects name' type='text'>"
            credit.innerHTML = "<input id='credit" + i + "'placeholder='credits' type='number'>"
            grade.innerHTML = "<input id='grade" + i + "' placeholder='Grade points' type='number'>"
            slnum.innerText = i
            table.insertAdjacentElement("beforeend", row)
            row.insertAdjacentElement("beforeend", slnum)
            row.insertAdjacentElement("beforeend", cname)
            row.insertAdjacentElement("beforeend", credit)
            row.insertAdjacentElement("beforeend", grade)
        }
        document.getElementById("subjects").value = ""
    }
}
function total() {
    var totalCredit = 0
    var totalGrade = 0
    var cgpa = 0;
    var c = 0
    var g = 0
    for (let i = 1; i <= 15; i++) {
        var sumOfCredit = document.getElementById("credit" + i + "")
        var sumOfGrade = document.getElementById("grade" + i + "")
        c = Number(sumOfCredit.value)
        g = Number(sumOfGrade.value)
        // if (g > 10) {
        //     alert("Grade point must be less than 10")

        // }
        // if (c <= 0 || g <= 0) {
        //     alert("grade and credit not must be 0 And Negative")
        // }

        totalCredit += c
        totalGrade += g * c
        var cgpa = totalGrade / totalCredit
        var total = document.getElementById("total")
        total.style.display = "block"
        total.innerText = "SGPA=" + cgpa

    }

}

var form1 = document.getElementById("enter")
form1.addEventListener('keypress', function (event) {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
        // Prevent the default behavior of the Enter key
        event.preventDefault();
        // // Submit the form
        // form1.getsubjects();
        getsubjects()
    }
});

function refresh() {
    location.reload()
}


