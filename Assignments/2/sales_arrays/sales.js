var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

var quarterlySales = "Sales by Quarter"; //result initialization for quarterly sales
var salesByQuarter = 0; //variable for summing the quarterly sales

for(var i = 0; i < region1.length; i++){
	salesByQuarter += region1[i] + region2[i] + region3[i] + region4[i] + region5[i]; //calculating quarterly sales
	quarterlySales += "\nQ"+(i+1)+": "+salesByQuarter; // adding it to result string
	salesByQuarter = 0; // setting the variable to zero for next quarter
}

alert(quarterlySales); //showing result for quarterly sales

//variables for regional sales
var salesByRegion1 = 0;
var salesByRegion2 = 0;
var salesByRegion3 = 0;
var salesByRegion4 = 0;
var salesByRegion5 = 0;

//loop for calculating regional sales
for(var i = 0; i < region1.length; i++){
	salesByRegion1 += region1[i];
	salesByRegion2 += region2[i];
	salesByRegion3 += region3[i];
	salesByRegion4 += region4[i];
	salesByRegion5 += region5[i];
}

//result string for regional sales
var regionalSales = "Sales by Region\nQ1: "+salesByRegion1+"\nQ2: "+salesByRegion2+"\nQ3: "+salesByRegion3+"\nQ4: "+salesByRegion4+"\nQ5: "+salesByRegion5; 
alert(regionalSales);

//adding all regional sales together and showing the total sales
alert("Total Sales: " + (salesByRegion1+salesByRegion2+salesByRegion3+salesByRegion4+salesByRegion5));