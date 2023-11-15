import React from 'react'

const MoreIcon = () => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="0.5" y="0.5" width="20" height="20" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_301_1439" transform="matrix(0.05 0 0 0.05 -7.35 -4.2)" />
                </pattern>
                <image id="image0_301_1439" width="189" height="173" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default MoreIcon