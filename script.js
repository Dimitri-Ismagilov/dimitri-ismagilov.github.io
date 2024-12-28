function validateForm(){
    let valid = true;

    let email = document.getElementById('email').value;
    let topic = document.getElementById('topic').value;
    let message = document.getElementById('message').value;

    document.getElementById('email-error').style.display = 'none';
    document.getElementById('topic-error').style.display ='none';
    document.getElementById('message-error').style.display = 'none';

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === ''|| !emailPattern.test(email)){
        document.getElementById('email-error').style.display = 'inline';
        valid = false;
    }
    if (topic === ''){
        document.getElementById('topic-error').style.display = 'inline';
        valid = false;
    }
    if (message === ''){
        document.getElementById('message-error').style.display = 'inline';
        valid = false;
    }

    return valid;
}