import './style.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const Footer = () => {
    return (
        <footer name='Contacts' id="footer">
            <div className="contact-head">
                <h3>Contact</h3>
                <h1 className="center footerHeading">Don't be shy! Hit me up! 👇</h1>
            </div>
            <div className="locationn-mail">
                <div className="box">
                    <a href="https://maps.app.goo.gl/ksgEocoSs84kmDJt6">
                        <div className="circle">
                            <MyLocationIcon />
                        </div>
                    </a>
                    <div className="rows">
                        <h3>Location</h3>
                        <p>Pune, India</p>
                    </div>
                </div>

                <div className="box">
                    <a href="mailto:anaghdeshmukh55@gmail.com">
                        <div className="circle">
                            <MailOutlineIcon />
                        </div>
                    </a>
                    <div className="rows">
                        <h3>Mail</h3>
                        <p>anaghdeshmukh55@gmail.com</p>
                    </div>
                </div>

                <div className="box">
                    <a href="tel:+919545200096">
                        <div className="circle">
                            <LocalPhoneIcon />
                        </div>
                    </a>
                    <div className="rows">
                        <h3>Phone</h3>
                        <p>+91 9545200096</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
