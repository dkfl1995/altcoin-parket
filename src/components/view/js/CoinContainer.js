import React from 'react';

const CoinContainer = (props) => {
    let arr, apiDomain;
    if(props.info && typeof props.info === 'object'){
        arr = props.info;
        apiDomain = 'https://cryptocompare.com';
    }

    const iterTableHeadElems = function(info){
        if(info){
            var infoNames = ['', 'Name', 'Price'];
            return infoNames.map((value,index) => {
                return (
                    <td key={index}>
                        {value}
                    </td>
                );
            })
        }
    };    

    const iterTable = function(info){
        if(info){
            console.log(info);
            var coinsInfo = Object.values(info);
            var name, url, price, tsym;
            return coinsInfo.map((value, index) => {
                name = value.CoinInfo.Name;
                url = apiDomain + value.CoinInfo.ImageUrl;
                tsym = value.ConversionInfo.CurrencyTo;
                price = value.ConversionInfo.RAW[0].split('~')[5];
                return (<tr key={index}>
                    <td>{index+1}.</td><td><img src={url} alt="" className="logos" />{name}</td><td>{fixFloat(price, 4)+' '+tsym}</td>
                </tr>);
            });
        }
    };

    function fixFloat(x, n){
        return Number.parseFloat(x).toFixed(n);
    }
    
    return (
        <table className="coin-table">
            <thead className="table-head">
                <tr>
                    {
                        arr ? iterTableHeadElems(arr) : null
                    }
                </tr>
            </thead>
            <tbody className="table-body">
                {
                    arr ? iterTable(arr) : null
                }
            </tbody>
        </table>
    );
}

export default CoinContainer; 