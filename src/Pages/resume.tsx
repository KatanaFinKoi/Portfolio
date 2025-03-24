const Resume = () => {
    return (
        <div className = "resume-page">
            <div className = "resume-content">
                <h3>Resume</h3>
                <section>
                    <h4>Technical Proficiencies</h4>
                    <ol>
                        <li>React.js</li>
                        <li>React Native</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Tailwind</li>
                        <li>Nativewind</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ol>
                </section>
                <section>
                    <h4>Application Proficiencies</h4>
                    <ol>
                        <li>Render</li>
                        <li>Firebase</li>
                        <li>Xcode</li>
                        <li>Android Studio</li>
                        <li>Web dev tools</li>
                        <li>Insomnia</li>
                        <li>Terminal</li>
                        <li>Image manipulation software</li>
                            <ul>
                                <li>Photoshop</li>
                                <li>GIMP</li>
                            </ul>
                    </ol>
                </section>
            </div>
            <div className = "resume-link">
                <a href="https://docs.google.com/document/d/17l0d5-J0_HpLV334MfrZXLaSIqSylvKw9eUz8eV4-Gw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Link to full resume</a>
            </div>
        </div>
    );
}

export default Resume;