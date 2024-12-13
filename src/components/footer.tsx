const Footer = () => {
    return (
        <footer>
            <img 
            className = "footer-logo"
            src = "src/images/github-logo-6532.png" 
            alt = "github logo"
            onClick={() => window.open('https://github.com/KatanaFinKoi', '_blank')}
            >
            </img>
            
            <img 
            className = "footer-logo"
            src = "src/images/icons8-linkedin-192.png" 
            alt = "linkedin logo"
            onClick={() => window.open('https://www.linkedin.com/in/liam-rayback', '_blank')}
            >
            </img>
        </footer>
    );
}

export default Footer;