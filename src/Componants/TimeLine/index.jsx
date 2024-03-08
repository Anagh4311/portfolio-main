import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import CreateIcon from '@mui/icons-material/Create';
import './style.css'
import { useEffect, useState } from 'react';

export default function TimeLine() {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    console.log(innerWidth);

    const alignTimeLine = innerWidth > 800 ? {} : {
        [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <div className='timeline-container'>
            <Timeline position={`${innerWidth > 800 ? 'alternate' : 'right'}`}
                sx={alignTimeLine}
            >


                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="var(--text)"
                    >
                        2020-2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                            <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Engineering (Mech)
                        </Typography>
                        <Typography>JSPM's Imperial College of Engineering
                            and Research,Pune</Typography>
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="var(--text)"
                    >
                        2017 - 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            <EngineeringIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Diploma (Mech)
                        </Typography>
                        <Typography>Government Polytechnic Kolhapur,Kolhapur</Typography>
                    </TimelineContent>
                </TimelineItem>



                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="var(--text)"
                    >
                        2016-2017
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="secondary">
                            <CreateIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '50px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            10th
                        </Typography>
                        <Typography>Bharat High School Jeur | Karmala</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}