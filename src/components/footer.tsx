const Footer = () => {
    return (
        <footer>
            <a className = "footer-logo" 
            onClick={() => window.open('https://github.com/KatanaFinKoi', '_blank')}
            >
                <img             
                src = "src/images/github-logo-6532.png" 
                alt = "github logo"
                >
                </img>
            </a>
            
            <a className = "footer-logo" 
            onClick={() => window.open('https://www.linkedin.com/in/liam-rayback', '_blank')}
            >
                <img 
                src = "src/images/icons8-linkedin-192.png" 
                alt = "linkedin logo"
                >
                </img>
            </a>
        </footer>
    );
}

export default Footer;