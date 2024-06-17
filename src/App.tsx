import  {useState} from 'react'
import "./App.css"
import {Box, Button, Card, Input, Sheet, Slider, Typography} from "@mui/joy";
import { setNumberCassette} from "./store/cassettes/cassettesSlice.ts";
import CassetteComponent from "./components/СassetteComponent.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";
import calculateWithdrawal from "./utils/calculateWithdrawal.ts";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    function handleChange(e: Event, ) {
        // @ts-ignore
        const newValue = e.target?.value
        dispatch(setNumberCassette(newValue))
    }


    const cassettes = useSelector((state: RootState) => state.cassettes.cassettes);
    const [userMoney, setUserMoney] = useState<number>(0)
    const [calculateFeedback, setCalculateFeedback] = useState("")
    function handleCalculate() {
        setCalculateFeedback(calculateWithdrawal(cassettes, userMoney))
    }


    return <Sheet sx={{width: 600, borderRadius: 20, padding: 2}}>
        <Typography level={"h1"}>ATM Calculator</Typography>
        <Box sx={{display: "flex", alignItems: "center"}}>
            <Typography width={400} level={"title-lg"}>Number cassette</Typography>
        <Slider valueLabelDisplay="on" value={cassettes.length} onChange={handleChange} max={8} min={1}/>
        </Box>

        <Card variant={"soft"} sx={{margin: 1}}>
            <Typography level={"title-md"}>Money requested (in rub):</Typography>
            {/*@ts-ignore*/}
            <Input value={userMoney} onChange={e => setUserMoney(e.target.value)}/>
            {calculateFeedback}
            <Button onClick={handleCalculate}>Calculate</Button>
        </Card>
        {cassettes.map((_, idx) => <CassetteComponent idx={idx} key={idx}/>)}
    </Sheet>
}

export default App
