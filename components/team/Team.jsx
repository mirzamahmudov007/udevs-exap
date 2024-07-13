import "./../../styles/sass/team.scss"

const Team = () => {
    return (
        <div id="command" className="team">
            <div className="container">
                <h1 className="team__title">Team</h1>
            <div className="team__wrapper">
            <div className="team__left">
                        <p className="team__left__text">
                            For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.
            </p>
                        <p className="team__left__count">
                            100+
                        </p>
                        <p className="team__left__subtext">
                            Dedicated team
                        </p>
            </div>
            <div className="team__right">
                        <img className="header__right__img" src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg" alt="" />
            </div>
            </div>
            </div>
        </div>
    );
}

export default Team;
