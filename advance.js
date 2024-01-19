// //   console.log("hello advance ");
// //  advance javascript
// //   es6 = ecmascript 6th 2015
// //    variables = let , const
// //   rest spreat operator
// //   class, object , inheritance, models, promises , async await , fetch ,
// //   destructuring , ajax

// //   let , const
// //   template litral/string
// //   console.log("hello world" + (5 + 5))
// //   console.log(`hello world   ${5 + 5} `)

// //   let k = `hello ${90900} hello again`;
// //   console.log(k)


// //   array destructuring
// //   let ar = ["harry", "elon", "vedic", "rahul"];
// //   var a = "ar[0]";
// //   var b = "ar[1]";
// //   var c = "ar[2]";
// //   var d = "ar[2]";
// //   console.log(a, b, c)
// //   var [a, b, c, d] = ar;
// //   console.log(d);

// //   object destructuring

// //   let age = 33;
// //   let post = "head";
// //   let co = "category";
// //   let g = "obc"
// //   let obj = {
// //       name: "harry",
// //       age,
// //       post,
// //       [co + " of caste"]: g
// //   };
// //   console.log(obj)

// //   rest ,spread operator
// //   function sums(a, b) {
// //       console.log(a, b, arguments)
// //   }
// //   sums("ghelo", 2, 3, 4, 5);

// //   function sum(a, b, ...c) {
// //       let su = 0
// //       for (let i of c) {
// //           su += i;
// //       }
// //       document.write(`${a} from ${b} got ${su / 5}% <br>`)
// //   }
// //   sum("rahul", "bcom", 25, 78, 72, 53, 99)
// //   let marks = [55, 48, 62, 93, 99]
// //   sum("elon", "ccom", ...marks)


// //    rahul , bcom , 59,95,89,98,78
// //   rahul from bcom got 49%
// //   spread operator
// //   var arr = [1, 2, 3];
// //   let ik = [22, ...arr, 44]
// //   console.log(ik)
// //   let ob = { name: "harry", age: 99 };
// //   let g = { ...ob, post: "head" }
// //   console.log(g)
// //   let data = [1, 2, 3, 4, 5];
// //   function add() {
// //       let a = Number(prompt())
// //       data = [...data, a];
// //       console.log(data)
// //   }
// //   [{ name: gagan, age: 88 }, { name: rahul, age: 99 }]

//  let data = [];
//  let subbtn = document.getElementById("subbtn");
//  let update = { isupdate: false, id: "" };
//  let passcheck = true;


//  function submited() {

//      let form = document.getElementsByTagName("form")[0];
//      let email = document.getElementsByTagName("input")[0].value;
//      let password = document.getElementsByTagName("input")[1].value;
//      if (passcheck) {
//           console.log(!email + "" + !password + "" + passcheck);
//           (!email && !password) ? alert("please fill all the inputs ") : !password && alert("please fill the password  inputs ");
//           (password && !email) && alert("please fill the email inputs ")


//      } else if (update.isupdate) {
//          let updateddata = data.map((v, i) => {
//              if (i == update.id) {
//                  return { ...v, email, password }
//              } else {
//                  return v
//              }
//               return i==update.id ? {...v,email,password}: v
//          })
//          console.log(updateddata)
//          data = updateddata
//          subbtn.innerHTML = "submit"
//          update.isupdate = false
//          getdata();

//      } else {
//          let obj = { email: email, password: password }
//          data = [...data, obj];
//          console.log(data);
//      }
//      getdata();
//      form.reset()
//  }
//  getdata()
//  let deleted = (i) => {
//      data.splice(i, 1);
//      getdata()
//  }
//  let updated = (i) => {
//      document.getElementsByTagName("input")[0].value = data[i].email;
//      document.getElementsByTagName("input")[1].value = data[i].password;
//      subbtn.innerHTML = "update";
//      update.isupdate = true;
//      update.id = i
//  }
//  function getdata() {
//      document.getElementById("tabledata").innerHTML =
//          data.map((v, i) => {
//              return `
//          <tr style="border: solid;">
//              <td style="border: solid;">${i + 1}</td>
//              <td style="border: solid;">${v.email}</td>
//              <td style="border: solid;">${v.password}</td>
//              <td style="border: solid;"><button class="btn btn-info" onclick="deleted(${i})"> delete </button></td>
//        <td style="border: solid;"><button class="btn btn-primary" onclick="updated(${i})"> update </button></td>
//          </tr> `
//          }).join("")
//  }
//  function checkpass(l) {
//      let pass = l.value;
//      if (pass.length < 8) {
//          passcheck = true;
//          alert("length must be 8 ")
//      } else {
//          let a, b, c = 0
//          for (let i in pass) {
//              let code = pass.charCodeAt(i);
//              (code >= 65 && code <= 90) ? a = 1 : "";
//              (code >= 97 && code <= 122) ? b = 1 : "";
//              (code >= 46 && code <= 54) ? c = 1 : "";
//          }
//          if (a + b + c == 3) {
//              passcheck = false;
//          } else {
//              passcheck = true;
//              alert("please add strong password")
//          }
//      }


// //  }
// // /*
// // <!doctype html>
// // <html lang="en">

// // <head>
// //     <meta charset="utf-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1">
// //     <title>Bootstrap demo</title>
// //     <link href="https:cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
// //         integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
// //     <style>
// //         * {
// //             scroll-behavior: smooth;
// //         }
// //     </style>
// // </head>

// // <body>
// //     <nav class="navbar navbar-expand-lg bg-body-tertiary"
// //         style="width: 100vw;position: fixed;top: 0px;left: 0px;right: 0px;z-index:5;">
// //         <div class="container-fluid">
// //             <a class="navbar-brand" href="#homepage">Navbar</a>
// //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
// //                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
// //                 aria-label="Toggle navigation">
// //                 <span class="navbar-toggler-icon"></span>
// //             </button>
// //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
// //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //                     <li class="nav-item">
// //                         <a class="nav-link active" aria-current="page" href="#homepage">Home</a>
// //                     </li>
// //                     <li class="nav-item">
// //                         <a class="nav-link" href="#FORM">form</a>
// //                     </li>
// //                     <li class="nav-item dropdown">
// //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
// //                             aria-expanded="false">
// //                             Dropdown
// //                         </a>
// //                         <ul class="dropdown-menu">
// //                             <li><a class="dropdown-item" href="#">Action</a></li>
// //                             <li><a class="dropdown-item" href="#">Another action</a></li>
// //                             <li>
// //                                 <hr class="dropdown-divider">
// //                             </li>
// //                             <li><a class="dropdown-item" href="#">Something else here</a></li>
// //                         </ul>
// //                     </li>
// //                     <li class="nav-item">
// //                         <a class="nav-link  " href="#services" aria-disabled="true">services</a>
// //                     </li>
// //                 </ul>
// //                 <form class="d-flex" role="search">
// //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
// //                     <button class="btn btn-outline-success" type="submit">Search</button>
// //                 </form>
// //             </div>
// //         </div>
// //     </nav>

// //     <section id="homepage" style="height: 100vh;" class="w-100 mx-auto ">
// //         <div id="home" style="height: 100%;border:solid;display: flex; align-items: center;"
// //             class="w-75 bg-primary mx-auto  p-5 border rounded">
// //             <div id="innerhome" style="height: 50%;border:solid;text-align: center; font-size: 35px;font-weight: bold;"
// //                 class="w-50 mx-auto mt-5 p-5 bg-info">
// //                 hello world this is home page
// //             </div>
// //         </div>

// //     </section>


// //     <div id="FORM" class=" w-75 mx-auto p-5 bg-secondary mt-5">
// //         <h1 class="text-center"> Register FORM</h1>
// //         <div class="input-group mb-3">
// //             <span class="input-group-text" id="basic-addon1">@</span>
// //             <input type="text" class="form-control" placeholder="Username" aria-label="Username"
// //                 aria-describedby="basic-addon1">
// //         </div>

// //         <div class="input-group mb-3">
// //             <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username"
// //                 aria-describedby="basic-addon2">
// //             <span class="input-group-text" id="basic-addon2">@example.com</span>
// //         </div>

// //         <div class="mb-3">
// //             <label for="basic-url" class="form-label">Your vanity URL</label>
// //             <div class="input-group">
// //                 <span class="input-group-text" id="basic-addon3">https:example.com/users/</span>
// //                 <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
// //             </div>
// //             <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
// //         </div>

// //         <div class="input-group mb-3">
// //             <span class="input-group-text">$</span>
// //             <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
// //             <span class="input-group-text">.00</span>
// //         </div>

// //         <div class="input-group mb-3">
// //             <input type="text" class="form-control" placeholder="Username" aria-label="Username">
// //             <span class="input-group-text">@</span>
// //             <input type="text" class="form-control" placeholder="Server" aria-label="Server">
// //         </div>

// //         <div class="input-group">
// //             <span class="input-group-text">With textarea</span>
// //             <textarea class="form-control" aria-label="With textarea"></textarea>
// //         </div>
// //     </div>

// //     <section id="services" style="  height: 100vh;width:100vw;" class="mt-5">
// //         <div id="services" style="height: 100%; background-color: grey;   display: flex; align-items: center;"
// //             class="w-75 mx-auto  p-5 border rounded">
// //             <div id="innerservices"
// //                 style="height: 50%;border:solid;text-align: center; font-size: 35px;font-weight: bold;"
// //                 class="w-50 mx-auto mt-5 p-5 bg-info">
// //                 hello world this is services page
// //             </div>
// //         </div>
// //     </section>



// //     <script src="https:cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
// //         integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
// //         crossorigin="anonymous"></script>
// // </body>

// // </html>*/
let home = document.getElementById("homepage")
let services = document.getElementById("services")
let FORM = document.getElementById("FORM")
let homelink = document.getElementById("homelink")
let formlink = document.getElementById("formlink")
let servicelink = document.getElementById("servicelink")
home.style.display = "block"
services.style.display = "none"
FORM.style.display = "none";


formlink.addEventListener("click", () => {
    home.style.display = "none"
    services.style.display = "none"
    FORM.style.display = "block";
})

servicelink.addEventListener("click", () => {
    home.style.display = "none"
    services.style.display = "block"
    FORM.style.display = "none";
})
homelink.addEventListener("click", () => {
    home.style.display = "block"
    services.style.display = "none"
    FORM.style.display = "none";
});


 
 