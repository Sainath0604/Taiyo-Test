interface NavbarProps {
  pageTitle: string;
}

function Navbar({ pageTitle }: NavbarProps) {
  return (
    <div className="h-10 lg:h-20 flex justify-center items-center border-b border-t lg:border-t-0">
      <div className="font-bold text-xl lg:text-3xl text-black">{ pageTitle }</div>
    </div>
  );
}

export default Navbar;
