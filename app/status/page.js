import React from 'react'

const Status = () => {
    useEffect(() => {
        window.scrollTo(0, -1);
      }, []);
    return (
        <div>Status</div>
    )
}

export default Status