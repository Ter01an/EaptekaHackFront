import "./ScheduleAdd.scss"
import AppHead from "../../componets/AppHead";
import LastList from "./components/LastList/LastList";
import FlyButton from "../../componets/FlyButton";

export default function ScheduleAdd() {
    return (
        <div className="ScheduleAdd">
            <AppHead title="Добавить лекарство" type={"scan"} />
            <div className="ScheduleAdd__last-list">
                <LastList/>
            </div>
            <FlyButton title={"Добавить новое"} href={"/schedule/search"} />
        </div>
    )
}