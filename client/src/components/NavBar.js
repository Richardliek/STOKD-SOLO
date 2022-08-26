import { useNavigate ,Link } from "react-router-dom";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, ChevronDoubleRightIcon, ChevronRightIcon } from '@heroicons/react/solid'

const NavBar = () => {
  const navigate = useNavigate();


  return (
    <header className="sticky bg-sky-800 top-0 z-50 grid grid-cols-3 shadow-md px-2 md:px-4">
      <div className="relative h-18 cursor-pointer flex w-28 py-5">
          <Link to="/" className="text-2xl font-Quicksand font-semibold text-green-400">STOKD.</Link>
      </div>
      <div className="items-center mt-4 pl-60">
          <svg width="315" height="44" viewBox="0 0 315 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M311.541 3.574C312.02 3.25147 312.387 2.99894 312.755 2.74643C312.735 2.61705 312.716 2.48768 312.697 2.35832C310.416 2.72876 308.134 3.07874 305.856 3.47325C297.02 5.00383 288.157 6.24446 279.285 7.43418C268.958 8.81899 258.609 9.85655 248.255 10.7997C240.802 11.4785 233.329 11.8009 225.866 12.3032C205.335 13.6848 184.785 14.1272 164.229 13.9595C149.27 13.8375 134.31 13.4953 119.355 13.0118C107.325 12.6228 95.2983 11.9697 83.2769 11.2606C70.1662 10.4872 57.062 9.54543 43.9579 8.61494C37.408 8.14985 30.8646 7.54815 24.3185 7.00327C23.4934 6.9346 22.6182 6.8998 22.4449 8.16407C22.2657 9.47149 23.0307 9.98395 23.9481 10.2215C28.2329 11.331 32.5922 11.7881 36.9306 12.4268C37.9558 12.5777 38.9797 12.7559 40.0086 12.8506C42.9437 13.1206 43.1176 13.2892 42.7893 16.8687C42.4846 20.1896 41.1101 22.8559 39.0945 25.0598C38.5196 25.6884 37.9393 26.3098 37.2703 27.033C40.7661 28.1628 49.2771 22.3663 50.7201 18.0821C49.8046 16.6187 47.895 16.7821 47.1499 15.1669C47.3441 14.3067 47.7708 14.1904 48.203 14.225C51.2323 14.467 54.2608 14.7261 57.2883 14.9988C58.625 15.1192 58.829 15.9326 58.1437 17.2262C53.4108 26.1598 46.6739 31.3936 38.1173 33.0559C34.8582 33.689 33.1358 31.3484 33.7511 27.084C31.3995 27.084 29.1064 27.0751 26.8134 27.0856C18.7274 27.1225 10.6414 27.1841 2.55533 27.1815C1.67457 27.1812 0.12847 27.7007 0.138753 26.2242C0.149879 24.627 1.69553 25.3716 2.5411 25.367C12.7607 25.3109 22.9806 25.3286 33.2004 25.3309C37.9507 25.3319 41.2232 21.2286 41.2228 14.99C38.0743 14.5302 34.8927 14.0986 31.7191 13.592C29.0106 13.1596 26.3076 12.6705 23.6097 12.1482C22.317 11.898 21.3958 10.9956 20.9248 9.46281C20.1614 6.97832 21.4531 4.89869 23.8048 5.05775C29.3251 5.43106 34.8404 5.91273 40.3583 6.34032C45.5727 6.74441 50.7869 7.15569 56.0029 7.5276C64.1931 8.11157 72.3836 8.69126 80.5762 9.22258C86.221 9.58866 91.8672 9.96115 97.5167 10.1717C112.893 10.7447 128.266 11.3928 143.649 11.7555C159.221 12.1227 174.791 12.0672 190.359 11.8821C201.786 11.7462 213.217 11.2574 224.632 10.5812C236.645 9.86958 248.649 8.93899 260.638 7.68001C270.863 6.60621 281.072 5.37124 291.262 3.91412C297.952 2.9576 304.611 1.69758 311.29 0.622319C312.604 0.410698 314.365 -0.461676 314.859 1.85663C315.321 4.02203 313.579 4.68376 312.327 5.27969C307.029 7.79987 301.436 8.86875 295.869 10.0257C284.551 12.3779 273.139 13.8556 261.723 15.2352C253.686 16.2064 245.62 16.8227 237.569 17.6244C223.15 19.0602 208.695 19.7296 194.249 20.5776C189.876 20.8344 185.495 20.8798 181.121 21.0023C166.285 21.4178 151.444 21.8385 136.603 21.4215C125.845 21.1192 115.091 20.6164 104.336 20.1823C102.515 20.1088 100.686 20.0372 98.8803 19.7679C97.4071 19.5483 96.5508 20.252 95.7144 21.672C91.443 28.9237 86.2871 35.0561 79.9063 39.5314C76.5526 41.8836 73.0336 43.6482 69.0408 43.4641C68.0534 43.4186 67.0046 43.4039 66.2008 42.8098C64.2942 41.4005 62.2453 41.593 60.187 41.5929C47.1689 41.5922 34.1508 41.5864 21.1327 41.5821C20.8286 41.582 20.5222 41.6088 20.2207 41.5741C19.537 41.4952 18.504 41.8082 18.5314 40.5307C18.5594 39.2261 19.6162 39.619 20.2712 39.6179C33.5934 39.5956 46.9157 39.5999 60.2379 39.6116C61.4649 39.6127 62.5327 39.7975 62.9713 37.6875C63.3497 35.8677 65.0173 35.5731 66.3731 35.1266C70.6473 33.7191 73.3346 29.4095 73.2789 24.2182C73.2579 22.2668 72.6079 21.0038 71.1383 20.2551C68.5387 18.9307 65.7985 18.2747 63.0576 17.6113C62.4123 17.4552 61.4932 17.4889 61.5351 16.4477C61.5899 15.088 62.6432 15.5476 63.2697 15.592C69.8819 16.0603 76.4903 16.6062 83.1015 17.0962C85.1631 17.249 87.2325 17.2486 89.2936 17.4095C90.9844 17.5415 91.3952 18.289 90.4993 19.8979C84.9856 29.8007 78.3561 38.0411 68.6547 41.3686C69.9179 41.721 71.9738 41.5112 73.8605 40.7574C78.881 38.7518 83.0576 35.0688 86.9293 30.8297C90.0174 27.4485 92.7791 23.6849 95.0714 19.4565C95.7615 18.1834 96.5438 17.6646 97.7744 17.7615C109.545 18.6883 121.336 19.0399 133.124 19.4461C137.318 19.5906 141.518 19.5083 145.714 19.5603C162.199 19.7649 178.676 19.2937 195.146 18.5872C207.049 18.0766 218.95 17.3319 230.834 16.3648C241.861 15.4675 252.88 14.3924 263.88 13.0301C274.089 11.7658 284.285 10.4024 294.413 8.39069C300.16 7.2491 305.943 6.2121 311.541 3.574ZM87.434 21.9777C87.8312 21.1922 88.5419 20.6033 88.51 19.3621C82.9984 19.0071 77.5218 18.6543 72.0453 18.3016C73.9791 19.42 74.759 21.4039 74.8433 23.7297C74.968 27.1678 74.2062 30.3213 72.2614 32.952C70.5213 35.3057 68.3335 36.6096 65.8289 37.282C65.208 37.4486 64.3716 37.7787 64.4771 38.7801C64.5974 39.9227 65.5058 39.5819 66.1224 39.596C69.0173 39.6626 71.5989 38.3533 74.0609 36.6884C79.3646 33.102 83.578 28.0092 87.434 21.9777ZM35.6324 28.6506C34.3952 30.0358 35.5108 30.5801 36.2991 30.9531C37.21 31.3841 38.2183 31.2013 39.1785 30.9485C44.6684 29.5031 49.4419 26.4369 53.3547 21.4921C54.4222 20.1431 55.5415 18.797 56.1771 16.8276C54.8078 16.6975 53.6108 16.5837 52.2326 16.4528C53.1139 17.8048 52.5718 18.9083 51.9271 19.8816C48.3212 25.326 43.6061 28.3548 37.9496 29.2679C37.2079 29.3876 36.497 29.2082 35.6324 28.6506Z" fill="white"/>
          </svg>
      </div>
      <div className="flex items-center justify-end space-x-3 text-green-400">
          <div className="flex items-center border-2 p-2 rounded-full cursor-pointer">
              <MenuIcon className="h-8" />
              <UserCircleIcon className="h-8 cursor-pointer" />
          </div>
          <button  className="hidden md:inline-flex font-Quicksand cursor-pointer">Login</button>
      </div>
      {/* <Image src="https://www.wapititravel.com/blog/wp-content/uploads/2020/11/Quinta-das-Camelias-Ponta-Delgada-Azores-1024x768.jpg.webp"
              layout="fill"
          /> */}
    </header>
  );
}

export default NavBar;
