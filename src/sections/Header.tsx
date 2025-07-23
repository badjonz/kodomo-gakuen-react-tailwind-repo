import Link from "next/link";
export const Header = () => {
  return <div className="flex flex-col">
    <div className="flex justify-between h-[30px] bg-[rgba(0,174,255,0.85)] px-[60px] text-white text-[11px] items-center fixed w-full z-50">
      <a href=""> info@kodomogakuen.com</a>
      <a href="">English</a>
    </div>
    <div className="fixed top-[30px] w-full z-50 bg-[rgba(0,0,0,0.1)] h-[75px]">
      <nav className="flex justify-between items-center h-full px-[60px]">
        <div>
          <a href=""><span className="text-[#32CD32]">test</span></a>
        </div>
        <ul className="flex gap-[35px] text-[14px] font-bold text-white font-medium">
          <li><a href="">ホーム</a></li>
          <li><a href="">インフォメーション</a></li>
          <li><a href="">書類</a></li>
          <li><a href="">クラス</a></li>
          <li><a href="">課外教室</a></li>
        
        </ul>
      </nav>
    </div>
  </div>;
};
