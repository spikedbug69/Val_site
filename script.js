const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const thankYou = document.getElementById("thankYou");
const buttons = document.getElementById("buttons");

// YES → show thank you screen (NO movement, NO text tricks)
yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  buttons.classList.add("hidden");
  thankYou.classList.remove("hidden");
});

// NO → keep hover escape logic
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
