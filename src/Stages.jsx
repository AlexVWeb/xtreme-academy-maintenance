import React from 'react';
import stages from './data/stages.json';

export default function Stages() {
    const Stage = ({name, date, link, img, location, color}) => {
        const handleClick = () => {
            window.open(link, '_blank');
        }

        return <>
            <div
                className="stage"
                onClick={handleClick}
            >
                <div className="image_stage">
                    <img src={img} alt={name}/>
                </div>
                <div className="stage_content">
                    {date} - {name} - {location}
                </div>
            </div>
        </>
    }

    console.log(stages)
    return <>
        <div className="stages_container">
            <h3>Inscriptions ouvertes</h3>
            <div className="stages">
                {stages.map((stage, index) => Stage(stage))}
            </div>
        </div>
    </>
}