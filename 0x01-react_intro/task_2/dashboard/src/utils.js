const getFullYear = () => new Date().getFullYear();

const getFooterCopy = (isIndex) => {
    return isIndex === true ? 'Holberton School' :  'Holberton School main dashboard'
}

const getLatestNotification = () => {
    return (
        `<strong>Urgent required</strong> - complete by EOD`
    )
}

export { getFullYear, getFooterCopy, getLatestNotification }

