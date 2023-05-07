import React from "react";
import "./style.css"
import axios from "axios";
import Table from "react-bootstrap/Table";

import { useEffect, useState } from "react";

function Approval() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/receivers")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="main-container-allapprovals">
            <Table responsive="md" className="tbl-allapprovals">
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
              <th>Donor Name</th>
              <th>Donor Telephone 1</th>
              <th>Donor Telephone 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Amal</td>
              <td>Sooriya</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Senal</td>
              <td>Withanage</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kamal</td>
              <td>Widanapathirana</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Namal</td>
              <td>Weerasekara</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nimali</td>
              <td>Gunasekera</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Vihanga</td>
              <td>Sooriya</td>
              <td>Approved</td>
              <td>Siril</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
          </tbody>
            </Table>
        </div>
    );
}

export default Approval;