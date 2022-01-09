import React from "react";
import Card from "../../components/Card";
import { CardInfo } from "../../constants/constants";
import FounderPage from "../FounderPage";

const HomePage = ({
    ...otherProps
}) => {
    return (
        <div>
            {CardInfo.map((i) => (
                <Card {...i}/>
            ))}
            <FounderPage/>
        </div>
    );
};

export default HomePage;