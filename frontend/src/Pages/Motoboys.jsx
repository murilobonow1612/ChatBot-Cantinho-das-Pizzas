import React from "react";
import { Link } from "react-router-dom";
import relatorios_img from "../assets/relatorios.png";
import pedido_img from "../assets/pedido.png";
import "../Style/Motoboys.css"

const Entregadores = () => (
    <div className="page-motoboys">
        <h1>Entregadores</h1>
        <ul className="list_motoboys">
            <li><p>Lucas</p></li>
            <li><p>Jorge</p></li>
        </ul>
    </div>
)

export default Entregadores;