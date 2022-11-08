import React, { useEffect, useState } from 'react'
import apis from '../apis';
import { toast } from 'react-toastify';
import { isEmpty } from "lodash";



const Verify = () => {
    const [doneVerify, setDoneVerify] = useState(false)
    const [data, setData] = useState([]);
    const payload = window.location.href;

    const handleVerify = async () => {
        console.log("handleVerify")
        var splitStr = payload.substring(payload.indexOf('?') + 1);
        const stoppFromStorage = JSON.parse(localStorage.getItem("stopp"));
        try {
            const { status, data } = await apis.auth.verify(splitStr);
            console.log("status", status)
            console.log("data", data)
            if (status === 200 && data) {
                toast.success("Succesfully Succesfully Verified")
                if (!isEmpty(stoppFromStorage)) {
                    stoppFromStorage.forEach((eachData) => {
                        if (eachData.id === data.id) {
                            eachData = data;
                        }
                    })
                    stoppFromStorage.concat(data);
                    console.log("stoppFromStorage", stoppFromStorage)
                    localStorage.setItem('stopp', JSON.stringify(stoppFromStorage));
                    setData(prevState => [...prevState, stoppFromStorage])
                } else {
                    localStorage.setItem('stopp', JSON.stringify([data]));
                    setData(prevState => [...prevState, data])
                }
            }
        } catch {
            console.log("error2")
            toast.error("error happened");
            if (!isEmpty(stoppFromStorage)) {
                handleDisplayData()
            }
        }

        setDoneVerify(true)
    }

    const handleDisplayData = () => {
        console.log("handleDisplayData")
        var storedNames = JSON.parse(localStorage.getItem("stopp"));
        setData(storedNames)
    }

    useEffect(() => {
        const stoppFromStorage = localStorage.getItem('stopp');
        console.log("payload.length", payload.length)
        if (isEmpty(stoppFromStorage) || payload.length > 31) {
            if (!doneVerify) {
                handleVerify();
            }
        } else {
            handleDisplayData();
        }
    }, [])

    // useEffect(() => {
    //     const tempArray = [{ id: 1, name: "REN" }, { id: 2, name: "JEX" }]
    //     localStorage.setItem('stopp', JSON.stringify(tempArray));
    // }, [])

    console.log("data", data)
    return (
        <>
            Verify Page
            {
                !isEmpty(data) && (
                    data.map((mappedData, index) => {
                        // console.log(mappedData)
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