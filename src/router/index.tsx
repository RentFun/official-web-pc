import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const _loading = () => {
    return <div style={{  width: '100%',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', }} className={`t-loading-section`}>
        <img style={{width: '200px'}} src={require("./../views/home/images/loading.gif")} alt="load"/>
    </div>
}
const LayoutCom = () => {
    return (
        <Suspense fallback={_loading()}>
            <Router>
                <Routes>
                    {routes.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </Suspense>
    );
};
export default LayoutCom;
