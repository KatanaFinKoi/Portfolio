const Portfolio = () => {
    return (
        <div className = "portfolio">
            <h3 className = "portfolio-title">Portfolio</h3>
            <div className = "vinyl-vault">
                <h4>Vinyl Vault</h4>
                <div
                    className="portfolio-screenshot"
                    style={{
                        backgroundImage: `url('src/images/Vinyl-Vault-screenshot.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '400px', // Adjust dimensions as needed
                        height: '300px', // Adjust dimensions as needed
                        position: 'relative',
                    }}
                    >
                    <a
                        className="portfolio-links"
                        href="https://github.com/KatanaFinKoi/Vinyl-Vault"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        }}
                    >
                        <button className="github-link">GitHub</button>
                    </a>
                    <a 
                        className="portfolio-links"
                        href="https://vinyl-vault-1.onrender.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        }}
                    >
                        <button className="deployed-link">Deployed</button>
                    </a>
                </div>
            </div>

            <div className = "dead-by-daylight">
            <h4>Dead By Daylight</h4>
                <div
                    className="portfolio-screenshot"
                    style={{
                        backgroundImage: `url('src/images/Dead-by-Daylight-screenshot.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '400px', // Adjust dimensions as needed
                        height: '300px', // Adjust dimensions as needed
                        position: 'relative',
                    }}
                    >
                    <a
                        className="portfolio-links"
                        href="https://github.com/KatanaFinKoi/Dead-by-Daylight-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        }}
                    >
                        <button className="github-link">GitHub</button>
                    </a>
                    <a 
                        className="portfolio-links"
                        href="https://katanafinkoi.github.io/Dead-by-Daylight-project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        }}
                    >
                        <button className="deployed-link">Deployed</button>
                    </a>
                </div>
            </div>
            <div className="mark-warner">
                <h4>Mark Warner Digital Memorial</h4>
                <div
                    className="portfolio-screenshot"
                    style={{
                        backgroundImage: `url('src/images/Mark-Warner-screenshot.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '400px', // Adjust dimensions as needed
                        height: '300px', // Adjust dimensions as needed
                        position: 'relative',
                    }}
                    >
                    <a
                        className="portfolio-links"
                        href="https://github.com/KatanaFinKoi/Mark-Warner-Digital-Memorial"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        }}
                    >
                        <button className="github-link">GitHub</button>
                    </a>
                    <a 
                        className="portfolio-links"
                        href="https://mark-warner-digital-memorial.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        }}
                    >
                        <button className="deployed-link">Deployed</button>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;