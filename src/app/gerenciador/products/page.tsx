'use client'

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import api from "../../../../services/api";
import React, { useEffect, useState } from "react";

export default function Page() {
  interface Product {
    nome: string,
    codigo: string;
    qtdEstoque: number;
    cor: string;
    categoria: string;
    tamanho: string;
    valorUnitario: number;
  }
  
  const [rows, setRows] = useState<Product[]>([]);

  const getProduct = () => {
    api.get("/produtos").then((response) => {
      console.log(response.data);
        setRows(response.data)
    });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex justify-center mt-96">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{backgroundColor: '#559EA8'}}>
            <TableRow>
              <TableCell><span className="text-white text-base font-bold">Nome</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Código</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Estoque</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Cor</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Categoria</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Tamanho</span></TableCell>
              <TableCell align="right"><span className="text-white text-base font-bold">Preço</span></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.nome}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.codigo}</TableCell>
                <TableCell align="right">{row.qtdEstoque}</TableCell>
                <TableCell align="right">{row.cor}</TableCell>
                <TableCell align="right">{row.categoria}</TableCell>
                <TableCell align="right">{row.tamanho}</TableCell>
                <TableCell align="right">{row.valorUnitario}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
