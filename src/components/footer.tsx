const Footer = () => {
    return (
        <footer>
            <img 
            src = "src/images/github-logo.png" 
            alt = "github logo"
            onClick={() => window.open('https://github.com/KatanaFinKoi', '_blank')}
            >
            </img>
            
            <img 
            src = "src/images/linkedin-logo.webp" 
            alt = "linkedin logo"
            onClick={() => window.open('www.linkedin.com/in/liam-rayback', '_blank')}
            >
            </img>
        </footer>
    );
}

export default Footer;