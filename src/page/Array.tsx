import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {

  name: string,
  age: number,
  address: string
};

type Props = {};

const Array = (props: Props) => {
  const str = "xử lí array"
  const [a, seta] = useState<Inputs[]>([])
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => seta([...a, data])
  return (
    <>
      <div className="text-[20px] text-white font-semibold"> <span>{str.toUpperCase()}</span> </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">

        <input {...register("name", { required: true })} className="rounded-md " />
        {/* errors will return when field validation fails  */}
        {errors.name && <span>This field is required</span>}
        <input {...register("age", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.age && <span>This field is required</span>}
        <input {...register("address", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.address && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-yellow-50">
          <thead className="text-xs text-white-700 uppercase bg-gradient-to-r from-indigo-500 via-orange-400-500 to-blue-300">
            <tr>
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
            {a.map((item, index) => (
              <tr className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" key={index}>
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
                <button className="px-2 pt-1 mx-2   rounded-md bg-red-300">del</button>
                <button className="px-2 pt-1 mx-2   rounded-md bg-green-300">edit</button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>
  );

};

export default Array;
