import React from "react";
import { useParams } from 'react-router-dom';
import './explore_sp_profile_styles.css'
import ExploreSpPriceList from "./explore_sp_price_list/explore_sp_price_list";
import ExploreSpBio from "./explore_sp_profile_bio/explore_sp_profile_bio";
import ExploreSpInfo from "./explore_sp_profile_info/explore_sp_profile_info";
import ExploreSpReviews from "./explore_sp_reviews/sp_all_reviews";

const ExploreSpProfile = () => {

    const { id } = useParams();

    return(
        <body>
            <ExploreSpInfo id={id}/>
            <div id="service_provider_profile_body_section">
                <ExploreSpBio id={id}/>
                <ExploreSpPriceList id={id}/>
            </div>
            <ExploreSpReviews id={id}/>
        </body>
    )
}

export default ExploreSpProfile