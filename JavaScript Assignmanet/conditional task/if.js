var javascriptmarks = parseInt(prompt("Please enter the JS Marks"));
		var javamarks = parseInt(prompt("Please enter the Java Marks"));
		var dotnetmarks = parseInt(prompt("Please enter the .Net Marks"));

		var total = javascriptmarks+javamarks+dotnetmarks;
		document.write("Total Marks: "+total+"<br/>");

		var average = total/3;
		document.write("Average: "+average+"<br/>");

		if(javascriptmarks>=35 && javamarks>=35 && dotnetmarks>=35)
		{
			document.write("Result:Passed"+"<br/>");
			if(average>=35 && average<60){
				document.write("Grade: C"+"<br/>");
			}else if(average>=60 && average<70){
				document.write("Grade: B"+"<br/>");
			}else{
				document.write("Grade: A"+"<br/>");
			}


		}else{
			document.write("Result:Failed");
		}
