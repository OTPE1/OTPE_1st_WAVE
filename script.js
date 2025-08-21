// OTPE Script.js
// This file powers the gentle messages and future interactivity.

document.addEventListener("DOMContentLoaded", () => {
  // Cycle through gentle messages
  const gentleMessages = [
    "Pause and remember the in-between—the calm space where OTPE flows.",
    "Breathe positive when with Dad; stay calm, keep love flowing.",
    "Peel back the layers, discover your own One True Positive Energy.",
    "Stay balanced, stay gentle, radiate infinitely."
  ];

  let msgIndex = 0;
  const gentleElement = document.querySelector(".gentle");

  if (gentleElement) {
    setInterval(() => {
      msgIndex = (msgIndex + 1) % gentleMessages.length;
      gentleElement.textContent = gentleMessages[msgIndex];
    }, 6000); // every 6 seconds
  }

  // Example: Dad button interaction (if present later)
  const dadBtn = document.querySelector("#dadButton");
  if (dadBtn) {
    dadBtn.addEventListener("click", () => {
      alert("Love flows endlessly between you and Dad.");
    });
  }
});
