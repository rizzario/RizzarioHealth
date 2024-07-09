import {
    Suspense,
    useState,
} from "react";
import { SectionLoad } from "../../../pages/loading/loading";
import { highlightTwoData } from "./HighLight";

export default function HighLightTwo() {
    return(
        <Suspense fallback={<SectionLoad />}>
            <section className="highlight-section" id="highlight_two">
                <div className="sub-header">
                    <h2>Health Tools</h2>
                </div>
                <div className="highlighttwo-container">
                    
                    {highlightTwoData.map((modal, index) => (
                        <div
                            className="card-container"
                            key={index}
                        >
                            <img
                                className={`image-bookmark`}
                                src={modal.image}
                                title={modal.title} 
                            />
                            <a 
                                className=""
                            >
                                {modal.title}
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </Suspense>
    );
};