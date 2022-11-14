import {Table} from 'react-bootstrap'

function Products(){
    return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>ISBN13</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>URL</th>
                        </tr> 
                    </thead>        
                    <tbody>
                        <tr>
                            <td>Robotics, AI, and Humanity</td>
                            <td>Science, Ethics, and Policy</td>
                            <td>9783030541729</td>
                            <td>$59.99</td>
                            <td><img src="https://itbook.store/img/books/9783030541729.png"></img></td>
                            <td><a href="https://itbook.store/books/9783030541729">Learn More</a></td>
                        </tr>
                        <tr>
                            <td>Learning Go</td>
                            <td>An Idiomatic Approach to Real-World Go Programming</td>
                            <td>9781492077213</td>
                            <td>$35.88</td>
                            <td><img src="https://itbook.store/img/books/9781492077213.png"></img></td>
                            <td><a href="https://itbook.store/books/9781492077213">Learn More</a></td>
                        </tr>
                        <tr>
                            <td>Open Workbook of Cryptology</td>
                            <td>A project-based introduction to crypto in Python</td>
                            <td>1001656678502</td>
                            <td>$0.00</td>
                            <td><img src="https://itbook.store/img/books/1001656678502.png"></img></td>
                            <td><a href="https://itbook.store/books/1001656678502">Learn More</a></td>
                        </tr>
                        <tr>
                            <td>Debugging with GDB</td>
                            <td>The GNU Source-Level Debugger</td>
                            <td>9780983159230</td>
                            <td>$65.00</td>
                            <td><img src="https://itbook.store/img/books/9780983159230.png"></img></td>
                            <td><a href="https://itbook.store/books/9780983159230">Learn More</a></td>
                        </tr>
                        <tr>
                            <td>Microsoft Excel Inside Out</td>
                            <td>Office 2021 and Microsoft 365</td>
                            <td>9780137559534</td>
                            <td>$42.16</td>
                            <td><img src="https://itbook.store/img/books/9780137559534.png"></img></td>
                            <td><a href="https://itbook.store/books/9780137559534">Learn More</a></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
    );
}

export default Products;

