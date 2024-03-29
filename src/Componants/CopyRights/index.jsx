import './style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';


const CopyRights = () => {
    return (
        <div className="copy-right-section">
            <h3>Copyright © 2024. All rights are reserved</h3>

            <div className="share-icon">
                <a target="_blank" href="https://www.linkedin.com/in/anagh-deshmukh-58925b242/">
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a target="_blank" className="" href="https://github.com/Anagh4311/">
                    <IconButton>
                        <GitHubIcon />
                    </IconButton>
                </a>
            </div>
        </div>
    );
}

export default CopyRights;
