guest_list=[];
function submit(){
    var names_of_the_people=[]
    for(var j=1; j<names_of_the_people.length; j++){
        var guest_list= document.getElementById("names_of_the_people").value;
        names_of_the_people.push(guest_list);
    }
    console.log(names_of_the_people);
    document.getElementById("display_name").innerHTML=names_of_the_people
}
function search(){
    var s=document.getElementById("s1").value;
    var found=0
    var j;
    for(j=0; j<names_of_the_people.length; j++){
        if(s==names_of_the_people[j]){
            found=found+1
        }
    }
    document.getElementById("p2").id="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}

function show(){
    names_of_the_people.sort();
    console.log(names_of_the_people);
    document.getElementById("display_name").innerHTML=names_of_the_people;
}