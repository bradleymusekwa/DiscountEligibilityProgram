//create function and add ariables to it
function checkEligibility() {
    let age = document.getElementById("age").value;
    let isMember = document.getElementById("member");
    let name = document.getElementById("name")
    let msg = document.getElementById('msg')
  
    // condition to prevent user from submiting blank form
    if (name.value === '' || Number(age) == '') {
      msg.classList.add('error');
      msg.innerHTML = 'Please fill in all fields.';
      setTimeout(() => msg.remove(), 7000); 

    }
    // add condition 1 and if condition requirments met print result
      else if (Number(age) >= 65) {
      document.getElementById("result").innerHTML = 'You qualify for Senior Citizen Discount';  
      document.getElementById("result").style.color = "green";
    } 
    // add second condition, print if condition requirments met print result
    else if ((Number(age) >= 18) && (isMember.checked)) {
      document.getElementById("result").innerHTML = 'You qualify for Loyalty Discount';
      document.getElementById("result").style.color = "green";
    } 
    // if both first and second conditions nt met print
    else {
      document.getElementById("result").innerHTML = 'You do not qualify for any Discount';
      document.getElementById("result").style.color = "red";
    }
    
  
  }
  
   // prevents constant reloading
  const form = document.getElementById("my_form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  })