function getTable()
    {
        var pincodes = document.getElementById("pincodes").value;
        if (((pincodes.length > 6) || ((pincodes.length < 6)))) {
            alert(" Please Enter a valid 6 digits pincode");
        }
        const Http = new XMLHttpRequest();

        fetch("https://api.postalpincode.in/pincode/" + pincodes)
        .then((data)=>{

            //converted to json formate
            return data.json();  
        })
        .then((objectData)=>{
            console.log(objectData[0].PostOffice);
            var postOfficedata  =objectData[0].PostOffice;
            let tableData="";
            postOfficedata.map((values)=>{
                tableData+=`<tr>
                <td scope="col">${values.Name}</td>
                <td scope="col">${values.BranchType}</td>
                <td scope="col">${values.Circle}</td>
                <td scope="col">${values.Division}</td>
                <td scope="col">${values.Pincode}</td>
              </tr>`;
            });
            document.getElementById("table1").innerHTML=tableData;
            document.getElementById("table2").style = "display:inline-table";
            document.getElementById("pinCodeLogo1").style = "opacity:1 ; transition:0.5s";
            document.getElementById("navBar").style = "display:block";
        })
    }
    $(document).ready(function(){
        $(".btn").click(function(){
            var value = $(".form-control").val().toLowerCase();
            $("#table1 tr").filter(function(){
                $(this).toggle($(this).text().toLocaleLowerCase().indexOf(value) > -1)
            });
        });
    });