import React from 'react';
import './DataEnhancement.css';
// import logo from './assets/logo-2-550x123-1.jpg';
// import deImage from './assets/de.jpg';
import t1 from '../../assets/t1.jpg';
import t2 from '../../assets/t2.jpg';
import t3 from '../../assets/t3.jpg';
// import Navbar from '../../HomePage-components/Navbar/Navbar';

const DataEnhancement =()=>{

    return(
        <div>
            
           
            
            <div>

                
            <div className="imagesection">
                <img src={deImage} alt="Image Description" width="615" height="380" />
                <p className="text-right">To processes used to enhance and improve raw data</p>
                <p className="text-right1">Data enhancement is a general term that refers to processes used to enhance, refine or otherwise improve <br />
                    raw data. Aggregate and arrange critical data and through research complete missing information, <br />
                    enhance competitive analysis.</p>
            </div>

            <div className="threeimagedes">
                <h1>Data Enhancement</h1>
                <h1>Data Verification</h1>
                <h1>Data Extraction</h1>
            </div>

            <div className="threeimage">
                <img src={t1} alt="Image 1" style={{ paddingLeft: '20px' }} />
                <img src={t2} alt="Image 2" style={{ marginLeft: '-37px' }} />
                <img src={t3} alt="Image 3" style={{ marginLeft: '-75px' }} />
            </div>
            </div>

        </div>
    );
};

export default DataEnhancement;