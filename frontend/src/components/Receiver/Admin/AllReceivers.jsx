import React from "react";
import "./style.css"
import axios from "axios";
import Table from "react-bootstrap/Table";

import { useEffect, useState } from "react";

function AllReceivers(){
    const [data, setData] = useState([]);

    useEffect(() => {
    axios
      .get("http://localhost:8000/api/receivers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

    return(
        <div className="main-container-allreceivers">
        <Table responsive="md" className="tbl-allreceivers">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Location</th>
              <th>Receiver Type</th>
              <th>Phone 1</th>
              <th>Phone 2</th>
            </tr>
          </thead>
          {/* <tbody>
            {data.map((receiver, index) => {
              return (
                <tr key={index}>
                  <td>{receiver._id}</td>
                  <td>{receiver.fname}</td>
                  <td>{receiver.lname}</td>
                  <td>{receiver.email}</td>
                  <td>{receiver.address}</td>
                  <td>{receiver.location}</td>
                  <td>{receiver.catogeries}</td>
                  <td>{receiver.tele.phonea}</td>
                  <td>{receiver.tele.phoneb}</td>
                </tr>
              );
            })}
          </tbody> */}
          <tbody>
            <tr>
              <td>1</td>
              <td>Amal</td>
              <td>Sooriya</td>
              <td>amal@gmail.com</td>
              <td>Matara</td>
              <td>Waligama</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Senal</td>
              <td>Withanage</td>
              <td>senal@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kamal</td>
              <td>Widanapathirana</td>
              <td>kamal@gmail.com</td>
              <td>Matara</td>
              <td>Walgama</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Namal</td>
              <td>Weerasekara</td>
              <td>namal@gmail.com</td>
              <td>Matara</td>
              <td>Hiththatiya</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Nimali</td>
              <td>Gunasekera</td>
              <td>nimali@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Vihanga</td>
              <td>Sooriya</td>
              <td>vihanga@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Lily</td>
              <td>Sooriya</td>
              <td>lily@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Kamala</td>
              <td>Sooriya</td>
              <td>kamala@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Perera</td>
              <td>Sooriya</td>
              <td>perera@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Alvis</td>
              <td>Sooriya</td>
              <td>alvis@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Gaguni</td>
              <td>Sooriya</td>
              <td>gaguni@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>12</td>
              <td>John</td>
              <td>Devid</td>
              <td>john@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Amil</td>
              <td>Sooriya</td>
              <td>amil@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Harry</td>
              <td>Perera</td>
              <td>harry@gmail.com</td>
              <td>Matara</td>
              <td>Isadin Town</td>
              <td>Charity</td>
              <td>0713004050</td>
              <td>0772008040</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default AllReceivers;