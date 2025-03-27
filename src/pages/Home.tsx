import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="h-[93svh] w-full overflow-hidden pt-[var(--navbar-height)]">
        <div
          className="relative flex h-full items-center justify-center bg-[url('/bg-garden-tiny.jpg')] bg-cover bg-center bg-no-repeat"
          // style={{ backgroundImage: 'url("/garden-1.png")' }}
        >
          <div className="absolute bottom-0 left-1/2 w-[75vw] -translate-x-1/2">
            <svg
              viewBox="0 0 42 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8924 2.95224L10.9526 3.55403L11.3337 7.0043L10.7721 7.06448C10.4712 4.3163 10.0098 3.85492 8.58555 3.85492H5.71702C5.09516 3.85492 4.77421 4.19594 4.77421 4.79773V10.3141H7.26161C8.44514 10.3141 8.78615 10.0133 8.78615 7.9471H9.24752V13.3833H8.78615C8.78615 11.3372 8.44514 11.0363 7.26161 11.0363H4.77421V16.9539C4.77421 17.8967 4.93469 18.0973 5.71702 18.0973H8.56549C10.07 18.0973 10.6517 17.5156 11.4541 14.4464L12.0158 14.6069L11.0328 18.4183L10.8724 19H0.381134V18.5186C2.24669 18.5186 2.50746 18.1575 2.50746 16.9339V5.01839C2.50746 3.79475 2.24669 3.43367 0.381134 3.43367V2.95224H10.8924ZM22.2084 17.7362L22.389 18.1976L19.4201 19.321L18.9989 18.9799V17.335H18.9187C18.3971 18.5186 17.4944 19.321 16.1905 19.321C14.2648 19.321 13.0813 17.1746 13.0813 14.0051C13.0813 10.4947 14.5256 8.00728 16.7321 8.00728C17.7351 8.00728 18.5576 8.42854 18.9989 9.13063V5.37946C18.9989 4.07558 19.0189 3.83486 17.8154 4.4166L17.6148 3.99534L20.6839 2.4708L20.9447 2.75164V16.6129C20.9447 17.9569 20.9647 18.2177 22.2084 17.7362ZM17.033 17.9168C17.9157 17.9168 18.4974 17.2548 18.9989 16.3321V12.621C18.9989 10.6552 18.3971 9.05039 17.1534 9.05039C15.7492 9.05039 15.1474 11.0162 15.1474 13.5237C15.1474 16.0713 15.7091 17.9168 17.033 17.9168ZM29.9132 14.7072H30.3947C29.9734 17.9368 28.6094 19.321 26.7238 19.321C24.457 19.321 23.0328 17.1746 23.0328 13.8647C23.0328 10.6953 24.4369 8.00728 26.8241 8.00728C29.171 8.00728 30.2743 10.2139 30.2743 13.1426H24.9786V13.1827C24.9786 15.9108 25.8211 17.8365 27.486 17.8365C28.3887 17.8365 29.4318 17.1344 29.9132 14.7072ZM26.8241 8.84979C25.6205 8.84979 25.119 10.3141 24.9986 12.3201H28.3486C28.3486 10.3944 28.0076 8.84979 26.8241 8.84979ZM31.3369 19V18.5186C32.5003 18.5186 32.7009 18.2177 32.7009 16.9339V10.7555C32.7009 9.41146 32.7009 9.13063 31.4973 9.63212L31.2967 9.17075L32.9015 8.52884L34.2656 7.96716L34.6467 8.26806V10.1136H34.7069C35.6096 8.86985 36.5123 8.00728 37.8763 8.00728C39.3006 8.00728 40.0829 9.03033 40.0829 10.9159V16.9339C40.0829 18.2177 40.2634 18.5186 41.4068 18.5186V19H36.9135V18.5186C37.9766 18.5186 38.1371 18.2177 38.1371 16.9339V11.0363C38.1371 9.93301 37.7158 9.41146 36.9536 9.41146C36.1311 9.41146 35.409 9.97313 34.6467 10.9561V16.9339C34.6467 18.2177 34.8072 18.5186 35.8704 18.5186V19H31.3369Z"
                fill="#FBFEF3"
              />
              <path
                d="M22.728 5.82092L22.7478 5.75322C22.9622 5.75322 23.0327 5.70809 23.0835 5.54165L23.6025 3.84347C23.6533 3.67704 23.6505 3.63191 23.3994 3.63191L23.4192 3.56421H24.1808C24.5927 3.56421 24.8183 3.71089 24.8183 4.04658C24.8183 4.45279 24.4742 4.87028 23.9382 4.87028C23.8141 4.87028 23.69 4.85053 23.611 4.8195L23.391 5.54165C23.3402 5.70809 23.3486 5.75322 23.6279 5.75322L23.6082 5.82092H22.728ZM23.8931 4.74052C24.3049 4.74052 24.5193 4.33713 24.5193 4.01273C24.5193 3.77859 24.3867 3.67704 24.1611 3.67704C24.0116 3.67704 23.9551 3.69961 23.9326 3.76731L23.6505 4.69256C23.7097 4.71513 23.8 4.74052 23.8931 4.74052ZM25.6331 5.69398C25.7375 5.69398 25.8616 5.51627 25.9575 5.31034H26.0224C25.9209 5.5614 25.7347 5.84631 25.5062 5.84631C25.3567 5.84631 25.3059 5.76733 25.3059 5.66577C25.3059 5.60089 25.3398 5.53319 25.3821 5.42036L25.4921 5.11006H25.4667C25.3313 5.40343 25.0718 5.85195 24.8207 5.85195C24.643 5.85195 24.564 5.69962 24.564 5.48242C24.564 4.9803 25.0182 4.28636 25.4103 4.28636C25.5993 4.28636 25.6754 4.42458 25.6642 4.60512H25.6726L25.7544 4.37945C25.8673 4.37945 25.9575 4.32867 26.0055 4.26943L26.0506 4.29482L25.6444 5.42882C25.6218 5.4937 25.5823 5.58961 25.5823 5.6291C25.5823 5.67142 25.5936 5.69398 25.6331 5.69398ZM24.9364 5.64603C25.1028 5.64603 25.4018 5.20597 25.509 4.89567C25.54 4.8054 25.5626 4.71513 25.5626 4.62204C25.5626 4.50074 25.5288 4.43022 25.4357 4.43022C25.1846 4.43022 24.8433 5.048 24.8433 5.44856C24.8433 5.5755 24.8687 5.64603 24.9364 5.64603ZM26.4285 5.82092H26.1492L26.5074 4.74052C26.5385 4.64743 26.5751 4.52895 26.5751 4.48946C26.5751 4.45279 26.561 4.4415 26.5385 4.4415C26.4539 4.4415 26.3297 4.59101 26.2225 4.76873H26.1548C26.2846 4.51767 26.4962 4.292 26.7021 4.292C26.8036 4.292 26.8516 4.36534 26.8516 4.44715C26.8516 4.52049 26.8093 4.61922 26.7613 4.74052L26.5949 5.19186H26.6203C26.8629 4.55998 27.1055 4.28353 27.3396 4.28353C27.4073 4.28353 27.444 4.31739 27.444 4.37945C27.444 4.46689 27.3706 4.55716 27.2945 4.55716C27.2381 4.55716 27.2099 4.52613 27.1506 4.52613C27.0209 4.52613 26.7811 4.78283 26.4285 5.82092ZM28.2611 5.66295C28.357 5.66295 28.4613 5.52473 28.5572 5.32727H28.6221C28.498 5.59807 28.3429 5.84631 28.1144 5.84631C27.9225 5.84631 27.8605 5.65449 27.8464 5.35265C27.8407 5.27649 27.8379 5.18904 27.8436 5.10442C28.2498 5.00568 28.3908 4.71513 28.3908 4.58537C28.3908 4.51767 28.3598 4.49228 28.3175 4.49228C28.199 4.49228 27.821 4.75745 27.4317 5.82092H27.1581L27.8012 3.84347C27.852 3.6855 27.8266 3.62909 27.6292 3.62909L27.6461 3.56421C27.9254 3.56421 28.0946 3.54446 28.1482 3.4824L28.1849 3.50215L27.6264 5.19186H27.6461C27.9282 4.5628 28.2413 4.292 28.4613 4.292C28.5996 4.292 28.6644 4.38791 28.6644 4.48946C28.6644 4.66718 28.4698 4.97747 28.1059 5.08749C28.1059 5.16648 28.12 5.27649 28.1285 5.36394C28.1482 5.55858 28.1764 5.66295 28.2611 5.66295ZM31.3053 4.55998L31.2828 4.62768C31.1107 4.62768 31.0204 4.65871 30.9414 4.82515C30.8089 5.08749 30.6763 5.29624 30.5437 5.45421C30.6311 5.55858 30.7355 5.62628 30.8624 5.62628C31.0543 5.62628 31.1756 5.46831 31.1756 5.20597C31.1756 5.13827 31.1671 5.06774 31.1502 4.98876L31.2122 4.96619C31.2348 5.05082 31.2517 5.14109 31.2517 5.237C31.2517 5.60936 31.0486 5.85759 30.727 5.85759C30.5663 5.85759 30.4337 5.78425 30.3237 5.67142C30.1572 5.804 29.9851 5.86606 29.8074 5.86606C29.5141 5.86606 29.2856 5.70809 29.2856 5.3865C29.2856 5.0085 29.5959 4.77437 29.9344 4.57973C29.9316 4.54024 29.9316 4.50639 29.9316 4.47253C29.9316 3.85758 30.4055 3.51625 30.7158 3.51625C30.8794 3.51625 30.9979 3.60652 30.9979 3.78424C30.9979 4.15377 30.555 4.33431 30.2419 4.51485C30.2362 4.51767 30.2306 4.52049 30.2249 4.52613C30.2503 4.78283 30.3349 5.14391 30.4901 5.37804C30.6001 5.23418 30.7017 5.048 30.7947 4.83079C30.8624 4.66153 30.8568 4.62768 30.6509 4.62768L30.6763 4.55998H31.3053ZM30.7101 3.60934C30.5127 3.60934 30.2165 3.90836 30.2165 4.37098V4.42458C30.5155 4.26661 30.8455 4.03812 30.8455 3.76449C30.8455 3.66576 30.7976 3.60934 30.7101 3.60934ZM29.9428 5.71655C30.0585 5.71655 30.1657 5.67706 30.2672 5.60371C30.0839 5.36394 29.9851 4.99722 29.9485 4.70949C29.7426 4.87028 29.5959 5.06492 29.5959 5.33009C29.5959 5.60936 29.751 5.71655 29.9428 5.71655ZM33.4241 3.64883C32.9051 3.64883 32.4622 4.45279 32.4622 5.11006C32.4622 5.47395 32.6004 5.73065 32.9417 5.73065C33.0997 5.73065 33.2492 5.64321 33.3536 5.50216L33.5003 4.98312C33.5454 4.8195 33.5285 4.74898 33.0715 4.74898L33.0941 4.68128H33.9996L33.9883 4.74898C33.8924 4.74898 33.8501 4.77437 33.8021 4.9408L33.6131 5.58961C33.41 5.7645 33.1477 5.86606 32.8797 5.86606C32.3493 5.86606 32.1265 5.51909 32.1265 5.05646C32.1265 4.33995 32.6935 3.52189 33.3987 3.52189C33.63 3.52189 33.7711 3.60652 33.8557 3.72782C33.8783 3.76167 33.898 3.76449 33.9178 3.72218L33.9883 3.54728L34.0532 3.55574L33.8416 4.33713H33.7739C33.8275 3.93939 33.7598 3.64883 33.4241 3.64883ZM35.0765 5.69398C35.1809 5.69398 35.305 5.51627 35.4009 5.31034H35.4658C35.3642 5.5614 35.1781 5.84631 34.9496 5.84631C34.8001 5.84631 34.7493 5.76733 34.7493 5.66577C34.7493 5.60089 34.7831 5.53319 34.8255 5.42036L34.9355 5.11006H34.9101C34.7747 5.40343 34.5152 5.85195 34.2641 5.85195C34.0864 5.85195 34.0074 5.69962 34.0074 5.48242C34.0074 4.9803 34.4616 4.28636 34.8537 4.28636C35.0427 4.28636 35.1188 4.42458 35.1075 4.60512H35.116L35.1978 4.37945C35.3106 4.37945 35.4009 4.32867 35.4489 4.26943L35.494 4.29482L35.0878 5.42882C35.0652 5.4937 35.0257 5.58961 35.0257 5.6291C35.0257 5.67142 35.037 5.69398 35.0765 5.69398ZM34.3798 5.64603C34.5462 5.64603 34.8452 5.20597 34.9524 4.89567C34.9834 4.8054 35.006 4.71513 35.006 4.62204C35.006 4.50074 34.9721 4.43022 34.8791 4.43022C34.628 4.43022 34.2867 5.048 34.2867 5.44856C34.2867 5.5755 34.3121 5.64603 34.3798 5.64603ZM35.8719 5.82092H35.5926L35.9508 4.74052C35.9819 4.64743 36.0185 4.52895 36.0185 4.48946C36.0185 4.45279 36.0044 4.4415 35.9819 4.4415C35.8972 4.4415 35.7731 4.59101 35.6659 4.76873H35.5982C35.728 4.51767 35.9396 4.292 36.1455 4.292C36.247 4.292 36.295 4.36534 36.295 4.44715C36.295 4.52049 36.2527 4.61922 36.2047 4.74052L36.0383 5.19186H36.0637C36.3063 4.55998 36.5489 4.28353 36.783 4.28353C36.8507 4.28353 36.8874 4.31739 36.8874 4.37945C36.8874 4.46689 36.814 4.55716 36.7379 4.55716C36.6814 4.55716 36.6532 4.52613 36.594 4.52613C36.4642 4.52613 36.2245 4.78283 35.8719 5.82092ZM37.7409 5.69398C37.8453 5.69398 37.9694 5.51627 38.0653 5.31034H38.1302C38.0286 5.5614 37.8425 5.84631 37.614 5.84631C37.4645 5.84631 37.4137 5.76733 37.4137 5.66577C37.4137 5.60089 37.4419 5.53319 37.4814 5.41753L37.5858 5.11006H37.5463C37.4109 5.40625 37.1542 5.86042 36.9031 5.86042C36.7367 5.86042 36.6492 5.70245 36.6492 5.48242C36.6492 4.9803 37.1034 4.28636 37.4955 4.28636C37.6845 4.28636 37.7578 4.42458 37.7494 4.60512H37.755L38.0117 3.84347C38.0653 3.6855 38.0061 3.62909 37.8086 3.62909L37.8255 3.56421C38.1443 3.56421 38.2769 3.54446 38.3502 3.4824L38.3841 3.50215L37.7466 5.426C37.724 5.49088 37.6901 5.58961 37.6901 5.6291C37.6901 5.67142 37.7014 5.69398 37.7409 5.69398ZM37.0216 5.65731C37.188 5.65731 37.4842 5.21161 37.5942 4.89567C37.6253 4.8054 37.6478 4.71513 37.6478 4.62204C37.6478 4.50074 37.614 4.43022 37.5209 4.43022C37.2698 4.43022 36.9285 5.048 36.9285 5.44856C36.9285 5.58115 36.9539 5.65731 37.0216 5.65731ZM38.7079 5.67988C38.8744 5.67988 39.0323 5.50498 39.1734 5.22007H39.2354C39.0775 5.60936 38.8518 5.86042 38.5838 5.86042C38.361 5.86042 38.2143 5.70527 38.2143 5.426C38.2143 4.94645 38.6233 4.28353 39.038 4.28353C39.2044 4.28353 39.3088 4.38791 39.3088 4.54024C39.3088 4.85618 38.911 5.12134 38.5218 5.18058C38.5048 5.26239 38.4964 5.34137 38.4964 5.40907C38.4964 5.59243 38.581 5.67988 38.7079 5.67988ZM39.0211 4.39073C38.8208 4.39073 38.6289 4.75745 38.5443 5.09031C38.8462 5.01415 39.1141 4.78283 39.1141 4.52049C39.1141 4.43868 39.0916 4.39073 39.0211 4.39073ZM39.6536 5.82092H39.3772L39.7495 4.7377C39.7834 4.64461 39.8229 4.52895 39.8229 4.48946C39.8229 4.45279 39.8088 4.4415 39.7862 4.4415C39.7016 4.4415 39.5775 4.59101 39.4703 4.76873H39.4026C39.5323 4.51767 39.7439 4.292 39.9498 4.292C40.0514 4.292 40.0993 4.36534 40.0993 4.44715C40.0993 4.52049 40.057 4.61922 40.0091 4.74052L39.8426 5.19186H39.8708C40.167 4.56845 40.3814 4.28636 40.6099 4.28636C40.7397 4.28636 40.8102 4.37098 40.8102 4.49228C40.8102 4.69821 40.6043 5.10442 40.4661 5.42882C40.4435 5.4937 40.4012 5.58961 40.4012 5.6291C40.4012 5.67142 40.4125 5.69398 40.4519 5.69398C40.5563 5.69398 40.6833 5.51627 40.7764 5.31034H40.8441C40.7397 5.5614 40.5563 5.84631 40.325 5.84631C40.1783 5.84631 40.1275 5.76733 40.1275 5.66577C40.1275 5.60089 40.1642 5.53601 40.2094 5.41753C40.3617 5.03953 40.5168 4.68974 40.5168 4.57691C40.5168 4.51485 40.4999 4.48664 40.4576 4.48664C40.3476 4.48664 40.0683 4.76309 39.6536 5.82092Z"
                fill="#FBFEF3"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="flex min-h-svh flex-col bg-lime-50/50 px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl">
            <span className="font-PPRegular">Experience Paradise </span>
            <br />
            <span className="font-PPRegular">in </span>
            <span className="font-PPItalic">every sip </span>
            <br />
            <span className="font-PPRegular">and bite</span>
          </h1>
          <p className="font-NHD mt-4 max-w-2xl py-8 text-xl text-stone-500">
            Welcome to Eden Park & Garden, your ultimate destination for
            entertainment and leisure in Abuja. Enjoy live music, delicious
            traditional food, and exciting activities in a serene environment.
          </p>
        </div>

        {/* Card Section */}
        <div className="font-NHD mt-10 mb-10 flex w-full justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live Music"
              className="h-96 w-full object-cover"
            />
            <h2 className="p-4 text-lg text-gray-800">Bar, drinks, liquors</h2>
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live Music"
              className="h-96 w-full object-cover"
            />
            <h2 className="p-4 text-lg text-gray-800">
              Traditional Food, shawarma
            </h2>
          </div>

          {/* Card 3 */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Live Music"
              className="h-96 w-full object-cover"
            />
            <h2 className="p-4 text-lg text-gray-800">Football field</h2>
          </div>
        </div>

        {/* See All Button */}
        <div className="flex justify-end">
          <Link
            to="/about"
            className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
          >
            See all
            <ArrowRight className="-rotate-45" size={24} />
          </Link>
        </div>
      </section>

      {/* Garden Section */}
      <section className="h-[100svh] w-full overflow-hidden">
        <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1719305296935-74551196e1fe?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="font-NHD w-1/3 text-xl text-white">
              Hillbrook Estate & Farm is a luxury coastal property and working
              farm situated just north of Whangamata on New Zealand's Coromandel
              coast. Available for exclusive rental, our estate is the perfect
              setting for your next luxury escape.
            </p>
            <div className="flex justify-start">
              <Link
                to="/about"
                className="font-NHD flex items-center gap-2 pt-4 text-lg text-white transition-all"
              >
                See all
                <ArrowRight className="-rotate-45" size={24} />
              </Link>
            </div>

            <h1 className="font-PPItalic pt-20 text-9xl text-white">
              The Garden
            </h1>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative flex w-full flex-col gap-60 bg-lime-50/50 px-8 py-20">
        {/* Card 1 - Small, Left */}
        <div className="flex w-full justify-start">
          <div className="flex w-1/2 overflow-hidden">
            {/* Image on the Left */}
            <img
              src="https://picsum.photos/400/300?random=1"
              alt="Cozy Bar"
              className="h-98 w-full object-cover"
            />
            {/* Text on the Right */}
            <div className="flex flex-col items-start justify-start gap-8 p-4">
              <h2 className="font-PPItalic text-6xl text-gray-800">The Bar</h2>
              <p className="font-NHD text-lg text-stone-500">
                Hillbrook Estate & Farm is a luxury coastal property and working
                farm situated just north of Whangamata on New Zealand's
                Coromandel coast.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/about"
                  className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                >
                  See all
                  <ArrowRight className="-rotate-45" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Large, Center */}
        <div className="flex w-full justify-center">
          <div className="flex w-2/3 overflow-hidden">
            {/* Image on the Left */}
            <img
              src="https://picsum.photos/600/400?random=2"
              alt="Cocktail Lounge"
              className="h-150 w-full object-cover"
            />
            {/* Text on the Right */}
            <div className="flex flex-col justify-start gap-8 p-4">
              <h2 className="font-PPItalic text-6xl text-gray-800">
                The Pools
              </h2>
              <p className="font-NHD text-lg text-stone-500">
                Hillbrook Estate & Farm is a luxury coastal property and working
                farm situated just north of Whangamata on New Zealand's
                Coromandel coast. Available for exclusive rental, our estate is
                the perfect setting for your next luxury escape.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/about"
                  className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                >
                  See all
                  <ArrowRight className="-rotate-45" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Medium, Right */}
        <div className="flex w-full justify-start">
          <div className="flex w-1/2 overflow-hidden">
            {/* Image on the Left */}
            <img
              src="https://picsum.photos/400/300?random=1"
              alt="Cozy Bar"
              className="h-98 w-full object-cover"
            />
            {/* Text on the Right */}
            <div className="flex flex-col items-start justify-start gap-8 p-4">
              <h2 className="font-PPItalic text-6xl text-gray-800">The Bar</h2>
              <p className="font-NHD text-lg text-stone-500">
                Hillbrook Estate & Farm is a luxury coastal property and working
                farm situated just north of Whangamata on New Zealand's
                Coromandel coast.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/about"
                  className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                >
                  See all
                  <ArrowRight className="-rotate-45" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - Large, Center */}
        <div className="flex w-full justify-center">
          <div className="w-2/3 overflow-hidden">
            <img
              src="https://picsum.photos/600/400?random=4"
              alt="Wine Collection"
              className="h-150 w-full object-cover"
            />
            <div className="flex w-1/2 flex-col justify-start gap-8 py-8">
              <h2 className="font-PPItalic text-6xl text-gray-800">
                The Pools
              </h2>
              <p className="font-NHD text-lg text-stone-500">
                Hillbrook Estate & Farm is a luxury coastal property and working
                farm situated just north of Whangamata on New Zealand's
                Coromandel coast. Available for exclusive rental, our estate is
                the perfect setting for your next luxury escape.
              </p>
              <div className="flex justify-start">
                <Link
                  to="/about"
                  className="font-NHD flex items-center gap-2 text-lg text-gray-800 transition-all"
                >
                  See all
                  <ArrowRight className="-rotate-45" size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100svh] w-full overflow-hidden">
        <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1590111524106-2525130672ec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="font-NHD w-1/3 text-xl text-white">
              Hillbrook Estate & Farm is a luxury coastal property and working
              farm situated just north of Whangamata on New Zealand's Coromandel
              coast. Available for exclusive rental, our estate is the perfect
              setting for your next luxury escape.
            </p>
            <div className="flex justify-start">
              <Link
                to="/about"
                className="font-NHD flex items-center gap-2 pt-4 text-lg text-white transition-all"
              >
                See all
                <ArrowRight className="-rotate-45" size={24} />
              </Link>
            </div>

            <h1 className="font-PPItalic pt-20 text-9xl text-white">
              The Night Life
            </h1>
          </div>
        </div>
      </section>
      <section className="h-200 bg-black"></section>
    </>
  );
};

export default Home;
