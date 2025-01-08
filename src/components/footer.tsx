
const Footer = () => {
    return (
        <footer>
            <div className = "footer">
                <div className = "footer-logo-container">
                    <a className = "footer-logo" 
                    onClick={() => window.open('https://github.com/KatanaFinKoi', '_blank')}
                    >
                        <img             
                        src = "/github-logo-6532.png" 
                        alt = "github logo"
                        >
                        </img>
                    </a>
                    
                    <a className = "footer-logo" 
                    onClick={() => window.open('https://www.linkedin.com/in/liam-rayback', '_blank')}
                    >
                        <img 
                        src = "/icons8-linkedin-192.png" 
                        alt = "linkedin logo"
                        >
                        </img>
                    </a>
                </div>
                <p className="footer-text">This portfolio is rendered using React!</p>
            </div>

        </footer>
    );
}

export default Footer;