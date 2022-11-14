import {Navbar,Container,Row,CarouselItem} from "react-bootstrap" ;

function Footer(){
    return(
        <>
            {/* <Navbar bg="primary" style={{textAlign: "center",color:"whitesmoke"}}>

                <div>
                <h5 >Netlab Bookstore</h5>
                <p>M. Farhan Zachary - 320200401011</p>
                <p >© 2022 by M. Farhan Zachary</p>
                </div>
                
            </Navbar> */}

            <Navbar bg="primary" variant="dark" className=" text-center page-footer font-small blue pt-4">
                
                <Row style={{color:"white"}}>
                <h5 className="text-center ">Netlab Bookstore</h5>
                <p className="text-center ">M. Farhan Zachary - 320200401011</p>
                <div className="footer-copyright text-center py-3">© 2022 Copyright : M.Farhan Zachary</div>
                </Row>
            
            </Navbar>

        </>
    )

}

export default Footer;