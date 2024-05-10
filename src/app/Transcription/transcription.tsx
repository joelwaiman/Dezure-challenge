'use client'
import { Message } from "../types/types"

interface TranscriptionProps {
    transcription: Message[];
  }
  

const Transcription = ({transcription}: TranscriptionProps) => {

    const matchTime = (time: number) => {
        const audioElement = document.getElementById('audio') as HTMLAudioElement;
        if(audioElement){
            audioElement.currentTime = time
        }
    }

    return(
        <section className="w-3/5 ">
            <ul className="bg-gray-800 flex flex-wrap p-5 ">
                {transcription.map((message, index)=>{
                    return <li key={index}
                    className={message.role === 'user'? "flex flex-col w-full items-end p-3 rounded-xl" : "flex flex-col w-full p-3 rounded-xl"}
                    onClick={()=>matchTime(message.start)}>
                        <p className="px-3 font-bold">{message.role}</p>
                        <p className={message.role === 'user'? "max-w-[65%] bg-slate-950 p-3 rounded-xl cursor-pointer" : "max-w-[65%] bg-slate-500 p-3 rounded-xl cursor-pointer"}>{message.content}</p>
                        </li>
                })}
            </ul>
        </section>
    )
}
export default Transcription;