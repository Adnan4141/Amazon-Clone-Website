import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-base text-gray-400 font-semibold mt-20">
    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia perferendis vero inventore veritatis id.</p>
    <p className='flex gap-1'>
    <GitHubIcon className='cursor-pointer hover:text-white'/>
    <FacebookIcon className='cursor-pointer hover:text-white'/>
    <InstagramIcon className='cursor-pointer hover:text-white'/>
    <YouTubeIcon className='cursor-pointer hover:text-white'/>
    <LinkedInIcon className='cursor-pointer hover:text-white'/>
    <TelegramIcon className='cursor-pointer hover:text-white'/>

    </p>
    </div>
  )
}

export default Footer