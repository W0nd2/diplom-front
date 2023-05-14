import React, {useEffect, useState} from 'react';
import TeamItem from "../team-item/team-item";
import style from "./team-list.module.css"
interface requestType {
    id: string,
    name: string
}

const TeamList = () => {
    const apiUrl = "http://localhost:5000"
    const [teamArr, setTeamArr] = useState<requestType[]>([])
    const [offset, setOffset] = useState(0)
    let total = 0;

    async function getTeams(offset: number) {
        const request = await fetch(`${apiUrl}/team?limit=2&offset=${offset}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const response = await request.json();
        total = response.total;
        const teams = response.teams;
        setTeamArr(teams);
        console.log(response.total)
    }

    function prev() {
        if (offset > 0) {
            const newOffset = offset - 2
            setOffset(newOffset);
            getTeams(offset);
            console.log(offset)
        }
    }

    function next() {
        if (offset <= total + 2) {
            const newOffset = offset + 2
            setOffset(newOffset);
            getTeams(offset);
            console.log(offset)
        }
    }

    useEffect(() => {
        getTeams(offset);
    }, [offset])


    const teamItems = teamArr.map((item) =>
        <TeamItem name = {item.name}></TeamItem>
    );

    return (
        <div className={style.body}>
            <div className={style.teams}>
                {teamItems}
            </div>
            <div className={style.buttons}>
                <button className={style.button} onClick={() => prev()}>Назад</button>
                <button className={style.button} onClick={() => next()}>Вперед</button>
            </div>
        </div>
    );
};

export default TeamList;