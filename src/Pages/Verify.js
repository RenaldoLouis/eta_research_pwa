import React, { useEffect, useState } from 'react'
import apis from '../apis';
import { isSuccessfulRequest } from '../utils/apiHelper';
import { toast } from 'react-toastify';
import { isEmpty } from "lodash";



const Verify = () => {
    const [doneVerify, setDoneVerify] = useState(false)
    const [data, setData] = useState([]);

    const handleVerify = async () => {
        console.log("handleVerify")
        const payload = window.location.href;
        var splitStr = payload.substring(payload.indexOf('?') + 1);
        if (!isEmpty(splitStr)) {
            const { status, data } = await apis.auth.verify(splitStr);

            if (isSuccessfulRequest(status) && data) {
                toast.success("Succesfully Succesfully Verified")
                try {
                    const stoppFromStorage = JSON.parse(localStorage.getItem("stopp"));
                    if (!isEmpty(stoppFromStorage)) {
                        stoppFromStorage.forEach((eachData) => {
                            if (eachData.id === data.id) {
                                eachData = data;
                            }
                        })
                        stoppFromStorage.concat(data);
                        localStorage.setItem('stopp', JSON.stringify([stoppFromStorage]));
                        setData(prevState => [...prevState, stoppFromStorage])
                    } else {
                        localStorage.setItem('stopp', JSON.stringify([data]));
                        setData(prevState => [...prevState, data])
                    }
                } catch {
                    toast.error("error happened");
                }
            } else {
                toast.error("error happened");
            }
            setDoneVerify(true)
        }
    }

    const handleDisplayData = () => {
        console.log("handleDisplayData")
        var storedNames = JSON.parse(localStorage.getItem("stopp"));
        setData(storedNames)
    }

    useEffect(() => {
        // searchParams.get("token")

        const stoppFromStorage = localStorage.getItem('stopp');

        if (isEmpty(stoppFromStorage)) {
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