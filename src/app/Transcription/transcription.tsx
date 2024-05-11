'use client'
import { Message } from "../types/types"

interface TranscriptionProps {
    transcription: Message[];
}


const Transcription = ({ transcription }: TranscriptionProps) => {

    const matchTime = (time: number) => {
        const audioElement = document.getElementById('audio') as HTMLAudioElement;
        if (audioElement) {
            audioElement.currentTime = time
        }
    }

    return (
        <section className="flex items-center w-4/5 h-screen">
            <ul className="bg-[#333333] flex flex-wrap max-h-[75%] overflow-auto p-5 rounded-xl">
                {transcription.map((message, index) => {
                    return <li key={index}
                        className={message.role === 'user' ? "flex flex-col w-full items-end p-3 rounded-xl" : "flex flex-col w-full p-3 rounded-xl"}
                        onClick={() => matchTime(message.start)}>
                        <p className="font-bold m-2 capitalize">
                            {message.role}
                        </p>
                        <p className={message.role === 'user' ? "max-w-[75%] bg-[#364649] p-3 rounded-xl cursor-pointer hover:scale-[1.025] transition duration-200 ease-in-out" : "max-w-[75%] bg-[#708F96] p-3 rounded-xl cursor-pointer hover:scale-[1.025] transition duration-200 ease-in-out"}>{message.content}</p>
                    </li>
                })}
            </ul>
        </section>
    )
}
export default Transcription;