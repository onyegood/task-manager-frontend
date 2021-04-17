import React from "react";
import CountCard from "../components/task/CountCard";
import { Task } from "../model/Task";

interface Props {
    tasks: Task[]
}
const CountsSection = ({ tasks }: Props) => (
    <div className="row fadein">
        <div className="col-md-7 mt-4 mx-auto">
            <div className="row">
                <CountCard
                    title="Total Tasks"
                    count={tasks.length}
                    bgColor="bg-primary"
                    icon="ion-md-reorder"
                    iconColor="text-primary" />
                <CountCard
                    title="Completed Tasks"
                    count={tasks.filter(x => x.status).length}
                    bgColor="bg-success"
                    icon="ion-md-checkmark"
                    iconColor="text-success" />
                <CountCard
                    title="Incomplete Tasks"
                    count={tasks.filter(x => !x.status).length}
                    bgColor="bg-danger"
                    icon="ion-ios-clock"
                    iconColor="text-danger" />
            </div>
        </div>
    </div>
)

export default CountsSection;