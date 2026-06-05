// OPEN LETTER BUTTON
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("letterSection").scrollIntoView({
    behavior: "smooth",
    block: "center"
    
  });
});

// HOVER GLOW ON STAT BOXES
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    box.style.background =
      `radial-gradient(circle at ${x}px ${y}px,
      rgba(236,72,153,0.25),
      rgba(255,255,255,0.05))`;
  });
  box.addEventListener("mouseleave", () => {
    box.style.background = "rgba(255,255,255,0.05)";
  });
});

// INTRO FADE OUT after 2.5s
const intro = document.getElementById("intro");
setTimeout(() => {
  intro.style.transition = "opacity 0.8s ease";
  intro.style.opacity    = "0";
  setTimeout(() => {
    intro.style.display = "none";
  }, 800);
}, 2500);

// PASSWORD CHECK
document.getElementById("unlock").onclick = () => {
  const pass    = document.getElementById("pass").value;
  const note    = document.getElementById("note");
  const passMsg = document.getElementById("passMsg");

  if (pass === "1210") {
    note.style.display = "block";
    passMsg.innerText  = "";
    note.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    passMsg.innerText = "Wrong password 😭 try again";
  }
};
