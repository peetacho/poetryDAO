import React from "react";
import Featherpen from './../../assets/featherpen.png'
import Button from "../../components/Button";

const FounderPage = ({
    ...otherProps
}) => {

    const list_text = [
        <li>Exclusive <b>Whitelist</b> for PoetryDAO Curated & Diary Collections</li>,
        <li><b>DAO Governance rights</b>, via airdrop of <b>$POETRY token</b></li>,
        <li>Access and <b>discounts</b> on PoetryDAO published books & merch</li>,
        <li>Access to <b>members-only</b> Discord channels</li>,
        <li>Access to <b>interactions/seminars</b> with <b>renowned</b> poets</li>,
        <li>IRL PoetryDAO <b>events</b> and exclusive poetry slams</li>,
        <li>Beta Access for Poetry NFT Collection <b>Generation</b> Tool</li>
    ];

    return (
        <div className="text-left text-primary founderborder flex tems-center flex-wrap">
            <div className='flex-auto ml-8'>
                <div>
                    <h1 className="md:text-5xl mt-6 mb-5">Founder's Featherpen (NFT)</h1>
                    <h4 className="md:text-xl my-4">Founder's Featherpen acts as your key to the PoetryDAO ecosystem, providing:</h4>
                </div>
    
                <div>
                    <div>
                        <ul className="list-disc md:text-xl my-1" style={{fontFamily: 'Alegreya'}}>
                            {list_text.map((i) => (
                                <li>{i}</li>
                            ))}
                        </ul>
                        <h6 className="md:text-base my-4">Total Supply: 3,333 Featherpens, Price: 0.1 ETH</h6>
                        <Button source="/Mint" text= "Mint TBA" is_external={false}/>
                    </div>
                </div>
            </div>
            <img src={Featherpen} alt="featherpen" className='flex-auto md:max-w-md lg:max-w-lg'/>
        </div>
    );
};

export default FounderPage;