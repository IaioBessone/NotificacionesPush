// Configurar la conexion con webpush
const PUBLIC_VAPID_KEY = 'BP32hRbPlhnU0JSTVGf0IAi7rBekDf8k0zCcRKHgUN72Th0aN_b01IyyJt9ZjUKEXfCuklkK1iD433Neh4-WdrU'

const subscription = async () => {

    // Services Worker
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('New Service Worker');

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    });


    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log('Subscripted');
}

const form = document.querySelector('#myform');
const message = document.querySelector('#message');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/new-message', {
        method: 'POST',
        body: JSON.stringify({
                message: message.value
            }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    form.reset();
})

subscription();