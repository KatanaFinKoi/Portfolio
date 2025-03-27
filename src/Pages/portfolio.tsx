import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Portfolio = () => {

    const [activeReadme, setActiveReadme] = useState<string | null>(null);
    const [readmeContent, setReadmeContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const openReadme = (projectName: string) => {
        setActiveReadme(projectName);
        fetchReadme(projectName);
    };
    
    const closeReadme = () => {
        setActiveReadme(null);
        setReadmeContent('');
    };
    
    const fetchReadme = async (projectName: string) => {
        setIsLoading(true);
        try {
            // Define a mapping of project names to README URLs or content paths
            const readmeUrls: Record<string, string> = {
                'vinyl-vault': '/readmes/vinyl-vault.md',
                'task-flow': '/readmes/task-flow.md',
                'dead-by-daylight': '/readmes/dead-by-daylight.md',
                'mark-warner': '/readmes/mark-warner.md',
                'readme-gen': '/readmes/readme-gen.md',
                'vehicle-builder': '/readmes/vehicle-builder.md'
            };
            
            const url = readmeUrls[projectName];
            
            if (url) {
                const response = await fetch(url);
                if (response.ok) {
                    const text = await response.text();
                    setReadmeContent(text);
                } else {
                    setReadmeContent('# Error\nFailed to load README file.');
                }
            } else {
                setReadmeContent('# No README Available\nThis project does not have a README file.');
            }
        } catch (error) {
            console.error('Error fetching README:', error);
            setReadmeContent('# Error\nFailed to load README file.');
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div className = "pages">
            <div className = "portfolio">
                <h3 className = "portfolio-title">Portfolio</h3>
                <div className = "vinyl-vault">
                    <h4>Vinyl Vault</h4>
                    <div
                        className="portfolio-screenshot"
                        style={{
                            backgroundImage: `url('/Vinyl-Vault-screenshot.png')`,
                        }}
                        onClick={() => openReadme('vinyl-vault')}

                    >
                        <div className="portfolio-overlay">
                            <span className="description-text">Click for project description</span>
                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/KatanaFinKoi/Vinyl-Vault"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://vinyl-vault.up.railway.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="deployed-link">Deployed</button>
                        </a>
                    </div>
                </div>

                <div className = "task-flow">
                    <h4>Task Flow</h4>
                    <div
                        className="portfolio-screenshot"
                        style={{
                            backgroundImage: `url('/task-flow.png')`,
                        }}
                        onClick={() => openReadme('task-flow')}
                    >
                        <div className="portfolio-overlay">
                        <span className="description-text">Click for project description</span>                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/anton10mata/TaskFlow"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://taskflow-est2025.up.railway.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
                            backgroundImage: `url('/Dead-by-Daylight-screenshot.png')`,
                        }}
                        onClick={() => openReadme('dead-by-daylight')}
                    >
                        <div className="portfolio-overlay">
                        <span className="description-text">Click for project description</span>                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/KatanaFinKoi/Dead-by-Daylight-project"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://katanafinkoi.github.io/Dead-by-Daylight-project/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
                            backgroundImage: `url('/Mark-Warner-screenshot.png')`,
                        }}
                        onClick={() => openReadme('mark-warner')}
                    >
                        <div className="portfolio-overlay">
                        <span className="description-text">Click for project description</span>                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/KatanaFinKoi/Mark-Warner-Digital-Memorial"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://mark-warner-digital-memorial.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="deployed-link">Deployed</button>
                        </a>
                    </div>
                </div>

                <div className = "ReadMe-Gen">
                    <h4>ReadMe.Gen</h4>
                    <div
                        className="portfolio-screenshot"
                        style={{
                            backgroundImage: `url('/ReadMe.Gen.screenshot.png')`,
                        }}
                        onClick={() => openReadme('readme-gen')}
                    >
                        <div className="portfolio-overlay">
                        <span className="description-text">Click for project description</span>                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/KatanaFinKoi/ReadMe.Generator"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://demoair.wondershare.com/video/share?id=d6a8d070-227b-425a-81c1-cf65e9c81cf2"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="deployed-link">Walkthrough</button>
                        </a>
                    </div>
                </div>

                <div className = "Vehicle-Builder">
                    <h4>Vehicle Builder</h4>
                    <div
                        className="portfolio-screenshot"
                        style={{
                            backgroundImage: `url('/Vehicle-Builder-Screenshot.png')`,
                        }}
                        onClick={() => openReadme('vehicle-builder')}
                    >
                        <div className="portfolio-overlay">
                        <span className="description-text">Click for project description</span>                        </div>
                        <a
                            className="portfolio-links"
                            href="https://github.com/KatanaFinKoi/Vehicle-Builder-test"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="github-link">GitHub</button>
                        </a>
                        <a 
                            className="portfolio-links"
                            href="https://demoair.wondershare.com/dashboard/video/share?id=8bf4a80d-0ceb-40da-a05c-085bb3a584c5"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="deployed-link">Walkthrough</button>
                        </a>
                    </div>
                </div>
            </div>
            {activeReadme && (
                <div className="readme-lightbox-overlay" onClick={closeReadme}>
                    <div className="readme-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeReadme}>×</button>
                        {isLoading ? (
                            <div className="loading">Loading README...</div>
                        ) : (
                            <div className="readme-content">
                                <ReactMarkdown>{readmeContent}</ReactMarkdown>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;