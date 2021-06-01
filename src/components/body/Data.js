import React from 'react'
import './data.css'

function Data({x,dx,isAbsolute,isSmall=false}) {
    
    const absolute = (k) => {
        var ans = ".00";
        while(k>0)
        {
            if(ans === ".00")
            {
                ans = k%1000 + ans ;
                k=Math.floor(k/1000);

            }
            else
            {
                ans = k%100 + "," + ans;
                k=Math.floor(k/100);
            }
        }
        ans = "$" + ans;
        return ans;
    };

    const percent = (k) => {
        var ans = k + "%";
        return ans;
    }

    const incOrDec = (k) => {
        var ans = "%";

        if(k>0)
        {
            ans = "+" + k + ans;
        }
        else
        {
            ans = k + ans;
        }
        return ans;
    };
    return (
        <div className="data">
                <div className={`x ${isSmall === true ? "smal" : "big"}` }><b>{ isAbsolute === true ? absolute(x) : percent(x) } </b></div>
                <div className="dx">{incOrDec(dx)}</div>
        </div>
    )
}

export default Data
