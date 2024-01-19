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


 
 