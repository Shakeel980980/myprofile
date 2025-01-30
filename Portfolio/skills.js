let skills = [
  {
    id: "001",
    skillLogo: `<i class="fa-brands fa-html5"></i>`,
    skillName: "HTML",
    skillDisc: "HTml is a backbone of Web Development",
    skillPer: "99%",
  },
  {
    id: "002",
    skillLogo: `<i class="fa-brands fa-css3-alt"></i>`,
    skillName: "CSS",
    skillDisc: "CSS make attrective of Websites",
    skillPer: "99%",
  },
  {
    id: "003",
    skillLogo: `<i class="fa-brands fa-bootstrap"></i>`,
    skillName: "BOOTSTRAP",
    skillDisc: "Bootstap make our work eaiser",
    skillPer: "99%",
  },
  {
    id: "004",
    skillLogo: `<i class="fa-solid fa-t"></i>`,
    skillName: "Tailwind CSS",
    skillDisc: "Tailwind addition in desigine of websites",
    skillPer: "98%",
  },
  {
    id: "005",
    skillLogo: `<i class="fa-brands fa-js"></i>`,
    skillName: "JAVASCRIPT",
    skillDisc: "Javascript provide motions in websites",
    skillPer: "90%",
  },
  {
    id: "006",
    skillLogo: `<i class="fa-brands fa-react"></i>`,
    skillName: "REACT JS",
    skillDisc: "React Js is a framework of javascript",
    skillPer: "90%",
  },
];

function display() {
  let newhtml = "";
  let cards = document.querySelector(".cards");
  for (let i = 0; i <= skills.length; i++) {
    newhtml += `
    <div class="card-container">
    <div class="card">
    <div class="card-logo">${skills[i].skillLogo}</div>
      <div class="card-body">
        <h4 class="card-title">${skills[i].skillName}</h4>
        <p class="card-text">${skills[i].skillDisc}</p>
        </div>
        <div class="container-skill">
          <div class="skills html">${skills[i].skillPer}</div>
          </div>
        <br />
        <p>
          <a href="learnmore.html"
            ><button class="about-button">Learn More</button></a
          >
        </p>
      </div>
    </div>`;
    cards.innerHTML = newhtml;
  }
}
display();
