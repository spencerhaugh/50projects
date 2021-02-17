const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
// Array of sound names

// Create a button with an event listener forEach sound. Also add functionality to stop previous sound when a new sound is clicked
sounds.forEach(sound => {
    const btn = document.createElement('button'); // create button forEach sound from the array above
    btn.classList.add('btn'); // add class btn to button

    btn.innerText = sound; // label the button

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play(); // .play method can be added to audio elements
    })

    document.getElementById('buttons').appendChild(btn) // append button to the .buttons class in the HTML
})

// Stops and resets sound when a new button is clicked
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}