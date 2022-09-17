import React from 'react';
import CountUp from 'react-countup';
const ProgressBar = ({ percentage }) => {

    const ref = React.useRef(null);
    const percent = (percentage / 100);
    const currentWidth = ref.current ? ref.current.offsetWidth : 0;
    const animatedValue = percent * currentWidth;
    const progressColor = percent >= 0.8 ? "bg-success" : (percent < 0.4 ? "bg-danger" : "bg-warning");
    // React.useEffect(() => {
    //     console.log('width', ref.current ? ref.current.offsetWidth : 0);
    //     const currentWidth = ref.current ? ref.current.offsetWidth : 0;
    //     const animatedValue = (percentage / 100) * currentWidth;
    // }, [ref.current]);
    // const [value, setValue] = React.useState(0);
    //
    // React.useEffect(() => {
    //     setValue(percent * width);
    //     console.log(value);
    // }, []);

    return (
        <>
            {/*<div>*/}
            {/*    /!*<h2>Value is {value}</h2>*!/*/}
            {/*    <div className="progress-div" style={{ width: `${width}px` }}>*/}
            {/*        <div style={{ width: `${value}px` }} className="progress" />*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="progressbar-item">
                <div>
                    <div className="progress-number">
                        <div style={{ left: `${animatedValue}px` }} className={
                            "progress-number-mark " +
                            progressColor
                        }>

                            <span className="percent"><CountUp end={percent * 100} duration={2} delay={7}/>%</span>
                            <div className={
                                "down-arrow " +
                                progressColor
                            }></div>
                        </div>
                    </div>
                    <div className="progress-div" ref={ref}>
                        <div style={{ width: `${animatedValue}px` }} className={
                            "progress " +
                            progressColor
                        }></div>
                    </div>
                </div>
            </div>
        </>
    );


};

export default ProgressBar;