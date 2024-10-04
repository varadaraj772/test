window.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  console.log("Data received from React Native:", data);
  document.getElementById("mobile").innerHTML = data;
});
