export const withStyles = (Component) => {
    return (props) => {

        const cardStyle = { flex: "1 33%" }

        return <>
            <div className="flex justify-center items-center flex-wrap">
                <Component style={cardStyle} {...props} />
            </div>
        </>
    }
}