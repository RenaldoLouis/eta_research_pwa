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
                    let existedStopp = false;
                    console.log("stoppFromStorage1", stoppFromStorage)
                    stoppFromStorage.forEach((eachData, index) => {
                        if (eachData.id === data[0].id) {
                            stoppFromStorage[index] = data[0];
                            existedStopp = true
                        }
                    })
                    console.log("existedStopp", existedStopp)
                    if (!existedStopp) {
                        console.log("concat Time")
                        stoppFromStorage.push(data[0]);
                    }
                    console.log("stoppFromStorage2", stoppFromStorage)
                    localStorage.setItem('stopp', JSON.stringify(stoppFromStorage));
                    setData(prevState => stoppFromStorage)
                } else {
                    localStorage.setItem('stopp', JSON.stringify(data));
                    setData(prevState => data)
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