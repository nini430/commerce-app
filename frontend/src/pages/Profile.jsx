import styled from "styled-components"
import tw from "twin.macro"
import {Tabs,Tab,TabPanel,TabList} from "react-tabs"
import {useTable} from "react-table"

import BackgroundImg from "../assets/background.jpg";
import Avatar from "../assets/avatar.png"
import { orderColumns } from "../utils/columns";
import { orders } from "../data/orders";

const ProfileContainer=styled.div`
    margin-top:60px;
    min-height:calc(100vh - 300px);
    ${tw`
    flex
    flex-col
    lg:flex-row
    items-center
    lg:items-start
    gap-2
    lg:gap-3
    px-5
    lg:px-40
    `}
`

const User=styled.div`
    max-height:300px;
    ${tw`
        lg:w-1/3
        shadow-md
        flex
        flex-col
        relative

    `}

    .back {
        width:100%;
        height:150px;
        object-fit:cover;
    }

    .pic {
      
        top:100px;
        left:50px;
        width:100px;
        height:100px;
        ;
        
    }

    
`




const Profile = () => {
    const {rows,getTableProps,getTableBodyProps,headerGroups,prepareRow}=useTable({columns:orderColumns,data:orders})
  return (
    <ProfileContainer>
        <User>
        <img className="back" src={BackgroundImg} alt="" />
        <div className="pic bg-white absolute rounded-full">
        <img className="w-[100%] h-[100%]" src={Avatar} alt=""/>
        </div>
        <div className="self-end mr-14  mt-10">
            <h3 className="font-bold text-xl">Admin Doe</h3>
            <p className="text-gray-400 font-bold">Joined December 30,2011</p>
        </div>
       </User>
       <Tabs className="w-2/3 flex flex-col">
        <TabList>
            <Tab>profile settings</Tab>
            <Tab>orders</Tab>
        </TabList>
        <TabPanel>
            <form className='flex flex-wrap mt-6 gap-3 w-full justify-center'>
            <div className="flex flex-col gap-3">
                <label className='uppercase text-gray-400 text-xl'>username</label>
                <input className="p-3 border border-gray-400 w-[400px] outline-none bg-green-200" type="text" />
            </div>
            <div className="flex flex-col gap-3">
                <label className='uppercase text-gray-400 text-xl'>email address</label>
                <input className="p-3 border border-gray-400 w-[400px] outline-none bg-green-200" type="text" />
            </div>
            <div className="flex flex-col gap-3">
                <label className='uppercase text-gray-400 text-xl'>new password</label>
                <input className="p-3 border border-gray-400 w-[400px] outline-none bg-green-200" type="text" />
            </div>
            <div className="flex flex-col gap-3">
                <label className='uppercase text-gray-400 text-xl'>confirm password</label>
                <input className="p-3 border border-gray-400 w-[400px] outline-none bg-green-200" type="text" />
            </div>
            </form>
            <button className="m-auto w-[50%] flex justify-center self-center uppercase text-white mt-3 p-3 bg-green-700 color-white">submit</button>
        </TabPanel>
        <TabPanel>
            <table className='w-[100%] border border-solid border-gray-300'  {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column=>(
                                <th>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row=>{
                                prepareRow(row);
                                return (
                                    <tr>
                                        {row.cells.map(cell=>(
                                            <td className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tbody>
                    
            </table>
        </TabPanel>
       </Tabs>
    </ProfileContainer>
  )
}

export default Profile