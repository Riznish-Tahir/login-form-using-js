function goLogin() {
  let n = document.getElementById("namebox");
  let w = document.getElementById("wordbox");
  let line1 = document.getElementById("line1");
  let line2 = document.getElementById("line2");

  n.classList.remove("redline");
  w.classList.remove("redline");
  line1.style.visibility = "hidden";
  line2.style.visibility = "hidden";

  if (n.value === "riz" && w.value === "12345678") {
    Swal.fire({
      icon: "success",
      title: "Yay!",
      text: "login"
    });
    return false; 
  } else {
    Swal.fire({
      icon: "error",
      title: "oops",
      text: "wrong credentials"
    });

    if (n.value !== "riz") {
      n.classList.add("redline");
      line1.style.visibility = "visible";
    }

    if (w.value !== "12345678") {
      w.classList.add("redline");
      line2.style.visibility = "visible";
    }

    return false; 
  }
}
