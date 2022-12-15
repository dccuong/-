import React, { useState } from 'react'
import Swal from 'sweetalert2'

type Props = {}

const Calculator = (props: Props) => {
    const [value1, setValue1] = useState<any>("0")
    const [value2, setValue2] = useState<any>("0")
    const [click, setClick] = useState<any>("")
    const sum = (x: any, y: any) => { return x + y }
    const subtraction = (x: any, y: any) => { return x - y }
    const multiplication = (x: any, y: any) => { return x * y }
    const division = (x: any, y: any) => { return x / y }
    const checkDot = (x: string) => {
        var res = 0
        x.split("").forEach((item) => {
            if (item === ".") { res = res + 1 }
        })
        if (res >= 2) return (<> sai cú pháp</>)
        return x
    }

    const a = ""
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "=", "+", "-", "*", "/", "del", "reset"]
    const handelrClick = (check: any) => {

        if (typeof check === 'number') {
            console.log(check)
            setValue2(value2 ? value2.concat(String(check)) : String(check))
        }
        if (check === '.') {
            checkDot(value2)
            setValue2(value2 ? value2.concat(String(check)) : String(check))
        }
        if (check === "del") {
            console.log(typeof check)
            const convertString = value2?.split("")
            convertString.pop()
            const newValue = convertString.join("")
            setValue2(newValue)
        }

        if (check === "+" || check === "-" || check === "*" || check === "/") {
            setValue1(Number(value2))
            setClick(check)
            if (check == "+") {
                setValue1(sum(Number(value1), Number(value2)))
                setValue2(0)
            }
            if (check == "-") {
                setValue1(subtraction(Number(value1), Number(value2)))
                setValue2(0)
            }
            if (check == "*") {

                if (value1 != 0) {
                    setValue2(1)
                    setValue1(multiplication(Number(value1), Number(value2)))
                    setValue2(0)
                }else if(value1==0){
                    setValue1(value2)
                    setValue2(0)
                }

            }
            if (check == "/") {
                if (value1 != 0 && value2!=0) {
                    setValue1(division(Number(value1), Number(value2)))
                    setValue2(0)
                }else if(value1==0){
                    setValue1(value2)
                    setValue2(0)
                }else if(value2==0){
                   return window.alert("mẫu số khác 0")
                }
            }
        }

        if (check === "reset") {
            setValue1(0)
            setValue2(0)
            setClick("")
        }
        if (check === "=") {
            if (click == "+") {
                setValue1(sum(Number(value1), Number(value2)))
                setValue2("0")
            }
            else if (click == "-") {
                setValue1(subtraction(Number(value1), Number(value2)))
                setValue2("0")
            }
            else if (click == "*") {
                if(value1==0){
                    setValue1(value2)
                }else{
                setValue1(multiplication(Number(value1), Number(value2)))
                setValue2("0")
            }
            }
            else if (click == "/") {
                if (value2 != 0) {
                    setValue1(division(Number(value1), Number(value2)))
                    setValue2("0")
                }else if(value2==0){
                    window.alert("mẫu số khác 0")
                }



            } else {
                setValue1(value2)
                setValue2("0")
            }

        }




    }
    return (
        <div >
            <div className={value1 ? 'text-white' : "hidden"}> {value1} </div>
            <div className={click ? 'text-white' : "hidden"}> {click} </div>
            <div className=' text-white'> {value2}</div>

            <div className='flex '>
                <div className='grid grid-cols-4'>
                    {numbers.map((item, index) => (
                        <button key={index} className="bg-slate-50 m-1 p-2" onClick={() => {
                            handelrClick(item)
                        }} >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calculator