import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const MuiTable = () => {
  const [parameters, setParameters] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  useEffect(
    () =>
      onSnapshot(collection(db, "parameters"), (snapshot) =>
        setParameters(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  console.log(parameters);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple-table">
        <TableHead>
          <TableRow>
            <TableCell> EC </TableCell>
            <TableCell> pH Level </TableCell>
            <TableCell> Temperature </TableCell>
            <TableCell> ttds </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parameters.map((params) => (
            <TableRow key={params.id}>
              <TableCell>{params.EC}</TableCell>
              <TableCell>{params.pH}</TableCell>
              <TableCell>{params.temperature}</TableCell>
              <TableCell>{params.ttds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
