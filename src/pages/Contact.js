import {useState} from "react";
const Contact = () => {

    const [me, setMe] = useState({
        name:"M. Farhan Zachary",
        nim:"320200401011",
        university:"Universitas Pertahanan"

    });

    return (
        <>
        <h1>My name is {me.name}</h1>
        <p>
            I am from {me.university} with NIM {me.nim}
        </p>
        </>
    );
  };
  
  export default Contact;