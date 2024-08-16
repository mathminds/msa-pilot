import React from "react";
import RowsOfSnippets from "./RowsOfSnippets";  
import CardFullWidthTabs from "./CardFullWidthTabs";
import ServiceDetails from "./ServiceDetails";
import ServiceItem from "./serviceItem";

import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/20/solid'


const Service = () => { 

    

    







    return (
        <div>
            <div className="btn btn-xs border-4 mt-2 items-center text-sm text-red-500 h-4 w-8 flex">
                        <ExclamationTriangleIcon aria-hidden="true" className="h-fill text-sm flex-shrink-0 text-red-400" />제3자 제공
                    </div>  
        <ServiceDetails />
        
        <div className="dashboard grid grid-cols-1 grid-rows-12">

                    
                    

        

        </div>
        </div>
    );
};

export default Service;