/*
* Primary File for the API
*
*/

// 1. Init SpeechSynthesis API
const synth = window.speechSynthesis;

// 2. Get all the DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

// 3. Init the voices array
let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  //console.log(voices);
  // 3.1 Loop through voices and create an option for each one
  voices.forEach(voice => {
    // 3.1.1 Create option element
    const option = document.createElement('option');
    // 3.1.2 Fill option with voice and language
    option.textContent = voice.name + '(' + voice.lang + ')';
    // 3.1.3 Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    // 3.1.4 Append the option to select
    voiceSelect.appendChild(option);
  });
};
getVoices();

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// 4. Speak
const speak = () => {

  // 4.0 Check if speaking
  if (synth.speaking) {
    console.error('Already speaking');
    return;
  }
  if (textInput.value !== '') {
    // 4.1 Add background animation
    body.style.background = '#141414 url(img/wave.gif)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';
    // 4.2 Get the text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // 4.3 Speak end
    speakText.onend = e => {
      console.log('Done Speaking');
      body.style.background = '#141414';
    }

    // 4.4 Speak Error
    speakText.onerror = e => {
      console.error('Something went wrong');
    }

    // 4.5 Selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

    // 4.6 Loop through voices
    voices.forEach(voice => {
      if (voice.name == selectedVoice) {
        speakText.voice = voice;
      }
    });

    // 4.7 Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    // 4.8 Now Speak
    synth.speak(speakText);
  }

};

// 5. Event Listeners

// 5.1 Text form submition
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.getBoundingClientRect();
});

// 5.2 Rate value change
rate.addEventListener('change', e => rateValue.textContent = rate.value);

// 5.3 Pitch value change
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

// 5.4 Voice select change
voiceSelect.addEventListener('change', e => speak());
