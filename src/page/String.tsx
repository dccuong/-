import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    exampleRequired: string,
};

const Stringg = (props: Props) => {
    const str = "xử lí string"
    const [a, seta] = useState<string>("")
    const [regex, setRegex] = useState<any>(/\b[a-z]/gi);
    const [indexof, setIndexOf] = useState<any>(/\b[a-z]/gi);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => seta(data.exampleRequired)
    var b: any = ""
    const Upkey = () => {

        const x = a as string
        const arrIndex0 = x?.charAt(0).toUpperCase() || "chưa có dữ liệu"
        const newarr = []
        const arr = x?.split('');
        for (let index = 0; index < arr?.length; index++) {
            if (arr[index - 1] === " ") {
                newarr.push(arr[index].toUpperCase())
                continue
            }
            newarr.push(arr[index])
        }
        console.log(arrIndex0.concat(newarr.join("")))
        return b = arrIndex0.concat(newarr.join("").slice(1))
    }

    if (a != "") Upkey()

    return (
        <div className="text-gray-400">
            <div className="text-[20px] text-white font-semibold"> <span>{str.toUpperCase()}</span> </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("exampleRequired", { required: true })} /><input className="animate-pulse px-2 text-white bg-blue-500 " type="submit" /> <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

              
            </form>
            <div className={a ? "block border border-blue-300 shadow rounded-md p-4  w-full mx-auto " : "hidden"}>
                <p> nguyên bản: {a}</p>
                <p> chả về kí tự đầu tiên (charAt) :{a?.charAt(0)}</p>
                viết hoa :    {b}
                <p>(charCodeAt) {a?.charCodeAt(7)}</p>
                <p>Viết hoa chữ cái đầu của câu
                    <br />(.charAt(0).toUpperCase().concat(a.slice(1))) :{a?.charAt(0).toUpperCase().concat(a.slice(1))}</p>
                <p>/<input className="rounded-md outline-red-300 w-[90px] mx-1 shadow-md px-2 items-center" type="text" id={'regex'} placeholder={"\\b[a-z]"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const a: any = RegExp(e.target.value, 'gi');
                    console.log(a)
                    setRegex(a)
                }} />/gi : {a?.match(regex)}</p>
                <p>  indexOf() Dùng để tìm kiếm vị trí của chuỗi trong một chuỗi khác
                    <input type="text" className="rounded-md  outline-red-300 mx-1 w-[90px] px-2 shadow-md" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIndexOf(e.target.value)
                    }} name="" id="" /> :{a?.indexOf(indexof)}</p>
                <p> split: { }</p>
                { }
            </div>
            <div className={a? "hidden":" block border border-blue-300 shadow rounded-md p-4  w-full mx-auto"}>
                <div className="animate-pulse flex space-x-4">
                 
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Stringg