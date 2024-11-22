import { Image } from "@nextui-org/react";
import "./FooterPage.css";
import "../globals.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterPage: React.FC = () => {
    return (
        <>
            <div className="footer-container poppins">
                <div className="footer-text">
                    <p className="footer-number poppins">4</p>
                    <p className="footer-title poppins">Get in touch   ➚  </p>
                </div>
                <div className="footer-icons-wrapper">
                    <div>
                        <GitHubIcon className="footer-icon" />
                        <LinkedInIcon className="footer-icon" />
                        <InstagramIcon className="footer-icon" />
                    </div>
                    <div className="poppins" style={{
                        fontSize: "1.5rem"
                    }}> <p >Mail me : rachitgaunkar@gmail.com</p></div>

                </div>
            </div>
            <div className="poppins" style={{
                fontSize: "1.5rem"
            }}>
                <p >Mail me : rachitgaunkar@gmail.com</p>

            </div>
        </>

    );
};

export default FooterPage;
