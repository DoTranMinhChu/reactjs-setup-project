import { useState } from "react"
import { useDispatch } from "react-redux"
import { clearValue, setValue } from "../redux/slices/initSlice";

export const Init = ({ initValue }) => {
    const dispatch = useDispatch();
    const [val, setVal] = useState(initValue)
    const handleSaveValueToRedux = () => {
        dispatch(setValue(val));
    }
    const handleClearValueToRedux = () => {
        dispatch(clearValue());
    }
    return (
        <>
            <input type="text" value={val} onChange={(event) => setVal(event.target.value)} />
            <button onClick={handleSaveValueToRedux}>Save value to redux</button>
            <button onClick={handleClearValueToRedux}>Clear value to redux</button>
        </>

    )
}