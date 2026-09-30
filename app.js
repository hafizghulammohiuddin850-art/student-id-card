let products = document.getElementById("products")

let productList = [
  {
    img: "assets/student1.avif",
    name: "Abdul Ali",
    cnic: "42201-1234567-1",
    course: "Web Development",
    idNum: "WMA-001"
  },

  {
    img: "assets/student2.jpg",
    name: "Ayesha Khan",
    cnic: "42201-9876543-2",
    course: "Graphic Design",
    idNum: "GD-002"
  },

  {
    img: "assets/student3.jpg",
    name: "Muhammad Usman",
    cnic: "42201-2468135-3",
    course: "Digital Marketing",
    idNum: "DM-003"
  },

  {
    img: "assets/student4.jpg",
    name: "Hira Fatima",
    cnic: "42201-1357924-4",
    course: "AI & Data Science",
    idNum: "AI-004"
  },

  {
    img: "assets/student5.jpg",
    name: "Samiullah",
    cnic: "42201-1122334-5",
    course: "Computer Science",
    idNum: "CS-005"
  },

  {
    img: "assets/student6.jpg",
    name: "Zainab Noor",
    cnic: "42201-5566778-6",
    course: "Mobile App Development",
    idNum: "MAD-006"
  },

  {
    img: "assets/student7.jpg",
    name: "Hasan Raza",
    cnic: "42201-9988776-7",
    course: "Cloud Computing",
    idNum: "CC-007"
  },

  {
    img: "assets/student8.jpg",
    name: "Sana Javed",
    cnic: "42201-6677889-8",
    course: "Cyber Security",
    idNum: "CY-008"
  }
];






function getAllProducts() {

  for (let value of productList) {
    console.log(value);

    products.innerHTML += `
<div class="card">
<img  class="card-image"src="${value.img}"/>
<h1 class="inner-head">${value.name}</h1>

<p class="para-1">${value.cnic}</p>
<p class="para-1">${value.course}</p>
<p class="para-1">${value.idNum}</p>
</div>
`

  }





}

getAllProducts()

