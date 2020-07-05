const submitForm = () => {        
    let inputs = document.getElementsByClassName("form-inputs");
        
    for(let input of inputs) {
        if(input.value == "") {
            document.getElementById(`${input.name}-error`).style.display = "flex";
        }
    }        
}