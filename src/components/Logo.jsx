import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link to='/' className="shrink">
      <svg width="95" height="72" viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_102_314)">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.91016 38.4958L33.8431 10.2786L40.9237 16.2841L21.8707 37.243L43.1115 56.5524L38.1274 62.4288L9.91016 38.4958ZM47.83 50.9894L43.1115 56.5524L49.2487 62.1316L54.3503 56.5197L61.5573 62.6324L85.4902 34.4151L57.273 10.4822L52.9913 15.5303L46.7593 9.86492L40.9237 16.2841L47.5704 21.9216L33.34 38.6995L47.83 50.9894ZM47.5704 21.9216L62.0604 34.2115L47.83 50.9894L54.3503 56.5197L74.1373 34.7535L52.9913 15.5303L47.5704 21.9216Z" fill="#420BF8"/>
        </g>
        <defs>
        <filter id="filter0_d_102_314" x="0.910156" y="0.864868" width="93.5801" height="70.7676" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="4.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.0431373 0 0 0 0 0.972549 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_314"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_314" result="shape"/>
        </filter>
        </defs>
      </svg>
    </Link>
  )
}

export default Logo
