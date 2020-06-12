import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

// Queries
/**
 * Aku ingin pas aku buka aplikasinya menampilkan halaman utama yang ditandai dengan :
 * 1. Ada tulisan User Apps di dokumen kita
 * 2. Ada element yang tulisannya content tulisannya user list di dokument kita
 * 3. Di awal di dalam containernya ada element <p> dengan tulisan no user 
 *    available sebelum dapat data dari API, an belum ada element list usernya
 * 4. Ada component from yang render input dengan place holder name button dengan value "add"
 */

describe('Initial Page', () => {
  
  //1.
  test('should render "User Apps" text', () => {
    const { getByText } = render(<App />);
    const pageTitle = getByText("User Apps")
    expect(pageTitle).toBeInTheDocument()
  })

  //2. 
  test('Should contain element that contain "user list" text', ()=> {
    const { getByTestId } = render(<App />);
    const userListTitleElement = getByTestId("userlist-title")
    expect(userListTitleElement).toBeInTheDocument() //oke dia ada
    expect(userListTitleElement).toHaveTextContent(/user list/i)
  })

  //3.
  test('container div should contain <p>no user available</p> text and not contain <ul /> user data', () => {
    const { getByTestId , queryByTestId } = render(<App />);
    const containerDiv = getByTestId('container')
    const noUserElement = queryByTestId('no-user')
    const userDataElement = queryByTestId('user-data')
  
    expect(containerDiv).toContainElement(noUserElement)
    expect(noUserElement).toHaveTextContent(/no user available/i)
    expect(containerDiv).not.toContainElement(userDataElement)
  })

  //4.
  test('should render input with placeholder name and "add" button', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<App />);
    const input = getByPlaceholderText('name')
    const button = getByDisplayValue(/add/i)
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

})


//Event
/**
 * 1. Ketika aku nambah data baru maka
 * - value input terupdate dengan benar setelah value aku change
 * - nama user akan muncul di dom setelah aku submit
 * - input value akan kembali menjadi string kosong
 */

 describe("Event test", () => {
   test("should success add new user and muncul di dom", () => {
    const { getByPlaceholderText, getByDisplayValue, getByText } = render(<App />);

    const inputName = getByPlaceholderText('name')
    const buttonAdd = getByDisplayValue(/add/i)
    const newUser = "Rubhi Aulia Tirta"

    //ganti value
    fireEvent.change(inputName, {target : {value : newUser}})
    expect(inputName).toHaveValue(newUser)

    //click add
    fireEvent.click(buttonAdd)
    expect(getByText(newUser)).toBeInTheDocument() //muncul di dom
    expect(inputName).toHaveValue("")
   })
 })

//Async

describe("Async Data", () => {
  test("Should showing data from API", (done)=> {
    const { findByText, getByText, container, debug } = render(<App />);

    //cara 1
    findByText("Ervin Howell")
    .then(element => {
      const child = container.querySelectorAll("li")
      expect(element).toBeInTheDocument()
      expect(child).toHaveLength(10)
      expect(getByText("Ervin Howell")).toBeInTheDocument()
      done()
    })

    //cara 2
    // waitForElement(() => {
    //   const child = container.querySelectorAll("li")
        
    //     expect(child).toHaveLength(10)
    //     expect(getByText("Ervin Howell")).toBeInTheDocument()
    //   done()
    // })
    
   })
 })


 
