import "./Schedules.scss";
import SoonEnd from "./components/SoonEnd/SoonEnd";
import AppHead from "../../componets/AppHead";
import ScheduleList from "./components/ScheduleList";
import FlyButton from "../../componets/FlyButton";

export default function Schedules() {
    return (
        <div className="Schedules">
            <AppHead title={"Прием лекарст"} big={true} />
            <div className="Schedules__schedule">
                <ScheduleList/>
            </div>
            <SoonEnd/>
            <FlyButton title={"Добавить лекарсво"} href={"/schedule/add"} />
        </div>
    )
}