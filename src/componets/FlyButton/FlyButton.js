import './FlyButton.scss'
import { Link } from "wouter";
import imgPlus from "./static/icon-plus.svg"

export default function FlyButton({ title, href, icon = true}) {
    return (
        <Link href={href} className="FlyButton">
            {icon ? (
                <img src={imgPlus} alt="Добавить"/>
            ) : (<></>)}
            {title}
        </Link>
    )
}