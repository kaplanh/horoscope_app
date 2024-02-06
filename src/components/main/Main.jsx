import { data } from "../../helpers/data";
import "./Main.scss";
import Card from "./Card";
const Main = () => {
    // console.log(data);
    return (
        <div className="card-container">
            {data.map((item, i) => (
                // !props
                // ?asagi data göndermenin 1.yolu
                // <Card item={item} />
                // böyle gönderirsek diger tarafta props.item.title seklinde yakalamaliyim
                // ?asagi data göndermenin 2.yolu
                <Card key={item.id} {...item} />
                
            ))}
        </div>
    );
};
export default Main;
