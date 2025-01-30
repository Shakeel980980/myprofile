let allInfo = [];

// localStorage.clear();
display();
function display() {
  getValueFromLocalStorage();
  submitVAlue();
  displayRecord();
}
function getValueFromLocalStorage() {
  if (localStorage.getItem("allInfo") != null) {
    allInfo = JSON.parse(localStorage.getItem("allInfo"));
  }
}

console.log(allInfo);

function submitVAlue() {
  let submitBtn = document.querySelector("#submitForm");
  submitBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    let regForm = document.querySelector(".reg-form");
    let allInput = regForm.querySelectorAll(".form-control");
    let data = {};
    for (let el of allInput) {
      let key = el.name;
      data[key] = el.value;
    }
    allInfo.push(data);
    localStorage.setItem("allInfo", JSON.stringify(allInfo));
    console.log(allInfo);
    swal("Good job!", "You Entered Data Succesfully!", "success");
  });
}

function displayRecord() {
  let newHTMLValue = "";
  let rowContainer = document.querySelector(".row");
  for (let i = 0; i <= allInfo.length; i++) {
    newHTMLValue += `
  <li>
    <div class="li-items-contacted">
      <div class="col-md-2">${allInfo[i].name}</div>
      <div class="col-md-3">${allInfo[i].email}</div>
      <div class="col-md-2">${allInfo[i].mobile}</div>
      <div class="col-md-3">${allInfo[i].message}</div>
      <div class="col-md-1">
        <img src="/assests/delete.png" alt="" width="20px" />
      </div>
      <div class="col-md-1">
        <img src="/assests/okay.png" alt="" width="20px" />
      </div>
    </div>
  </li>`;
    rowContainer.innerHTML = newHTMLValue;
  }
}
