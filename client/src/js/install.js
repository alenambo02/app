const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Stores the triggered event
    window.deferredPrompt = event;

    // Remove the hidden class from the button by using toggle
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
// this will allow the prompt to show 
    promptEvent.prompt();
// resets deferred prompt variable, this can only be used once
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
//this will clear the prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
