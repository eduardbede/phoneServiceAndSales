
const phones = [];
let users = JSON.parse(localStorage.getItem('users'))
let addPhones = [];


  if(users === null){
    users = []
}  

const menu = document.querySelector("#menu-button");
const menuToggle = document.querySelector(".menu-toggle");

//functie sa verifice daca latimea este mai mica de 768px
function checkMediaQuery(){
    if (window.innerWidth > 768) {
             document.querySelector(".menu-toggle").style.display = "flex";
    }  else {
        document.querySelector(".menu-toggle").style.display = "none";
    } 
    }
  
  window.addEventListener('resize', checkMediaQuery);


  ///functii jQuerry

  //funtie cand apasam butonul Menu din navbar sa coboare smooth meniul
$(menu).click(function() {
    $(menuToggle).slideToggle(100, function() {
});
});



//functie cand dam scroll si este meniul deschis, sa se inchida
$(window).scroll(function() {
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
     }
 });

//cand apasam pe div si meniul este deschis, sa se inchida
$('.sections').click(function(e){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);

    }
});
//cand apasam pe phonePage sa se duca meliul in sus
$('.phonePage').click(function(e){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);

    }
});
//cand apasam pe account sa se duca meliul in sus
$('.accountPage').click(function(e){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);

    }
});
//cand apasam pe ABOUT US sa se duca meliul in sus
$('.aboutUs').click(function(e){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);

    }
});

//cand apasam pe "go Down element" sa ne duca la el
$(".infoDiv").click(function() {
    $('html,body').animate({
        scrollTop: $(".doi").offset().top},
        'slow');
});


//cand apasam butonul de "Sales" sa seteze display none la celalalte
$("#salesButton").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }
    
    $(".accountPage").hide();
    $(".sections").hide();
    $(".shopDiv").hide(); 
    $(".aboutUs").hide();
    $(".phonePage").fadeIn(300);

  });

 //cand apasam butonul de "Account" sa seteze display none celoralate categorii
 $("#accountButton").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }

    afterLogIn();
    if(users.map(e =>{return e.login}).indexOf(true) !== -1){
         $(".checkLogIn").fadeIn(300);
    }else {
        $(".checkLogIn").hide();
    }
    
    $(".sections").hide();
    $(".phonePage").hide();
    $(".shopDiv").hide();
    $(".aboutUs").hide();
    $(".accountPage").fadeIn(300);

  });

  //cand apasam butonul de "Shopping" sa seteze display none celoralate categorii
 $("#shoppingButton").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }

    $(".sections").hide();
    $(".phonePage").hide();
    $(".accountPage").hide();
    $(".aboutUs").hide();
    $(".shopDiv").fadeIn(300)

  });


  //cand apasam butonul "about us"
  $("#aboutUsButton").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }

    $(".sections").hide();
    $(".phonePage").hide();
    $(".accountPage").hide();
    $(".shopDiv").hide();
    $(".aboutUs").fadeIn(300)
    
  });


   //cand apasam butonul "HOME" title
   $("#homeButton").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }

    $(".aboutUs").hide();
    $(".phonePage").hide();
    $(".accountPage").hide();
    $(".shopDiv").hide();
    $(".sections").fadeIn(0)
    
  });



 

//functie care sa se apeleze dupa ce dam logIn
  function afterLogIn(){
    
    const afterLoginMessage = document.querySelector('.afterLoginMessage');
    const signOutButton = document.querySelector('.signOutButton');
    /* const accountStatus = document.querySelector('.accountStatus'); */
    const shoppingCount = document.querySelector('#shoppingCount');
    const totalDisplay = document.querySelector('.totalDisplay');

    if(users.map(e =>{return e.login}).indexOf(true) !== -1){
        $(".logInSignUp").hide()

        console.log(users[users.map(e =>{return e.login}).indexOf(true)].email)
        $(".sections").hide();
        $(".phonePage").hide(); 
        $(".logInForm").hide();
        $(".checkLogIn").fadeIn(300);
        afterLoginMessage.innerHTML = `Welcome ${users[users.map(e =>{return e.login}).indexOf(true)].firstName}
                                                 ${users[users.map(e =>{return e.login}).indexOf(true)].lastName}!`;
    }
    
    signOutButton.addEventListener("click", ()=>{
        const shopList = document.querySelectorAll('.shopList');
        if(users.map(e =>{return e.login}).indexOf(true) !== -1){
            users[users.map(e =>{return e.login}).indexOf(true)].login = false;
            localStorage.setItem('users', JSON.stringify(users));
           /*  accountStatus.innerHTML = ''; */
            if(users.map(e =>{return e.login}).indexOf(true) !== -1){
            $(".checkLogIn").fadeIn(300);
        }
        $(".checkLogIn").hide();
        $(".logInForm").fadeIn();
        $(".logInSignUp").fadeIn()
        $(".accountPage").fadeIn(300);
        if(users[users.map(e =>{return e.login}).indexOf(true)]===undefined){
            shoppingCount.innerHTML = 0;
        }
        shopList.forEach(el => el.remove());
        totalDisplay.innerHTML = 0;
        
            
      
        };
    });
    
  };




//cand apasam butonul "here"
function hereButton(){
$("#link").click(function(){
    if ($(window).width() <= 768){
        $(menuToggle).slideUp(200);
    }
   /*  document.querySelector('.accountStatus').innerHTML = ""; */
    
    if(document.querySelector(".logInForm").style.display !== "none"){
        document.querySelector(".paraLogin").innerHTML = "Sign Up"
        document.querySelector(".signInPara1").innerHTML = "Already have an account? Click "
        document.querySelector(".signInPara2").innerHTML = " to Log In!"
    }
    else{
        document.querySelector(".paraLogin").innerHTML = "Log In"
        document.querySelector(".signInPara1").innerHTML = "Don't have an accont? Click "
        document.querySelector(".signInPara2").innerHTML = " to create one!"
    }
    $(".logInForm").toggle(200);
    $("#signInForm").toggle(200);
});

}
hereButton()


document.querySelector("#submitButtonSignIn").addEventListener("click", function(event){
    event.preventDefault()
  });
  document.querySelector("#submitButtonLogin").addEventListener("click", function(event){
    event.preventDefault()
  });


//functie de setare display none
function displayOnLoad(){
    const displayLista = document.querySelector(".menu-toggle");
    if (window.innerWidth <= 768){
    displayLista.style.display = "none";
        }
    }

window.onload = displayOnLoad();


//functie afisare brand telefoane
const brands =() =>{
    const phoneBrands = document.querySelector(".phoneBrands");
 fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then(res => {
           return res.json()
        })
        .then(data =>{
            phones.push(data.data[5], data.data[71], data.data[72], data.data[39], data.data[87], data.data[113])
            addTo();
            phones.forEach(el =>{
                const div = document.createElement("div");
                div.innerHTML = `<img src="${el.img}" height="50px"> 
                                <p>${JSON.stringify(el.brand_name).replaceAll('"', "")}</p>`
                div.className = "phoneBrandsGrid";
                phoneBrands.append(div);
            }) 
            divClick();
        })
       
    }


    //functie care ne afiseaza telefoanele
    function divClick(){
        const phoneBrandsGrid = document.querySelectorAll(".phoneBrandsGrid");
        const phoneDivs = document.querySelector(".phoneDivs");
        phoneBrandsGrid.forEach((el, index)=>{
            el.addEventListener("click", ()=>{
                const phoneGrid = document.querySelectorAll(".phoneGrid");
                 if(phoneGrid.length !== 0){
                    phoneGrid.forEach(el => el.remove());
                 }
                fetch(phones[index].detail)
                .then(res => {
                   return res.json();
                })
                .then(data =>{
                    
                    //dam push la telefoane intr-un array;
                    addPhones = [];
                    addPhones.push(data.data.phones);

                    data.data.phones.forEach(el=>{
                         let div = document.createElement("div");
                        div.innerHTML = `<p>${JSON.stringify(el.phone_name).replaceAll('"', "")}</p>
                                        <img src="${el.image}">
                                        <p>Price: <div class="priceDiv"><div class="phonePrice">${randomPrice()}</div><p>$</p></div></p>
                                        <button class="shoppingButton">Add to cart</button>`
                        div.className = "phoneGrid"
                        phoneDivs.append(div);
                })
                //sa ne duca la primul element creat
                document.getElementById('scrollToMe').scrollIntoView({behavior: 'smooth'});
                addPhonesToShop()
                })
                
            })
        })
    }
brands()

//functie care adauga logo pe fiecare marca
function addTo(){
    phones[0].img = "img/appleLogo.png";
    phones[1].img = 'img/OnePlusLogo.png';
    phones[2].img = 'img/oppoLogo.png';
    phones[3].img = 'img/HuaweiLogo.png';
    phones[4].img = 'img/samsungLogo.png';
    phones[5].img = 'img/Xiaomi-Logo.png';
}

//functie pentru pret random
const randomPrice = ()=>{
    return Math.floor(Math.random() *(2000 - 500 +1)+500)
}


//functie adugare useri din Sign In
const addUsers=()=>{
        //variabile input form
        const firstName = document.querySelector("#firstName");
        const lastName = document.querySelector("#lastName");
        const email = document.querySelector("#email");
        const verifyEmail = document.querySelector("#verifyEmail");
        const password = document.querySelector("#password");
        const verifyPassword = document.querySelector("#verifyPassword");
        const submitButtonSignIn = document.querySelector("#submitButtonSignIn");
        const signInput = document.querySelectorAll(".signInput");

        //variabile erori
        const errorFirstName =  document.querySelector(".errorFirstName");
        const errorLastName = document.querySelector(".errorLastName");
        const errorEmail = document.querySelector(".errorEmail");
        const errorVerifyEmail = document.querySelector(".errorVerifyEmail");
        const errorPassword = document.querySelector(".errorPassword");
        const errorVerifyPassword = document.querySelector(".errorVerifyPassword");

        /* const accountStatus = document.querySelector('.accountStatus'); */
        //emailuri acceptate
        const emailsAccepted = ["@gmail.com", "@yahoo.com", "@outlook.com", "@icloud.com"]


        signInput.forEach(el =>{
            el.addEventListener("click", ()=>{
               /*  accountStatus.innerHTML = "" */
            })
        })

            submitButtonSignIn.addEventListener('click', ()=>{
                //obiect pentru date User
                const inputData = {
                    firstName : "",
                    lastName : "",
                    email : "",
                    verifyEmail : "",
                    password : "",
                    verifyPassword : "",
                    login : false,
                    shoppingCart : []
                }

                //cand inputul este gol, sa faca bordurile rosii
            signInput.forEach((el) =>{
                if(el.value ===""){
                    el.style.borderColor = "red";
                }
            });

            
            //daca inputurile sunt goale, sa afiseze mesaj si sa faca faca scrisul rosu
            if(firstName.value === ""){
                errorFirstName.innerHTML = 'This field is empty!';
                errorFirstName.style.color = "red";
            } 
            if(lastName.value === ""){
                errorLastName.innerHTML = 'This field is empty!';
                errorLastName.style.color = "red";
            } 
            if(email.value === ""){
                errorEmail.innerHTML = 'This field is empty!';
                errorEmail.style.color = "red";
            } 
            if(verifyEmail.value === ""){
                errorVerifyEmail.innerHTML = 'This field is empty!';
                errorVerifyEmail.style.color = "red";
            } 
            if(password.value === ""){
                errorPassword.innerHTML = 'This field is empty!';
                errorPassword.style.color = "red";
            } 
            if(verifyPassword.value === ""){
                errorVerifyPassword.innerHTML = 'This field is empty!';
                errorVerifyPassword.style.color = "red";
            } 


                //cand dam click pe input sa se faca bordurile negre si sa goleasca mesajele de eroare
        function borderEmpty(){
            signInput.forEach((el, index )=>{
                el.addEventListener('change',()=>{
                    if(el.style.borderColor = "red"){
                    el.style.borderColor = "black";
                    }
                    if(index === 0){
                        errorFirstName.innerHTML = ""
                    }
                    if(index === 1){
                        errorLastName.innerHTML = ""
                    }
                    if(index === 2){
                        errorEmail.innerHTML = ""
                    }
                    if(index === 3){
                        errorVerifyEmail.innerHTML = ""
                    }
                    if(index === 4){
                        errorPassword.innerHTML = ""
                    }
                    if(index === 5){
                        errorVerifyPassword.innerHTML = ""
                    }
                })
            })
          }  
          borderEmpty()


          //functie care goleste toate inputurile si aduce la 0 totul pentru o noua inregistrare
function clean(){

    firstName.value ='';
    lastName.value = "";
    email.value = "";
    verifyEmail.value = "";
    password.value = "";
    verifyPassword.value = "";

    errorFirstName.innerHTML = "";
    errorLastName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorVerifyEmail.innerHTML = "";
    errorPassword.innerHTML = "";
    errorVerifyPassword.innerHTML = "";

    signInput.forEach((el) =>{
            el.style.borderColor = "black";
        
    });
}

   console.log(users.map(e =>{ return e.email}).indexOf(email.value))
        
       
           //daca inputurile sunt goale sa nu ne lase sa dam push la obiect
            if(firstName.value === ""){
                
            } else if (lastName.value === ""){
                
            } else if(email.value === ""){
            
            } else if(verifyEmail.value === "" ){
                
            } else if(password.value === "" ){
                
            } else if( verifyPassword.value === ""){
                 
            } else if(emailsAccepted.some(el => email.value.includes(el)) !== true){
                errorEmail.innerHTML = "Incorect email format!"
                errorEmail.style.color = "red";
                email.style.borderColor = "red"

            }else if(users.map(e =>{return e.email}).indexOf(email.value) !== -1){
                
                errorEmail.innerHTML = "E-mail exist!"
                errorEmail.style.color = "red";
                email.style.borderColor = "red";
            } else if(email.value !== verifyEmail.value){
                errorEmail.innerHTML = "E-mail not match!"
                errorEmail.style.color = "red";
                email.style.borderColor = "red";

                errorVerifyEmail.innerHTML = "E-mail not match!";
                errorVerifyEmail.style.color = "red";
                verifyEmail.style.borderColor = "red";
            }
             else if(password.value !== verifyPassword.value){

                errorEmail.innerHTML = ""
                errorEmail.style.color = "black";
                email.style.borderColor = "black"

                password.style.borderColor = "red"
                verifyPassword.style.borderColor ="red"
                errorPassword.innerHTML = 'Password not match!';
                errorPassword.style.color = "red";
                errorVerifyPassword.innerHTML = 'Password not match!';
                errorVerifyPassword.style.color = "red";
            }
            
            else {
               /*  accountStatus.innerHTML = "Account successfully created!"
                accountStatus.style.color = "green"; */


                inputData.firstName = firstName.value;
                inputData.lastName = lastName.value;
                inputData.email = email.value;
                inputData.verifyEmail = verifyEmail.value;
                inputData.password = password.value;
                inputData.verifyPassword = verifyPassword.value;
                users.push(inputData);

                localStorage.setItem('users', JSON.stringify(users));
                alertAddUsers()
                clean()

                ///functie care redirectioneaza catre logIn dupa ce am creat contul
               function changeToLog(){
              /*   document.querySelector('.accountStatus').innerHTML = ""; */
    
                if(document.querySelector(".logInForm").style.display !== "none"){
                    document.querySelector(".paraLogin").innerHTML = "Sign Up"
                    document.querySelector(".signInPara1").innerHTML = "Already have an account? Click "
                    document.querySelector(".signInPara2").innerHTML = " to Log In!"
                }
                else{
                    document.querySelector(".paraLogin").innerHTML = "Log In"
                    document.querySelector(".signInPara1").innerHTML = "Don't have an accont? Click "
                    document.querySelector(".signInPara2").innerHTML = " to create one!"
                }
                $(".logInForm").toggle(200);
                $("#signInForm").toggle(200);
               }
                setTimeout(changeToLog, 1000)
                console.log(users)
            }
                
            })

}
addUsers()


//functie care ne anunta ca ne-am facut contul cu success
function alertAddUsers(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Account created successfully!'
      })
    
    }



function logIn(){
    const emailLogin = document.querySelector('#emailLogin');
    const passwordLogin = document.querySelector('#passwordLogin');
    const loginButton = document.querySelector(".loginButton");
    const loginInput = document.querySelectorAll('.loginInput');

    const errorEmailLogIn = document.querySelector('.errorEmailLogIn');
    const errorPasswordLogIn = document.querySelector('.errorPasswordLogIn');
   /*  const accountStatus = document.querySelector('.accountStatus'); */


    //funtie care aduce totul stock
    function clean(){
        errorEmailLogIn.innerHTML ='';
        errorPasswordLogIn.innerHTML ='';

        loginInput.forEach(el=>{
            el.value = ''
            el.style.borderColor = 'black'
        })

    }


    loginInput.forEach((el, index )=>{
        el.addEventListener("click", ()=>{
            el.style.borderColor ='black';
            if(index == 0){
                errorEmailLogIn.innerHTML ='';
            }
            if(index == 1){
                errorPasswordLogIn.innerHTML ='';
            }
        })
       
    })

    loginButton.addEventListener('click',()=>{
       /*  accountStatus.innerHTML = ''; */
        loginInput.forEach(el =>{
            if(el.value === ''){
                el.style.borderColor = "red";
            }
        })

       if(emailLogin.value === ""){
        errorEmailLogIn.innerHTML = "This field is empty!";
        errorEmailLogIn.style.color = "red";
        
       } 
       if(passwordLogin.value === ""){
        errorPasswordLogIn.innerHTML = "This field is empty!";
        errorPasswordLogIn.style.color = "red";
       }else if(users.map(e =>{ return e.email}).indexOf(emailLogin.value) == -1){
            errorEmailLogIn.innerHTML = "Email don`t exist!"
            errorEmailLogIn.style.color = 'red';
            emailLogin.style.borderColor ="red";

        }else if(users[users.map(e =>{ return e.email}).indexOf(emailLogin.value)].password !== passwordLogin.value){
            console.log(users[users.map(e =>{ return e.email}).indexOf(emailLogin.value)].password)
            errorPasswordLogIn.innerHTML = "Password dosen`t match!"
            errorPasswordLogIn.style.color = 'red';
            passwordLogin.style.borderColor = 'red';
        } else{
            users[users.map(e =>{ return e.email}).indexOf(emailLogin.value)].login = true;

            localStorage.setItem('users', JSON.stringify(users));
            createShop();
            cartNumber();
            totalPrices();
            alertLogIn()
            clean();
            setTimeout(afterLogIn, 500)
          /*   accountStatus.innerHTML = 'Log in successfully';
            accountStatus.style.color = 'green'; */

        }

    })
    
}
logIn();


//functie alerta logIn success
function alertLogIn(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Login successfully'
      });
    }


//functie numar unic
function uid(){
    return Math.floor(new Date().valueOf()* Math.random())
 }



//functie care adauga produsele in cos
function addPhonesToShop(){
    const shoppingButton = document.querySelectorAll('.shoppingButton');
    const phonePrice = document.querySelectorAll('.phonePrice');
    const shoppingCart = document.querySelector('.shoppingCart');
    
    
   
    shoppingButton.forEach((el, index)=>{
        el.addEventListener("click",()=>{
           let uniq = uid()
            if(users.map(e =>{return e.login}).indexOf(true) === -1){
                 console.log("nu exista `true`")  //aici trbuie pusa alerta
                 alertNeedToLogin()
            } else if(users.map(e =>{return e.login}).indexOf(true) !== -1){
                addPhones[0][index].price = parseInt(phonePrice[index].innerHTML);
                addPhones[0][index].id = uniq;
                users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.push(addPhones[0][index])
                localStorage.setItem('users', JSON.stringify(users));
        
                
                    let div = document.createElement('div');
                    div.className = "shopList";
                    div.setAttribute('data-div', `${uniq}`);
                    div.innerHTML = `<div class="shopGrid">
                                              <img src="${addPhones[0][index].image}">
                                                <p>${addPhones[0][index].brand}</p>
                                                <p>${addPhones[0][index].phone_name}</p>
                                            
                                                <div class="pricesDivs">
                                                     <p class="cartPhonePrice">${addPhones[0][index].price}</p><p>$</p>
                                                </div>
                                             
                                            <button class="deleteItem" data-uid="${uniq}" onClick="delAll(this)">X</button>
                                      </div`
                    shoppingCart.appendChild(div);
                    totalPrices()
                    cartNumber()
                }
        })
    })
}
 
//functie care ne anunta ca trebuie sa ne logam
function alertNeedToLogin(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Need to login!'
      })
    
    }



//functie care creaza lista de shop cu elementele fiecaruia
 function createShop(){
    const shoppingCart = document.querySelector('.shoppingCart');
    
    if(users[users.map(e =>{return e.login}).indexOf(true)] === undefined){
        return
    } else{
        
    users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.forEach(el=>{
        let div = document.createElement('div');
        div.className = "shopList";
        div.setAttribute('data-div', `${el.id}`);
        div.innerHTML = `<div class="shopGrid">
                                 <img src="${el.image}">
                                    <p>${el.brand}</p>
                                    <p>${el.phone_name}</p>
                                <div class='pricesDivs'>
                                    <p class="cartPhonePrice">${el.price}</p><p>$</p>
                                </div>
                                <button class="deleteItem" data-uid="${el.id}" onClick="delAll(this)">X</button>
                          </div`
        shoppingCart.appendChild(div)
        
    })
   }
} 

createShop()



//functie care sterge produsele din cos
function delAll(data){
    let dataAttr = parseInt(data.getAttribute('data-uid'));
    const del = document.querySelectorAll(`[data-div='${dataAttr}']`);
    del[0].remove();
    console.log(dataAttr)
    let delPhone = users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.map(el =>{return el.id}).indexOf(dataAttr);
    users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.splice(delPhone, 1);
    localStorage.setItem('users', JSON.stringify(users));
    cartNumber()
    totalPrices()
}

//fuctie care updateaza cate produse avem in cos
function cartNumber(){
    const shoppingCount = document.querySelector('#shoppingCount');
    if(users[users.map(e =>{return e.login}).indexOf(true)] === undefined){
        return
    }
    shoppingCount.innerHTML = users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.length;
}
cartNumber()



//functie care sa calculeze pretul total al produselor
function totalPrices(){
    const totalDisplay = document.querySelector('.totalDisplay');
    if(users[users.map(e =>{return e.login}).indexOf(true)] === undefined){
        return
    }
    const total = users[users.map(e =>{return e.login}).indexOf(true)].shoppingCart.map(el =>{return el.price}).reduce((a,b) => a+b,0);
    totalDisplay.innerHTML = total + "$";
}
totalPrices();

//afisare ablutUs
const date = new Date();
let year = date.getFullYear();
const an = (document.getElementById("an").textContent = year + " @eduardbede ");