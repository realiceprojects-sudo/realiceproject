const projects = {
  devata: [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg"
  ],
  memories: [
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg"
  ]
};

function loadProject(name) {
  const thumbs = document.getElementById("thumbs");
  const main = document.getElementById("mainImage");

  thumbs.innerHTML = "";

  projects[name].forEach(img => {
    const el = document.createElement("img");
    el.src = img;

    el.onclick = () => {
      main.src = img;
    };

    thumbs.appendChild(el);
  });

  main.src = projects[name][0];
}

/* default load */
loadProject("devata");
