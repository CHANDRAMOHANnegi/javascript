const DataList = ({ data }) => {
    return data.map(item => (
        <div key={item.id} className="wrapper d-flex flex-wrap border mb1 p1">

            <div className="hero-image">
                <img className="w-[100px] height-[200px]" src={item.url}
                    alt={item.id} title={item.title} />
            </div>

            <div className="details p-[20px] flex-1 display-inline-flex items-center flex-wrap">
                <span>
                    <strong>Name</strong>:{item.title}
                </span>

                <span>
                    <strong>Tagline</strong>:{item.id}
                </span>

            </div>
        </div>
    ))
}

export default DataList