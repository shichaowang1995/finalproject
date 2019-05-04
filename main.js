

  var that = this;

function submitAnswer(){
  var checkboxes = document.getElementsByName("challenge");
  var form = document.getElementById('theForm')
  var numberOfCheckedItems = 0;
  for(var i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked)
    numberOfCheckedItems++;
  }
  if(numberOfCheckedItems == 0){
    alert("You must select at least 1 challenge");
    return false;
  }
  if(numberOfCheckedItems > 3){
    alert("You can't select more than 3 challenges");
    return false;
  } else {
    form.submit();
  }
}
