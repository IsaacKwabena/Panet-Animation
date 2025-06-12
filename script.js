document.querySelectorAll('.orbit').forEach((orbit) => {
  orbit.addEventListener('click', () => {
      const currentDuration = orbit.style.animationDuration;
      const newDuration = currentDuration === "10s" ? "5s" : "10s";
      orbit.style.animationDuration = newDuration;
  });
});