import React from "react";
import RejectModal from "../modals/RejectModal";
import Details from "../pages/Details";
import Reject from "../pages/RejectModal/Reject";

export default function ServiceDetailsCard(props) {

    const { serviceData } = props;
    const { id, service_code, title, serviceProvider, data_providers, last_consent_date, third_party_sharing, share_requests } = serviceData;

    const [showRevokeService, setShowRevokeService] = React.useState(false);

    const [currentItem, setCurrentItem] = React.useState(null);

    const items = share_requests;

    const handleRevokeScreen = () => {
        setShowRevokeService(!showRevokeService);
    }

    // const dataProviders=share_requests.json();
    console.log(share_requests);

//     return (
//         <RejectModal service={service_code} serviceProvider={serviceProvider} items={share_requests} />
//     )
// }


    if (serviceData) {
        return (
            <Reject title={title} serviceProvider={serviceProvider} share_requests={share_requests}/>

        )
    }
    return null;
}
