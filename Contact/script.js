function sendMessage(){
    Email.send({
    Host : "smtp.elasticemail.com",
        Username : "valliyappan250573@gmail.com",
        Password : "74CD246F95072EE62A0C19081CFDA8E041F5",
        To : 'valliyappan250573@gmail.com',
        From : "valliyappan250573@gmail.com",
        Subject : "This is the subject",
        Body :document.querySelector('.fname').value + " " + document.querySelector('.lname').value + " " + document.querySelector('.email').value + " "+document.querySelector('#msg').value
    }).then(
      message => {
        if(message=="OK"){
            swal("Good job!", "Message Successfully send to Valliyappan", "success");
        }
        else{
            swal("Try Again", "Some issue occurs", "error");
        }
      }
    );
}