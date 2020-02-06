// Define the stack
class Stack{
    constructor(){
        this.stack = [];
        this.top = null;
        this.size = 0;
    }

    // Push Method
    Push(){
        // Get Data From Input
        var pushInput = document.getElementById("push-input");
        // Get Result
        var result = document.getElementById("result");
        // Top Button
        var topButton = document.getElementById("top-button2");
        // Pop Button
        var popButton = document.getElementById("pop-button");
        if (pushInput.value.length > 0){

            this.top++;
            this.size++;

            this.stack[this.top] = pushInput.value;

            // Set result
            result.src = this.stack[this.size];
            // topButton.disabled = true;
            popButton.disabled = false;
        }

        // If stack contains two elements enable bottom button
        if (this.size >= 2){
            bottomButton.disabled = false;
        }
    }
    // Pop Method
    Pop(){
        // Get Data From Input
        var pushInput = document.getElementById("push-input");

        // Get Result
        var result = document.getElementById("result");

        // Pop Button
        var popButton = document.getElementById("pop-button");

        if (this.size == 1){
            popButton.disabled = true;
            result.innerHTML = "Stack is empty";
            result.src = "#";
        }else{
            // delete this.stack[this.size];
            this.stack.splice(this.top);
            this.top--;
            this.size--;
            result.src = this.stack[this.size];
            bottomButton.disabled = false;
     
        }

       
        // If stack contains one element disable bottom button
        if (this.size == 1){
            bottomButton.disabled = true;
        }
    }
    // Top Method
    up(){
        // Get Result
        var result = document.getElementById("result");

        // pop button
        var topButton = document.getElementById("top-button2");

        // check if we are not arrive to top one 
        if (this.size == Number(this.stack.length-1)){
            topButton.disabled = true;
            // this.top++;
            this.size++;
            result.src = this.stack[this.size];
            bottomButton.disabled = false;
        }else{
            this.size++;
            result.src = this.stack[this.size];
            bottomButton.disabled = false;     
        }

        if(this.size == Number(this.stack.length-1)){
            topButton.disabled = true;
        }
    }

    // Low Mothod
    down(){
        // Get Result
        var result = document.getElementById("result");

        // top button
        var topButton = document.getElementById("top-button2");

        // bottom button
        var bottomButton = document.getElementById("bottom-button2");

        // check if we are in first value at bottom
        if(this.size == 0){
            // topButton.disabled = true;
            result.src = this.stack[this.size];
        }else{            
            this.size--;
            result.src = this.stack[this.size];
            // topButton.disabled = false;
            // bottomButton.disabled = true;
        }

        // If we get to last one at the bottom
        // if(this.top == 1 || this.size == 1){
        //     bottomButton.disabled = false;
        // }

        if(this.size == 1){
            bottomButton.disabled = true;
        }

      

        // Enable top button when clicks on bottom button
        topButton.disabled = false;
        // bottomButton.disabled = false;
    }
}


let st = new Stack();

// Disable top and bottom buttons and pop button
let topButton = document.getElementById("top-button2");
let bottomButton = document.getElementById("bottom-button2");
let popButton = document.getElementById("pop-button");

// Disable top and bottom and pop buttons by default
topButton.disabled = true;
bottomButton.disabled = true;
popButton.disabled = true;

// Push Function
function Push(){
    st.Push();
}

// Pop Function
function Pop(){
    st.Pop();
}

// Peak function
function up(){
    st.up();
}

// Low Function
function down(){
    st.down();
}