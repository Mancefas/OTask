import './boxes.css'

type Props = {
    cssClass: string
    active?: boolean
    onCLick: (className: string) => void
}

const Box = ({cssClass, active, onCLick}: Props) => {
    return (
        <div onClick={() => onCLick(cssClass)} className={`Box ${cssClass} ${active ? 'Active' : ''}`}></div>
    )
}
export default Box
