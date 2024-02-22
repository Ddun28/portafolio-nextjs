import { RiMenu2Line } from "react-icons/ri";
import { IconType } from "react-icons";
import { cn } from "@/libs/utils";

interface ButtonIconProps{
    icon: IconType;
    onClick: () => void;
    className?: string;
}

const ButtonIcon = ({icon : Icon, className, onClick}: ButtonIconProps) => {
    return ( 
        <button type="button"  className={cn('', className)} onClick={onClick}>
        <Icon size={20} />
    </button>
     );
}
 
export default ButtonIcon;