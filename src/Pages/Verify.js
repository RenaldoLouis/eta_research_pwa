import React, { useEffect, useState } from 'react'
import apis from '../apis';
import { toast } from 'react-toastify';
import { isEmpty } from "lodash";



const Verify = () => {
    const [doneVerify, setDoneVerify] = useState(false)
    const [data, setData] = useState([]);
    const payload = window.location.href;

    const handleVerify = async () => {
        var splitStr = payload.substring(payload.indexOf('?') + 1);
        const stoppFromStorage = JSON.parse(localStorage.getItem("stopp"));
        try {
            const { status, data } = await apis.auth.verify(splitStr);
            if (status === 200 && data) {
                toast.success("Succesfully Succesfully Verified")
                if (!isEmpty(stoppFromStorage)) {
                    let existedStopp = false;
                    stoppFromStorage.forEach((eachData, index) => {
                        if (eachData.id === data[0].id) {
                            stoppFromStorage[index] = data[0];
                            existedStopp = true
                        }
                    })
                    if (!existedStopp) {
                        stoppFromStorage.push(data[0]);
                    }
                    localStorage.setItem('stopp', JSON.stringify(stoppFromStorage));
                    setData(prevState => stoppFromStorage)
                } else {
                    localStorage.setItem('stopp', JSON.stringify(data));
                    setData(prevState => data)
                }
            }
        } catch {
            toast.error("error happened");
            if (!isEmpty(stoppFromStorage)) {
                handleDisplayData()
            }
        }

        setDoneVerify(true)
    }

    const handleDisplayData = () => {
        var storedNames = JSON.parse(localStorage.getItem("stopp"));
        setData(storedNames)
    }

    useEffect(() => {
        const stoppFromStorage = localStorage.getItem('stopp');
        if (isEmpty(stoppFromStorage) || payload.length > 31) {
            if (!doneVerify) {
                handleVerify();
            }
        } else {
            handleDisplayData();
        }
    }, [])

    return (
        <>
            Verify Page
            {
                !isEmpty(data) && (
                    data.map((mappedData, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    Succesfully Verified
                                </div>
                                <div>
                                    id :{mappedData.id}
                                </div>

                                <div>

                                    name: {mappedData.name}
                                </div>
                            </div>

                        )
                    })
                )
            }


        </>
    )
}

export default Verify;