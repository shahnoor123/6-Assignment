//Chapter21-25
//Task#01
function func1(){
    var firstName = prompt('Enter Your First Name');
    var lastName = prompt('Enter Your Last Name');
    var fullName = firstName+' '+lastName;
    document.write(fullName)
}
//Chapter21-25
//Task#02
function func2(){
    var mobileName = prompt('Enter you Favourite Mobile Phone Model');
    var name= mobileName;
    var wordLen = name.length;
    document.write('My Favourite Phone is :'+' '+name+"<br>")
    document.write('Length of String :'+' '+wordLen)
}
//Chapter21-25
//Task#03
function func3(){
    var a="Pakistani";
    var b=a.indexOf('n')
    document.write(a+"<br>");
    document.write('Index of "n" :'+' '+b)
}
//Chapter21-25
//Task#04
function func4(){
var a="Hello World";
var b=a.lastIndexOf('l')
document.write(a+"<br>");
document.write('Last index of "l" :'+' '+b)
}
//Chapter21-25
//Task#05
function func5(){
    var a="Pakistani";
    var b=a.charAt(3)
    document.write(a+"<br>");
    document.write('Character at index 3 :'+' '+b)
}
//Chapter21-25
//Task#06
function func6(){
    var firstName = prompt('Enter Your First Name');
    var lastName = prompt('Enter Your Last Name');
    var fullName = firstName.concat( lastName)
    alert(fullName) ;
}
//Chapter21-25
//Task#07
function func7(){
    var city="Hyderabad";
    var newCity=city.replace("Hyder", "Islam")
    document.write('City :'+city+"<br>");
    document.write('After Replacement :'+newCity);
}
//Chapter21-25
//Task#08
function func8(){
    var message="Ali and Sami are best friends. They play cricket and football together.";
    var newMessage=message.replace(/and/g,"&")
    document.write("Message :"+' '+message +"<br>");
    document.write("Replaced Message:"+' '+newMessage)
}
//Chapter21-25
//Task#09
function func9(){
    var number="472"
    document.write("Value :"+number+"<br>");
    document.write("Type :"+typeof(number)+"<br>")
    document.write("Value :"+number+"<br>");
    document.write("Type :"+typeof(parseInt(number)))
}
//Chapter21-25
//Task#10
function func10(){
    var a=prompt('Enter any Word in small letters');
    var b=a.toUpperCase(a);
    document.write("User input :"+a+"<br>");
    document.write("Upper Case :"+b);
}
//Chapter21-25
//Task#11
function func11(){
    var a=prompt('Enter any Word');
    var firstchar=a.slice(0,1);
    var otherchar=a.slice(1);
    firstchar=firstchar.toUpperCase();
    otherchar=otherchar.toLowerCase();
document.write("User input :"+a+"<br>");
document.write("Title Case :"+firstchar+otherchar);
}
//Chapter21-25
//Task#12
function func12(){
var num=35.36;
var changeNub=num.toString().replace('.','');
document.write("Number :"+num+"<br>");
document.write("Result :"+changeNub);
}
//Chapter21-25
//Task#13
function func13(){
    var username=prompt('Enter your user Name');
    var name=username;
    if(name.includes("@")){
        prompt('Please Enter a Valid Username','Do not include special character')
    }
    else if(name.includes("!")){
        prompt('Please Enter a Valid Username','Do not include special character')
    }
    else if(name.includes(".")){
        prompt('Please Enter a Valid Username','Do not include special character')
    }
    else if(name.includes(",")){
        prompt('Please Enter a Valid Username','Do not include special character')
    }
}
//Chapter21-25
//Task#14
function func14(){
    var a=["cake","patties","apple pie","chips","cookies"];
var name=prompt("Welcome in Bombay Bakery. What do you want to order sir/mam ?")
var username=name;
if(username=="cake"){
  document.write(username+' '+"is available at index"+' '+a.indexOf("cake")+' '+"in our bakery");
}
else if(username=="patties"){
    document.write(username+' '+"is available at index"+' '+a.indexOf("patties")+' '+"in our bakery");
  }
 else if(username=="apple pie"){
    document.write(username+' '+"is available at index"+' '+a.indexOf("apple pie")+' '+"in our bakery");
  }
  else if(username=="chips"){
    document.write(username+' '+"is available at index"+' '+a.indexOf("chips")+' '+"in our bakery");
  }
  else if(username=="cookies"){
    document.write(username+' '+"is available at index"+' '+a.indexOf("cookies")+' '+"in our bakery");
  }
  else if(username!=a){
      document.write("We are sorry"+' '+username+' '+"is not availabe in our bakery.")

  }
}
//Chapter21-25
//Task#15
//15 not complete
// var pass=prompt('Enter you password')
//Chapter21-25
//Task#16
//16 not complete
// var uni="University of Karachi";
// var b = uni.split(/\n/);
// alert(b)
// // document.write(uni.split('-'));

//Chapter21-25
//Task#17
function func17(){
    var a=prompt('Enter any word')
    var word=a;
    document.write("User input"+' '+word+"<br>")
    document.write("Last character if input is"+' '+a.charAt(word.length-1))
}
//Chapter21-25
//Task#18
function func18(){
    var sentence="the quick brown for jumps over the lazy dog";
var b=sentence.match(/the/g).length
document.write("There are"+' '+b+' '+"Occurencies of the word 'the'")
} 

//Chapter26-30
//Task#01

function func19(){
    var numb=prompt('Enter any positive integer number')
    document.write("number :"+' '+numb+"<br>")
    document.write("round off value"+' '+Math.round(numb)+"<br>")
    document.write("floor value"+' '+Math.floor(numb)+"<br>")
    document.write("ceil value"+' '+Math.ceil(numb)+"<br>")
}
//Chapter26-30
//Task#02
function func20(){
    var numb=prompt('Enter any positive integer number')
    document.write("number :"+' '+numb+"<br>")
    document.write("round off value"+' '+Math.round(numb)+"<br>")
    document.write("floor value"+' '+Math.floor(numb)+"<br>")
    document.write("ceil value"+' '+Math.ceil(numb)+"<br>")
}
//Chapter26-30
//Task#03
function func21(){
    var numb=prompt('Enter any value')
    document.write("The absoulate vaue of"+' '+numb+' '+"is"+' '+Math.abs(numb))
}
//Chapter26-30
//Task#04
function func22(){
    var dice=Math.random()*7;
    document.write("random dice value is :"+' '+parseInt(dice))
}
//Chapter26-30
//Task#05
function func23(){
     var toss=Math.random() *2 ;
     var floor=Math.floor(toss);
     if(floor===0){
        document.write(floor+"<br>")
         document.write("Random coin : Heads")
     }
     else{
         document.write(floor+"<br>")
         document.write("Random coin : Tails")
     }
}
//Chapter26-30
//Task#06
function func24(){
    var ran=Math.random()*100;
    document.write("random number between 1 to 100 :"+' '+parseInt(ran))
}
//Chapter26-30
//Task#07
function func25(){
    var weight=prompt('Enter your weight in Kilograms')
        document.write("The weight of user is"+' '+weight)

}
//Chapter26-30
//Task#08
function func26(){
    var ran=Math.random()*10;
    var floor=Math.floor(ran)
    document.write(floor)
    var input=prompt('Enter any number form 1 to 10')
    myinput=input;
    if(myinput===floor){
        alert('Your input matches random number')
    }
    else{
        alert('It does not match with random number')
    }
}
//Chapter31-34
//Task#01
function func27(){
    var today=new Date;
    document.write(today);
}
//Chapter31-34
//Task#02
function func28(){
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
   var d = new Date();
   document.write("Current month : " + monthNames[d.getMonth()]);
}
//Chapter31-34
//Task#03
function func29(){
    var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
  "Sat"];
    var d= new Date()
    document.write("Today is :"+weekdays[d.getDay()])
    }
//Chapter31-34
//Task#04
    function func30(){
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday"];
        var d= new Date()
        var my=weekdays[d.getDay()]
        if(my=="Saturday"|| my=="Sunday"){
            alert('It is fun day')
        }
        }
//Chapter31-34
//Task#05
        function func31(){
            var today=new Date;
            if(today<16){
                document.write('First Fifteen days of month')
            }
            else{
                document.write('Last days of month')
            }
        }
//Chapter31-34
//Task#06
function func32(){
    var a=new Date()
    var time=a.getTime()
    var timeSec=time/(1000*60*60);
    document.write("Current Date :"+a+"<br>")
    document.write("Elapsed miliseconds since Jan 1,1970 :"+time+"<br>")
    document.write("Elapsed minutes since Jan 1,1970 :"+timeSec)
    
}
//Chapter31-34
//Task#07
        function func33() { 
            var date = new Date(); 
            var hours = date.getHours(); 
            var minutes = date.getMinutes(); 
            var newformat = hours >= 12 ? 'PM' : 'AM';  
            hours = hours % 12;   
            hours = hours ? hours : 12;  
            minutes = minutes < 10 ? '0' + minutes : minutes;  
            document.write( "Its"+' ' + newformat)  
             
        } 
 //Chapter31-34
//Task#08
function func34() { 
}


//Chapter31-34
//Task#09
function func35() {
} 

//Chapter31-34
//Task#10
function func36() { 
}
//Chapter31-34
//Task#11
function func37() {
} 
//Chapter31-34
//Task#12
function func38() { 
    var curr=new Date()
    document.write("Current Date :"+curr+"<br>")
    var backdate=curr.setFullYear(1920)
    document.write(backdate)
}
//Chapter31-34
//Task#13
function func39(){
var age=prompt('Enter your age')
var dob= new Date()
var year=dob.getFullYear();
var myage=year-age;
document.write("Your Birth year is :"+myage)
}



        
    


