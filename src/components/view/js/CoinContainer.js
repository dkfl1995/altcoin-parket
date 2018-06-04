import React from 'react';

const CoinContainer = (props) => {
    let obj;
    if(props.info && props.info.hasOwnProperty('RAW')){
        obj = props.info.RAW;
    }

    const iterTableHeadElems = function(info){
        if(info){
            var infoNames = ['FROMSYMBOL', 'LASTVOLUME', 'MKTCAP', 'SUPPLY', 'PRICE'];
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
            var coinsInfo = Object.values(info);
            return coinsInfo.map((value, index) => {
                var infoElems = value.USD;
                return (<tr key={index}>
                    <td>{infoElems['FROMSYMBOL']}</td><td>{fixFloat(infoElems['LASTVOLUME'], 2)}</td><td>{fixFloat(infoElems['MKTCAP'], 2)}</td><td>{fixFloat(infoElems['SUPPLY'], 2)}</td><td>{fixFloat(infoElems['PRICE'], 4)+' '+infoElems['TOSYMBOL']}</td>
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
                        obj ? iterTableHeadElems(obj) : null
                    }
                </tr>
            </thead>
            <tbody className="table-body">
                {
                    obj ? iterTable(obj) : null
                }
            </tbody>
        </table>
    );
}

export default CoinContainer; 