import React, { useEffect, useState } from 'react'
import apis from '../apis';
import { isSuccessfulRequest } from '../utils/apiHelper';
import { toast } from 'react-toastify';
import { useParams, useSearchParams } from 'react-router-dom';


const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();


    const [doneVerify, setDoneVerify] = useState(false)
    const [verifyStatus, setVerifyStatus] = useState("")
    const [data, setData] = useState();

    const handleVerify = async () => {
        try {
            // const payload = searchParams
            // const { status, data } = await apis.auth.verify(payload);
            const payload = window.location.href;
            var splitStr = payload.substring(payload.indexOf('?') + 1);
            const { status, data } = await apis.auth.verify(splitStr);
            if (isSuccessfulRequest(status) && data) {
                setData(data);
                toast.success("Succesfully Succesfully Verified")
                setDoneVerify(true)
                setVerifyStatus("Succesfully Verified")
            }
        } catch (error) {
            toast.error("error happened");
            setDoneVerify(true)
            setVerifyStatus("Verify Failed Please try to register again")
        }
    }

    useEffect(() => {
        // searchParams.get("token")

        if (verifyStatus === "") {
            handleVerify();
        }
    }, [])

    return (
        <>
            Verify Page
            {verifyStatus === "Succesfully Verified" && (
                <div>
                    Succesfully Verified
                    id :{data.id}
                    name: {data.name}
                </div>
            )}
        </>
    )
}

export default Verify;