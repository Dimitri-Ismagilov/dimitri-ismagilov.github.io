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

const apiKey = '7012a30eb519089a615d7fc031106462';
const city = 'Stockholm';

async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200){
            const location = `${data.name}, ${data.sys.country}`;
            const temp = `${data.main.temp}°C`;
            const humidity = `${data.main.humidity}%`;

            document.getElementById('location').textContent = location;
            document.getElementById('temp').textContent = temp;
            document.getElementById('humidity').textContent = humidity;
        }
        
        else{
            alert('Could not retrieve weather information');
        }      
    }
    catch(error){
        console.error('Error:', error);
        alert('Something went wrong, retriving weather information');
    }
}

getWeather();