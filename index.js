var emp=[
  {name:"Yash",age:29,empID:"a001",city:"Kolkata"},
  {name:"Amit",age:30,empID:"a002",city:"Delhi"},
  {name:"Rohit",age:35,empID:"a003",city:"Mumbai"},
  {name:"Ajay",age:32,empID:"a004",city:"Kolkata"},
  {name:"Rahul",age:28,empID:"a005",city:"Patna"}
]
//Printing 2 properties using for loop

for(var i=0; i<emp.length; i++)
{
  console.log("Name: "+emp[i].name,"Age: "+emp[i].age);
}

//Printing  properties using forEach loop

emp.forEach(
  function(empID,j)
   {
     console.log(empID,j);
   }
)