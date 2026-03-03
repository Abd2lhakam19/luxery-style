import Icon from "./Icon";
function Trust({ iconName, title, subTitle }) {
    return (
        <>
            <div className="flex flex-col text-center items-center gap-3">
                <Icon name={iconName} className="text-blue-700" />
                <h3 className="text-sm font-bold">{title}</h3>
                <h6 className="text-xs text-slate-500">{subTitle}</h6>
            </div>
        </>
    )
}

export default Trust;