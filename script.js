const projects = {
  devata: [
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2"
  ],

  memories: [
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2",
    "https://ik.imagekit.io/Realice/Cover/2"
  ]
};

function loadProject(name) {
  const thumbs = document.getElementById("thumbContainer");
  const main = document.getElementById("mainPreview");

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