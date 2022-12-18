

let form2=document.querySelector('#login');
let data=JSON.parse(localStorage.getItem('account'))
form2.addEventListener('submit',function(event){
  event.preventDefault();
  let sign_email=document.querySelector(".input-field6").value;
  let sign_pass=document.querySelector(".input-field7").value;

  let arr=[];
  let obj1={sign_email,sign_pass}
  arr.push(obj1)
  for(let i=0;i<data.length;i++){
    if(data[i].email==obj1.sign_email && data[i].pass==obj1.sign_pass){
      alert("Sign in Successful");
    }else{
      alert("Wrong Credentials");

    }
    form2.reset()
  }
})