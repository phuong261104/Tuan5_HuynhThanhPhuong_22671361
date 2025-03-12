import "./item.css";

const Item = (props) => {
    const { dataCard } = props;

    return (
        <>
            {dataCard && dataCard.map((item) => (
                <div className="card" key={item.id}>
                    <div className="card-img">
                        <img
                            src={item.avatar}
                            alt={item.title}
                        />
                    </div>
                    <div className="card-body">
                        <div className="card-body__header">
                            <h3 className="card-body__title">{item.title}</h3>
                            <span className="card-body__bookmark">🔖</span>
                        </div>
                        <div className="card-body__time">{item.time}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Item;
