const Footer = () => {
  return (
    <footer className="w-full px-32 h-16 py-8 items-center justify-between  flex md:flex-col ">
      <div>
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </div>
      <div>
        Created with <span className="text-primary">&#9825;</span> by Feecon
      </div>
      <div>
        <a href="#about">Say hi</a>
      </div>
    </footer>
  )
}

export default Footer