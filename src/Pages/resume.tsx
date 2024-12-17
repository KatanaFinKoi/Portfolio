const Resume = () => {
    return (
        <div className = "resume-page">
            <div>
                <h3>Resume</h3>
            </div>
            <div>
                <h4>Technical Proficiencies</h4>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>TypeScript</li>
                </ol>
            </div>
            <div>
                <h4>Application Proficiencies</h4>
                <ol>
                    <li>VS Code</li>
                    <li>GitHub</li>
                    <li>Chrome dev tools</li>
                    <li>Insomnia</li>
                    <li>Computer terminal</li>
                    <li>Firebase</li>
                    <li>Image editing software</li>
                </ol>
            </div>
            <div>
                <a className = "resume-link" href="https://docs.google.com/document/d/17l0d5-J0_HpLV334MfrZXLaSIqSylvKw9eUz8eV4-Gw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Link to full resume</a>
            </div>
        </div>
    );
}

export default Resume;