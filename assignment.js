// common function
function handleBookingClass(booking,isIncrease) {
         const bookingInput = document.getElementById(booking + '-count');
        const bookingCount = parseInt(bookingInput.value);
        let bookingNewCount = bookingCount;
        if (isIncrease ==true) {
            bookingNewCount =bookingCount + 1;      
        }

        if (isIncrease ==false && bookingCount > 0) {
              bookingNewCount =bookingCount - 1;
        }

       bookingInput.value = bookingNewCount;
        let bookingTotal =0;
        if (booking =='firstClass') {
            bookingTotal = bookingNewCount * 150;      
        }

        if (booking =='economy') {
             bookingTotal = bookingNewCount * 100;
        }

         document.getElementById(booking + '-total').innerText = "$"+ bookingTotal;
         calculateTotal();  
}

function calculateTotal() {
    const firstClassCount = getInputValue('firstClass');
    const economyCount  = getInputValue('economy');
    const subTotal  = firstClassCount * 150 + economyCount * 100;
    const tax = subTotal * 0.1;
    const grandTotal = subTotal + tax;
    document.getElementById('subTotal').innerText= "$" + subTotal;
    document.getElementById('tax').innerText= "$" + tax;
    document.getElementById('grandTotal').innerText= "$" + grandTotal;
 
}

function getInputValue(booking) {
     const bookingInput = document.getElementById(booking + '-count');
      const bookingCount = parseInt(bookingInput.value);
      return bookingCount;   
}

// Booking Button javascript
const bookingBtn =document.getElementById("bookingBtn");
bookingBtn.addEventListener("click",function() {
    const bookingArea =document.getElementById("booking-area");
     bookingArea.style.display="none";

     const confirmationArea =document.getElementById("confirmation-text");
     confirmationArea.style.display="block";
    
})

  
/* 
//First Class 

function handleBookingClass(isIncrease) {
         const firstClassInput = document.getElementById("firstClass-count");
        const firstClassCount = parseInt(firstClassInput.value);
        let firstClassNewCount = firstClassCount;
        if (isIncrease ==true) {
            firstClassNewCount =firstClassCount + 1;      
        }

        if (isIncrease ==false && firstClassCount > 0) {

             firstClassNewCount =firstClassCount - 1;
        }

        firstClassInput.value = firstClassNewCount;
         const firstClassTotal = firstClassNewCount * 150;
         document.getElementById("firstClass-total").innerText = "First Class ( $"+ firstClassTotal +")";
    
}

   
// Economy Class 

function handleEconomyClass(isIncrease) {
         const economyInput = document.getElementById("economy-count");
        const economyCount = parseInt(economyInput.value);
        let economyNewCount = economyCount;
        if (isIncrease ==true) {
           economyNewCount = economyCount + 1;         
        }

        if (isIncrease ==false && economyCount > 0 ) {

           economyNewCount = economyCount - 1;
        }

        economyInput.value = economyNewCount;
         const economyTotal = economyNewCount * 100;
         document.getElementById("economy-total").innerText = "Economy ( $"+ economyTotal +")";
    
}

    // First class 
    document.getElementById("firstClass-increase").addEventListener("click", function(){
        const firstClassInput = document.getElementById("firstClass-count");
        
        const firstClassCount = parseInt(firstClassInput.value);
        const firstClassNewCount = firstClassCount + 1;
        firstClassInput.value = firstClassNewCount;
         const firstClassTotal = firstClassNewCount * 150;
         document.getElementById("firstClass-total").innerText = "First Class ( $"+ firstClassTotal +")";
       
    })

    document.getElementById("firstClass-decrease").addEventListener("click", function(){
        const firstClassInput = document.getElementById("firstClass-count");
        
        const firstClassCount = parseInt(firstClassInput.value);
        const firstClassNewCount = firstClassCount - 1;
        firstClassInput.value = firstClassNewCount;
         const firstClassTotal = firstClassNewCount * 150;
         document.getElementById("firstClass-total").innerText = "First Class ( $"+ firstClassTotal +")";
       
    })

    // economy class

       document.getElementById("economy-increase").addEventListener("click", function(){
        const economyInput = document.getElementById("economy-count");
        
        const economyCount = parseInt(economyInput.value);
        const economyNewCount = economyCount + 1;
        economyInput.value = economyNewCount;
         const economyTotal = economyNewCount * 100;
         document.getElementById("economy-total").innerText = "Economy ( $"+ economyTotal +")";
       
    })
    document.getElementById("economy-decrease").addEventListener("click", function(){
        const economyInput = document.getElementById("economy-count");
        
        const economyCount = parseInt(economyInput.value);
        const economyNewCount = economyCount - 1;
        economyInput.value = economyNewCount;
         const economyTotal = economyNewCount * 100;
         document.getElementById("economy-total").innerText = "Economy ( $"+ economyTotal +")";    
    })
*/
