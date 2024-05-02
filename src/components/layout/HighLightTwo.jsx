import {
    Suspense,
    useState,
} from "react";

export default function HighLightTwo() {
    return(
        <Suspense fallback={<div className="m-auto"><p className="text-7xl">Loading...</p></div>}>
            <section className="highlight-section" id="highlight_two">
                <div className="sub-header">
                    <h2>Health Tools</h2>
                </div>
            </section>
        </Suspense>
    );
};