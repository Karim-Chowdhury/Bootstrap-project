const person = [
    {
      id: 1,
      img: "assets/images/Asia Cup Logo.avif",
      title: "India’s 8th or 7th for Sri Lanka?",
      discription:
      "India will have an eye on extending their record haul while Sri Lanka would want to get level with the asia cup team and...",

      link : "asia.html",
    },
    {
      id: 1,
      img: "assets/images/preview_1.avif",
      title: "Siraj wreaks havoc with maiden fifer in Asia Cup final ",
      discription: "India pacer Mohammad Siraj picked up his maiden ODI five-wicket haul to reduce Sri Lanka to 12 runs for the...",
      link: "trofy.html",
    },

  ];
  
  let personData = "";
  person.forEach(function (item) {
    personData += ` 
    <div class="card m-3 border">
    <img
      src="${item.img}"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        ${item.discription}
      </p>
      <a href="${item.link}" class="btn btn-primary">Read More..</a>
    </div>
  </div> 
  `;
  });
  
  document.getElementById("row").innerHTML = personData;