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
        <section className="w-4/5 ">
            <ul className="bg-gray-800 flex flex-wrap p-5 rounded-xl">
                {transcription.map((message, index)=>{
                    return <li key={index}
                    className={message.role === 'user'? "flex flex-col w-full items-end p-3 rounded-xl" : "flex flex-col w-full p-3 rounded-xl"}
                    onClick={()=>matchTime(message.start)}>
                        <p className="font-bold m-2">{message.role}</p>
                        <p className={message.role === 'user'? "max-w-[75%] bg-slate-950 p-3 rounded-xl cursor-pointer hover:scale-[1.025] transition duration-200 ease-in-out" : "max-w-[75%] bg-slate-500 p-3 rounded-xl cursor-pointer hover:scale-[1.025] transition duration-200 ease-in-out"}>{message.content}</p>
                        </li>
                })}
            </ul>
        </section>
    )
}
export default Transcription;