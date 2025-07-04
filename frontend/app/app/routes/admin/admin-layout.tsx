import React from 'react'
import { Outlet } from 'react-router'
import pkg from '@syncfusion/ej2-react-navigations';
const { SidebarComponent } = pkg;
import { NavItems } from 'components'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      
      <aside className=' w-full max-w-[270px] hidden lg:block '>
       <SidebarComponent width={270} enableGestures={false}>
        <NavItems />
       </SidebarComponent>
      </aside>
      <aside className=' children '>
        <Outlet /> 
      </aside>
    </div>
  )
}

export default AdminLayout


