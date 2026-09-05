function triggerAction(roomName, type) {
    const modal = document.getElementById('actionModal');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');

    if (type === 'AR') {
        title.innerText = `Launching AR: ${roomName}`;
        text.innerText = `Initializing camera tracking and loading 3D avatar characters for the ${roomName}...`;
    } else {
        title.innerText = `Playing Video: ${roomName}`;
        text.innerText = `Streaming high-definition video tour for the ${roomName}...`;
    }

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('actionModal');
    modal.classList.remove('active');
}
