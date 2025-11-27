  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll(".btn");

  let expression = "";

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const value = btn.textContent;

      if (value === "C") {
        expression = "";
        display.value = "";
      }
      else if (value === "=") {
        try {
          expression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

          expression = eval(expression);
          display.value = expression;
        } catch {
          display.value = "Error";
        }
      }
      else {
        expression += value;
        display.value = expression;
      }
    });
  });
