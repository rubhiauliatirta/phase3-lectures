import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';



describe("Async Data", () => {
  
  test("Should showing data from API", (done)=> {
    const { findByTestId , getByText, container } = render(<App />);

    /** notes :
     * sebelumnya aku pakai findByTestId("user-data") di file App.test.js
     * namun test selalu gagal karena element dengan test id "user-data"
     * udah ada dengan nilai Rubhi Aulia Tirta dari yang test sebelumnya (test ke 2)
     * Sepertinya walaupun kita panggil "render" di setiap test dia masih menyimpan
     * snapshot dari test sebelumnya jika kita merender component yang sama.
     * Soalnya kalau aku pindahin ke test suites yang lain (file ini aaa.test.js) 
     * componentnya seperti ter render dari awal
     */
    findByTestId("user-data")
    .then(element => {
      //debug()
      const child = container.querySelectorAll("li")
      expect(element).toBeInTheDocument()
      expect(child).toHaveLength(10)
      expect(getByText("Ervin Howell")).toBeInTheDocument()
      done()
    })
   })
 })


 
