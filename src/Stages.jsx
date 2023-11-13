import stages from './data/stages.json';

export default function Stages() {
    const Stage = ({name, date, link, img, location, color, disabled}) => {
        if (disabled) link = '#';

        return <>
        <a
                className="stage"
                href={link}
                target={disabled ? '' : '_blank'}
                rel="noreferrer"
            >
                <div className="image_stage">
                    <img src={img} alt={name}/>
                </div>
                <div className="stage_content">
                    {date} - {name} - {location}
                </div>
            </a>
        </>
    }

    console.log(stages)
    return <>
        <div className="stages_container">
            <h3>Inscriptions ouvertes</h3>
            <div className="stages">
                {stages.map((stage) => Stage(stage))}
            </div>
        </div>
    </>
}