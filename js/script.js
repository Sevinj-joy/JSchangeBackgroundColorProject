function generateRandomColor() {
    var color = "#" + Math.random().toString(16).slice(-3);
    document
      .getElementById("color_box")
      .style.setProperty("background-color", color);
  }