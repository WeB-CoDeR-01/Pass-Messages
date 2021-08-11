function send() {
    var input_mess = document.getElementById('inbox_id').value;
    var input_lenght = document.getElementById('inbox_id').value.length;
    var color = document.getElementById("p2_id");

    if(input_lenght <= 0) {
        document.getElementById('p2_id').innerHTML = 'Nothing Wrotten. Error!';
        document.getElementById('inbox_id').value = '';
        color.style.borderRadius = "25px";
        color.style.background = "linear-gradient(to right, rgba(250, 190, 88, 1), rgb(0,255,255))";
    } else {
        document.getElementById('p2_id').innerHTML = input_mess;
        document.getElementById('inbox_id').value = '';
        color.style.borderRadius = "0px";
        color.style.background = "none";
    }
}
