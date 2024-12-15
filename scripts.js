
const searchForInput = document.getElementById("search__button");

searchForInput.addEventListener("click", function () {
    const inputValue = document.getElementById("userinput").value;
    alert(`You've searched ${inputValue}`);
    console.log(inputValue);
  });
  
  const searchForBar = document.getElementById("userinput");
  searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const inputForValue = document.getElementById("userinput").value;
      alert(`You've searched ${inputForValue}`);
    }
  });