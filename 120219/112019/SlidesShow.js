// JavaScript Document

//all variables are declared here 
//To declare a variable we use a reserve called "var", the name of the variable is called slideIndex, when you name variables,only use alpha, numeric and under score " _ " , cannot start with a numeric value. 
//Identifiers includes: variables, constants and functions.
//In programming, the equal sign , " = ", means right equals the left side. 
//Global Area 
var slideIndex = 0;
showSlides(); // call showslide method or function 
function showSlides()
{
    //declare all variables up front 
    var i;
    
    //get the array of divs' with classname image - slidefade
    var slides = document.getElementByClassName("image-sliderfade"); 
    
    //get the array of divs' with classname dot
    var dots = document.getElementsByClassName("dot");
    
    // initialized variable i to 0, put 0 < 13 =, get bool outcome of true, enter the block of code {}, come out and update with i++, mean i = i + 1
    //i is the Loop Control Variable (LCV)
    //All arrays by definition starts out at zero 
    // Why do we use a for loop? Go through each elements, cannot process all arrary at one time. 
    
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    //increase by 1, Global variable 
    slideIndex++; // means slideIndex = slideIndex + 1; 
    
    //check for boundary 
    /*Three type of structures:
    1. Sequence - are if, if/else statement
    
    2. Selection - case-switch statements
    
    3. Repetition- while loops, do-while loops, for loops to process (read and write) tp an array
    */
    
    if(slideIndex > slides.length)
    {
        slideIndex=1;
    }
    //------------------------advance the slide to the next slide -----------------------------------
    for(i = 0; i< dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display ="block";
    dots[slideIndex - 1].className += " active";// i ++ means i = i +1, i +=, means i = i + i
    //change image every 2 seconds
    setTimeout(showSlides, 2000);
}
