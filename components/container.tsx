import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-3 h-fit w-[40vw] border border-[#3B3026] rounded-2xl bg-[#2D261F] px-7 py-7 shadow-2xl">
      {children}
    </div>
  )
}

export default Container
