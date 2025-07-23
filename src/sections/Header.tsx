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
        {/* <ul className="flex gap-[35px] text-[14px] font-bold text-white font-medium">
          <li><a href="">ホーム</a></li>
          <li><a href="">インフォメーション</a></li>
          <li><a href="">書類</a></li>
          <li><a href="">クラス</a></li>
          <li><a href="">課外教室</a></li>
        
        </ul> */}
        <ul className="flex w-full items-center justify-center text-white h-full">
            <li className="relative mx-[3px] flex -z-10"><a className="text-[1.4rem] p-[1.3rem_2rem] rounded-[3px] transition-all duration-200 w-full" href="./index.html"><span>ホーム</span> </a></li>
            
            <li className="nav-menu__item nav-menu__item--2">
              <a className="nav-menu__link nav-menu__link--2" href="#" data-nav="1">インフォメーション</a>
              <ul className="submenu-list">
                <li className="submenu__item">
                  <a href="./about.html" className="submenu__link">
                    <svg className="navbar__icon">
                      
                    </svg>
                     <span>保育方針</span> 
                  </a>
                </li>
                <li className="submenu__item">
                  <a href="./fees.html" className="submenu__link">
                    <svg className="navbar__icon">
                      
                    </svg>


                    <span>保育料</span>
                  </a>
                </li>
                <li className="submenu__item">
                  <a href="./privacy.html" className="submenu__link">
                    <svg className="navbar__icon">
                      
                    </svg>


                    <span>プライバシーポリシー</span>
                  </a>
                </li>
                <li className="submenu__item">
                  <a href="./menu.html" className="submenu__link">
                    <svg className="navbar__icon">
                      
                    </svg>


                    <span>給食</span>
                  </a>
                </li>
              </ul>
            </li>
       
            <li className="nav-menu__item nav-menu__item--3">
              <a className="nav-menu__link nav-menu__link--3" href="./forms.html" data-nav="2">書類</a>
              
            </li>
           
            <li className="nav-menu__item nav-menu__item--4">
              <a className="nav-menu__link nav-menu__link--4" href="#" data-nav="3">クラス</a>
              <ul className="submenu-list">
                <li className="submenu__item">
                  <a href="./nyuuji.html" className="submenu__link"><svg className="navbar__icon">
                    
                  </svg><span>乳児</span> </a>
                </li>
                <li className="submenu__item">
                  <a href="./youji.html" className="submenu__link"><svg className="navbar__icon">
                    
                  </svg><span>幼児</span> </a>
                </li>
                <li className="submenu__item">
                  <a href="./star.html" className="submenu__link"><svg className="navbar__icon">
                    
                  </svg><span>国際クラス</span> </a>
                </li>
              </ul>
            </li>
            
            <li className="nav-menu__item nav-menu__item--5"><a className="nav-menu__link" href="./blog.html">お知らせ・ニューズ</a></li>
            
            <li className="nav-menu__item nav-menu__item--6">
              <a className="nav-menu__link" href="./activities.html">課外教室</a>
            </li>
            
          </ul>
          

      </nav>
    </div>
  </div>;
};
