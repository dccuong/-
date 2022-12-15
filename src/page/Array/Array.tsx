import { useState,useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import Swal from "sweetalert2";
import { addUser, delUser } from "./arraySlice";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup'; 

type Inputs = {
  id?:string
  name: string,
  age: number,
  address: string
};

type Props = {};
const Array = (props: Props) => {
  const str = "xử lí array crud"
  const list= useSelector((state:RootState) => state.user.users)
  console.log(list)
  const dispath= useDispatch<any>()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const editUser=()=>{
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  };
  const onSubmit: SubmitHandler<Inputs> =(value:Inputs)=>{
    delete value.id
    const newValue ={
      id: list.length +1,
      name: value.name,
      age: value.age,
      address: value.address
    }
      dispath(addUser(newValue))
    Swal.fire({
    
      icon: 'success',
      title: 'Thêm thành công',
      showConfirmButton: false,
      timer: 500
    })} 
    useEffect(()=>{},[])
  return (
    <div className=" text-gray-300">
      <div className="text-[20px] text-white font-semibold"> <span>{str.toUpperCase()}</span> </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex ">
        <div>
          <input {...register("name", { required: true })} className="mr-2" /> <br />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <input {...register("age", { required: true })}  className="mr-2"/>  <br />
          {errors.age && <span>This field is required</span>}
        </div>
        <div>
        <input {...register("address", { required: true })}  className="mr-2"/><br />
        {errors.address && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-yellow-50">
          <thead className="text-xs text-white-700 uppercase bg-gradient-to-r from-indigo-500 via-orange-400-500 to-blue-300">
            <tr>
            <th scope="col" className="py-3 px-6">
             id
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Age
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" key={index}>
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="py-4 px-6">
                  {item.address}
                </td>
                <td className="py-4 px-6">
                  {item.age}
                </td>
                <td className="py-4 px-6">
                  <button className="px-2 pt-1 mx-2 text-white rounded-md bg-red-600" 
                  onClick={()=>{
                     Swal.fire({
                      title: "Bạn có chắc chắn muốn xóa không?",
                      text: "Không thể hoàn tác sau khi xóa",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, delete it!",
                    }).then(async (result) => {
                      if (result.isConfirmed) {
                        console.log("1")
                         await dispath(delUser(item.id));
                      }
                    })}}
                  >del</button>
                  <button className="px-2 pt-1 mx-2 rounded-md text-white bg-green-600" >edit</button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  );

};

export default Array;
