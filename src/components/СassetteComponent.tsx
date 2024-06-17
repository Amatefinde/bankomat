import React from 'react';
import {Card, Select, Typography, Option, Box, Input, Checkbox} from "@mui/joy";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {editCassette} from "../store/cassettes/cassettesSlice.ts";
import IEditCassette from "../types/IEditCassette.ts";
import isNumericString from "../utils/isNumericString.ts";

interface ICassetteComponentProps {
    idx: number
}

const CassetteComponent: React.FC<ICassetteComponentProps> = ({idx}) => {
    const cassettes = useSelector((state: RootState) => state.cassettes.cassettes);
    const cassette = cassettes[idx]
    const dispatch = useDispatch<AppDispatch>();
    function handleAmountChange(e: Event) {
        const new_value = e.target?.value
        if (!isNumericString(new_value)) {
            return
        }
        const editCassetteObj: IEditCassette = {
            cassetteIdx: idx,
            cassette: {
                ...cassette, amount: new_value
            }
        }
        dispatch(editCassette(editCassetteObj))
    }

    function handleIsBrokenChange() {
        const editCassetteObj: IEditCassette = {
            cassetteIdx: idx,
            cassette: {
                ...cassette, isWorked: !cassette.isWorked
            }
        }
        dispatch(editCassette(editCassetteObj))
    }

    function handleDenominationChange(e: Event, new_value: number) {
        const editCassetteObj: IEditCassette = {
            cassetteIdx: idx,
            cassette: {
            // @ts-ignore
                ...cassette, denomination: new_value
            }
        }
        dispatch(editCassette(editCassetteObj))
    }

    return (
        <Card sx={{margin: 1, display: "flex"}}>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography level={"body-lg"}>Cassette №{idx + 1}</Typography>
                <Box display={"flex"} gap={1}>
                    <Typography level={"body-xs"}>is broken</Typography>
                    <Checkbox checked={!cassette.isWorked} onChange={handleIsBrokenChange}></Checkbox>
                </Box>
            </Box>
            <Box>
                <Typography level={"body-xs"}>Denomination</Typography>
                <Select onChange={handleDenominationChange} value={cassette.denomination}>
                    <Option value={100}>100</Option>
                    <Option value={200}>200</Option>
                    <Option value={500}>500</Option>
                    <Option value={1000}>1000</Option>
                    <Option value={2000}>2000</Option>
                    <Option value={5000}>5000</Option>
                </Select>
            </Box>
            <Box>
                <Typography level={"body-xs"}>Banknotes left</Typography>
                <Input value={cassette.amount} onChange={handleAmountChange}></Input>
            </Box>
        </Card>
    );
};

export default CassetteComponent;