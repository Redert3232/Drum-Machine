import './App.css'
import {Audios} from './types.ts' 

const audios: Audios[]= [
  {
    key: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: '1'
  },
  {
    key: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: '2'
  },
  {
    key: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: '3'
  },
  {
    key: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: '4'
  },
  {
    key: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: '5'
  },
  {
    key: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: '6'
  },
  {
    key: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: '7'
  },
  {
    key: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: '8'
  },
  {
    key: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: '9'
  }

];

interface DrumProps {
  audio: Audios
}


const Drums = ({audio} : DrumProps) => {
  const playAudio = (clip: Audios) => {
    (document.getElementById(clip.key) as HTMLAudioElement).play().catch(console.error);
    document.getElementById('display')!.innerText = clip.description;
  }
  
  return (
    <button id={`drum-${audio.key}`} className='drum-pad' onClick={() => playAudio(audio)} >
      <audio src={audio.src} id={audio.key} className='clip'></audio>
      {audio.key}
    </button>
  )
}


function App() {
  


  const playKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audios.find((clip) => clip.key === e.key.toUpperCase());
    if(!clip) return;


    (document.getElementById(clip.key) as HTMLAudioElement).play().catch(console.error);

    document.getElementById('drum-' + clip.key)?.focus();
    document.getElementById('display')!.innerText = clip.description;
    
  };

  return (
    <>
      <div id='drum-machine'>
        <h1>Project Drum Machine</h1>
        <div id="drum-machine" onKeyDown={playKey}>
         
          {audios.map((el) => (
            <Drums  audio={el} key={el.key}/>
          ))}
          </div>
        <div id="display">

        </div>
      </div>
    </>
  )
}

export default App
