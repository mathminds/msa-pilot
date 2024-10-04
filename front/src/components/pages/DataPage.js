import React from 'react';
import './DataPage.css'; // Import the CSS file
import Details from './Details';

const DataPage = ({ dataProviders }) => {

    const items = [{'request_msg_id': 'MSG123467',
        'prv_inst_cd': 'INST012',
        'request_stcd': '0',
        'prov_consent_yn': 'Y',
        'request_end_ymd': '20250112',
        'request_ymd': '20240111'},
       {'request_msg_id': 'MSG123468',
        'prv_inst_cd': 'INST013',
        'request_stcd': '0',
        'prov_consent_yn': 'N',
        'request_end_ymd': '20250113',
        'request_ymd': '20240112'},
       {'request_msg_id': 'MSG123469',
        'prv_inst_cd': 'INST014',
        'request_stcd': '0',
        'prov_consent_yn': 'Y',
        'request_end_ymd': '20250114',
        'request_ymd': '20240113'},
       {'request_msg_id': 'MSG123470',
        'prv_inst_cd': 'INST015',
        'request_stcd': '1',
        'prov_consent_yn': 'N',
        'request_end_ymd': '20250115',
        'request_ymd': '20240114',
        'request_revoke_ymd': '20240117'},
       {'request_msg_id': 'MSG123471',
        'prv_inst_cd': 'INST016',
        'request_stcd': '1',
        'prov_consent_yn': 'Y',
        'request_end_ymd': '20250116',
        'request_ymd': '20240115',
        'request_revoke_ymd': '20240117'}]

    const [currentItem, setCurrentItem] = React.useState(null);
    
    

    return (
        <div className="grid-container grid grid-rows-12 grid-cols-12">
            {/* <div className='h-[10%]'>a</div> */}
            {/* <div className="grid-item row-start-1 row-end-5 col-start-2 col-end-3">1</div> */}
            <div className="grid-item row-start-1 row-end-2 col-start-1 col-end-13">서비스 제목</div>
            <div className="grid-item row-start-2 row-end-3 col-start-1 col-end-13">정보수신자 이름</div>
            <div className="grid-item row-start-3 row-end-13 col-start-4 col-end-13">
                {currentItem &&
                <Details serviceName={currentItem.prv_inst_cd} infoReceiver="신한은행" transmissionDate="2024-08-02" requestNumber={currentItem.request_msg_id} />
                }
            </div>
            <div className="grid-item row-start-3 row-end-13 col-start-1 col-end-4">
                <ui>
                    {items.map((item) => {
                        const handleClick = () => {
                            // const item = items.find((item) => item.prv_inst_cd === e.target.value);
                            setCurrentItem(item);
                        }
                        return (
                            <li className="px-2 flex justify-between items-center br h-20">
                                <div className="">{item.prv_inst_cd}</div>
                                <div className="">{item.request_ymd}</div>
                                <button className="btn bg-blue-500" onClick={handleClick}> 철회하기 </button> :
                                                            </li>
                        );
                    })}
                </ui>

            </div>
            
        </div>
    );
};

export default DataPage;
