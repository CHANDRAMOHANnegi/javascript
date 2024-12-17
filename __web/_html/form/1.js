function testResults (form) {
    let inputValue = form.inputbox.value;
    let formData = new FormData(form);
    let object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });
    var json = JSON.stringify(object);
    alert(json);
  
    alert(JSON.stringify(Object.fromEntries(formData)));
  }