import {useEffect, useState} from "react";
import Box from "./Box.tsx";
import "./boxes.css";

const BoxesContainer = () => {
    const boxesCount = 7
    const [activeBoxes, setActiveBoxes] = useState<string[]>([])
    const [remowingBoxes, setRemowingBoxes] = useState<boolean>(false)

    const clickHandler = (className: string) => {
        setActiveBoxes(prev => {
            if (!activeBoxes.includes(className)) {
                return [...prev, className]
            } else {
                return prev
            }
        })
    }

    const removeBox = () => {
        setActiveBoxes(prev => prev.slice(0, -1))
    }

    useEffect(() => {
        if (activeBoxes.length === boxesCount) {
            setRemowingBoxes(true)
            setTimeout(removeBox, 1000)
        }
        if (remowingBoxes)  setTimeout(removeBox, 1000)

        if(activeBoxes.length === 0) setRemowingBoxes(false)

    }, [activeBoxes])

    return (
        <div className="BoxesContainer">
            {Array.from({length: boxesCount }, (_: unknown, i: number) => (
                <Box key={i} onCLick={clickHandler}  active={activeBoxes.includes(`Box${(i+1).toString()}`)} cssClass={`Box${(i+1).toString()}`} />)
            )}
        </div>
    )
}
export default BoxesContainer
