import React from 'react';
import style from "./team-item.module.css";


interface PropsType {
    name: string
}
const TeamItem = ({name}: PropsType) => {
    return (
        <div className={style.team}>
            <span className={style.team_name}>{name}</span>
        </div>
    );
};

export default TeamItem;