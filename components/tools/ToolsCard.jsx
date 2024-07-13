import { useEffect, useState } from "react";
import "./../../styles/sass/toolsCard.scss"
import tools from "./tools.json"

const ToolsCard = ({val}) => {

    const [data , setData] = useState([]);
    const [value , setValue ] = useState(null);
    useEffect(()=>{
        setData(tools.data);
        setValue(val)
    },[val])

    

    return (
        <div className="tools__lists">
        {
            data?.map(item =>{
                if (item.category === value) {
                    return (
                        <div className={ item.category + ' tools__card '}>
                            <img width={'25'} src={item.imgUrl} alt='' />
                            <p>{item.toolsName}</p>
                        </div>
                    )
                } else {
                   return (
                       <div className={value === null ? item.category + ' tools__card' : "tools__card  tools__opacity"}>
                           <img width={'25'} src={item.imgUrl} alt='' />
                           <p>{item.toolsName}</p>
                       </div>
                   )
                }
            })
        }
        </div>
    );
}

export default ToolsCard;
