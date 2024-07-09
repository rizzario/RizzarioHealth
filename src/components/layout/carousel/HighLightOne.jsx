import {
    Suspense,
    useState,
} from "react";
import { highlightOneData } from "./HighLight";

export default function HighLightOne() {
    
    const [isHovered, setHovered] = useState(null);

    const handleMouseEnter = (index) => {
        setHovered(index);
    }
    const handleMouseLeave = () => {
        setHovered(null);
    }

    return(
        <Suspense fallback={<div className="m-auto"><p className="text-7xl">Loading...</p></div>}>
            <section className="highlight-section" id="highlight_one">
                <div className="sub-header">
                    <h2>Healthy Life</h2>
                    <a>View All</a>
                </div>
                <div 
                    className="highlight-container">
                    {highlightOneData.map((modal, index) => (
                        <div 
                            className="image-detail-group" 
                            key={index} 
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        >
                            <img
                                className={`image-card ${isHovered === index ? 'zoom':''}`} 
                                src={modal.image} 
                                title={modal.title} 
                            />
                            <div className="image-desc">{modal.description}</div>
                        </div>
                    ))}
                </div>
            </section>
        </Suspense>
    );
};