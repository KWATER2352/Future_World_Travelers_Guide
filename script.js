function mySearchBar() {
  var input, filter, ul, li, a , i, value;

  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("autocomplete-list");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  value = a.textContent || a.innerText;
  if (value.toUpperCase().indexOf(filter) > -1) {
  li[i].style.display = "";
  }
  else {
  li[i].style.display = "none";
  }
}
}